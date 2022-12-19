import "./style.css";
import {Link} from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState,useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../AuthContext/AuthContext";
function Login(){
  const[data,setData] = useState([]);
  const[obj,setObj] = useState({name:"",email:"",password:""});
  const[obj1,setObj1] = useState({name:"",email:"",password:""});
  const navigate = useNavigate();
  const {setUser,setIsAuth} = useContext(AuthContext);
                                                    
const postdata = async(obj)=>{
  try {
    const response  = await fetch (`https://allure-mock-server.onrender.com/login`,{
  method:"POST",
  body:JSON.stringify(obj),
  headers:{
    'Content-Type':'application/json',
  }
});
const res = await response.json();
setObj({name:"",email:"",password:""})    

  } catch (error) {
    console.log(error);
  }

}

const postdata1 = async(obj1)=>{
  try {
    const response  = await fetch (`https://allure-mock-server.onrender.com/login`);
    const res = await response.json();
   const datas =  res.filter((el)=>{
    if(obj1.email===el.email && obj1.password===el.password){
      setUser(el.name);
      setIsAuth(true);
    return  navigate("/");
            
    }
    else if(obj1.email===el.email && obj1.password!==el.password){
      return  console.log("Incorrect Password");
    }
    else if(obj1.email!==el.email && obj1.password===el.password){
      return  console.log("Incorrect email");
    }
  });
  console.log(datas)
setObj1({name:"",email:"",password:""})    

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

const handleSubmit1 = (e)=>{
  e.preventDefault();
  postdata1(obj1);
  
  };
  const handleChange1  =(e)=>{
  setObj1({...obj1,[e.target.name]:e.target.value});
  };

return (
    <div>
      <Navbar/>
        <h1 className="login_page_heading" >
          Enter Your Detials
        </h1>
     
     <div className="main_login_box" > 
      
     <div className="login_container" >
      <h1>Create Account</h1>
    <form  onSubmit={handleSubmit}  className="form" >
      
      <input type="text" placeholder="Name" name="name" onChange={handleChange} value={obj.name}/><br />
      <input type="email"  placeholder="Email" name="email" onChange={handleChange}  value={obj.email}/><br />
      <input type="password" placeholder="Password" name="password" onChange={handleChange}  value={obj.password}/><br />
      {/* <input type="number" placeholder="price" name="price" onChange={handleChange}  value={obj.price}/><br /> */}
      <input type="submit" value="Join Now" />
    </form>
    </div>

    <div  className="login_container">
      <h1>Sign In</h1>
    <form  onSubmit={handleSubmit1}  className="form">
      <input type="email"  placeholder="Email" name="email" onChange={handleChange1}  value={obj1.email}/><br />
      <input type="password" placeholder="Password" name="password" onChange={handleChange1}  value={obj1.password}/><br />
      {/* <input type="number" placeholder="price" name="price" onChange={handleChange}  value={obj.price}/><br /> */}
      <input type="submit" value="Sign In" />
    </form>
    </div>

     </div>
    
        <br />
        <button className="adminPage_btn" ><Link to="/admin" >Admin Page</Link></button>
        <Footer/>
    </div>
)
}
export default Login