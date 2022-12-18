import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProductsPageCard from "../Components/ProductsPageCard";
function ProductsPage(){
    const { baseUrl} = useContext(AuthContext);
    const [data1,setdata1] = useState([]);
    useEffect(()=>{
        fetchdata()
        },[])
        const fetchdata =async()=>{
          try {
            const response = await fetch(`http://localhost:8080/${baseUrl}`);
            const res = await response.json();
            setdata1(res);
           
          } catch (error) {
            console.log(error)
          }
         
        };
        //console.log("products page",baseUrl)

return (
    <div>
        <Navbar/>
  <h1 className="products_page_heading" >Products Page</h1>

     <div className="ProductsPageCard_container">
      {data1 && data1.map((el)=>(
        <div key={el.id} className="ProductsPageCard_box" >
       <Link to={`/products/${el.id}`} > <ProductsPageCard  id={el.id} img={el.img} title={el.title} text={el.text} price={el.price} /></Link>
       </div>
      ))}
     </div>

     <Footer/>

    </div>
)
}

export default ProductsPage