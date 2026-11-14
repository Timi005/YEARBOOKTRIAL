import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import People from "./pages/People.jsx";
import Person from "./pages/Person.jsx";
import Photos from "./pages/Photos.jsx";
import Search from "./pages/Search.jsx";
import Awards from "./pages/Awards.jsx";
import Sign from "./pages/Sign.jsx";
import Admin from "./pages/Admin.jsx";
import NotFound from "./pages/NotFound.jsx";

// The router: it maps each address to a page, without reloading the browser.
// Every route sits inside <Layout>, so they all share the header and footer.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/people" element={<People />} />
          <Route path="/people/:slug" element={<Person />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/search" element={<Search />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
