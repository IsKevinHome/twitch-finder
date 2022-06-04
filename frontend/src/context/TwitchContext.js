import { createContext, useState } from "react";

const TwitchContext = createContext();

export function TwitchProvider({ children }) {
    const [text, setText] = useState("");
    const [channels, setChannels] = useState([]);
    const [channelFound, setChannelFound] = useState();

    return (
        <TwitchContext.Provider
            value={{
                text,
                setText,
                channels,
                setChannels,
                channelFound,
                setChannelFound,
            }}
        >
            {children}
        </TwitchContext.Provider>
    );
}

export default TwitchContext;
