import { BsInstagram ,BsFacebook,BsTwitter,BsYoutube,BsPinterest,BsSnapchat,BsFillMenuAppFill,BsCreditCard} from "react-icons/bs";
import {SiTiktok} from "react-icons/si";
import {MdLocationOn,MdMobileScreenShare} from "react-icons/md";
import {RiChat1Line} from "react-icons/ri";
function Footer(){
    return (
        <div className="footer_container">

<div className="footer_top_box">
   <div className="nav_heading_icons" >
      <div className="nav_icons"><MdLocationOn /></div>
      <div> <h3 className="mid-nav-title" >Find a Store</h3>
      <p className="mid-nav-p1" >Choose your Store</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><RiChat1Line /></div>
      <div> <h3 className="mid-nav-title" >Live Beauty Help</h3>
      <p className="mid-nav-p1" >Chat is unavailable</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BsFillMenuAppFill /></div>
      <div> <h3 className="mid-nav-title" >Get the App</h3>
      <p className="mid-nav-p1" >Text APP to 36681</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><MdMobileScreenShare /></div>
      <div> <h3 className="mid-nav-title" >Get Sephora Text Alerts</h3>
      <p className="mid-nav-p1" >Sign up Now</p>
      </div>
    </div>

    <div className="nav_heading_icons" >
      <div className="nav_icons"><BsCreditCard /></div>
      <div> <h3 className="mid-nav-title" >Sephora Credit Card Program</h3>
      <p className="mid-nav-p1" >Want 25% off your Sephora purchase</p>
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
  <h2>My Sephora</h2>
  <p>Beauty Insider</p>
  <p>Sephora Credit Card</p>
  <p>Community Profile</p>
  <p>Order Status</p>
  <p>Purchase History</p>
  <p>Account Settings</p>
  <p>Beauty Advisor</p>
  <p>Beauty Offers</p>
  <p>Quizzes & Buying Guides</p>
  <p>rewards Bazaar</p>
  <p>Loves</p>
  <p>Book a Reservation</p>
 </div>
 <div className="footer_mid_mini_box" >
  <h2>Help</h2>
  <p>Customer Service</p>
  <p>Returns & Exchange</p>
  <p>Delivery and Pickup</p>
  <p>Shipping</p>
  <p>Billing</p>
  <p>International Shipments</p>
  <p>Beauty Service FAQ</p>
  <p>Sephora at Kohl's</p>
  <p>Sephora Inside JCPenney</p>
  <p>Store Location</p>
  <p>Online Ordering</p>
  <p>Klarna & Afterpay</p>
  <p>Accessibility</p>
 </div>
 <div className="footer_mid_mini_box">
  <h2>Region & Language</h2>
  <p>United States-English</p>
  <p>Canada-English</p>
  <p>Canada-Francais</p>
 </div>
 <div className="footer_mid_mini_box">
  <h1>
    We Belong to <br />
    Something Beautiful
  </h1>
 </div>
 </div>
<div className="bottom_footer_box" >
<div className="bottom_footer_box1" >
    <p>@2022 Sephora USA, Inc. All rights reserved</p>
    <div className="bottom_footer_box_link" >
        <p>Privacy Policy</p>
        <p>Terms of Use</p>
        <p>Accessibility</p>
        <p>Sitemap</p>
        <p>Your Privacy Choices</p>
    </div>
    <p>1-877-737-4672  TTY:1-888-866-9845</p>
</div>
<div className="bottom_footer_box2" >
<BsInstagram/>
<BsFacebook/>
<BsTwitter/>
<BsYoutube/>
<BsPinterest/>
<BsSnapchat/>
<SiTiktok/>
</div>
</div>
 </div>
    )
}

export default Footer