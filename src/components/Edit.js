import React, { useEffect, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getPerProduct();
    }, []);

    const getPerProduct = async () => {
        const res = await fetch(`http://localhost:4000/products/${id}`);
        const data = await res.json();
        console.log(data);
        setProduct(data.title);
        setPrice(data.price);
    };

    const updateProduct = async (e) => {
        e.preventDefault();
        
        let datajson = { "title": product, "price": price };
        console.log(datajson);

        await fetch(`http://localhost:4000/products/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datajson),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        navigate('/');

    };

    return (
        <div className="container">
            <Form onSubmit={(e) => updateProduct(e)}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label><b>Nama Product</b></Form.Label>
                    <Form.Control type="text" value={product} onChange={(e) => setProduct(e.target.value)} name="product" placeholder="Enter product ..." />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label><b>Price</b></Form.Label>
                    <Form.Control type="text" value={price} onChange={(e) => setPrice(e.target.value)} name="price" placeholder="Enter price ..." />
                </Form.Group>

                <Button variant="primary" type="submit" className='mt-3'>
                    Update
                </Button>
            </Form>

        </div>
    )
}

export default Edit

