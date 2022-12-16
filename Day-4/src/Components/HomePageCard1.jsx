
function HomePageCard1({id,img,title,text}){
    return (
        <div>
            {/* /-----  Home page (chosen foryou , just dropped)              ------/ */}
         <div className="grid_img" ><img src={img} alt={id} /></div>
         <div className="grid_text" >
          <h3>{title}</h3>
          <p>{text}</p>
         </div>
      </div>
    )
}

export default HomePageCard1