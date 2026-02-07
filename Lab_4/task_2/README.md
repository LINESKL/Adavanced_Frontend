# Task 2 — Article Manager with TypeScript

Приложение для управления списком статей с использованием TypeScript интерфейсов и композиции компонентов.

## Описание

Проект демонстрирует:
- Создание и использование TypeScript интерфейсов
- Композицию компонентов
- Типизацию props и функций
- Управление массивом данных в состоянии
- Передачу callback функций дочерним компонентам

## Структура компонентов

```
ArticleManager (главный компонент)
├── AddArticle (форма добавления)
└── ArticleList (список статей)
    └── ArticleItem (отдельная статья)
```

## Компоненты

### types.ts (`src/components/types.ts`)

Определяет интерфейс данных статьи:

```typescript
export interface Article {
  id: number;
  title: string;
  summary: string;
}
```

### ArticleManager (`src/components/ArticleManager.tsx`)

Главный компонент приложения:
- Управляет состоянием массива статей
- Обрабатывает добавление новых статей
- Обрабатывает удаление статей
- Управляет состоянием полей формы

**Состояние:**
```typescript
const [articles, setArticles] = useState<Article[]>([
  { id: 1, title: "React Hooks", summary: "Learn about useState and useEffect." }
]);
const [title, setTitle] = useState<string>('');
const [summary, setSummary] = useState<string>('');
```

**Методы:**
```typescript
const handleAdd = () => {
  if (!title.trim() && !summary.trim()) return;

  const newArticle: Article = {
    id: Date.now(),
    title,
    summary
  };

  setArticles([...articles, newArticle]);
  setTitle('');
  setSummary('');
};

const handleRemove = (id: number) => {
  setArticles(articles.filter(a => a.id !== id));
};
```

### AddArticle (`src/components/AddArticle.tsx`)

Компонент формы для добавления статьи.

**Props Interface:**
```typescript
interface AddArticleProps {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddClick: () => void;
}
```

**Использование:**
```typescript
<AddArticle
  name="Add New Article"
  title={title}
  summary={summary}
  onChangeTitle={(e) => setTitle(e.target.value)}
  onChangeSummary={(e) => setSummary(e.target.value)}
  onAddClick={handleAdd}
/>
```

### ArticleList (`src/components/ArticleList.tsx`)

Компонент списка статей.

**Props Interface:**
```typescript
interface ArticleListProps {
  articles: Article[];
  onClickRemove: (id: number) => void;
}
```

**Реализация:**
```typescript
const ArticleList: React.FC<ArticleListProps> = ({ articles, onClickRemove }) => {
  return (
    <div>
      <h2>Articles</h2>
      {articles.map(article => (
        <ArticleItem 
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </div>
  );
};
```

### ArticleItem (`src/components/ArticleItem.tsx`)

Компонент отдельной статьи.

**Props Interface:**
```typescript
interface ArticleItemProps {
  article: Article;
  onClickRemove: (id: number) => void;
}
```

**Реализация:**
```typescript
const ArticleItem: React.FC<ArticleItemProps> = ({ article, onClickRemove }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>{article.summary}</p>
      <button onClick={() => onClickRemove(article.id)}>Remove</button>
    </div>
  );
};
```

## Поток данных

```
ArticleManager
  │
  ├─> state: articles, title, summary
  │
  ├─> AddArticle
  │     └─> события onChange → обновляют state в Manager
  │     └─> событие onAdd → добавляет статью
  │
  └─> ArticleList
        └─> ArticleItem
              └─> событие onRemove → удаляет статью
```

## TypeScript концепции

### 1. Интерфейсы для данных
```typescript
interface Article {
  id: number;
  title: string;
  summary: string;
}
```

### 2. Типизация props
```typescript
interface ArticleItemProps {
  article: Article;
  onClickRemove: (id: number) => void;
}
```

### 3. Типизация состояния
```typescript
const [articles, setArticles] = useState<Article[]>([]);
```

### 4. Типизация функций
```typescript
const handleRemove = (id: number): void => {
  setArticles(articles.filter(a => a.id !== id));
};
```

### 5. React.FC
```typescript
const ArticleItem: React.FC<ArticleItemProps> = (props) => {
  // ...
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

- **TypeScript интерфейсы для данных**  
- **Типизация props компонентов**  
- **Типизация массивов состояния**  
- **Передача функций как props**  
- **Композиция компонентов**  
- **Поднятие состояния** (lifting state up)  
- **Типизированные обработчики событий**  
- **React.FC для функциональных компонентов**

## Преимущества TypeScript

- **Автодополнение** — IDE подсказывает свойства объектов
- **Проверка типов** — ошибки обнаруживаются до запуска
- **Рефакторинг** — безопасное переименование и изменение
- **Документация** — интерфейсы служат документацией к коду
- **Меньше ошибок** — невозможно передать неверный тип

## Технологии

- React 18
- TypeScript
- Vite
- ESLint

## Расширения

Возможные улучшения:
- Добавить редактирование статей
- Реализовать поиск и фильтрацию
- Добавить сортировку по заголовку/дате
- Сохранение в localStorage
- Pagination для большого количества статей
