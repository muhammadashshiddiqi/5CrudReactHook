import React, { useEffect, useState } from 'react'
import { Table, Button} from 'react-bootstrap'
import { Link } from "react-router-dom";
function Data() {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        getList();
    }, []);

    const getList = async() => {
        const res = await fetch('http://localhost:4000/products');
        const data = await res.json();

        setProduct(data);
    }; 

    const setDelete = async(id) => {

        await fetch(`http://localhost:4000/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        getList();
    }
    
    return (
        <div className='container'>
            <Link to="/add"><Button variant='info'>+ Tambah</Button></Link>
            <Table striped bordered hover className='mt-3'>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((prd, index) => (
                        <tr key={prd.id}>
                            <td>{index+1}</td>
                            <td>{prd.title}</td>
                            <td>{prd.price}</td>
                            <td>
                                <Link to={`/edit/${prd.id}`}><Button variant='primary'>Edit</Button></Link> {"  "}
                                <Button onClick={() => setDelete(prd.id) } variant='danger'>Hapus</Button>
                            </td>
                        </tr>
                    ))}
                    
                </tbody>
            </Table>
        </div>
    )
}

export default Data
