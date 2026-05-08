function RightSection({
  title,
  data,
  imageUrl,
  link1,
  link1Name,
}) {
    return ( 
         <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col p-5 mt-5">
          <h2>{title}</h2>
          <p className="fs-4 mt-5 text-muted">{data}</p>
          <div className=" mt-4">
            <a href={link1} className="fs-5" style={{ textDecoration: "none" }}>
              {link1Name}
              <i className="fa-solid fa-right-long align-middle ms-2"></i>
            </a>
           
          </div>
          
        </div>
        <div className="col mt-5">
          <img src={imageUrl} />
        </div>
      </div>
    </div>
     );
}

export default RightSection;