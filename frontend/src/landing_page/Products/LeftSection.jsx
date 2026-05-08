function LeftSection({
  title,
  data,
  imageUrl,
  link1,
  link1Name,
  link2,
  link2Name,
  playStoreLink,
  appStoreLink,
}) {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <div className="col mt-5">
          <img src={imageUrl} />
        </div>
        <div className="col p-5 mt-5">
          <h2>{title}</h2>
          <p className="fs-4 mt-5 text-muted">{data}</p>
          <div className=" d-flex p-2">
            <a href={link1} className="fs-5" style={{ textDecoration: "none" }}>
              {link1Name}
             {link1Name && <i className="fa-solid fa-right-long align-middle ms-2"></i>}
            </a>
            <a
              href={link2}
              className="fs-5"
              style={{ textDecoration: "none", marginLeft: "5rem" }}
            >
              {link2Name}
              {link2Name &&<i className="fa-solid fa-right-long align-middle ms-2"></i>}
            </a>
          </div>
          <div className="d-flex p-2 mt-3 ">
            <a href={playStoreLink} style={{ textDecoration: "none" }}>
              <img src="..\src\assets\google-play-badge.svg" />
            </a>
            <a
              href={appStoreLink}
              className="fs-5"
              style={{ textDecoration: "none", marginLeft: "5rem" }}
            >
              <img src="..\src\assets\appstore-badge.svg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
