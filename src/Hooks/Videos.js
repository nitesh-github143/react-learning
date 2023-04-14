import { useContext } from "react";
import VideosContext from "../context/VideoContext";

function useVideo() {
    return useContext(VideosContext)
}

export default useVideo