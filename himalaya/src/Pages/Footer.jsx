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
        <div>
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
                    <Text>Email</Text>
                    <Text>writetous@himalayausa.com</Text>
                    <Text>Phone</Text>
                    <Text>1-800-869-4640</Text>
                    <Text>Mon-Fri, 8am-5pm CT</Text>
                    <Text>Mail</Text>
                    <Text>Himalaya Wellness</Text>
                    <Text>1101 Gillingham Lane</Text>
                    <Text>Sugar Land,TX 77478</Text>
                </div>
                <div>
                    <Text className="main_heading">Subscribe to Our Newsletter</Text>
                    <br/>
                    <InputGroup>
                    <Input placeholder="name"/>
                    <InputRightElement children={<EmailIcon/>}/>
                    </InputGroup>
                    <Text>By entering your email,you agree to our Terms & Conditions and Privacy Policy</Text>
                    <div> Follow US:
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faFacebook}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faTwitter}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faInstagram}/></a>
                     <a href="socialmedia.com"> <FontAwesomeIcon icon={faYoutube}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;