import React, { useEffect, useState } from 'react'

const Home = ({ toggle, setToggle }) => {
    const [product, setProduct] = useState([])
    const [loading, setloading] = useState(true)
    const todoData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        setProduct(data)
    };
    console.log("product", product);

    useEffect(() => {
        todoData()
    }, []);

    const handleRemoveData = (id) => {
        const removeData = product.filter((item) => {
            return item.id !== id
        });
        setProduct(removeData)
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', }}>
            {product.map((item, index) => {
                return (
                    <>
                        {
                            toggle ?
                                (
                                    <div className='main-grid'>
                                        <div className='main-item2' key={item.id}>
                                            <div className='image'>
                                                <img src='https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg' width='50px' height='50px' alt='profile' />
                                            </div>
                                            <div>
                                                <h1 >{item.title}</h1>
                                                <p>{item.body}</p>
                                            </div>
                                            <p>{new Date().toDateString()}</p>
                                        </div>
                                        <div className='remove-item' onClick={() => handleRemoveData(item.id)}>X</div>
                                    </div>
                                ) : (

                                    <div className='main'>
                                        <div className='main-item' key={item.id}>
                                            <div className='image'>
                                                <img src='https://www.shutterstock.com/image-photo/profile-picture-smiling-successful-young-260nw-2040223583.jpg' width='50px' height='50px' alt='profile' />
                                            </div>
                                            <div style={{ paddingLeft: '20px' }}>
                                                <h1 style={{ overflow: 'clip' }}>{item.title}</h1>
                                                <p>{item.body}</p>
                                                <p>{new Date().toDateString()}</p>
                                            </div>
                                        </div>
                                        <div className='remove-item' onClick={() => handleRemoveData(item.id)}>
                                            <span style={{ display: 'flex', textAlign: 'center' }}>X</span></div>
                                    </div>
                                )
                        }

                    </>
                )

            })}
        </div>
    )
}

export default Home