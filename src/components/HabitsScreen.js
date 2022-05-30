import styled from "styled-components"
import Header from "./Header"
import { useState, useContext, useEffect } from 'react'
import ButtonDay from "./ButtonDay"
import Footer from "./Footer"
import { ThreeDots } from 'react-loader-spinner'
import axios from "axios"
import UserContext from "../contexts/UserContext"


export default function HabitsScreen() {

    const { token } = useContext(UserContext)
    const [toggle, setToggle] = useState(true)
    const [selectDay, setSelectDay] = useState([])
    const [newHabit, setNewHabit] = useState('')
    const [disable, setDisable] = useState("")
    const [opacity, setOpacity] = useState('100%')
    const [button, setButton] = useState('Salvar')
    const [habitos, setHabitos] = useState([])
    const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']

    const config = {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }


        useEffect(() => {
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promisse.then(response => setHabitos(response.data))
    }, [])


    function removeHabit (id){

        const confirm = window.confirm("Tem certeza que deseja remover este hábito?")
        
        if(confirm === true ){
        const promisse = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
        promisse.then(() => { 
                const newPromisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
                newPromisse.then(response => setHabitos(response.data))
        })} 
    }

    function closeNewHabitBox() {

        setToggle(!toggle)
        setSelectDay([])
    }

    function success() {
        setDisable("")
        setOpacity("100%")
        setButton("Salvar")
        closeNewHabitBox()
        const promisse = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
        promisse.then(response => setHabitos(response.data))
    }

    function error(err) {
        setDisable("")
        setOpacity("100%")
        setButton("Salvar")
        alert(err.message)
    }


    function onSubmitForm() {
        setDisable("disabled")
        setOpacity("50%")
        setButton(<ThreeDots color="#FFF" height={20} width={45} />)


        if (selectDay.length !== 0 && newHabit !== '') {
            const data = {
                name: newHabit,
                days: selectDay
            }

            const promisse = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", data, config)
            promisse.then(success)
            promisse.catch(error)

        } else {
            setDisable('')
            setOpacity("100%")
            setButton("Salvar")
            alert("Ops 🤭. Teve um erro ao validar seus dados. Confira se você escolheu um nome e ao menos um dia para seu novo hábito. Que tal tentar novamente?")
        }

    }

    return (
        <Container>
            <Header />
            <MainTop>
                <h3>Meus Hábitos</h3>
                <ion-icon name={toggle === true ? "add-circle-sharp" : "close-circle-sharp"} onClick={disable === '' ? closeNewHabitBox : null}></ion-icon>
            </MainTop>
            {toggle === true ? null :
                <Box>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input disabled={disable} required onChange={(e) => setNewHabit(e.target.value)} value={newHabit} type='text' placeholder='Nome do hábito' />
                        <Buttons disabled>
                            {weekDays.map((day, index) =>
                                <ButtonDay key={index} day={day} index={index} selectDay={selectDay} setSelectDay={setSelectDay} disable={disable} />)}
                        </Buttons>
                        <span>
                            <a onClick={disable === '' ? () => setToggle(!toggle) : null}>Cancelar</a>
                            <Button opacity={opacity}>
                                <button onClick={onSubmitForm} disabled={disable} type='submit'>{button}</button>
                            </Button>
                        </span>
                    </form>
                </Box>
            }
            {habitos.length !== 0 ? habitos.map(({ name, days, id }, index) =>
                <Box key={index}>
                    <span>{name}</span>
                    <ion-icon onClick={() => removeHabit(id)}name="trash-outline"></ion-icon>
                    <BoxDays>
                        {weekDays.map((day, index) => {

                            if (days.includes(index)) {
                                return (<Day backgroundColor="var(--border-color)">{day}</Day>)
                            } else {
                                return (<Day backgroundColor="#fff" >{day}</Day>)
                            }

                        })}
                    </BoxDays>
                </Box>) :
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>}
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
    overflow: auto;
`

const MainTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    h3{
        color: var(--header-color);
        font-size: 1.44rem;
    }

    ion-icon{
        font-size: 2.2rem;
        color: ${props => (props.children[1].props.name) === "add-circle-sharp" ? "var(--buttons-color)" : "#ff000075"};
        cursor: pointer;
    }
`

const Buttons = styled.div`

    margin: 8px auto 30px auto;
    display: flex;
    gap: 5px;

`

const Box = styled.div`

        min-width: 21rem;
        max-width: 50rem;
        margin-left: auto;
        margin-right: auto;
        background-color: #fff;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.3);
        margin-bottom: 1.9rem;
        box-sizing: border-box;
        padding: 1.25rem;
        border-radius: 5px;

        ion-icon{
            float: right;
            cursor: pointer;
        }

        form{
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        font-size: 1.2rem;

        input{
            min-width: 18.75rem;
            width: 80%;
            height: 2.81rem;
            border: 1px solid var(--border-color);
            border-radius: 5px;
            margin-left: auto;
            margin-right: auto;
        } 
        
        span {
            margin-left: auto;
            display: flex;
            align-items: center;

            a{
                font-size: 16px;
                color: var(--buttons-color);
                margin-right: 20px;
                cursor: pointer;
            }

            button{
                border: none;
                border-radius: 5px;
                font-size: 16px;
                color: #fff;
                background-color: var(--buttons-color);
                padding: 10px 20px;
                cursor: pointer;
            }
        }
    }
`

const BoxDays = styled.div`
    display: flex;
    margin: 10px 0px;
    gap: 5px;
`

const Day = styled.div`
    background-color: ${props => props.backgroundColor};
    width: 1.875rem;
    height: 1.875rem;
    line-height: 1.875rem;
    text-align: center;
    border: 1px solid var(--border-color);
    border-radius: 5px;
    color: ${props => props.backgroundColor === "#fff" ? "var(--border-color)" : "#fff"}
`

const Button = styled.div`
    opacity: ${props => props.opacity};
`