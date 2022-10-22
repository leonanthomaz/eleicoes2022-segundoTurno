import React from 'react';
import Modal from 'react-bootstrap/Modal';

import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'

export const CandidatoModal = ({ list, handleClose, show }) => {
    
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
          <Modal.Title>{list.nome}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ margin: 'auto'}}>
        <img src={
          list.nome === "LULA" ? imgLula 
          : list.nome === "JAIR BOLSONARO" ? imgBolsonaro 
          : ''} alt={list.nome} width={150} />
          <h4>{list.partido}</h4>
          <p>{list.numero}</p>
      </Modal.Body>

      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}