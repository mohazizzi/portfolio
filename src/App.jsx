import "./App.css";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// components
import Loader from "./components/loader/Loader";
// pages
const Home = lazy(() => import("./pages/home/Home"));
const ContactMe = lazy(() => import("./pages/contact-me/ContactMe"));
const MyWorks = lazy(() => import("./pages/my-works/MyWorks"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="my-works" element={<MyWorks />} />
          <Route path="contact-me" element={<ContactMe />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
