import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import { isEmpty, isEmail } from 'validator'
import { createItem } from '../helpers/firestore.controllers';
import { notify } from '../helpers/notify';


const Checkout = () => {
    const [soldout, setSoldout] = useState(false);
    const [orderId, setOrderId] = useState(null);
    const { cart } = useContext( CartContext );
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        const name = event.target[0].value.trim()
        const email = event.target[1].value.trim();
        const address = event.target[2].value.trim();

        if( !isEmpty(name) && !isEmpty(email) && !isEmpty(address) && isEmail(email)  ){
            const order = {
                user:{name, email, address},
                cart
            }
            const id = await createItem(order, 'orders');
            setOrderId(id);
            setSoldout(true);
            
        }else{
            notify('error','Uno o mas datos no son correctos')
        }
    }

    return (
        <main className='d-flex justify-content-center'>

            {
                !soldout ?
                <Form onSubmit={handleSubmit} className={"w-75 border rounded p-3 bg-white"}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nombre completo</Form.Label>
                    <Form.Control type="text" placeholder="ingresa tu nombre completo" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu email" />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu domicilio" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Efectuar compra
                </Button>
            </Form>
            :
             <div>
                <p>Tu compra se realizo con exito. El numero de transaccion es:
                    <br />
                    { orderId }
                </p>
             </div>
            }

        </main>
    )
}

export default Checkout