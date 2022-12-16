import Navbar from "../Components/Navbar";
import { Card,Image,Stack,Heading,Text,CardBody } from '@chakra-ui/react'
import {useState} from "react";
function Home(){
  const[data,setData] = useState([]);
  const[obj,setObj] = useState({img:"",title:"",text:""});

const postdata = async(obj)=>{
  try {
    const response  = await fetch (`http://localhost:8080/just_dropped`,{
  method:"POST",
  body:JSON.stringify(obj),
  headers:{
    'Content-Type':'application/json',
  }
});
const res = await response.json();
setObj({img:"",title:"",text:""})
  } catch (error) {
    console.log(error);
  }

}

const handleSubmit = (e)=>{
e.preventDefault();
postdata(obj);
setData([...data,obj]);

};
const handleChange  =(e)=>{
setObj({...obj,[e.target.name]:e.target.value});
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
    
    <div  >
    <form  onSubmit={handleSubmit} style={{border:"1px solid black",width:"40%",margin:"auto",marginTop:"20px"}} >
      
      <input type="text" placeholder="img" name="img" onChange={handleChange} style={{border:"1px solid black"}} value={obj.img}/><br />
      <input type="text"  placeholder="title" name="title" onChange={handleChange} style={{border:"1px solid black"}} value={obj.title}/><br />
      <input type="text" placeholder="text" name="text" onChange={handleChange} style={{border:"1px solid black"}} value={obj.text}/><br />
      <input type="submit" value="submit" />
    </form>
    </div>
    
     

    </div>
  )
}

export default Home