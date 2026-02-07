# Task 1 — Component with State: Advanced Counter

Продвинутый счетчик с настраиваемым шагом изменения, историей операций и статистикой использования.

## Описание

Компонент `StepCounter` демонстрирует:
- Работу с несколькими состояниями одновременно
- Настраиваемые props
- Управление массивом в состоянии
- Обновление состояния на основе предыдущего значения
- Работу с историей изменений

## Компоненты

### StepCounter (`src/components/StepCounter.jsx`)

Главный компонент счетчика со следующим функционалом:

**Props:**
- `initialValue` — начальное значение счетчика (по умолчанию 0)
- `step` — шаг изменения значения (по умолчанию 1)

**Состояния:**
```jsx
const [count, setCount] = useState(initialValue);
const [history, setHistory] = useState([initialValue]);
const [operationCount, setOperationCount] = useState(0);
```

**Функционал:**
- Увеличение/уменьшение на заданный шаг
- Сброс всех состояний
- Отображение последних 5 значений из истории
- Подсчет количества операций

### CounterApp (`src/components/CounterApp.jsx`)

Главный компонент приложения, который использует несколько экземпляров `StepCounter` с разными настройками:
- Счетчик с шагом 1
- Счетчик с шагом 5 и начальным значением 10

## Ключевые концепции

**1. Работа с несколькими состояниями:**
```jsx
const [count, setCount] = useState(initialValue);
const [history, setHistory] = useState([initialValue]);
const [operationCount, setOperationCount] = useState(0);
```

**2. Обновление на основе предыдущего значения:**
```jsx
setCount(prev => prev + step);
setHistory(prev => [...prev, count + step]);
setOperationCount(prev => prev + 1);
```

**3. Props с значениями по умолчанию:**
```jsx
const StepCounter = ({ initialValue = 0, step = 1 }) => {
  // ...
};
```

**4. Работа с массивами в состоянии:**
```jsx
// Добавление нового значения
setHistory(prev => [...prev, newValue]);

// Получение последних 5 элементов
const recentHistory = history.slice(-5);
```

## Установка и запуск

```bash
# Установка зависимостей
pnpm install

# Запуск dev сервера
pnpm dev

# Сборка для production
pnpm build
```

## Основные операции

- **Increment** — увеличение на заданный шаг  
- **Decrement** — уменьшение на заданный шаг  
- **Reset** — сброс всех состояний  
- **History** — отображение последних 5 изменений  
- **Statistics** — количество выполненных операций

## Технологии

- React 18
- JavaScript (ES6+)
- Vite
- ESLint

## Полезные паттерны

**Обновление нескольких связанных состояний:**
```jsx
const handleIncrement = () => {
  setCount(prev => prev + step);
  setHistory(prev => [...prev, count + step]);
  setOperationCount(prev => prev + 1);
};
```

**Сброс всех состояний:**
```jsx
const handleReset = () => {
  setCount(initialValue);
  setHistory([initialValue]);
  setOperationCount(0);
};
```
