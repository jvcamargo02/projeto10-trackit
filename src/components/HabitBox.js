import axios from 'axios'
import styled from 'styled-components'
import { useState, useContext, useEffect } from 'react'
import UserContext from '../contexts/UserContext'

export default function HabitBox({ index, habit }) {

    console.log(habit.done)
    
    const { token, checkHabits, setCheckHabits } = useContext(UserContext)
    const [iconColor, setIconColor] = useState(habit.done === true ? "secondary" : "primary")
    const [habitCurrentSequence, setHabitCurrentSequence] = useState(habit.currentSequence)
    const [habitHighestSequence, setHabitHighestSequence] = useState(habit.highestSequence)
    const [highestSequenceColor, setHighestSequenceColor] = useState(habitHighestSequence === habitCurrentSequence && habitHighestSequence !== 0 ? "#8FC549" : "rgba(0,0,0,0.6)")
/*     const [teste, setTeste] = useState(habit.done === true ? checkHabits + 1 : checkHabits)

    useEffect(() => {
        
        if(habit.done === true){
            console.log("vou adicionar um no checkHabits")
            setCheckHabits(checkHabits+1)
            console.log(checkHabits)
        }

    }, []) */
    
    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }

    function success() {

        if(iconColor === "primary"){
            setHabitCurrentSequence(habitCurrentSequence + 1)
            setIconColor("secondary")
            setCheckHabits( checkHabits + 1 )

             if(habitHighestSequence <= habitCurrentSequence){
                setHabitHighestSequence(habitHighestSequence + 1)
                setHighestSequenceColor("#8FC549")
            }

            if(habitHighestSequence === habitCurrentSequence + 1){
                setHighestSequenceColor("#8FC549")
            } 
        } else {
            setIconColor("primary")
            setHabitCurrentSequence(habitCurrentSequence - 1)
            setCheckHabits( checkHabits - 1)

            if(habitHighestSequence === habitCurrentSequence && habitHighestSequence !== 1){
                setHighestSequenceColor("#8FC549")
                setHabitHighestSequence(habitHighestSequence -1)
            }

            if(habitHighestSequence === habitCurrentSequence && habitHighestSequence === 1){
                setHighestSequenceColor("rgba(0,0,0,0.6)")
                setHabitHighestSequence(habitHighestSequence -1)
            }
        }
        
    }

    function err(e) {
        alert("Ops! Tive um erro ao processar o seu pedido. Que tal tentar novamente?")
    }

    function checkHabit() {


        if (iconColor === "primary") {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`, {}, config)
            promisse.then(success)
            promisse.catch(err)
        } else {
            const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`, {}, config)
            promisse.then(success)
            promisse.catch(err)
        }
    }


    return (
        <Container>
            <ion-icon onClick={checkHabit} color={iconColor} name="checkmark-circle"></ion-icon>
            <h4>{habit.name}</h4>
            
            <CurrentSequence color={iconColor} habitCurrentSequence={habitCurrentSequence} habitHighestSequence={habitHighestSequence}>
                <span>Sequência atual:</span>
                <span> {habitCurrentSequence} dias</span>
            </CurrentSequence>
            <HighestSequence color={highestSequenceColor}>
                <span>Seu recorde:</span>
                <span> {habitHighestSequence} dias</span>
            </HighestSequence>
        </Container>
    )
}

const Container = styled.div`
    min-width: 21rem;
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
    margin-bottom: 1.9rem;
    box-sizing: border-box;
    padding: 1.25rem;
    padding-right: 0;
    border-radius: 5px;

    ion-icon{
        float: right;
        font-size: 80px;
        margin-top: -5px;
        cursor: pointer;
    }

    h4{
        font-size: 20px;
        margin-bottom: 10px;
    }

    
`

const CurrentSequence = styled.div`

    span{
        font-size: 13px;
    }

    span:last-child{
        color: ${(props) => props.color === "secondary" || (props.habitCurrentSequence === props.habitHighestSequence && props.habitCurrentSequence !== 0) ? '#8FC549' : "rgba(0,0,0,0.6)"} 
    }

`
const HighestSequence = styled.div`

    p, span{
        font-size: 13px;
    }

    span:last-child{
        color: ${(props => props.color)}
    }

`
