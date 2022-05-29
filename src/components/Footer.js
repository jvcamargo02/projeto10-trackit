import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Footer() {
    return (

        <Container>

            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'>
                <CircularProgressbar
                    value="50"
                    text='Hoje'
                    background
                    backgroundPadding={6}
                    styles={buildStyles({
                        backgroundColor: "#52b6ff",
                        textColor: "#fff",
                        pathColor: "#fff",
                        trailColor: "transparent"
                    })}
                />
            </Link>
            <Link to='/historico'>Histórico</Link>
        </Container>
    )
}

const Container = styled.div`
    height: 70px;
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background-color: #fff;
    padding-bottom: 10px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1;

    a{
        color: var(--buttons-color);
        
        svg{
        margin-bottom: 25px;
        width: 91px;
        height: 91px;
        }
    }

    
`

