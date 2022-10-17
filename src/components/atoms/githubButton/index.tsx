import { FaGithub } from "react-icons/fa";

const GithubButton = () => {
  return (
    <a href="https://github.com/haikelz/vite-template" rel="github link">
      <button className="flex gap-2 justify-center items-center bg-blue-500 hover:bg-blue-600 duration-200 transition-all ease-in-out text-white px-4 py-2 rounded-md">
        Github <FaGithub size="20" />
      </button>
    </a>
  );
};

export default GithubButton;
