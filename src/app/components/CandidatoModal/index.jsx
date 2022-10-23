import React from 'react'
import Modal from 'react-bootstrap/Modal'
import * as CM from './CandidatoModalStyles'

import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'

export const CandidatoModal = ({ candidato, handleCloseCandidato, showCandidato }) => {
    
  return (
    <Modal
      size="md"
      aria-labelledby={`Janela com informações do candidato ${candidato.nome}`}
      centered
      show={showCandidato} 
      onHide={handleCloseCandidato}
      style={{background: '#14141498'}}
     >
      <Modal.Header closeButton>
          <Modal.Title>
          <h1 style={{
          color: '#14141498', 
          textAlign: 'center', 
          marginTop: '20px',
          lineHeight: '5rem',
          fontWeight: 900
          }}>{candidato.nome}</h1>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CM.Container>
          <CM.Box>
            <div className='header-info'>
              <div className='header-img'>
                <img 
                  src={
                    candidato.nome === "LULA" ? imgLula 
                    : candidato.nome === "JAIR BOLSONARO" ? imgBolsonaro 
                    : ''} alt={candidato.nome} width={150} 
                  />
                </div>
                <h3>{candidato.numero}</h3>
            </div>
            <div className='header-info'>
              <div className='header-h'>
                  <h4>Partido (Coligação):</h4> 
                  <h5>{candidato.partido}</h5>
              </div>
              <div className='header-f'>
                <h3>{candidato.porcentagem}%</h3>
                Qtd de votos:<span>{Number(candidato.totalvotos).toLocaleString('pt-BR')}</span>
              </div>
              <span>Situação: <span>{candidato.situacao === 'n' ? candidato.situacao : 'Indefinida'}</span></span> 
            </div>
          </CM.Box>
        </CM.Container>  
      </Modal.Body>

      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}