import {useState, useEffect} from 'react';
import axios from 'axios';
import Product from './Product';

function Products() {
    let [products, setProducts] = useState();
    let baseURL = "https://61a32591014e1900176dead9.mockapi.io/products";
    useEffect(() => {
        getProducts();
    }, [])

    let getProducts = async () => {
        let res = await axios.get(baseURL);
        setProducts(res.data);
    }

    let handleDelete = (id) => {
        axios.delete(baseURL+`/${id}`).then(()=>{
            getProducts();
        });
    }

    if (!products) return null;

    return (
        <div className='container mt-3'>
            <h4 className='font-weight-normal mt-4 mb-3'>All Products</h4>
            <div className='row row-cols-1 row-cols-sm-2 row-cols-lg-3'>
                {products.map((item) => {
                    return (
                        <Product key={item.id} item={item} removeProduct={handleDelete} />
                    )
                })}
            </div>
        </div>
    )
}

export default Products;