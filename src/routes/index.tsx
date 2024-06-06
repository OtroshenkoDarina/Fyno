import {Routes, Route} from "react-router-dom";
import {pathList} from "./path";
import MainPage from "../templates/MainPage/MainPage";
import HighlightsPage from "../templates/HighlightsPage/HighlightsPage";


export default function Routers() {
    return (
        <Routes>
            <Route path={pathList.mainPage} element={<MainPage/>}/>
            <Route path={pathList.highlights} element={<HighlightsPage/>}/>
        </Routes>
    )
}
