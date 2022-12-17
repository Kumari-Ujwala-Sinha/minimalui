
import React, { useState } from 'react';


import Box from '@mui/material/Box';


import {TextField,Stack,Button } from '@mui/material';
import { Icon } from '@iconify/react';

import './styles.css';
import Grid from '@mui/material/Grid';



export default function CoursesForm() {
  
 
  
	
  
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
        <Grid container spacing={2}>
    <Grid item xs={4}> 
    <TextField fullWidth  name="course_name" label="Course Name"  /> </Grid>
    <Grid item xs={4}><TextField fullWidth name="price" label="Price"  /></Grid>
    <Grid item xs={4}><TextField fullWidth name="eligibility" label="Eligibility" /></Grid>
    <Grid item xs={4}><TextField fullWidth name="duration" label="Duration"  /></Grid>
    <Grid item xs={4}><TextField fullWidth name="age" label="Age" mt={4} /></Grid>
    <Grid item xs={4}> <TextField fullWidth  name="total_member" label="Total Member" mt={4} /></Grid>
   
    </Grid>
      
        
        
        
        <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo}  />
      )}</div>
         <Grid container spacing={2}>
    <Grid item xs={6}> 
    <Button fullWidth style={{border: '2px dashed'}}  component="label">
    <Icon icon="material-symbols:upload-rounded" width="24" height="24" />Upload Image
        <input hidden accept="image/*" type="file" onChange={handleImageChange}/>
      </Button></Grid>
      <Grid item xs={6}> 
      <Button fullWidth variant="contained">Submit</Button></Grid>
      </Grid>
    
    
        
        
      
      </Stack>


    </Box>
  );
}
