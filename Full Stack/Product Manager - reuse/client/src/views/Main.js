import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
const Main = (props) => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/all')
            .then(res=>{
                setProducts(res.data);
                setLoaded(true);
            })
            .catch(err => console.error(err));
    },[]);

    const createProduct =(product)=>{
        axios.post('http://localhost:8000/api/new', product)
            .then(res=>setProducts([...products, product]))
            .catch(err=>console.log(err))

    }

    

    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id != productId));
    }


    return (
        <div>
            <h1>Product Manager</h1>
            <ProductForm
            initialTitle=""
            initialPrice=""
            initialDescription=""
            onSubmitProb={createProduct}

            />
            { loaded && <ProductList products={products} removeFromDom ={removeFromDom} />}
        </div>
    )
}
export default Main;
