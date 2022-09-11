import React, { useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const TypeComponent = ( {affirmation} ) => {

    const [affirm, setAffirm] = React.useState("");
    const [arr, setArr] = React.useState([]);
    const [show, setShow] = React.useState(false);

    useEffect(() => {
        if(arr.length === 10) {
            setShow(true);
            setArr([])
        }
    }, [arr, show])

    const handleClose = () => { setShow(false); }

    const changeValue = (e) => {
        setAffirm(e.target.value);
        // console.log(affirm);
        if (e.target.value.length === affirmation.length) {
           setAffirm("");
           setArr([...arr, 1]);
        }
    }

    return (
        <div className="container">
            <form>
                <div className="row">
                    <div className="col">
                        <input 
                        type="text" placeholder="Practice the affirmation"
                        value={affirm}
                        onChange={(e) => {changeValue(e)}} />
                    </div>
                </div>
                <ListGroup horizontal style={{margin:'10px'}}>
                    {arr.map((data, index) => 
                        (
                            <ListGroup.Item key={index}>
                                {index + 1}
                            </ListGroup.Item>
                        )
                    )}
               </ListGroup>
            </form>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>Completed!</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have practiced the affirmation, Have a great day!</Modal.Body>
                <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Close
                </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default TypeComponent;