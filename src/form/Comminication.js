
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField,Stack,Button } from '@mui/material';
import Badge from '@mui/material/Badge';
import './styles.css';



export default function Communication() {
  const [age, setAge] = useState('');
 
  
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
    placeholder:"Message"
  }


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
      <FormControl fullWidth>
      
        <InputLabel id="demo-simple-select-label">Communication Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="communicationType"
          onChange={handleChange}
        >
          <MenuItem value={10}>Notification</MenuItem>
          <MenuItem value={20}>Email</MenuItem>
          <MenuItem value={30}>Sms</MenuItem>
        </Select>
        </FormControl>
        <TextField fullWidth  name="email" label="Email address" mt={4} />
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
          placeholder="Message"
        />
        <JoditEditor
			ref={editor}
			value={content}
      config={config}
			onBlur={newContent => {setContent(newContent)}}
      onChange={newContent=>{console.log(newContent)}}
		/>
    <Button variant="contained" component="label">
        Upload
        <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
      </Button>
    
    <div className="result">{selectedFiles && selectedFiles.map(photo=><Badge badgeContent={"x"}  key={photo} color="primary">
      <img className='badgeimg' src={photo} alt=""  />
      </Badge>)}</div>
        <Button variant="contained">Submit</Button>
        
      
      </Stack>


    </Box>
  );
}
