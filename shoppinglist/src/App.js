import React, { useState } from 'react';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import AddItem from './Additem';

function App() {
  const [items,setItems] = useState([]);
  
  const addItem =(item)=>{
    setItems(item , ...items)
  }
    return (
    <Container>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
  Shopping List
  </Typography>
  </Toolbar>
  </AppBar>
  <Stack alignItems='center'>
    <AddItem addItem = {addItem}/>
  </Stack>


  </Container>
  );
  }
  




export default App;