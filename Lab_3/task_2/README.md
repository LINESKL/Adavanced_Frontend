# Task 2 — Data Loading with useEffect

Загрузка и отображение данных пользователей с внешнего API с использованием хука `useEffect` и управление жизненным циклом запросов.

## Описание

Проект демонстрирует:
- Использование хука `useEffect` для побочных эффектов
- Загрузку данных с внешнего API
- Управление состояниями загрузки, ошибок и данных
- Cleanup функции и отмену запросов
- Работу с массивом зависимостей

## Компоненты

### UserProfile (`src/UserProfile.jsx`)

Компонент для загрузки и отображения профиля пользователя:

**Props:**
- `userId` — ID пользователя для загрузки

**Состояния:**
```jsx
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);
```

**Ключевые возможности:**
- Загрузка данных при монтировании и изменении `userId`
- Отмена предыдущих запросов при новой загрузке
- Обработка трех состояний: загрузка, успех, ошибка
- Cleanup функция для предотвращения утечек памяти

### DataLoadingApp (`src/DataLoadingApp.jsx`)

Главный компонент приложения:
- Переключение между пользователями (ID: 1-10)
- Кнопка для загрузки случайного пользователя
- Передача `userId` как prop в `UserProfile`

## Использование useEffect

### Базовая структура

```jsx
useEffect(() => {
  // 1. Создаем AbortController для отмены запросов
  const controller = new AbortController();
  
  // 2. Загрузка данных
  const fetchUser = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { signal: controller.signal }
      );
      
      const data = await response.json();
      setUser(data);
    } catch (err) {
      if (err.name !== 'AbortError') {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };
  
  fetchUser();
  
  // 3. Cleanup функция
  return () => {
    controller.abort(); // Отменяем запрос при размонтировании
  };
}, [userId]); // 4. Массив зависимостей
```

## Ключевые концепции

### 1. Массив зависимостей

```jsx
useEffect(() => {
  // эффект выполняется при изменении userId
}, [userId]);
```

### 2. AbortController

Предотвращает состояние гонки и утечки памяти:

```jsx
const controller = new AbortController();
fetch(url, { signal: controller.signal });

// Cleanup
return () => controller.abort();
```

### 3. Обработка состояний

**Загрузка:**
```jsx
if (loading) return <p>Loading user data...</p>;
```

**Ошибка:**
```jsx
if (error) return <p style={{ color: 'red' }}>Error: {error}</p>;
```

**Данные:**
```jsx
if (user) return <div>...</div>;
```

### 4. Cleanup функция

Cleanup выполняется:
- Перед повторным выполнением эффекта
- При размонтировании компонента

```jsx
return () => {
  // Очистка подписок, отмена запросов и т.д.
  controller.abort();
};
```

## API

Используется публичное API JSONPlaceholder:
```
https://jsonplaceholder.typicode.com/users/{id}
```

**Пример ответа:**
```json
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "city": "Gwenborough"
  }
}
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

## Основные сценарии

- **Initial Load** — загрузка при первом рендере  
- **User Change** — перезагрузка при смене пользователя  
- **Loading State** — индикатор загрузки  
- **Error Handling** — обработка ошибок сети  
- **Request Cancellation** — отмена устаревших запросов

## Технологии

- React 18
- JavaScript (ES6+)
- Fetch API
- AbortController
- Vite
- ESLint

## Распространенные проблемы

### Без cleanup функции
```jsx
useEffect(() => {
  fetch(url).then(data => setUser(data));
}, [userId]);
// Проблема: могут обновиться данные от старого запроса
```

### С cleanup функцией
```jsx
useEffect(() => {
  const controller = new AbortController();
  fetch(url, { signal: controller.signal })
    .then(data => setUser(data));
  return () => controller.abort();
}, [userId]);
```
