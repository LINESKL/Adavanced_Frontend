import type { Article } from './types';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';
import { useState } from 'react';

const ArticleManager: React.FC = () => {
    const [articles, setArticles] = useState<Article[]>([
        { id: 1, title: "React Hooks", summary: "Learn about useState and useEffect." }
    ]);

    const [title, setTitle] = useState<string>('');
    const [summary, setSummary] = useState<string>('');

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

    return (
        <div>
            <AddArticle
                name="Add New Article"
                title={title}
                summary={summary}
                onChangeTitle={(e) => setTitle(e.target.value)}
                onChangeSummary={(e) => setSummary(e.target.value)}
                onAddClick={handleAdd}
            />
            <hr />

            <ArticleList articles={articles} onClickRemove={handleRemove} />
        </div>
    )

}

export default ArticleManager;