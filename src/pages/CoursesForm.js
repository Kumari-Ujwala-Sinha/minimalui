import React, { useState } from 'react';
import Box from '@mui/material/Box';
import {TextField,Stack,Button } from '@mui/material';
import { Icon } from '@iconify/react';
import './styles.css';
import Grid from '@mui/material/Grid';
import { useDispatch } from 'react-redux';
import { addCourse } from '../actions/master/course';



export default function CoursesForm() {
  
 const[courseName,setcourseName]=useState("")
 const[age,setage]=useState("")
 const[price,setprice]=useState("")
 const[eligibility,seteligibility]=useState("")
 const[duration,setduration]=useState("")
 const [image, setImage] = useState();

 const handleImageFile = (e) => {
   setImage(e.target.files[0], '$$$$');
   console.log(image);
 };
  
	
  
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
  const dispatch = useDispatch();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      formData.append("courseName", courseName);
      formData.append("price",price)
      formData.append("age",age)
      formData.append("duration",duration)
      formData.append("eligibility",eligibility)
      formData.append('courseimage', image);
      console.log(formData);
      dispatch(addCourse(formData));
     
    } catch (error) {
        console.log(error);
    }
};
  

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
    <Grid item xs={4}> 
    <TextField fullWidth value={courseName} onChange={(e)=>setcourseName(e.target.value)} name="course_name" label="Course Name"  /> </Grid>
    <Grid item xs={4}><TextField value={price} onChange={(e)=>setprice(e.target.value)}  fullWidth name="price" label="Price"  /></Grid>
    <Grid item xs={4}><TextField value={eligibility} onChange={(e)=>seteligibility(e.target.value)}  fullWidth name="eligibility" label="Eligibility" /></Grid>
    <Grid item xs={4}><TextField value={duration} onChange={(e)=>setduration(e.target.value)} fullWidth name="duration" label="Duration"  /></Grid>
    <Grid item xs={4}><TextField value={age} onChange={(e)=>setage(e.target.value)}  fullWidth name="age" label="Age" mt={4} /></Grid>
    <Grid item xs={4}> <TextField fullWidth  name="total_member" label="Total Member" mt={4} /></Grid>
   
    </Grid>
      
        
        
        
        <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo}  />
      )}</div>
         <Grid container spacing={2}>
    <Grid item xs={6}> 
    <Button fullWidth style={{border: '2px dashed'}} value={image}
                        onChange={(e) => handleImageFile(e)} component="label">
    <Icon icon="material-symbols:upload-rounded" width="34" height="34" />Upload Image
        <input hidden accept="image/*" type="file" onChange={handleImageChange} />
      </Button></Grid>
      <Grid item xs={6}> 
      <Button fullWidth variant="contained" type="submit" style={{  height: 50 }}>Submit</Button></Grid>
      </Grid>
    
    
        
        
      </form>
      </Stack>


    </Box>
  );
}
