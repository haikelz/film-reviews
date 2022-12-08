import { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-3xl underline underline-offset-4 text-center">{children}</h1>
  );
};
