import React ,{useState} from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

function AddItem(prop){
    const [open,setOpen] = useState(false);
    const [item,setItem] = useState(({
        product:'',
        amount:''
    }))

    const handleOpen = ()=>{
        setOpen(true);
    }
    const handleClose = ()=>{
        setOpen(false);

    }
    const handleChange = (e) =>{
        setItem({...item,[e.target.name]:e.target.value})
    }

    const addItem = () =>{
        prop.addItem(item);
        setItem({product:'',amount:''});
    }


    return (
        <div>
            <Button onClick = {handleOpen}>
                ADD Item
            </Button>
            <Dialog open={open} onClose = {handleClose}>
                <DialogTitle>New Item</DialogTitle>
                <DialogContent>
                    <TextField value={item.product} margin='dense'
                    onChange = {handleChange} name = 'product'
                    label = 'Product' fullWidth />
                    <TextField value = {item.amount} margin = 'dense'
                    onChange={handleChange} name = "amount"
                    label = 'Amount' fullWidth/>
                        
                </DialogContent>
                <DialogActions>
                    <Button onClick = {handleClose}>cancel</Button>
                    <Button onClick = {addItem}>add</Button>
                </DialogActions>

            </Dialog>

        </div>
    )
}


export default AddItem;