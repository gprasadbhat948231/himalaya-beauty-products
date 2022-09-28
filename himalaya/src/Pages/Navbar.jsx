import React from "react";
import { Box,Text,Flex, HStack, IconButton, Image} from '@chakra-ui/react'
import {SearchIcon} from "@chakra-ui/icons"
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
                            <Image width="200px" ml="50px" height="80px" src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/new-logo.png?height=628&pad_color=ffffff&v=1614313814&width=1200" alt="Himalaya logo"></Image>
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
                            <Image className="icontwo" src="https://cdn-icons-png.flaticon.com/128/456/456283.png" width="25px" height="25px" mr={2}/>
                            </Box>
                            <Box>
                            <Image className="iconthree" src="https://cdn-icons-png.flaticon.com/128/4903/4903482.png" width="30px" height="30px"/>
                            </Box>
                        </HStack>
                    </Box>
            </Flex>
            <div style={{
                backgroundImage:`url("https://scontent.fblr4-2.fna.fbcdn.net/v/t1.6435-9/207264593_4366290630070783_1169466405290446259_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=Dq4Q-VsEQtUAX8dy1Gx&_nc_ht=scontent.fblr4-2.fna&oh=00_AT9ikgQg0w865KSpbEGS3Qdb2BjJVrPDBxI3FB1vR9wd4w&oe=63591F3D")`,
                width:"100%",
                minHeight:"450px",
                height:"50vh",
                backgroundPosition:"center",
                backgroundRepeat:"no-repeat",
                backgroundSize:"cover",
            }
            }
            >
             <div style={{paddingTop:"140px"}}>
                <div style={{display:"flex",justifyContent:"flex-end",padding:"5px",paddingRight:"20px",backgroundColor:"#fffffff8",width:"650px"}}>
                    <Text lineHeight="60px" fontSize="40px" letterSpacing="0.03em" fontWeight="500">ASHWAGANDHA</Text>
                </div>
                <div style={{width:"480px",marginLeft:"200px",marginTop:"20px"}}>
                <Text fontSize="18px" pl={100} textAlign="left">A star performer for stress and energy in a potent, organic caplet.</Text>
                <button style={{backgroundColor:"#48cab2",marginTop:"20px",fontSize:"14px",fontWeight:"bold",padding:"10px",width:"110px",color:"white", textAlign:"center", size:"lg",marginRight:"160px"}}>Shop Now</button>
                </div> 
                
            </div>   
               </div>
            <div>
            </div>
        </div>
    )
}
export default Navbar;