import "./style.css";
import { useState ,useEffect} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "../Components/Loaders";
function CartPage (){
    const [data,setData] = useState([]);
   const [total,setTotal] = useState(0);
   const [loader,setLoader] = useState(false);
   const naviagte = useNavigate()

 useEffect(()=>{
    
    fetchdata()

 },[]);
  
 const fetchdata =async()=>{
  setLoader(true);
    try {
      const response = await fetch(`https://allure-mock-server.onrender.com/cart`);
      const res = await response.json();
      setData(res);
      const value=  res.reduce(function (acc,el){
        return acc + Number(el.price)
       },0);
       setTotal(value);
       setLoader(false);
    } 
    catch (error) {
      console.log(error)
    }
   
  };

const removeBtn = async (id)=>{
  setLoader(true);
const posting = await fetch(`https://allure-mock-server.onrender.com/cart/${id}`,{

      method: 'DELETE',
      headers: {
          'Content-Type' : 'application/json',
              }
  });
  fetchdata()
  const res = await posting.json();
  const value=  res.reduce(function (acc,el){
    return acc + Number(el.price)
   },0);
   setTotal(value);
  setLoader(false);
};

 const checkout = ()=>{
   alert("Your Order is Placed Succesfully");
   naviagte("/");
 };

return (
    <div>
        <Navbar/>
        <h2 className="login_page_heading">Cart Page</h2>
        <div className="totalAmount_box" >
          Total Amount : ${total}   <button className="checkout_btn" 
           disabled={total===0}   onClick={checkout} >Checkout</button>
        </div>
        {loader?<Loader2/> : <div className="ProductsPageCard_container">
      {data && data.map((el)=>(
        <div key={el.id} className="ProductsPageCard_box" >
        <div className="ProductsPageCard_img" ><img src={el.img} alt={el.id} /></div>
         <div className="ProductsPageCard_text" >
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <h2>${el.price}</h2>
         </div>
         <div>
            <button className="cart_remove_btn" onClick={()=>removeBtn(el.id)} >Remove</button>
         </div>
       </div>
      ))}
     </div>}
      
     <Footer/>

    </div>
)


}
export default CartPage