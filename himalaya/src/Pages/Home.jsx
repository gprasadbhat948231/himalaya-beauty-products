import React from "react"
import Middlepart from "./Homemiddle";
import {Text} from "@chakra-ui/react"
import Footer from "./Footer";
function HomePage()
{
    return (
        <div>
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
            <br/>
            <br/>
            <Middlepart/>
            <Footer/>
        </div>
    )
}
export default HomePage;