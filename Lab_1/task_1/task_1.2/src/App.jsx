import { useState } from "react";
import './App.css';

function App() {
  // Создаем состояние для отслеживания выделения текста
  const [isHighlighted, setIsHighlighted] = useState(false);

  // Функция для переключения состояния выделения
  const toggleHighlight = () => {
    setIsHighlighted(!isHighlighted);
  }


  return (
   <div style={{padding: '20px'}}>
      <h1>Declarative Approach</h1>
      {/* Кнопка, которая будем менять состояние*/}
      <button onClick={toggleHighlight}>
        Toggle Highlight
      </button>
      {/* Текст, который будет выделяться в зависимости от состояния */}
      <p className={isHighlighted ? 'highlight' : ''}>
        Этот текст, который меняется декларативно при нажатии на кнопку.
      </p>

   </div>
  )
}

export default App
