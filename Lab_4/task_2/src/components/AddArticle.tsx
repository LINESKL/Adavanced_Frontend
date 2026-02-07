interface AddArticleProps {
    name: string;
    title: string;
    summary: string;
    onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onAddClick: () => void;
}

const AddArticle: React.FC<AddArticleProps> = ({ 
    name, title, summary, onChangeTitle, onChangeSummary, onAddClick 
}) => {
    return (
        <section>
            <h1>{name}</h1>
            <input 
                type="text"
                placeholder="Title" 
                value={title} 
                onChange={onChangeTitle} 
            />
            <input 
                type="text"
                placeholder="Summary" 
                value={summary} 
                onChange={onChangeSummary} 
            />
            <button onClick={onAddClick}>Add</button>
        </section>
    );
};

export default AddArticle;