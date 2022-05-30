
import styled from 'styled-components'
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useState, useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import UserContext from '../contexts/UserContext';
import axios from 'axios';

export default function Historic() {

    const { token } = useContext(UserContext)
    const [historic, setHistoric] = useState([])

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/history/daily', config)
        promisse.then(response => setHistoric(response.data))
    }, [])

    function formatDay(date) {

        let teste = dayjs(date).locale('pt-br').format("DD")

        for (let i = 0; i < historic.length; i++) {

            let dayHistoric = (historic[i].day).substring(0,2)

            if (dayjs(date).locale('pt-br').format("DD") === dayHistoric){
                historic[i].habits.map((value) => {
                    
                    if(value.done === false){
                        teste= <span>NESSE DIA FALHOU</span>;
                    }
                
                })

            }
        
    }  return(teste)}


    return (
        <Container>
            <Header />
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p><br />
            <Calendar calendarType="Hebrew" formatDay={(locale, date) => formatDay(date)} />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
    box-sizing: border-box;
    padding: 6.25rem 1.1rem;
    background-color: var(--background-color);
    height: 100vh;
    color: rgba(0, 0, 0, 0.6);
    font-size: 1.125rem; 

    h3{
        color: var(--header-color);
        margin-bottom: 20px;
        font-size: 1.44rem;
    }

    span{
        color: red;
    }
`
