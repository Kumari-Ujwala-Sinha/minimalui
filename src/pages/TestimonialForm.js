
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField,Stack,Button } from '@mui/material';

import './styles.css';



export default function TestimonialForm() {
  
    const [age, setAge] = useState('');
    const [message ,setMessage] = useState(false);
    const [video, setVideo] = useState(false);
 
  
	const [content, setContent] = useState('');
  const editor = useRef(null);
  
 
  const config={
    placeholder:"Message"
  }


  const handleChange = (event) => {
    if (event.target.value==="message"){
        setMessage(true)
        setVideo(false)
        setAge("Message")
    }
    else{
        setMessage(false)
        setVideo(true)
    }
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
        <TextField fullWidth  name="name" label="Name" mt={4} />
        <TextField fullWidth  name="designation" label="Designation" mt={4} />
      <FormControl fullWidth>
      
        <InputLabel id="demo-simple-select-label">Testimonial Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="communicationType"
          onChange={handleChange}
        >
          <MenuItem value="message">Message</MenuItem>
          <MenuItem value="video">Video</MenuItem>
          
        </Select>
        </FormControl>
        {message && <JoditEditor
			ref={editor}
			value={content}
      config={config}
			onBlur={newContent => {setContent(newContent)}}
      onChange={newContent=>{console.log(newContent)}}
		/>}
        {
            video && <TextField fullWidth  name="video_url" label="Enter Video URL" mt={4} />
        }
        
      
     
        <Button variant="contained">Submit</Button>
        
      
      </Stack>


    </Box>
  );
}
