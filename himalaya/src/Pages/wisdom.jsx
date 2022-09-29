import React from "react"
import {Box, Image, Text} from "@chakra-ui/react"
function Wisdom()
{
    return(
        <div className="wisdom_container">
                <Box>
                    <Image src="https://cdn.shopify.com/s/files/1/0399/1728/9633/files/StressCareA-Main-647x1024.png?v=1591359475" style={{width:"150px",height:"200px",marginTop:"20px"}}></Image>
                </Box>
                <Box className="wisdomdiv_two">
                    <Text className="wisdomtext_one">Unlock the Wisdom of Herbs</Text>
                    <Text className="wisdomtext_two">with Herbal Supplements ,  Toothpaste & More!</Text>
                    <Text className="wisdomtext_three">Since 1930, Himalaya has been passionate about the healing wisdom of herbs. We offer a wide range of clinically-studied herbal supplements, toothpaste and personal care products that unlock the powerful healing benefits of herbs.</Text>
                </Box>
        </div>
    );  
}
export default Wisdom;