import { useContext } from "react";
import { CatContext } from "../Context/catContext";

function useCategory(){
    let {category, setCategory} = useContext(CatContext)

    return [category, setCategory]
}

export default useCategory