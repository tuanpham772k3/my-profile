import { Route, Routes, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import Resume from "./Pages/Resume/Resume";
import ProjectsPage from "./Pages/Projects/ProjectsPage";
import Contact from "./Pages/Contact/Contact";
import "./App.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
    const location = useLocation();

    // Cuộn về đầu trang mỗi khi route thay đổi
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
            <Header />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
            </AnimatePresence>
        </>
    );
}

export default App;
