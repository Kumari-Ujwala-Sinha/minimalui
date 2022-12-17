
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';


import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';

import Grid from '@mui/material/Grid';




import {TextField,Stack,Button } from '@mui/material';

import './styles.css';



export default function ShopForm() {

 
  
	const [content, setContent] = useState('');
  const editor = useRef(null);
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
 
  const config={
    placeholder:"Product Description"
  }


 

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
      
        <TextField fullWidth  name="product_name" label="Product Name" mt={4} />
        <TextField fullWidth  name="actual_price" label="Actual Price" mt={4} />
        <TextField fullWidth  name="offer_price" label="Offer Price" mt={4} />
       
        <JoditEditor
			ref={editor}
			value={content}
      config={config}
			onBlur={newContent => {setContent(newContent)}}
      onChange={newContent=>{console.log(newContent)}}
		/>
    
    
    <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo} />
      )}</div>
       
        <Grid container spacing={2}>
    <Grid item xs={6}> 
    <Button fullWidth style={{border: '2px dashed'}}  component="label">
    <Icon icon="material-symbols:upload-rounded" width="34" height="34" />Upload Image
        <input hidden accept="image/*" type="file" onChange={handleImageChange}/>
      </Button></Grid>
      <Grid item xs={6}> 
      <Button fullWidth variant="contained" style={{  height: 50 }}>Submit</Button></Grid>
      </Grid>
        
      
      </Stack>


    </Box>
  );
}
