import React, { useState } from 'react';
import styled from 'styled-components';

const StyledCalc = styled.div`
    display: flex;
    align-self: center;
`;

const StyledCalculatorColumns = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledDisplay = styled.div`
    display: flex;
`;

const StyledNumberRow = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledOperands = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #8fbee4;
    color: #fff;
`;

const StypedP = styled.p`
    padding: 24px;
    cursor: pointer;
`;

function Calculator() {
    return (
        <div>
            frustrating calculator
            <Numbers name='bento'/>
        </div>
    )
}

function Numbers({ name }) {

    const [operation, setOperation] = useState('');
    const [result, setResult] = useState(null);
    const [input, setInput] = useState(null)
    function numberOnClick(number) {
        if (!result) {
            // console.log('result is now: ', number);
            setResult(number);
        } else {
            // console.log('input is now: ', number);
            setInput(number);
        }
    }

    function operandOnClick(value) {
        // console.log('operand is now: ', value);
        setOperation(value);
    }

    function calculate() {
        // console.log('we out here calculatin');
        let calculationResult = 0;
        // console.log('we are trying to : ', operation);
        switch(operation) {
            case '÷':
                // console.log('divide');
                calculationResult = result/input;
                break;
            case 'x':
                // console.log('mult');
                calculationResult = result*input;
                break;
            case '-':
                // console.log('minus');
                calculationResult = result-input;
                break;
            case '+':
                // console.log('add');
                calculationResult = result+input;
                break;
        }
        // console.log('computation: ', calculationResult);
        setResult(calculationResult);
    }

    function clear() {
        setResult(null);
        setInput(null);
        setOperation(null);
    }

    return (
        <StyledCalculatorColumns>
            <StyledCalc>
                <StyledDisplay>{result}</StyledDisplay>
                <StyledCalculatorColumns>
                    <StyledNumberRow>
                        <StypedP onClick={() => numberOnClick(7)}>7</StypedP>
                        <StypedP onClick={() => numberOnClick(8)}>8</StypedP>
                        <StypedP onClick={() => numberOnClick(9)}>9</StypedP>
                    </StyledNumberRow>
                    <StyledNumberRow>
                        <StypedP onClick={() => numberOnClick(4)}>4</StypedP>
                        <StypedP onClick={() => numberOnClick(5)}>5</StypedP>
                        <StypedP onClick={() => numberOnClick(6)}>6</StypedP>
                    </StyledNumberRow>
                    <StyledNumberRow>
                        <StypedP onClick={() => numberOnClick(1)}>1</StypedP>
                        <StypedP onClick={() => numberOnClick(2)}>2</StypedP>
                        <StypedP onClick={() => numberOnClick(3)}>3</StypedP>
                    </StyledNumberRow>
                    <StyledNumberRow>
                        <StypedP onClick={() => numberOnClick(0)}>0</StypedP>
                        <StypedP onClick={() => numberOnClick('.')}>.</StypedP>
                        <StypedP onClick={calculate}>=</StypedP>
                    </StyledNumberRow>
                </StyledCalculatorColumns>
                <StyledOperands>
                    <StypedP onClick={() => operandOnClick('÷')}>÷</StypedP>
                    <StypedP onClick={() => operandOnClick('x')}>x</StypedP>
                    <StypedP onClick={() => operandOnClick('-')}>-</StypedP>
                    <StypedP onClick={() => operandOnClick('+')}>+</StypedP>
                </StyledOperands>
                <StyledDisplay onClick={clear}>
                    CLEAR
                </StyledDisplay>
            </StyledCalc>
        </StyledCalculatorColumns>
    )
}

export default Calculator;
