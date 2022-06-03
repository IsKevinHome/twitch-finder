import { createContext, useState } from "react";

const TwitchContext = createContext();

export function TwitchProvider({ children }) {
    const [text, setText] = useState("");
    const [channels, setChannels] = useState([]);

    return (
        <TwitchContext.Provider
            value={{ text, setText, channels, setChannels }}
        >
            {children}
        </TwitchContext.Provider>
    );
}

export default TwitchContext;
