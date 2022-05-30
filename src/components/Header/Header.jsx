import React from "react";
import style from "./Header.module.css";

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.content}>
        <p className={style.title}>Kino</p>
        <div className={style.container}>
          <p className={style.point}>Home</p>
          <p className={style.point}>Films</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
