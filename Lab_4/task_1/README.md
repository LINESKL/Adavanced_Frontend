# Task 1 — Registration Form with Validation

Форма регистрации пользователя с валидацией полей в реальном времени, реализованная с использованием React и TypeScript.

## Описание

Компонент `RegistrationForm` демонстрирует:
- Работу с несколькими полями формы
- Валидацию в реальном времени
- Типизацию состояния в TypeScript
- Обработку submit события
- Контролируемые компоненты

## Компоненты

### RegistrationForm (`src/components/RegistrationForm.tsx`)

Главный компонент формы со следующим функционалом:

**Поля формы:**
- `name` — имя пользователя (string)
- `email` — электронная почта (string)
- `age` — возраст (number | undefined)

**Валидация:**
- **Имя:** минимум 3 символа, обязательное поле
- **Email:** валидный формат email адреса
- **Возраст:** число ≥ 18

**Состояния:**
- Значения полей (name, email, age)
- Ошибки валидации для каждого поля
- Флаг успешной регистрации

## TypeScript типизация

```typescript
const [name, setName] = useState<string>("");
const [email, setEmail] = useState<string>("");
const [age, setAge] = useState<number | undefined>(undefined);

const [nameError, setNameError] = useState<string>("");
const [emailError, setEmailError] = useState<string>("");
const [ageError, setAgeError] = useState<string>("");

const [success, setSuccess] = useState<boolean>(false);
```

## Функции валидации

### validateName
```typescript
const validateName = (val: string): string => {
  if (!val) return "Name is required";
  if (val.length < 3) return "Name must be at least 3 characters";
  return "";
};
```

### validateEmail
```typescript
const validateEmail = (val: string): string => {
  if (!val) return "Email is required";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(val)) return "Email is not valid";
  return "";
};
```

### validateAge
```typescript
const validateAge = (val: number | undefined): string => {
  if (val === undefined) return "Age is required";
  const numAge = Number(val);
  if (Number.isNaN(numAge) || numAge < 18) 
    return "Age must be a number and at least 18";
  return "";
};
```

## Обработка событий

### onChange с валидацией
```typescript
onChange={(e) => {
  const val = e.target.value;
  setName(val);
  setNameError(validateName(val));
}}
```

### onSubmit
```typescript
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const nErr = validateName(name);
  const eErr = validateEmail(email);
  const aErr = validateAge(age);

  setNameError(nErr);
  setEmailError(eErr);
  setAgeError(aErr);

  if (!nErr && !eErr && !aErr) {
    setSuccess(true);
    // Сброс формы
    setName("");
    setEmail("");
    setAge(undefined);
  } else {
    setSuccess(false);
  }
};
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

## Ключевые концепции

- **TypeScript типизация состояния**  
- **Контролируемые компоненты** (controlled components)  
- **Валидация форм в реальном времени**  
- **Обработка событий с типизацией**  
- **Управление несколькими состояниями**  
- **Условный рендеринг сообщений об ошибках**

## Типы событий в React + TypeScript

```typescript
// Form submit
React.FormEvent<HTMLFormElement>

// Input change
React.ChangeEvent<HTMLInputElement>

// Button click
React.MouseEvent<HTMLButtonElement>
```

## Паттерн Controlled Components

```typescript
<input
  type="text"
  value={name}  // Значение контролируется состоянием
  onChange={(e) => setName(e.target.value)}  // Обновление состояния
/>
```

## Технологии

- React 18
- TypeScript
- Vite
- ESLint

## Расширения

Возможные улучшения:
- Добавить валидацию пароля
- Реализовать дебаунсинг валидации
- Добавить кастомные хуки для форм
- Интегрировать библиотеку форм (React Hook Form, Formik)
