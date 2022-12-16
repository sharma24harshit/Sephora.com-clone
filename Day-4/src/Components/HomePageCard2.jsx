function HomePageCard2({id,img,title}){
    return (
        <div>
           <div className="grid_text1" >
          <h3>{title}</h3>
         </div>
       <div className="grid_img1" >
       <img src={img} alt={id} className='hidden_img' />
       <img src={img} alt={id} />
        </div>
         
      </div>
    )
}

export default HomePageCard2