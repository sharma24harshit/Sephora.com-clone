import { useState ,useEffect} from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function CartPage (){
    const [data,setData] = useState([]);


 useEffect(()=>{
    
    fetchdata()

 },[]);
  
 const fetchdata =async()=>{
    try {
      const response = await fetch(`http://localhost:8080/cart`);
      const res = await response.json();
      setData(res);
     
    } catch (error) {
      console.log(error)
    }
   
  };

//   const handlebtn = (newId)=>{
//     const obj = {...prod,id:Math.floor(Number(newId)+Math.random()+Date.now()) }
    
//     addData(obj)
//   };

//   const addData =async(obj)=>{
//     try {
//       const response = await fetch(`http://localhost:8080/cart`,{
//         method:"POST",
//         body:JSON.stringify(obj),
//         headers:{
//           'Content-Type':'application/json',
//         }
//       });
     
//     } catch (error) {
//       console.log(error)
//     }
   
//   };
// }

// const handleDelete = async (id) => {
//     const posting = await fetch(`http://localhost:3000/items/${id}`,{

//       method: 'DELETE',
//       headers: {
//           'Content-Type' : 'application/json',
//              }
//   });
//       showData()
//   };
const removeBtn = async (id)=>{
const posting = await fetch(`http://localhost:8080/cart/${id}`,{

      method: 'DELETE',
      headers: {
          'Content-Type' : 'application/json',
              }
  });
  fetchdata()
}
return (
    <div>
        <Navbar/>
        <h2>Cart Page</h2>
        <div className="ProductsPageCard_container">
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
     </div>
      
     <Footer/>

    </div>
)


}
export default CartPage