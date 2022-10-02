import { Text,Image,Button } from "@chakra-ui/react";
import axios from "axios"
import {useState,useEffect} from "react"
import "./homemiddle.css";
import Wisdom from "./wisdom";
const setCartData=(data={})=>{
    return axios.post(" http://localhost:3000/cartItems ",{
      image:data.image,
      title:data.title,
      price:data.price
    })
}

const getCategoryData=()=>{
    return axios.get(`http://localhost:3000/middle`);
}

const getBsellerData=()=>{
    return axios.get(`http://localhost:3000/bestseller`);
}
function Middlepart(){
    
    const [data,setData]=useState([])
    
    const [bdata,setbData]=useState([]);

    const [cartitem,setCartitem]=useState({
        id:"",
        image:"",
        title:"",
        price:""
    })
    useEffect(()=>{
        getCategoryData().then((res)=>setData(res.data))
        getBsellerData().then((res)=>setbData(res.data));
    },[])
    const handleModal=(item)=>{
        setCartitem(item);
        setCartData(item);
        
    }
    return (
        <div>
            
            <Text fontStyle="-moz-initial" fontWeight="medium" color="black" align="center" fontSize="2xl">Shop By Category</Text>
            <br/>
            <div className="category_container">
                {
                    data.map((item)=>(
                        <div key={item.id} className="middleCategory">
                            <div>
                                <Image src={item.image}></Image>
                                <Text className="Textone" >{item.title}</Text>
                                <Text className="Texttwo" >{item.details}</Text> 
                            </div>
                        </div>
                    ))
                }
            </div>
            <br/>
            <br/>
            <div>
                <Text className="Bsellers">Best Sellers</Text>
                <br/>
                <br/>
                <div className="seller_container">
                {
                    bdata.map((item)=>(
                       <div key={item.id} className="bsellerdiv">
                            <Image src={item.image}></Image>
                            <Text className="seller_title_one">{item.title}</Text>
                            <Text>🛒 $ {item.price}</Text>
                            <Button onClick={()=>handleModal(item)}>Add to Cart</Button>
                        </div> 
                    ))
                }
                </div>
            </div>
            <div>
                <Wisdom/>
            </div>
        </div>
    )
    
}
export default Middlepart;