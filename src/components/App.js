import GlobalStyle from "../styles/global-style";
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import HabitsScreen from "./HabitsScreen";
import TodayScreen from "./TodayScreen";
import { useState } from "react";

export default function App (){

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    return(
        <>
        <GlobalStyle />
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginScreen />}/>
            <Route path='/cadastro' element={<RegisterScreen />} />
            <Route path='/habitos' element={<HabitsScreen />}/>
            <Route path='/hoje' element={<TodayScreen />} />      
        </Routes>
        </BrowserRouter>
        </>
    )
}