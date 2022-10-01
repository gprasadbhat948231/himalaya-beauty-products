// import React from "react";
import {Box, FormControl, FormLabel, Input, Text} from "@chakra-ui/react"
import "./Login.css"
import {useState} from "react";
import axios from "axios"
import { useNavigate,} from "react-router-dom";
const getData=(data={})=>{
  return axios.post(" http://localhost:3000/login",{
    email:data.email,
    password:data.password
  })
}
  function Registration() {

    const [data,setData]=useState({
    email:"",
    password:""
    })

  const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({
      ...data,
      [name]:value
    })
  }
  const navigate=useNavigate();
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData(data);
    alert("Login successful");
    navigate("/");
  }
  return (
    <Box className="formdiv">
      <form onSubmit={handleSubmit}>
      <Text fontSize="4xl">Login Here!</Text>
      <FormControl color="gray.600" w={300} isRequired>
      <FormLabel mt={10} color="gray.600">Email</FormLabel>

      <Input width="350px"placeholder='Enter Email' color="black" name="email" value={data.email} onChange={handleChange}/>
      <br/>
      <FormLabel color="gray.600" mt={3}>Password</FormLabel>
      
      <Input width="350px" placeholder='Enter Password' color="black" name="password" value={data.password} onChange={handleChange}/>
      <br/>
      <br/>
      <button className="formbtn" bg="#a3b49b">Login</button>
      <Text className="lostpass" color="gray.900" >Lost your password?</Text>
      <Text fontSize="2xl" color="black">New Customer</Text>
      <Text className="newcust" noOfLines={5} >By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more. 
      </Text>
      <button className="formbtn2">CREATE AN ACCOUNT</button>
     </FormControl>
    </form>
    </Box>
  );
}

export default Registration;
