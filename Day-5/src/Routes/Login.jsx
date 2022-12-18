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
    const response  = await fetch (`http://localhost:8080/login`,{
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
    const response  = await fetch (`http://localhost:8080/login`);
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
        <h1>
          welcome  Login page
        </h1>
     
     <div style={{display:"flex"}} > 

     <div  >
    <form  onSubmit={handleSubmit} style={{border:"1px solid black",width:"40%",margin:"auto",marginTop:"20px"}} >
      
      <input type="text" placeholder="Name" name="name" onChange={handleChange} style={{border:"1px solid black"}} value={obj.name}/><br />
      <input type="email"  placeholder="Email" name="email" onChange={handleChange} style={{border:"1px solid black"}} value={obj.email}/><br />
      <input type="password" placeholder="Password" name="password" onChange={handleChange} style={{border:"1px solid black"}} value={obj.password}/><br />
      {/* <input type="number" placeholder="price" name="price" onChange={handleChange} style={{border:"1px solid black"}} value={obj.price}/><br /> */}
      <input type="submit" value="submit" />
    </form>
    </div>

    <div  >
    <form  onSubmit={handleSubmit1} style={{border:"1px solid black",width:"40%",margin:"auto",marginTop:"20px"}} >
      
     
      <input type="email"  placeholder="Email" name="email" onChange={handleChange1} style={{border:"1px solid black"}} value={obj1.email}/><br />
      <input type="password" placeholder="Password" name="password" onChange={handleChange1} style={{border:"1px solid black"}} value={obj1.password}/><br />
      {/* <input type="number" placeholder="price" name="price" onChange={handleChange} style={{border:"1px solid black"}} value={obj.price}/><br /> */}
      <input type="submit" value="submit" />
    </form>
    </div>

     </div>
    
        <br />
        <button><Link to="/admin" >Admin Page</Link></button>
        <Footer/>
    </div>
)
}
export default Login