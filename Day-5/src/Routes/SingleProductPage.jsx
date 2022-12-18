import { useParams } from "react-router-dom";
import { useState,useEffect ,useContext} from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function SingleProductPage(){
    const {id} = useParams();
    const [prod,setProd] = useState({});
    const { baseUrl} = useContext(AuthContext);
    //console.log(baseUrl,id)
 useEffect(()=>{
    
    fetchdata()

 },[id]);
  
 const fetchdata =async()=>{
    try {
      const response = await fetch(`http://localhost:8080/${baseUrl}/${id}`);
      const res = await response.json();
      setProd(res);
     
    } catch (error) {
      console.log(error)
    }
   
  };

  const handlebtn = (newId)=>{
    const obj = {...prod,id:Math.floor(Number(newId)+Math.random()+Date.now()) }
    
    addData(obj)
  };

  const addData =async(obj)=>{
    try {
      const response = await fetch(`http://localhost:8080/cart`,{
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

        <div key={prod.id} className="single_product_box" >
       <div className="single_product_img" ><img src={prod.img} alt={prod.id} /></div>
         <div className="single_product_text" >
          <h3>{prod.title}</h3>
          <p>{prod.text}</p>
          <h2>${prod.price}<span> {" "}get it with <b>5%</b> Off with Auto-Replenish or 4 payments of <b>$5.25</b> with Klarna or afterpay.</span>
          <br /><span>Size: 1.1 oz/34ml</span>
          </h2>
          
          <button className="single_product_cart_btn"  onClick={()=>handlebtn(prod.id)}  >Add To Cart</button>
         </div>
       </div>
       <Footer/>
    </div>
)
}

export default SingleProductPage