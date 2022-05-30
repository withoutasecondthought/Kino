import React from "react";
import style from "./FilmCard.module.css";

const FilmCard = ({ title, poster, rating }) => {
  return (
    <div className={style.wrap}>
      <div>
        <img className={style.image} src={poster} alt={"no img"} />
      </div>
      <div className={style.info}>
        <p className={style.title}>{title}</p>
        <p className={style.rating}>
          <img src="/star.png" alt={"for alternatives bitches"} /> {rating}
        </p>
      </div>
    </div>
  );
};

export default FilmCard;
