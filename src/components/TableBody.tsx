import { Link } from "react-router-dom";
import { deleteFilm } from "../store/slices/filmSlice";
import { TableBodyProps } from "../types";
import { Button } from "./Button";

export const TableBody = ({ films, dispatch }: TableBodyProps) => {
  return (
    <tbody>
      {films.map((film, index) => (
        <tr className="bg-white border-b-2 border-b-gray-200" key={film.id}>
          <td className="py-3 px-6 font-semibold">{index + 1}</td>
          <td className="py-3 px-6 font-semibold">
            <img className="rounded-md" src={film.image.url} alt="" />
          </td>
          <td className="py-3 px-6 font-semibold">{film.name}</td>
          <td className="py-3 px-6 font-semibold">{film.genre}</td>
          <td className="py-3 px-6 font-semibold">{film.review}</td>
          <td className="py-3 px-6">
            <div className="flex justify-center items-center">
              <Link to={`/edit/${film.id}`}>
                <button className="font-semibold bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded text-white mr-1 transition-all ease-in-out">
                  Edit
                </button>
              </Link>
              <Button type="button" color="red" onClick={() => dispatch(deleteFilm(film.id))}>
                Delete
              </Button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
