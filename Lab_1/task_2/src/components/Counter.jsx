import { useState } from "react";

export default function Counter() {
    // Инициализация состояния count с помощью хука useState
    const [count, setCount] = useState(0);

    // Функция для увеличения значения count на 1
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Функция для уменьшения значения count на 1
    const handleDecrement = () => {
        setCount(count - 1);

    };

    return (
        <div style={{border: "1px solid black", padding: "10px", display: "inline-block"}}>
            <h2>Счетчик: {count}</h2>
            {/* Кнопка для увеличения счетчика */}
            <button onClick={handleIncrement}>+</button>
            {/* Кнопка для уменьшения счетчика */}
            <button onClick={handleDecrement}>-</button>
        </div>
    )
}