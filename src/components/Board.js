import { Result } from "./Result";
import React, { useState } from 'react';

function Board() {
    let buttonArray = ['C', '/', '*', 7, 8, 9, '-', 4, 5, 6, '+', 1, 2, 3, '0', '00', '.', '='];
    let [calc, setCalc] = useState('');

    const updateScreen = (val) => {
        setCalc(calc + val);
    }

    const clearScreen = (val) => {
        setCalc('');
    }

    const calculateScreen = (val) => {
        setCalc(eval(calc));
    }

    return (
        <div className="container">
            <form action="" name="calc" className="calculator">
                <Result calc={calc}/>
                {buttonArray.map((btn) => {
                    switch(btn) {
                        case '+':
                            return <span className="num plus" onClick={() => updateScreen(btn)}><i> {btn} </i></span>
                        case 'C':
                            return <span className="num clear" onClick={() => clearScreen(btn)}><i> {btn} </i></span>
                        case '=':
                            return <span className="num equal" onClick={() => calculateScreen({btn})}><i> {btn} </i></span>
                        default:
                            return <span className="num" onClick={() => updateScreen(btn)}><i> {btn} </i></span>
                    }
                })}
            </form>
        </div>
    );
}
export {Board};