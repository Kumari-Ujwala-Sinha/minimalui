
import React, { useState} from 'react';



import Box from '@mui/material/Box';



import {Stack,Button } from '@mui/material';

import './styles.css';



export default function HomebannerForm() {
  
 
  const [ selectedFiles, setSelectedFiles ] = useState([]);

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
 
 


  

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
     
       
        
    <Button variant="contained" component="label">
        Upload Image
        <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
      </Button>
    
    <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo}  />
      )}</div>
        <Button variant="contained">Submit</Button>
        
      
      </Stack>


    </Box>
  );
}
