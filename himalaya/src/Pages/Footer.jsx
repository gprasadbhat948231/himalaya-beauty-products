import React from "react"
import { Container, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import {EmailIcon} from "@chakra-ui/icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {
faFacebook,
faTwitter,
faInstagram,
faYoutube
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css"
function Footer()
{
    return (
        <div className="Footer">
            <div className="footer_Container">
                <div>
                    <Text className="main_heading">Info</Text>
                    <br/>
                    <Text className="subcategory" >Contact Us</Text>
                    <Text className="subcategory" >FAQ</Text>
                    <Text className="subcategory" >Blog</Text>
                    <Text className="subcategory" >Store Locator</Text>
                    <Text className="subcategory" >Careers</Text>
                </div>
                <div>
                    <Text className="main_heading">Policies</Text>
                    <br/>
                    <Text className="subcategory">Shipping & Returns</Text>
                    <Text className="subcategory">Terms & Conditions</Text>
                    <Text className="subcategory">Privacy</Text>
                    <Text className="subcategory">CCPA</Text>
                    <Text className="subcategory">Accessibility</Text>
                </div>
                <div>
                    <Text className="main_heading">Contact Us</Text>
                    <br></br>
                    <Text color="black" fontWeight="bold">Email</Text>
                    <Text marginBottom="15px" fontSize={17}color="green.600" fontWeight="semibold">writetous@himalayausa.com</Text>
                    <Text color="black" fontWeight="bold">Phone</Text>
                    <Text color="green.600" fontSize={17} fontWeight="semibold">1-800-869-4640</Text>
                    <Text marginBottom="15px">Mon-Fri, 8am-5pm CT</Text>
                    <Text color="black" fontWeight="bold">Mail</Text>
                    <Text>Himalaya Wellness</Text>
                    <Text color="green.600" fontSize={17} fontWeight="semibold">1101 Gillingham Lane</Text>
                    <Text color="green.600" fontSize={17} fontWeight="semibold">Sugar Land,TX 77478</Text>
                </div>
                <div>
                    <Text className="main_heading">Subscribe to Our Newsletter</Text>
                    <br/>
                    <InputGroup>
                    <Input placeholder="Enter Your E-mail" width={300} height={50} backgroundColor="white"/>
                    <InputRightElement children={<EmailIcon width="40px" marginTop={2} marginRight={5} height="40px"/>}/>
                    </InputGroup>
                    <Text noOfLines={3} fontSize={17} marginTop="15px">By entering your email,you agree to our Terms & Conditions and Privacy Policy</Text>
                    <div className="socialdiv"> Follow Us:
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faFacebook}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faTwitter}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faInstagram}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
            <div >
                © 2022 Himalaya Wellness. All rights reserved.
            </div>
            <div className="lastbox">
            *THESE STATEMENTS HAVE NOT BEEN EVALUATED BY THE FOOD AND DRUG ADMINISTRATION. THIS PRODUCT IS NOT INTENDED TO DIAGNOSE, TREAT, CURE OR PREVENT ANY DISEASE.
            </div>
        </div>
    )
}
export default Footer;