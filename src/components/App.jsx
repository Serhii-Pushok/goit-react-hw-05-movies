import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { MovieDetails } from "../pages/MovieDetails";
import { SharedLayout } from "./SharedLayout/SharedLayout";
import { Cast } from "./Cast/Cast";
import { Reviews } from "./Reviews/Reviews";


export const App = () => {
  return (
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}/>
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to={"/"} replace/>} />
        </Route>
      </Routes>
  );
};
