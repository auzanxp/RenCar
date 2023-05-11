import { Route, Routes } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ListCars from "../pages/ListCars";
import BookCar from "../pages/BookCar";
import NotFound from "../pages/NotFound";
import { Auth, Guest } from "../middleware";

export default function AppRoutes() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar>
              <Hero />
            </Navbar>
          }
        />
        <Route
          path="/login"
          element={
            <Navbar>
              <Guest el={<Login />} />
            </Navbar>
          }
        />
        <Route
          path="/register"
          element={
            <Navbar>
              <Guest el={<Register />} />
            </Navbar>
          }
        />
        <Route
          path="/listcars"
          element={
            <Navbar>
              <ListCars />
            </Navbar>
          }
        />
        <Route
          path="/ordercar"
          element={
            <Navbar>
              <Auth el={<BookCar />} />
            </Navbar>
          }
        />
        <Route
          path="/ordercar/:id"
          element={
            <Navbar>
              <Auth el={<BookCar />} />
            </Navbar>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
