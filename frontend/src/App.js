import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import { TwitchProvider } from "./context/TwitchContext";

function App() {
    return (
        <>
            <TwitchProvider>
                <Navbar />
                <Home />
            </TwitchProvider>
        </>
    );
}

export default App;
