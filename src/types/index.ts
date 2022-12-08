import { AnyAction, EntityState, ThunkDispatch } from "@reduxjs/toolkit";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { store } from "../store";

export type AppDispatch = typeof store.dispatch;
export type FilmSelector = ReturnType<typeof store.getState>;

export type PreventDefaultEvent = {
  preventDefault: () => void;
};

export type FilmEntity = {
  id: string;
  image: string;
  name: string;
  genre: string;
  review: string;
};

export type TableBodyProps = {
  films: FilmEntity[];
  dispatch: ThunkDispatch<
    {
      film: EntityState<FilmEntity>;
    },
    undefined,
    AnyAction
  > &
    Dispatch<AnyAction>;
};

export type ButtonProps = {
  color?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  children: ReactNode;
};

export type FormInputProps = {
  htmlForValue: string;
  label: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
};
