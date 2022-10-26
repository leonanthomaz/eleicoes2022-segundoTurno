import React from 'react'
import Modal from 'react-bootstrap/Modal'
import * as CM from './CandidatoModalStyles'
import { GrClose } from "react-icons/gr";

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
    <CM.Container>
      <CM.Header>
          <GrClose 
          style={{color: '#14141498', 
          float: 'right', 
          fontSize: '20px',
          cursor: 'pointer'
          }} onClick={handleCloseCandidato}
          />

        <CM.Title>{candidato.nome === "LULA" ? 'LULA' 
          : candidato.nome === "JAIR BOLSONARO" ? 'JAIR BOLSONARO'
          : ''}</CM.Title>

      </CM.Header>
      <CM.Box>
            <div className='left'>
              <div className='left-img'>
                <img 
                src={
                  candidato.nome === "LULA" ? imgLula 
                  : candidato.nome === "JAIR BOLSONARO" ? imgBolsonaro 
                  : ''} alt={`Imagem do candidato ${candidato.nome}.`} loading="lazy" width={150} 
                />
              </div>
              <h3>{candidato.numero}</h3>
              <div className='left-h'>
                  <h5>{candidato.partido}</h5>
              </div>
            </div>
            <div className='right'>
              <div className='right-h'>
                <h3>{candidato.porcentagem}%</h3>
              </div>
              <div className='right-f'>
                <span>Votos: {Number(candidato.totalvotos).toLocaleString('pt-BR')}</span>
                <span>Situação: {candidato.situacao ? candidato.situacao : 'Indefinida'}</span> 
              </div>
            </div>
          </CM.Box>
      </CM.Container>  
      <Modal.Footer>
          Fonte: TSE
      </Modal.Footer>
    </Modal>
  )
}