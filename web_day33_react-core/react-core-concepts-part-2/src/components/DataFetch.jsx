import react, { useEffect, useState } from 'react';

const DataFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(data => {
                setData(data);
                setLoading(false);
            })
    }, []) // 



    return (
        <>
            <div>
                <h3>Data Fetch</h3>
                {
                    loading ? (
                        <p>Loading...</p>
                    ) : (
                        <>
                            <p>Data fetched successfully.</p>
                            <p>Id: {data.id}</p>
                            <p>Title: {data.title}</p>
                            <p>Completed: {data.completed}</p>
                        </>
                    )
                }
            </div>
        </>
    )

}

export default DataFetch