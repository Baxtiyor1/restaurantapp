import { createContext, useState } from "react";

const CatContext = createContext()

function CatProvider({children}){
    let [category, setCategory] = useState('')
    
    return <CatContext.Provider value={{category, setCategory}}>{children}</CatContext.Provider>
}

export {CatContext, CatProvider}