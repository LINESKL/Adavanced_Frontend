export default function ItemList() {
    const fruitsArray = [
        { id: 1, name: 'Apple'},
        { id: 2, name: 'Banana'},
        { id: 3, name: 'Cherry' },
        { id: 4, name: 'Orange'}
    ]
    

    return (
        <>
            <h2>Fruits</h2>
            <ul>
                {fruitsArray.map(item => (
                    <li key={item.id}>
                        {item.name}
                    </li>
                ))}
            </ul>
        </>
    )
}