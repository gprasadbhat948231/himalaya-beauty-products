import React from "react";
import {Box, Button, FormControl, FormLabel, Input, Text} from "@chakra-ui/react"
import "./Login.css"
function Registration() {
  return (
    <Box className="formdiv">
      <Text fontSize="4xl">Login Here!</Text>
      <FormControl color="gray.600" w={300} isRequired>
      <FormLabel mt={10} color="gray.600">Email</FormLabel>
      <Input width="350px"placeholder='Enter Email' color="black"/>
      <br/>
      <FormLabel color="gray.600" mt={3}>Password</FormLabel>
      <Input width="350px" placeholder='Enter Password' color="black" />
      <br/>
      <br/>
      <button className="formbtn" bg="#a3b49b">Login</button>
      <Text className="lostpass" color="gray.900" >Lost your password?</Text>
      <Text fontSize="2xl" color="black">New Customer</Text>
      <Text className="newcust" noOfLines={5} >By creating an account with our store, you will be able to move through the checkout process faster, store multiple shipping addresses, view and track your orders in your account and more. 
      </Text>
      <button className="formbtn2">CREATE AN ACCOUNT</button>
    </FormControl>
    </Box>
  );
}

export default Registration;
