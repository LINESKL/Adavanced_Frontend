export default function CombinedList() {
    const frameworkArray = [
        { id: 1, name: 'Next.js'},
        { id: 2, name: 'Nuxt.js'},
        { id: 3, name: 'Angular'}
    ]

    return (
        <>
            <h2>JavaScript Frameworks</h2>
            <ul>
                {frameworkArray.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
                <p>Total: {frameworkArray.length}</p>
            </ul>
        </>
    )
}