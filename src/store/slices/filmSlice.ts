import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";
import { FilmEntity, FilmSelector } from "../../types";

// getFilms -> untuk menampilkan semua data yang ada
export const getFilms = createAsyncThunk("films/getFilms", async () => {
  const response: AxiosResponse = await axios.get(
    "http://localhost:5000/films"
  );
  return response.data;
});

// saveFilm
export const saveFilm = createAsyncThunk(
  "films/saveFilm",
  async ({
    image,
    name,
    genre,
    review,
  }: {
    image: string;
    name: string;
    genre: string;
    review: string;
  }) => {
    const response: AxiosResponse = await axios.post(
      "http://localhost:5000/films",
      {
        image,
        name,
        genre,
        review,
      }
    );
    return response.data;
  }
);

// deleteFilm
export const deleteFilm = createAsyncThunk(
  "films/deleteFilm",
  async (id: string) => {
    await axios.delete(`http://localhost:5000/films/${id}`);
    return id;
  }
);

// updateFilm
export const updateFilm = createAsyncThunk(
  "films/updateFilm",
  async ({
    id,
    image,
    name,
    genre,
    review,
  }: {
    id: string | undefined;
    image: string;
    name: string;
    genre: string;
    review: string;
  }) => {
    const response: AxiosResponse = await axios.patch(
      `http://localhost:5000/films/${id}`,
      { image, name, genre, review }
    );
    return response.data;
  }
);

// filmEntity
const filmEntity = createEntityAdapter<FilmEntity>({
  selectId: (film) => film.id,
});

/**
 * Builder callback implementation
 * https://redux-toolkit.js.org/usage/usage-with-typescript#type-safety-with-extrareducers
 */
const filmSlice = createSlice({
  name: "film",
  initialState: filmEntity.getInitialState(),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFilms.fulfilled, (state, action) => {
        filmEntity.setAll(state, action.payload);
      })
      .addCase(saveFilm.fulfilled, (state, action) => {
        filmEntity.addOne(state, action.payload);
      })
      .addCase(deleteFilm.fulfilled, (state, action) => {
        filmEntity.removeOne(state, action.payload);
      })
      .addCase(updateFilm.fulfilled, (state, action) => {
        filmEntity.updateOne(state, action.payload);
      });
  },
});

// filmSelector
export const filmSelector = filmEntity.getSelectors<FilmSelector>(
  (state) => state.film
);
export default filmSlice.reducer;
