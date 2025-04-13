import React, {useState, useEffect} from 'react';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let url = '/api/products';
        if (search) {
            url += `?search=${encodeURIComponent(search)}`;
        }
        fetch(url).then((res) => res.json()).then((data) => setProducts(data));
    }, [search]);

    return (
        <div>
            <h2>Tech Products</h2>
            <input type = "text" placeholder='Search products...' value = {search} onChange={(e) => setSearch(e.target.value)}/>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;