import { useTheme } from "../../hooks/useTheme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

const DarkModeButton = () => {
  const [theme, setTheme] = useTheme();

  return (
    <button
      className="px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 duration-200 transition-all ease-in-out text-white flex justify-center items-center gap-2"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "Light" : "Dark"} Mode{" "}
      {theme === "dark" ? (
        <MdOutlineLightMode size="20" />
      ) : (
        <MdOutlineDarkMode size="20" />
      )}
    </button>
  );
};

export default DarkModeButton;
