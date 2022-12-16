
import React, { useState } from 'react';


import Box from '@mui/material/Box';


import {TextField,Stack,Button } from '@mui/material';

import './styles.css';



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
      
        <TextField fullWidth  name="course_name" label="Course Name" mt={4} />
        <TextField fullWidth  name="price" label="Price" mt={4} />
        <TextField fullWidth  name="eligibility" label="Eligibility" mt={4} />
        <TextField fullWidth  name="duration" label="Duration" mt={4} />
        <TextField fullWidth  name="age" label="Age" mt={4} />
        <TextField fullWidth  name="total_member" label="Total Member" mt={4} />
       
        
    <Button variant="contained" component="label">
        Upload Image
        <input hidden accept="image/*" type="file" onChange={handleImageChange}/>
      </Button>
    
    <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo}  />
      )}</div>
        <Button variant="contained">Submit</Button>
        
      
      </Stack>


    </Box>
  );
}
