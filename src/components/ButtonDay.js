import styled from 'styled-components'
import { useState } from 'react';

export default function ButtonDay({ day, index, selectDay, setSelectDay }) {

    const [btnColor, setBtnColor] = useState("#fff");

    function filterSelectSeat(value) {

        if (value !== index && value === 0) {
            return !value
        }
        else if (value !== index) {
            return value
        }
    }


    function newHabitDays(index) {
        if (btnColor === "#fff") {
            setBtnColor("var(--border-color)")
            setSelectDay([...selectDay, index])
        } else {
            setBtnColor("#fff")
            let newArr = selectDay.filter(filterSelectSeat)
            console.log(newArr)
            setSelectDay(newArr)
        }
    }

    return (

        <Button>
            <button
                key={index}
                color={btnColor}
                onClick={() => newHabitDays(index)}>{day}
            </button>
        </Button>
    )
}


const Button = styled.div`

    button{
        width: 1.875rem;
        height: 1.875rem;
        border: 1px solid var(--border-color);
        color: ${props => props.children.props.color === "#fff" ? "var(--border-color)" : "#fff"};
        background-color:  ${props => props.children.props.color};
        border-radius: 5px;
        cursor: pointer;
    }
`