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
        <Route path="/login" element={<Guest el={<Login />} />} />
        <Route path="/register" element={<Guest el={<Register />} />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
