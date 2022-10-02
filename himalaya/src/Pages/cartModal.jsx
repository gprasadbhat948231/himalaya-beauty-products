import {Alert, AlertDescription, AlertIcon, AlertTitle, background, Button} from "@chakra-ui/react"
import axios from "axios";
import { useEffect ,useState } from "react";
import "./cartModal.css"
import { Link } from "react-router-dom";
const getCategoryData=()=>{
    return axios.get(`http://localhost:3000/cartItems`);
}

const removeItem=(id)=>{
    return axios.delete(`http://localhost:3000/cartItems/${id}`)
}

function CartModal() 
    {
    const [data,setData]=useState([]);

    const handleRemove=(id)=>{
        removeItem(id);
        window.location.reload();
    }
    useEffect(()=>{ 
        getCategoryData()
        .then((res)=>setData(res.data))
        .catch((err)=>console.log(err)); 
        
     },[])
     
     if(data.length===0)
     {

        return (    
            <Alert status='error' style={{height:"100px",width:"500px",margin:"auto",marginTop:"10px",borderRadius:"10px"}}>
                <AlertIcon />
                <AlertTitle>Your Cart is Empty</AlertTitle>
                <AlertDescription>Please add some items to proceed</AlertDescription>
            </Alert>
        )
     }

     const handleCheckout=(item,id)=>{
            
            alert(`Your order ${item} ${"\n"} has been placed successfully!!!`);
              removeItem(id);
            window.location.reload();
     }


    return (
        <div className="cartmodel_container">
            { 
                data.map((item)=>(
                    <div className="indi_div" key={item.id}>
                        <img src={item.image} alt="cart "></img>
                        <h3>${item.price}</h3>
                        <h4>{item.title}</h4>
                        <div style={{display:"flex",gap:"10px",marginLeft:"19px",marginTop:"4px"}}>
                        <Button bg="green.300" onClick={()=>handleCheckout(item.title,item.id)}>Checkout</Button>
                        <Button bg="red.200" onClick={()=>handleRemove(item.id)}>Remove Item</Button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default CartModal;