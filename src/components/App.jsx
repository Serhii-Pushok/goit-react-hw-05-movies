import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import css from "./App.module.css";

export const App = () => {
  return (
    <div>
      <nav className={css.header__nav}>
        <NavLink to="/" end className={css.header__navLink}>Home</NavLink>
        <NavLink to="/movies" end className={css.header__navLink}>Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />}/>
        <Route path="/movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<Navigate to={"/"} replace/>} />
      </Routes>
    </div>
  );
};
