import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";
import { filmSelector, getFilms } from "../store/slices/filmSlice";
import { AppDispatch } from "../types";

const ShowFilm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const films = useSelector(filmSelector.selectAll);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  return (
    <div className="relative w-full my-3">
      <Heading>Film Reviews</Heading>
      {films.length ? (
        <>
          <Link to="/add">
            <Button type="button">Add Product</Button>
          </Link>
          <table className="w-full mt-4 table-fixed shadow-md text-base text-left text-gray-500">
            <TableHead />
            <TableBody films={films} dispatch={dispatch} />
          </table>
        </>
      ) : (
        <div className="text-center my-4 font-semibold text-lg">
          <p className="mb-3">Belum ada data! Silahkan tambahkan datanya terlebih dahulu</p>
          <Link to="/add">
            <Button type="button">Add</Button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ShowFilm;
