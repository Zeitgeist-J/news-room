import React from "react";
import moment from "moment";

const News = ({ img_url, title, date, source_name, category, url }) => (
  <div className="news">
    {img_url && <img src={img_url} alt="new_img" className="news" />}
    <div className={`new-content ${!img_url ? "w-100" : ""}`}>
      <h4>{title}</h4>
      <div className="news-info">
        <small>
          {moment(date).format("DD/MM/YYYY h:mm:ss")} - {category}
        </small>
        <small>Fuente: {source_name}</small>
      </div>
      <p className="link">
        Puede ver la noticia completa{" "}
        <a href={url} target="blank">
          aquí
        </a>
      </p>
    </div>
  </div>
);
export default News;
