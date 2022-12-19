
import React, { useState} from 'react';



import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';



import {Stack,Button } from '@mui/material';
import { useDispatch} from 'react-redux';
import { addHomebanner } from '../actions/master/homebanner';


import './styles.css';



export default function HomebannerForm() {
  
  const [image, setImage] = useState();
  const [ selectedFiles, setSelectedFiles ] = useState([]);
  const handleImageFile = (e) => {
    setImage(e.target.files[0], '$$$$');
    console.log(image);
  };

	const handleImageChange = (e) => {
		// console.log(e.target.files[])
		if (e.target.files) {
			const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

			// console.log("filesArray: ", filesArray);

			setSelectedFiles((prevImages) => prevImages.concat(filesArray));
			Array.from(e.target.files).map(
				(file) => URL.revokeObjectURL(file) // avoid memory leak
			);
		}
	};
 
 
  const dispatch = useDispatch();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
    
      formData.append('bannerimage', image);
      console.log(formData);
      dispatch(addHomebanner(formData));
     
    } catch (error) {
        console.log(error);
    }
};

  

  return (
    <Box  sx={{ minWidth: 120 }}>
        <Stack spacing={4}>
        <form onSubmit={handleSubmit}>
    <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo}  />
      )}</div>
       
        <Box display="flex" justifyContent="space-between">  
    <Button fullwidth style={{border: '2px dashed', width: 500, height: 50 }} value={image}
                        onChange={(e) => handleImageFile(e)} size="large"  component="label">
    <Icon icon="material-symbols:upload-rounded" width="34" height="34" /> Upload Image
        <input hidden accept="image/*" type="file" onChange={handleImageChange}/>
      </Button>
    
        <Button style={{ width: 500, height: 50 }} type="submit" size="large" variant="contained">Submit</Button>
        </Box>
      </form>
      </Stack>


    </Box>
  );
}
