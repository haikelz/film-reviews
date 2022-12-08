import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Heading from "../components/Heading";
import { saveFilm } from "../store/slices/filmSlice";
import type { AppDispatch, PreventDefaultEvent } from "../types";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [review, setReview] = useState("");
  const [image, setImage] = useState(
    "https://res.cloudinary.com/dxtjsbzwk/image/upload/v1670474170/film-reviews/lqdypqudyr3yjmnhfa6i.jpg"
  );
  const navigate: NavigateFunction = useNavigate();

  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET,
        folder: import.meta.env.VITE_CLOUDINARY_UPLOAD_FOLDER,
      },
      (error: unknown, result: { event: string; info: { url: string } }) => {
        if (!error && result && result.event === "success") {
          setImage(result.info.url);
        }
      }
    );
  }, []);

  const createFilm = async (event: PreventDefaultEvent) => {
    event.preventDefault();
    await dispatch(saveFilm({ image, name, genre, review }));

    navigate("/");
  };

  return (
    <div>
      <Heading>Add Film</Heading>
      <form onSubmit={createFilm} className="p-4 mt-4 shadow-md rounded-md bg-gray-50">
        <FormInput htmlForValue="name" label="Name" value={name} setValue={setName} />
        <FormInput htmlForValue="genre" label="Genre" value={genre} setValue={setGenre} />
        <FormInput htmlForValue="review" label="Review" value={review} setValue={setReview} />
        <div className="space-x-2">
          <Button color="red" type="button" onClick={() => widgetRef.current.open()}>
            + Upload Image
          </Button>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
