import { createContext, useState } from "react";

export const context = createContext();
export const MyContext = ({children})=>{
    const [edit, setEdit] = useState(false);
    return(
        <context.Provider value={{edit, setEdit}}>
            {children}
        </context.Provider>
    )
}