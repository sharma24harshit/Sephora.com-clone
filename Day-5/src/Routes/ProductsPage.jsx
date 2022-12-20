import "./style.css";
import { useContext,useEffect,useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";
import ProductsPageCard from "../Components/ProductsPageCard";
import { Loader2 } from "../Components/Loaders";
function ProductsPage(){
    const { baseUrl} = useContext(AuthContext);
    const [data1,setdata1] = useState([]);
    const [loader,setLoader] = useState(false);

    useEffect(()=>{
        fetchdata()
        },[])
        const fetchdata =async()=>{
          setLoader(true);
          try {
            const response = await fetch(`https://allure-mock-server.onrender.com/${baseUrl}`);
            const res = await response.json();
            setdata1(res);
           setLoader(false);
          } catch (error) {
            console.log(error)
          }
         
        };
        //console.log("products page",baseUrl)

return (
    <div>
        <Navbar/>
  <h1 className="products_page_heading" >Products Page</h1>

  {loader?<Loader2/> : <div className="ProductsPageCard_container">
      {data1 && data1.map((el)=>(
        <div key={el.id} className="ProductsPageCard_box" >
       <Link to={`/products/${el.id}`} > <ProductsPageCard  id={el.id} img={el.img} title={el.title} text={el.text} price={el.price} /></Link>
       </div>
      ))}
     </div>}

     <Footer/>

    </div>
)
}

export default ProductsPage