import { useCloudinary } from "@/hooks/useCloudinary";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { NavigateFunction, useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { FormInput } from "../components/FormInput";
import { Heading } from "../components/Heading";
import { saveFilm } from "../store/slices/filmSlice";
import type { AppDispatch, PreventDefaultEvent } from "../types";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [review, setReview] = useState("");

  const navigate: NavigateFunction = useNavigate();
  const cloudinaryRef: any = useRef();
  const widgetRef: any = useRef();
  const dispatch = useDispatch<AppDispatch>();
  const image = useCloudinary({ cloudinaryRef: cloudinaryRef, widgetRef: widgetRef });

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
        <div>
          <p>{image.name === "no-image" ? null : `${image.name}.${image.format}`}</p>
          <div className="space-x-2 mt-4">
            <Button color="red" type="button" onClick={() => widgetRef.current.open()}>
              + Upload Image
            </Button>
            <Button type="submit">Submit</Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
