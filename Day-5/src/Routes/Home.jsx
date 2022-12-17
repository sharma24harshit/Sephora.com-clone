import "./style.css";
import Navbar from "../Components/Navbar";
import {useState,useEffect} from "react";
import HomePageCard1 from "../Components/HomePageCard1";
import HomePageCard2 from "../Components/HomePageCard2";
import { BiUserCircle } from "react-icons/bi";

function Home(){
 const [data1,setdata1]  = useState([]);
 const [data2,setdata2]  = useState([]);
 const [data3,setdata3]  = useState([]);
 const [data4,setdata4]  = useState([]);
 const [data5,setdata5]  = useState([]);
 const [data6,setdata6]  = useState([]);
 const [data7,setData7]  = useState([]);
//  const [data8,setdata8]  = useState(0);
 
 
  // function carousel(){
    
  //   let i=1;
  //   let interval = setInterval(()=>{
  //      if(i===2){
  //       i=0;
  //        setdata8(0);
  //    clearInterval(interval);
        
  //      }
  //       setdata8(i);
  //       console.log(data8)
  //      i = i+1;
       
  //  },2000)
  // }
  
 //carousel()

useEffect(()=>{
fetchdata()
},[])
const fetchdata =async()=>{
  try {
    const response = await fetch(`http://localhost:8080/Home`);
    const res = await response.json();
    //console.log(res)
    setdata1(res.chosen_for_you);
    setdata2(res.just_dropped);
    setdata3(res.selling_fast);
    setdata4(res.beauty_insider_rewards);
    setdata5(res.featured_categories);
    setdata6(res.need_a_little_guidance);
    setData7(res.beauty_offers)
  } catch (error) {
    console.log(error)
  }
 
}


  return (
    <div>
      <Navbar/>
<div className="home_top_img" >
<img src="https://www.sephora.com/contentimages/2022-12-20off-frag-site-home-page-hero-banner.jpg?imwidth=545" alt="data8"  />
<img src="https://www.sephora.com/contentimages/2022-12-06-slotting-gifts-by-price-site-rwd-hp-hero-banner-4-product-english-us-handoff_01.jpg?imwidth=545" alt="2" />
</div>
 
 
{/* / ---------------------------- Chosen For You ---------------------------------------- / */}
    <h2 className="product_heading" >Chosen For You</h2>
     <div className="grid_container">
      {data1 && data1.map((el)=>(
        <div key={el.id} className="grid_box" >
        <HomePageCard1  id={el.id} img={el.img} title={el.title} text={el.text} />
       </div>
      ))}
     </div>

{/* / ----------------------------- Just Dropped ---------------------------------------- / */}
     <h2 className="product_heading" >Just Dropped</h2>
     <div className="grid_container">
      {data2 && data2.map((el)=>(
        <div key={el.id} className="grid_box" >
        <HomePageCard1  id={el.id} img={el.img} title={el.title} text={el.text} />
       </div>
      ))}
     </div>

{/* / --------------------------- Beauty Insider Rewards -------------------------------------------- / */}
<div style={{marginBottom:"60px"}} >
 <h2 className="product_heading" >Beauty Offers (10)</h2>
<p></p>
 </div>

     <div className="grid_container2">
      {data7 && data7.map((el)=>(
        <div key={el.id} className="grid_box" >
       <div className="grid_img" ><img src={el.img} alt={el.id} /></div>
         <div className="grid_text" style={{height:"110px"}} >
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <p className="points_text" ></p>
         </div>
         <button className="cart_btn" style={{marginBottom:"20px"}} >Apply</button>
       </div>
      ))}
     </div>    

{/* / --------------------------- Image section 1 -------------------------------------------- / */}

<div className="homePage_image_container" style={{marginTop:"70px"}} >

<div className="homePage_image_box" > 
<div className="homePage_image_box_text" style={{backgroundColor:"rgb(172,220,242)"}} >
 <h3>Perfect Presents under $25</h3>
 <h4>Everyone will love unwrapping these makeup and skincare essentials.</h4>
 <p>SHOP NOW</p>
</div>
<div className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/2022-12-1-sc-sku-site-desktop-mweb-home-page-rwd-marketing-banner-launch-1-800x256-en-us-can.jpg?imwidth=400" alt="img1" /></div>
</div>

<div className="homePage_image_box" > 
<div className="homePage_image_box_text" style={{backgroundColor:"rgb(68,149,83)" ,color:"white"}} >
<h3>Get Your Gifts in Time</h3>
 <h4>Fast and easy options for stress-free holiday shopping</h4>
 <p>LEARN MORE</p>
</div>
<div className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/2022-12-05-holiday-der-b-launch-site-mobile-desktop-home-page-rwd-marketing-banner-ldts-mockup-us-2869-release-800x256.jpg?imwidth=400" alt="img2" /></div>
</div>

<div className="homePage_image_box" > 
<div className="homePage_image_box_text" style={{backgroundColor:"rgb(1,146,203)",color:"white"}} >
<h3>Get Gift Advice ASAP</h3>
 <h4>Chat live with a Beauty Advisor for personalized recs.</h4>
 <p>Let's CHAT</p>
</div>
<div  className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/2022-holiday-launch-bun-d-site-mobile-desktop-marketing-banner-rwd-live-chat-us-can-800x256.jpg?imwidth=400" alt="img3" /></div>
</div>

</div>
{/* / --------------------------- Selling Fast -------------------------------------------- / */}
<h2 className="product_heading" >Selling Fast</h2>
     <div className="grid_container">
      {data3 && data3.map((el)=>(
        <div key={el.id} className="grid_box" >
        <HomePageCard1  id={el.id} img={el.img} title={el.title} text={el.text} />
       </div>
      ))}
     </div>
{/* / --------------------------- Beauty Insider Rewards -------------------------------------------- / */}
 <div >
 <h2 className="product_heading" >Beauty Insider Rewards</h2>
<p>Sign in to redeem your points</p>
 </div>

     <div className="grid_container">
      {data4 && data4.map((el)=>(
        <div key={el.id} className="grid_box" >
       <div className="grid_img" ><img src={el.img} alt={el.id} /></div>
         <div className="grid_text" >
          <h3>{el.title}</h3>
          <p>{el.text}</p>
          <p className="points_text" >100 points</p>
          <button className="cart_btn" >Add To Cart</button>
         </div>
       </div>
      ))}
     </div>    
{/* / --------------------------- Featured Categories -------------------------------------------- / */}
 <div className="flexCard1_home"  style={{heigth:"200px"}} >
    <div className="text_container1" >
     <h2 className="product_heading" >Featured Categories</h2>
     <p>Shop what's popular now.</p>
    </div>
    <div className="grid_container1">
      {data5 && data5.map((el)=>(
        <div key={el.id} className="grid_box" >
          <HomePageCard2 id={el.id}  img={el.img} title={el.title} />
       </div>
      ))}
     </div>    
 </div>

{/* / --------------------------- Need a Little Guidance -------------------------------------------- / */}
<div className="flexCard1_home" >
    <div className="text_container1" >
     <h2 className="product_heading" >Need a Little Guidance?</h2>
     <p>Check out our quizzes and buying guides</p>
    </div>
    <div className="grid_container1">
      {data6 && data6.map((el)=>(
        <div key={el.id} className="grid_box" >
          <HomePageCard2 id={el.id}  img={el.img} title={el.title} />
       </div>
      ))}
     </div>    
 </div>

{/* / --------------------------- Image section 2-------------------------------------------- / */}

   <div className="homePage_image_container" >

     <div className="homePage_image_box" > 
    <div className="homePage_image_box_text" >
      <h3>Our Commitment to Diversity, Equity & Inclusion</h3>
      <h4> </h4>
      <p>LEARN MORE</p>
    </div>
    <div className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-diversity-inclusion-desktop-mobile-us-ca-slice.jpeg?imwidth=400" alt="img1" /></div>
     </div>

     <div className="homePage_image_box" > 
    <div className="homePage_image_box_text" style={{backgroundColor:"rgb(22,96,59)" ,color:"white"}} >
    <h3>Get Your Gifts in Time</h3>
      <h4>Fast and easy options for stress-free holiday shopping</h4>
      <p>LEARN MORE</p>
    </div>
    <div className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/2022-holiday-launch-site-desktop-mobile-home-page-rwd-marketing-banner-bottom-banner-ease-and-convenience-800x256-us-can.jpg?imwidth=400" alt="img2" /></div>
     </div>

     <div className="homePage_image_box" > 
    <div className="homePage_image_box_text" style={{backgroundColor:"rgb(198,168,134)"}} >
    <h3>Clean + Planet Positive</h3>
      <h4>Brands on a mission to change your sin and the earth</h4>
      <p>LEARN MORE</p>
    </div>
    <div  className="homePage_image_box_img" ><img src="https://www.sephora.com/contentimages/homepage/060222/Homepage/RWD/homepage-reassurance-banner-clean-planet-positive-desktop-mobile-us-ca-slice.jpeg?imwidth=400" alt="img3" /></div>
     </div>

 </div>
{/* / --------------------------- Footer-------------------------------------------- / */}
 <div className="footer_container">

<div className="footer_top_box">
   <div className="nav_heading_icons" >
      <div className="nav_icons"><BiUserCircle /></div>
      <div> <h3 className="mid-nav-title" >Sign In</h3>
      <p className="mid-nav-p" >for FREE Shipping</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BiUserCircle /></div>
      <div> <h3 className="mid-nav-title" >Sign In</h3>
      <p className="mid-nav-p" >for FREE Shipping</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BiUserCircle /></div>
      <div> <h3 className="mid-nav-title" >Sign In</h3>
      <p className="mid-nav-p" >for FREE Shipping</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BiUserCircle /></div>
      <div> <h3 className="mid-nav-title" >Sign In</h3>
      <p className="mid-nav-p" >for FREE Shipping</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BiUserCircle /></div>
      <div> <h3 className="mid-nav-title" >Sign In</h3>
      <p className="mid-nav-p" >for FREE Shipping</p>
      </div>
    </div>

</div>
 
 <div className="footer_mid_box" >
 <div className="footer_mid_mini_box" >
  <h2>About Sephora</h2>
  <p>About Sephora</p>
  <p>Newsroom</p>
  <p>Careers</p>  
  <p>Sephora Value</p>
  <p>Supply Value</p>
  <p>Affiliates</p>
  <p>Sephora Events</p>
  <p>Gift cards</p>
  <p>Sephora Global Sites</p>
  <p>Diversity Equity & Inclusion</p>
  <p>Checkout on Instagram</p>
  <p>Sephora Accelerates</p>
  <p>Report a vulnerability</p>
 </div>
 <div className="footer_mid_mini_box" >
  <h2></h2>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
 </div>
 <div className="footer_mid_mini_box" >
  <h2></h2>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
  <p></p>
 </div>
 <div className="footer_mid_mini_box"></div>
 <div className="footer_mid_mini_box"></div>
 </div>

 </div>
    </div>
  )
}

export default Home