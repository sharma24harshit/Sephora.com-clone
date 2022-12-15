import Navbar from "../Components/Navbar";
import { Card,Image,Stack,Heading,Text,CardBody } from '@chakra-ui/react'
import {useState} from "react";
function Home(){
  const[data,setData] = useState({id:"",img:"",title:"",text:""});

const postdata = async(data)=>{
const response  = await fetch (`http://localhost:3000/Home`,{
  method:"POST",
  body:JSON.stringify(data),
  headers:{
    'Content-Type':'application/json',
  }
});
const res = await response.json();
console.log(res);
setData({img:"",title:"",text:"",id:""});
}

const handleSubmit = (e)=>{
e.preventDefault();
postdata(data)
};
const handleChange  =(e)=>{
setData({...data,[e.target.name]:e.target.value});
};
  return (
    <div>
      <Navbar/>

    {/* <Card maxW='sm'>
      <CardBody>
        <Image
       src='https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?pb=allure-2022-bestofbeauty-badge&imwidth=166'
       alt='Green double couch with wooden legs'
       borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>Living room Sofa</Heading>
        <Text>
          This sofa is perfect for modern tropical spaces, baroque inspired
        </Text>
       </Stack>
     </CardBody>
    </Card> */}
    
     

    </div>
  )
}

export default Home