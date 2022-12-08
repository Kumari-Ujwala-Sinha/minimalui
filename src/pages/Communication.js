import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {TextField,Stack,Button } from '@mui/material';

export default function Communication() {
  const [age, setAge] = React.useState('');

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
        <Button variant="contained">Submit</Button>
        
      
      </Stack>


    </Box>
  );
}
