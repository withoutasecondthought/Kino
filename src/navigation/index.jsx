import React from "react";
import { Route, Routes } from "react-router-dom";
import ListPage from "../pages/ListPage";
import HomePage from "../pages/HomePage";
import MoviePage from "../pages/MoviePage";

const Navigation = () => {
  const URLS = {
    DEFAULT: "/",
    LIST_PAGE: "/list/:request",
    MOVIE: "/movie/:id",
  };
  return (
    <Routes>
      <Route path={URLS.LIST_PAGE} element={<ListPage />} />
      <Route path={URLS.DEFAULT} element={<HomePage />} />
      <Route path={URLS.MOVIE} element={<MoviePage />} />
    </Routes>
  );
};

export default Navigation;
