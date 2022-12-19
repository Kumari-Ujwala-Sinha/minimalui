
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch } from 'react-redux';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField,Stack,Button } from '@mui/material';

import './styles.css';
import { addTestimonial } from '../actions/master/testimonial';



export default function TestimonialForm() {
  

    const [age, setAge] = useState('');
    const [message ,setMessage] = useState(false);
    const [video, setVideo] = useState(false);
    const [name,setname]=useState("")
    const [designation,setdesignation]=useState("")
    const [testimoni,settestimoni]=useState("")
 
  
    
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

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      formData.append("name", name);
      formData.append("designation",designation)
      formData.append("testimoni",testimoni)
     
      console.log(formData);
      dispatch(addTestimonial(formData));
     
    } catch (error) {
        console.log(error);
    }
};

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
    <Grid item xs={4}> <TextField fullWidth value={name} onChange={(e)=>setname(e.target.value)} name="name" label="Name" mt={4} /></Grid>
    <Grid item xs={4}><TextField fullWidth value={designation} onChange={(e)=>setdesignation(e.target.value)}  name="designation" label="Designation" mt={4} /></Grid>
    <Grid item xs={4}>
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
        </FormControl></Grid>
    </Grid>
        {message && <JoditEditor
			ref={editor}
			value={testimoni}
      config={config}
			onBlur={newContent => {settestimoni(newContent)}}
      onChange={newContent=>{console.log(newContent)}}
		/>}
        {
            video && <TextField fullWidth  name="video_url" label="Enter Video URL" mt={4} />
        }
        
      
        <Grid container mt={2}>
    <Grid item xs={6}> 
        <Button fullWidth type="submit" variant="contained" style={{  height: 50 }}>Submit</Button></Grid></Grid>
        
      </form>
      </Stack>


    </Box>
  );
}
