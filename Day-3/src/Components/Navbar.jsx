import "./navbar.css";
import { Input,IconButton } from "@chakra-ui/react"
import {SearchIcon,QuestionIcon} from "@chakra-ui/icons";
//import {useState} from "react";
import {useNavigate} from "react-router-dom";
function Navbar (){
const navigate = useNavigate();

const loginPage = ()=>{
    navigate("/login")
}

return (
    <div className="navbar-container" >

   <div>
    <img src="img" alt="logo" />
   </div>

      <div>
      <IconButton aria-label='Search database' icon={<SearchIcon />} borderRadius="18px" />
      <Input placeholder="Search" size='sm'  borderRadius="18px" width="400px" />
      </div>
{/* --------------------------------- 1 ------------------------------------------- */}
<div className="nav-box1" >
<div className="dropdown">
  
    <h3 className="mid-nav-title" >Stores & Services</h3>
    <p className="mid-nav-p" >Choose Your Store</p>
  
  <div className="dropdown-content">
  <div className="nav-box1-div" >
  <button className="btn-1" >
    Choose Your Store
  </button>
  </div>
  <div className="nav-box1-div" >
    <h3 className="nav-box1-h3" >Find a Sephora</h3>
  </div>
   <div className="nav-box1-div" >
    <h3 className="nav-box1-h3" >Happening at Sephora</h3>

    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/happening_services.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Services</h3>
      <p className="nav-box1-p" >Personalized makeup, skincare and brow services</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/happening_events_2.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Store Events</h3>
      <p className="nav-box1-p" >Exciting launches,aprties, and more!</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/happening_new.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >What's New in store</h3>
      <p className="nav-box1-p" >Explore what's hot in yor store</p>
      </div>
    </div>
   </div>
  </div>
</div>
{/* ------------------------------------------------------------------------------ */}
{/* --------------------------------- 2 ------------------------------------------- */}
<div className="dropdown">
  <button className="dropbtn">
    <h3 className="mid-nav-title" >Community</h3>
  </button>
  <div className="dropdown-content">
  <div className="nav-box1-div" >
  <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Community Profile</h3>
      <p className="nav-box1-p" >Sign in to see your profile</p>
      </div>
    </div>
    <div  className="login-btns" >
        <button className="btn-1" onClick={loginPage} >Sign In</button>
        <button className="btn-1-create-btn" onClick={loginPage}>Create Account</button>
      </div>
  </div>
   <div className="nav-box1-div" >
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/community_home.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Community Home</h3>
      <p className="nav-box1-p" >Ask questions,join challenges</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/community_groups.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Groups</h3>
      <p className="nav-box1-p" >Discover topics tailored to your beauty interests</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/contentimages/meganav/icons/community_gallery.jpg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Gallery</h3>
      <p className="nav-box1-p" >Add your photos and get inspired by fellow beauty lovers</p>
      </div>
    </div>
   </div>
  </div>
  
</div>
{/* ------------------------------------------------------------------------------ */}
{/* -------------------------------- 3 -------------------------------------------- */}
<div className="dropdown" float="right">
  <button className="dropbtn">
    <h3 className="mid-nav-title" >Sign In</h3>
    <p className="mid-nav-p" >for FREE Shipping</p>
  </button>
  
  <div className="dropdown-content">
  <div className="nav-box1-div" >
  <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/img/ufe/icons/me-active.svg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Good afternoon, Beautiful</h3>
      <p className="nav-box1-p" >Sign in for <b>FREE standard shipping</b> on all orders</p>
      </div>
    </div>
    <div  className="login-btns" >
        <button className="btn-1" onClick={loginPage}>Sign In</button>
        <button className="btn-1-create-btn" onClick={loginPage} >Create Account</button>
      </div>
  </div>
  <div className="nav-box1-div" >
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/img/ufe/icons/subscription.svg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Buy It Again</h3>
      <p className="nav-box1-p" >Reorder from in-store and online purchase</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/img/ufe/icons/track.svg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Orders</h3>
      <p className="nav-box1-p" >View & track online or pickup orders</p>
      </div>
    </div>
    <hr />
    <div className="nav-box1-sub_div" >
      <div>
        <img src="https://www.sephora.com/img/ufe/icons/auto-replenish.svg" alt="1" />
      </div>
      <div>
      <h3 className="nav-box1-h3" >Auto-Replenish</h3>
      <p className="nav-box1-p" >View and manage your subscriptions</p>
      </div>
    </div>
   </div>
  </div>
   </div>
  </div>
<div className="nav-box2" >
<IconButton aria-label='Search database' icon={<QuestionIcon />} borderRadius="18px" />
<IconButton aria-label='Search database' icon={<QuestionIcon />} borderRadius="18px" />
<IconButton aria-label='Search database' icon={<QuestionIcon />} borderRadius="18px" />
</div>
</div> 
)
}

export default Navbar