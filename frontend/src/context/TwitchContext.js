import { createContext, useState } from "react";

const TwitchContext = createContext();

export function TwitchProvider({ children }) {
    const [text, setText] = useState("");
    const [users, setUsers] = useState("");

    return (
        <TwitchContext.Provider value={{ text, setText }}>
            {children}
        </TwitchContext.Provider>
    );
}

export default TwitchContext;
