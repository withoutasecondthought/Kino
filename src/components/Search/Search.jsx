import React, { useEffect, useState } from "react";
import style from "./Search.module.css";
import axios from "axios";
import consts from "../../consts/consts";
import { useNavigate, useParams } from "react-router-dom";

const Search = () => {
  const [tags, setTags] = useState([]);
  const navigate = useNavigate();
  const params = useParams();
  useEffect(() => {
    getTags();
  }, [params.request]);

  const getTags = () => {
    axios
      .get(`${consts.BASE_URL}/list`)
      .then((response) => setTags(response.data))
      .catch((e) => console.log(e));
  };
  const go = (link) => {
    navigate(`/${link}/`);
  };
  return (
    <div className={style.container}>
      {tags.map((tag) => (
        <p
          className={style.item}
          key={tag.method}
          onClick={() => go(tag.method)}
        >
          {tag.title}
        </p>
      ))}
    </div>
  );
};

export default Search;
