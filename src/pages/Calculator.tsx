// Create a separate Calculator component file: Calculator.tsx
import React from 'react';
import styled from 'styled-components';

// Styled components
const CalculatorContainer = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 1.5rem;
  max-width: 400px;
  margin: 1.5rem 0 1.5rem 1.5rem;
`;

const CalculatorTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
  color: #2c3e50;
`;

const InputGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  margin-bottom: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.8rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  
  &:hover {
    background-color: #2980b9;
  }
`;

const OutputDisplay = styled.h3`
  text-align: center;
  min-height: 1.5rem;
  color: #2c3e50;
`;

/* this is the custom hook for calculator functions */
const useCalculator = () => {
    const [firstNumber, setFirstNumber] = React.useState('');
    const [secondNumber, setSecondNumber] = React.useState('');
    const [result, setResult] = React.useState('');

    const calculate = (operator: string) => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Please enter valid numbers');
            return;
        }

        let calculatedResult = 0;
        switch(operator) {
            case '+':
                calculatedResult = num1 + num2;
                break;
            case '-':
                calculatedResult = num1 - num2;
                break;
            case '*':
                calculatedResult = num1 * num2;
                break;
            case '/':
                if (num2 === 0) {
                    setResult('Cannot divide by zero');
                    return;
                }
                calculatedResult = num1 / num2;
                break;
            default:
                return;
        }

        setResult(`Result: ${calculatedResult}`);
    };

    const power = () => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (isNaN(num1) || isNaN(num2)) {
            setResult('Please enter valid numbers');
            return;
        }

        const calculatedResult = Math.pow(num1, num2);
        setResult(`Result: ${calculatedResult}`);
    };

    const clearCalculator = () => {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
    };

    return {
        firstNumber,
        secondNumber,
        result,
        setFirstNumber,
        setSecondNumber,
        calculate,
        power,
        clearCalculator
    };
};

/* using custom hook hehe */
const Calculator: React.FC<{ title?: string }> = ({ title = "My Personal Accountant" }) => {
    const {
        firstNumber,
        secondNumber,
        result,
        setFirstNumber,
        setSecondNumber,
        calculate,
        power,
        clearCalculator
    } = useCalculator();

    return (
        <CalculatorContainer>
            <CalculatorTitle>{title}</CalculatorTitle>

            <InputGroup>
                <Label htmlFor="firstNumber">First Number</Label>
                <Input
                    id="firstNumber"
                    type="number"
                    placeholder="Enter first number"
                    value={firstNumber}
                    onChange={(e) => setFirstNumber(e.target.value)}
                />
            </InputGroup>

            <InputGroup>
                <Label htmlFor="secondNumber">Second Number</Label>
                <Input
                    id="secondNumber"
                    type="number"
                    placeholder="Enter second number"
                    value={secondNumber}
                    onChange={(e) => setSecondNumber(e.target.value)}
                />
            </InputGroup>

            <ButtonContainer>
                <Button onClick={() => calculate('+')}>+</Button>
                <Button onClick={() => calculate('-')}>-</Button>
                <Button onClick={() => calculate('*')}>*</Button>
                <Button onClick={() => calculate('/')}>÷</Button>
                <Button onClick={power}>Power</Button>
                <Button onClick={clearCalculator}>Clear</Button>
            </ButtonContainer>

            <OutputDisplay>{result}</OutputDisplay>
        </CalculatorContainer>
    );
};

export default Calculator;