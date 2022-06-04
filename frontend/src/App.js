import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { TwitchProvider } from "./context/TwitchContext";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import NotFound from "./components/pages/NotFound";

function App() {
    return (
        <>
            <TwitchProvider>
                <Router>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/notfound" element={<NotFound />} />
                        {/* catch all */}
                        <Route path="/*" element={<NotFound />} />
                    </Routes>
                </Router>
            </TwitchProvider>
        </>
    );
}

export default App;
