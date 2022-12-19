
import React, { useState, useRef } from 'react';
import JoditEditor from 'jodit-react';
import { useDispatch } from 'react-redux';



import Box from '@mui/material/Box';
import { Icon } from '@iconify/react';

import Grid from '@mui/material/Grid';




import {TextField,Stack,Button } from '@mui/material';
import { addShop } from '../actions/master/shop';

import './styles.css';



export default function ShopForm() {

  const [productName,setproductName]=useState("")
  const [offerPrice,setofferPrice]=useState("")
  const [actualPrice,setactualPrice]=useState("")
  const [productDescription,setproductDescription]=useState("")
  
	
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

  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      
      formData.append("productName", productName);
      formData.append("productDescription",productDescription)
      formData.append("offerPrice",offerPrice)
      formData.append("actualPrice",actualPrice)
      formData.append("productImages",selectedFiles)
      

     
      console.log(formData);
      dispatch(addShop(formData));
     
    } catch (error) {
        console.log(error);
    }
};
 

  return (
    <Box sx={{ minWidth: 120 }}>
        <Stack spacing={3}>
        <form onSubmit={handleSubmit}>
        <TextField fullWidth value={productName} onChange={(e)=>setproductName(e.target.value)} name="product_name" label="Product Name" mt={4} />
        <TextField fullWidth value={actualPrice} onChange={(e)=>setactualPrice(e.target.value)} name="actual_price" label="Actual Price" mt={4} />
        <TextField fullWidth value={offerPrice} onChange={(e)=>setofferPrice(e.target.value)} name="offer_price" label="Offer Price" mt={4} />
       
        <JoditEditor
			ref={editor}
			value={productDescription}
      config={config}
			onBlur={newContent => {setproductDescription(newContent)}}
      onChange={newContent=>{console.log(newContent)}}
		/>
    
    
    <div className="result">{selectedFiles && selectedFiles.map(photo=>
      <img className='badgeimg' src={photo} alt="" key={photo} />
      )}</div>
       
        <Grid container spacing={2}>
    <Grid item xs={6}> 
    <Button fullWidth style={{border: '2px dashed'}}  component="label">
    <Icon icon="material-symbols:upload-rounded" width="34" height="34" />Upload Image
        <input hidden accept="image/*" multiple type="file" onChange={handleImageChange}/>
      </Button></Grid>
      <Grid item xs={6}> 
      <Button fullWidth type="submit" variant="contained" style={{  height: 50 }}>Submit</Button></Grid>
      </Grid>
        
      </form>
      </Stack>


    </Box>
  );
}
