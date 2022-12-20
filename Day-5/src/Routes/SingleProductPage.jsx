import "./style.css";
import { useParams ,Link} from "react-router-dom";
import { useState,useEffect ,useContext} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Loader3 } from "../Components/Loaders";
function SingleProductPage(){
    const {id} = useParams();
    const [prod,setProd] = useState({});
    const [loader,setLoader] = useState(false);
    const { baseUrl} = useContext(AuthContext);
    const [btnText,setbtntext] = useState("Add To Cart");
    const [addBtn,setaddBtn] = useState(false);
    //console.log(baseUrl,id)
 useEffect(()=>{
    
    fetchdata()

 },[id]);
  
 const fetchdata =async()=>{
  setLoader(true);
    try {
      const response = await fetch(`https://allure-mock-server.onrender.com/${baseUrl}/${id}`);
      const res = await response.json();
      setProd(res);
     setLoader(false);
    } catch (error) {
      console.log(error)
    }
   
  };

  const handlebtn = (newId)=>{
    setbtntext("Added");
    setaddBtn(true);
    const obj = {...prod,id:Math.floor(Number(newId)+Math.random()+Date.now()) }
    
    addData(obj)
  };

  const addData =async(obj)=>{
    try {
      const response = await fetch(`https://allure-mock-server.onrender.com/cart`,{
        method:"POST",
        body:JSON.stringify(obj),
        headers:{
          'Content-Type':'application/json',
        }
      });
     
    } catch (error) {
      console.log(error)
    }
   
  };


return (
    <div>
        <Navbar/>

        {loader?<Loader3/> :<div key={prod.id} className="single_product_box" >
       <div className="single_product_img" ><img src={prod.img} alt={prod.id} /></div>
         <div className="single_product_text" >
          <h3>{prod.title}</h3>
          <p>{prod.text}</p>
          <h2>${prod.price}<span> {" "}get it with <b>5%</b> Off with Auto-Replenish or 4 payments of <b>$5.25</b> with Klarna or afterpay.</span>
          <br /><span>Size: 1.1 oz/34ml</span>
          </h2>
          
          <button className="single_product_cart_btn"  disabled={addBtn?true:false} onClick={()=>handlebtn(prod.id)}  >{btnText}</button>
           <br />
           <br />
           <br />
           <Link to="/cart" ><p style={{textDecoration:"underline" , 
          fontSize:"14px", color:"blue"
          }} > Cart Page</p></Link>
         </div>
       </div>}
       <Footer/>
    </div>
)
}

export default SingleProductPage