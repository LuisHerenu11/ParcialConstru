import React, { Fragment, useState } from 'react';
import {Col,Row,Form,Button} from 'react-bootstrap';

const Botsito = () => {
    /* const dialogflow = require('@google-cloud/dialogflow').v2beta1; */
    
    const [texto, setTexto] = useState();
    const [pantalla, setPantalla] = useState();

    // un hook de estado para el error
    const [error, setError] = useState(false);

    // Recolectar lo que el usuario escribe
    const handleChange = (element) => {
        console.log("Escribiendo en el teclado",element.target.name," ",element.target.value);
        setTexto(element.target.value);
    };

    // se ejecuta cuando enviamos el msj
    const submitForm = (element) => {
        //console.log('msj enviado')
        element.preventDefault();
        // Validar mensaje
        if(texto.trim() === ''){
            setError(true);
            return;
        }
        // Mensaje de error
        setError(false);

        // actualizo la vista del chat /* esto se debería cambiar por un context*/
        setPantalla(texto);
    };


    return (
        <Fragment>
            <Col>
                <Row style={{backgroundColor:"white",width:"98vw",height:"40vw",borderRadius:"2%",border:"3px solid yellow", marginTop:"6px"}}>
                    {
                        pantalla 
                    }    
                </Row>
                <Row>
                    <Form onSubmit={submitForm}>
                        <Form.Group>
                            <Form.Label style={{color:"#14b8b8"}}>Chatea:</Form.Label>
                            <Form.Control type="text" placeholder="texto Completo" name='texto' onChange={handleChange} value={texto}/>
                        </Form.Group>
                        <Button variant='success' type='submit'>
                            Enviar
                        </Button>
                    </Form>
                    {
                        error
                        ? <h4>Completar los campos</h4>
                        : null
                    }
                </Row>
            </Col>    
        </Fragment>
    );
}

export default Botsito;