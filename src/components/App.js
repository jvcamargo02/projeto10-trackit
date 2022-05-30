import GlobalStyle from "../styles/global-style";
import { BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom'
import { useState } from "react";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import Historic from "./Historic";
import UserContext from "../contexts/UserContext";

export default function App (){

    const [token, setToken] = useState("")
    const [photo, setPhoto] = useState("")


    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <UserContext.Provider value={{token, setToken, photo, setPhoto}}>
        <Routes>
            <Route path='/' element={<LoginScreen />}/>
            <Route path='/cadastro' element={<RegisterScreen />} />
            <Route path='/habitos' element={<HabitsScreen />}/>
            <Route path='/hoje' element={<TodayScreen />} />
            <Route path='/historico' element={<Historic />} />
        </Routes>
        </UserContext.Provider>
        </BrowserRouter>
        </>
    )
}