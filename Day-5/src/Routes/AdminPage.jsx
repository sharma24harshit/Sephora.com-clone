import "./style.css";
import {useState} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Adminpage(){
  const[data,setData] = useState([]);
  const[obj,setObj] = useState({img:"",title:"",text:"",price:""});
                                                    // ,text:""
const postdata = async(obj)=>{
  try {
    const response  = await fetch (`https://allure-mock-server.onrender.com/home_images`,{
  method:"POST",
  body:JSON.stringify(obj),
  headers:{
    'Content-Type':'application/json',
  }
});
//const res = await response.json();
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

      <h1 className="login_page_heading" >Welcome To Admin Page</h1>
    
    <div  className="adminpage_main_box" >
    <form  onSubmit={handleSubmit} className="form" >
      
      <input type="text" placeholder="Product Image Link" name="img" onChange={handleChange}  value={obj.img}/><br />
      <input type="text"  placeholder="Enter Product Title" name="title" onChange={handleChange}  value={obj.title}/><br />
      <input type="text" placeholder="Enter Product Text" name="text" onChange={handleChange}  value={obj.text}/><br />
      <input type="number" placeholder="Enter Product Price" name="price" onChange={handleChange}  value={obj.price}/><br />
      <input type="submit" value="Add Product" />
    </form>
    </div>
    
     <Footer/>

    </div>
  )
}

export default Adminpage