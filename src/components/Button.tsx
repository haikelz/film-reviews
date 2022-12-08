import { ButtonProps } from "../types";

export const Button = ({ color, type, children, onClick, ...props }: ButtonProps) => {
  switch (color) {
    case "red":
      color = "bg-red-400 hover:bg-red-500";
      break;

    default:
      color = "bg-blue-500 hover:bg-blue-600";
      break;
  }

  return (
    <button
      type={type}
      className={`${color} text-white font-semibold transition-all ease-in-out px-3 py-1 shadow-md rounded-md`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
