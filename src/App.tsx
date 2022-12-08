import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddFilm from "./views/AddFilm";
import ShowFilm from "./views/ShowFilm";
import EditFilm from "./views/EditFilm";

const App = () => {
  return (
    <section className="w-full min-h-screen flex justify-center p-4">
      <div className="w-full max-w-7xl">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ShowFilm />} />
            <Route path="/add" element={<AddFilm />} />
            <Route path="/edit/:id" element={<EditFilm />} />
          </Routes>
        </BrowserRouter>
      </div>
    </section>
  );
};

export default App;
