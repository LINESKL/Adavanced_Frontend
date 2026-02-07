<div align="center">

# Lab 4 — React with TypeScript

### TypeScript Integration, Forms, State Management

</div>

## Описание

Лабораторная работа посвящена интеграции TypeScript в React-приложения. Включает два практических задания: создание формы регистрации с валидацией и менеджер статей с типизацией данных.

## Цели обучения

- Работа с React и TypeScript
- Типизация props и state
- Управление формами в React
- Валидация пользовательского ввода
- Работа с типизированными событиями
- Создание интерфейсов для данных
- Управление списками с типизацией
- Обработка событий в TypeScript

## Задания

### Task 1 — Registration Form with Validation

**Директория:** `task_1/`

Создание формы регистрации пользователя с валидацией полей в реальном времени с использованием TypeScript для строгой типизации.

#### Компоненты:

**RegistrationForm** (`src/components/RegistrationForm.tsx`)
- Управляет состоянием формы:
  - `name` — имя пользователя (строка)
  - `email` — электронная почта (строка)
  - `age` — возраст (число)
- Валидация полей:
  - Имя: минимум 3 символа
  - Email: проверка формата email
  - Возраст: минимум 18 лет
- Отображение ошибок валидации в реальном времени
- Сообщение об успешной регистрации
- TypeScript типизация всех переменных состояния

**Ключевые концепции:**
- TypeScript типы для состояния (`string`, `number`, `undefined`)
- Типизация событий (`React.FormEvent`, `React.ChangeEvent`)
- Валидация форм
- Управление несколькими состояниями
- Контролируемые компоненты (controlled components)

**Запуск:**
```bash
cd Lab_4/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Article Manager with TypeScript

**Директория:** `task_2/`

Приложение для управления списком статей с возможностью добавления и удаления. Демонстрирует использование TypeScript интерфейсов для типизации данных.

#### Компоненты:

**types.ts** (`src/components/types.ts`)
- Определяет интерфейс `Article`:
  - `id: number` — уникальный идентификатор
  - `title: string` — заголовок статьи
  - `summary: string` — краткое описание

**ArticleManager** (`src/components/ArticleManager.tsx`)
- Главный компонент приложения
- Управляет состоянием массива статей
- Обработка добавления и удаления статей
- Передача функций-обработчиков дочерним компонентам

**AddArticle** (`src/components/AddArticle.tsx`)
- Форма для добавления новой статьи
- Props: `title`, `summary`, обработчики событий
- Типизация всех props

**ArticleList** (`src/components/ArticleList.tsx`)
- Отображение списка статей
- Получает массив статей и функцию удаления
- Передает данные в ArticleItem

**ArticleItem** (`src/components/ArticleItem.tsx`)
- Отображение отдельной статьи
- Кнопка удаления
- Типизированные props

**Ключевые концепции:**
- TypeScript интерфейсы для данных
- Типизация props (`React.FC`, custom interfaces)
- Типизация массивов состояния (`Article[]`)
- Передача типизированных функций как props
- Работа с событиями в TypeScript
- Композиция компонентов

**Запуск:**
```bash
cd Lab_4/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_4/
├── task_1/                  # Registration Form
│   ├── src/
│   │   ├── components/
│   │   │   └── RegistrationForm.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   └── vite.config.ts
│
├── task_2/                  # Article Manager
│   ├── src/
│   │   ├── components/
│   │   │   ├── types.ts
│   │   │   ├── ArticleManager.tsx
│   │   │   ├── AddArticle.tsx
│   │   │   ├── ArticleList.tsx
│   │   │   └── ArticleItem.tsx
│   │   ├── App.tsx
│   │   └── main.tsx
│   ├── package.json
│   ├── tsconfig.json
│   ├── tsconfig.app.json
│   └── vite.config.ts
│
└── README.md                # Этот файл
```

## Основные отличия от JavaScript

### TypeScript обеспечивает:
- **Строгую типизацию** — ошибки обнаруживаются на этапе компиляции
- **Автодополнение** — улучшенная поддержка IDE
- **Интерфейсы** — четкие контракты для структур данных
- **Типизация событий** — безопасная работа с DOM событиями
- **Типизация props** — гарантия корректности передаваемых данных

### Примеры типизации:

```typescript
// Состояние
const [name, setName] = useState<string>("");
const [age, setAge] = useState<number | undefined>(undefined);

// Интерфейс
interface Article {
  id: number;
  title: string;
  summary: string;
}

// Props
interface AddArticleProps {
  title: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// Событие
const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  // ...
}
```

## Технологии

- **React 18** — библиотека для создания UI
- **TypeScript** — типизированный JavaScript
- **Vite** — быстрый сборщик проектов
- **pnpm** — менеджер пакетов

## Запуск всех проектов

```bash
# Task 1
cd Lab_4/task_1
pnpm install
pnpm dev

# Task 2
cd Lab_4/task_2
pnpm install
pnpm dev
```

## Ключевые навыки

После выполнения лабораторной работы вы будете уметь:

- Интегрировать TypeScript в React-приложения  
- Создавать типизированные компоненты  
- Определять интерфейсы для данных  
- Типизировать состояние и props  
- Работать с типизированными событиями  
- Валидировать формы в React  
- Управлять списками данных с TypeScript  
- Создавать переиспользуемые типизированные компоненты

---

<div align="center">

**Лабораторная работа 4** | React + TypeScript

</div>
