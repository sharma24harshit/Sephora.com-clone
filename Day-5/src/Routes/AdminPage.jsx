import {useState} from "react";
import Navbar from "../Components/Navbar";
function Adminpage(){
  const[data,setData] = useState([]);
  const[obj,setObj] = useState({img:"",title:"",text:"",price:""});
                                                    // ,text:""
const postdata = async(obj)=>{
  try {
    const response  = await fetch (`http://localhost:8080/home_images`,{
  method:"POST",
  body:JSON.stringify(obj),
  headers:{
    'Content-Type':'application/json',
  }
});
const res = await response.json();
setObj({img:"",title:"",text:"",price:""})    
// ,text:""
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
    
    <div  >
    <form  onSubmit={handleSubmit} style={{border:"1px solid black",width:"40%",margin:"auto",marginTop:"20px"}} >
      
      <input type="text" placeholder="img" name="img" onChange={handleChange} style={{border:"1px solid black"}} value={obj.img}/><br />
      <input type="text"  placeholder="title" name="title" onChange={handleChange} style={{border:"1px solid black"}} value={obj.title}/><br />
      <input type="text" placeholder="text" name="text" onChange={handleChange} style={{border:"1px solid black"}} value={obj.text}/><br />
      <input type="number" placeholder="price" name="price" onChange={handleChange} style={{border:"1px solid black"}} value={obj.price}/><br />
      <input type="submit" value="submit" />
    </form>
    </div>
    
     

    </div>
  )
}

export default Adminpage