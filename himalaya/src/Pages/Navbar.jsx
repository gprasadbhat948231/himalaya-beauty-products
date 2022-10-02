import React from "react";
import { Box,Text,Flex, HStack, IconButton, Image} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar()
{
    return (
        <div>
            <Flex>
                <Box bg='tomato' w='100%' p={1} color='white'>
                     <HStack alignItems="center"
                        justifyContent="center">
                        <Text as='b' fontWeight="medium" fontSize="xl">FREE SHIPPING</Text>
                        <Text >  ON ALL ORDERS OVER $35!</Text>
                    </HStack>
                </Box>
            </Flex>
                
            <Flex alignItems="center" justifyContent="space-between">
                <Box>
                    <HStack spacing="34px">
                     <Link to="/"> <Image width="200px" ml="50px" height="80px" src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?height=628&pad_color=ffffff&v=1614313814&width=1200" alt="Himalaya logo"></Image></Link>
                            <div className="Navbar">
                                <ul>
                                    <li><a href="#">Shop</a>
                                        <ul>
                                            <li><a href="#">Herbal Suppliments</a>
                                                <ul>
                                                    <li><a href="#">Single Herb Supplements</a></li>
                                                    <li><a href="#">Multy-Ingredients</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Health Interest</a>
                                                <ul>
                                                    <li><a href="#">Blood Suger</a></li>
                                                    <li><a href="#">Energy & utality</a></li>
                                                    <li><a href="#">Brain & Cognitive</a></li>
                                                    <li><a href="#">Digestion</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Oral Care</a>
                                                <ul>
                                                    <li><a href="#">Adult ToothPaste</a></li>
                                                    <li><a href="#">Kids Toothpaste</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Personal Care</a>
                                                <ul>
                                                <li><a href="#">Blood Suger</a></li>
                                                <li><a href="#">Balm</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    
                                    </li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Store Locator</a></li>
                                </ul>
                            </div>
                    </HStack>
                </Box>
                    <Box marginRight={10}>
                        <HStack >
                            <IconButton className="iconone" bg="white" aria-label='Search database' icon={<SearchIcon w={6} h={6} color="gray.900"/>} mr={2}/>
                            <Box>
                            <Link to="/registration"><Image onClick={()=>console.log("guru")} className="icontwo" src="https://cdn-icons-png.flaticon.com/128/456/456283.png" width="25px" height="25px" mr={2}/></Link>
                            </Box>
                            <Box>
                           <Link to="/cartModal"> <Image className="iconthree" src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" width="30px" height="30px"/></Link>
                            </Box>
                        </HStack>   
                    </Box>
            </Flex>

            <div>
            </div>
        </div>
    )
}
export default Navbar;