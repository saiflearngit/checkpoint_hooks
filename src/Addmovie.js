import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import MovieCard from './MovieCard';
import { useRef } from "react";

function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [data, setData] = useState()

  let mov

  function getData(val){
    mov = val.target.value
    console.log(val.target.value)
  }

  function AddData(val){
    setData(mov)
    handleClose()
    
  }


 


  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        add movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>MovieCard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            
           <input type="text" onChange={getData}></input>
           
           
            
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddData}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <MovieCard posterURL={data}></MovieCard>
      
      
    </>
  );
};

export default Add