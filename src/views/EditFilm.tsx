import { useCloudinary } from "@/hooks/useCloudinary";
import { EntityState } from "@reduxjs/toolkit";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Heading } from "../components/Heading";
import { filmSelector, getFilms, updateFilm } from "../store/slices/filmSlice";
import { AppDispatch, FilmEntity, PreventDefaultEvent } from "../types";

const EditFilm = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [review, setReview] = useState("");
  const [, setImage] = useState({ name: "", url: "", format: "" });
  const { id } = useParams();

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();
  const image = useCloudinary({ cloudinaryRef: cloudinaryRef, widgetRef: widgetRef });

  const film = useSelector((state: { film: EntityState<FilmEntity> }) =>
    filmSelector.selectById(state, id === undefined ? "" : id)
  );

  const handleUpdate = async (event: PreventDefaultEvent) => {
    event.preventDefault();
    await dispatch(updateFilm({ id, image, name, genre, review }));

    // ketika data berhasil diupdate, maka redirect ke halaman home
    navigate("/");
  };

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

  useEffect(() => {
    if (film) {
      setName(film.name);
      setImage(film.image);
      setGenre(film.genre);
      setReview(film.review);
    }
  }, [film]);

  return (
    <div>
      <Heading>Edit Film</Heading>
      <form onSubmit={handleUpdate} className="p-4 shadow-md rounded-md bg-gray-50 mt-4">
        <FormInput htmlForValue="name" label="Name" value={name} setValue={setName} />
        <FormInput htmlForValue="genre" label="Genre" value={genre} setValue={setGenre} />
        <FormInput htmlForValue="review" label="Review" value={review} setValue={setReview} />
        <div>
          <p>{image.name === "no-image" ? null : `${image.name}.${image.format}`}</p>
          <div className="space-x-2 mt-4">
            <Button color="red" type="button" onClick={() => widgetRef.current.open()}>
              + Edit Image
            </Button>
            <Button type="submit">Edit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditFilm;
