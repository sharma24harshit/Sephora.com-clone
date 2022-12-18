function ProductsPageCard({id,img,title,text,price}){
    return (
        <div>
            {/* /-----  Home page (chosen foryou , just dropped)              ------/ */}
         <div className="ProductsPageCard_img" ><img src={img} alt={id} /></div>
         <div className="ProductsPageCard_text" >
          <h3>{title}</h3>
          <p>{text}</p>
          <h2>$ {price}</h2>
         </div>
      </div>
    )
}

export default ProductsPageCard