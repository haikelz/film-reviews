import DarkModeButton from "./components/darkModeButton";
import GithubButton from "./components/githubButton";
import Layout from "./components/layout";

const App = () => {
  return (
    <Layout>
      <section className="flex flex-col justify-center items-center text-center px-3">
        <div className="flex gap-2 mb-2">
          <h1 className="font-bold bg-gradient-to-br from-cyan-600 to-blue-700 dark:from-cyan-300 dark:to-blue-500 bg-clip-text text-transparent text-3xl">
            Vite Starter
          </h1>
          <img src="/vite.svg" alt="Vite logo" />
        </div>
        <p className="text-lg">
          Another Vite Starter for building user interface with <u>ReactJS</u>,{" "}
          <u>Typescript</u>, <u>TailwindCSS</u>, and <u>Jotai</u>.
        </p>
        <div className="flex gap-4 mt-3">
          <DarkModeButton />
          <GithubButton />
        </div>
      </section>
    </Layout>
  );
};

export default App;
