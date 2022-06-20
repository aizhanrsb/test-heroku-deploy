import { CircularProgress, Stack } from '@mui/material';
import React from 'react';

const Loader = () => {
    return (
         <Stack display={"flex"} justifyContent={"center"} height={"80wh"} alignItems={"center"} sx={{ color: 'grey.500' }} spacing={2} direction="row">
        <CircularProgress color="secondary" /> 
         </Stack>
   
       
    );
};

export default Loader;