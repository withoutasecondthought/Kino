import React, { useEffect, useState } from "react";
import style from "./ListPage.module.css";
import Header from "../../components/Header";
import Search from "../../components/Search";
import axios from "axios";
import FilmCard from "../../components/FilmCard";
import consts from "../../consts/consts";
import { useParams } from "react-router-dom";

const ListPage = () => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    console.log(params.request);
    setIsLoading(true);
    getFilms();
  }, []);

  const getFilms = () => {
    axios
      .get(`${consts.BASE_URL}/list/${params.request}/`)
      .then((response) => setFilms(response.data))
      .catch((e) => console.log(e))
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div className={`wrap`}>
      <Header />
      <Search />
      <div className={style.content}>
        {isLoading ? (
          <p className={"loader"}>Loading...</p>
        ) : (
          films.map((film) => (
            <FilmCard
              key={film.id}
              title={film.title}
              poster={film.poster}
              rating={film.rating}
              year={film.year}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ListPage;
