<div align="center">

# Lab 2 — Продвинутая работа с компонентами

</div>

## Описание

Лабораторная работа посвящена продвинутым техникам работы с React компонентами. Включает два практических задания, которые помогут освоить работу со списками, Fragments, композицию компонентов и передачу children.

## Цели обучения

- Работа со списками и методом `map()`
- Использование React Fragments
- Композиция компонентов
- Передача `children` в компоненты
- Работа с props и деструктуризацией
- Создание переиспользуемых компонентов

## Задания

### Task 1 — Списки и Fragments

**Директория:** `task_1/`

Изучение работы со списками данных и использование Fragments для группировки элементов без добавления дополнительных DOM-узлов.

#### Компоненты:

**1. ItemList** (`src/components/ItemList.jsx`)
- Отображение списка элементов с использованием `map()`
- Правильное использование `key` prop
- Рендеринг списка фруктов

**2. FragmentLayout** (`src/components/FragmentLayout.jsx`)
- Использование `<>...</>` (короткий синтаксис Fragment)
- Группировка элементов без дополнительных обёрток
- Чистая DOM-структура

**3. CombinedList** (`src/components/CombinedList.jsx`)
- Объединение нескольких списков
- Работа с Fragment для группировки
- Композиция компонентов списков

**Запуск:**
```bash
cd Lab_2/task_1
pnpm install
pnpm dev
```

---

### Task 2 — Карточки и секции

**Директория:** `task_2/`

Создание переиспользуемых компонентов-контейнеров и работа с паттерном композиции через `children`.

#### Компоненты:

**1. Card** (`src/components/Card.jsx`)
- Универсальный компонент карточки
- Принимает `title`, `children`, `className`
- Переиспользуемый контейнер для любого контента

**2. ProductList** (`src/components/ProductList.jsx`)
- Список продуктов/товаров
- Использование компонента Card
- Отображение данных в карточках

**3. Section** (`src/components/Section.jsx`)
- Компонент секции для организации контента
- Группировка связанных элементов
- Структурирование макета страницы

**Запуск:**
```bash
cd Lab_2/task_2
pnpm install
pnpm dev
```

## Структура проекта

```
Lab_2/
├── AI_REPORT.md             # Отчет о выполнении
├── task_1/                  # Задание 1: Списки и Fragments
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemList.jsx
│   │   │   ├── FragmentLayout.jsx
│   │   │   └── CombinedList.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
└── task_2/                  # Задание 2: Карточки и секции
    ├── src/
    │   ├── components/
    │   │   ├── Card.jsx
    │   │   ├── ProductList.jsx
    │   │   └── Section.jsx
    │   ├── App.jsx
    │   └── main.jsx
    ├── package.json
    └── vite.config.js
```

## Технологический стек

- **React** — библиотека для создания UI
- **JavaScript (JSX)** — язык программирования
- **Vite** — быстрый инструмент сборки
- **ESLint** — контроль качества кода

## Ключевые концепции

### React Fragments

```jsx
// Полный синтаксис
<React.Fragment>
  <ChildA />
  <ChildB />
</React.Fragment>

// Короткий синтаксис
<>
  <ChildA />
  <ChildB />
</>
```

### Рендеринг списков

```jsx
const items = [1, 2, 3];
return (
  <ul>
    {items.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);
```

### Композиция через children

```jsx
function Card({ children, title }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      {children}
    </div>
  );
}

// Использование
<Card title="Заголовок">
  <p>Любой контент</p>
</Card>
```


## Полезные ресурсы

- [React Lists and Keys](https://react.dev/learn/rendering-lists)
- [React Fragments](https://react.dev/reference/react/Fragment)
- [React Composition](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children)
