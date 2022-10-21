import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'
import imgLula from '../../assets/img/lula-img.png'
import imgBolsonaro from '../../assets/img/bolsonaro-img.png'
// import Modal from 'react-bootstrap/Modal';
// import { Modal } from "react-bootstrap";
// import { GrClose } from "react-icons/gr";


export const Card = ({ data }) => {
    // const [open, setOpen] = useState(false);
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <C.Principal >
            <C.TituloPrincipal>Apuração</C.TituloPrincipal>
            {data.map((st, i)=>{
                return(
                    <Fragment>
                        <div>
                            <p>data dg {st.dg}</p>
                            <p>ultima dt {st.dt}</p>
                            <p>ultima h {st.ht}</p>
                        </div>
                    <C.Container key={i} >
                    {st.cand.map((c, i)=>{
                        return (
                            <C.Box key={i}>
                                
                                <C.Imagem>
                                    <figure>
                                        <img src={c.nm === 'LULA' ? imgLula : imgBolsonaro} />
                                    </figure>
                                </C.Imagem>
                                <C.BoxInfo>
                                    <C.TituloContainer>
                                        <C.Titulo>
                                            {c.nm === 'LULA' ? 'LUIZ INÁCIO LULA DA SILVA' : 'JAIR MESSIAS BOLSONARO' }
                                            <p>{c.nv}</p>
                                        </C.Titulo>
                                    </C.TituloContainer>
                                    <C.EleitoInfo eleito={c.e === 's'}>
                                        {c.e === 's' ? 'Eleito' : 'Não eleito' }
                                    </C.EleitoInfo>
                                    <C.PercentualTotal>
                                        {c.pvap}%
                                    </C.PercentualTotal>
                                    <C.PercentualVotos>
                                        Votos: {Number(c.vap).toLocaleString('pt-BR')}
                                    </C.PercentualVotos>
                                    {/* <C.BotaoContainer>
                                        <C.Botao onClick={()=>handleShow(c.seq)}>Ver mais</C.Botao>
                                    </C.BotaoContainer> */}
                                </C.BoxInfo>
                            {/* <Modal 
                            key={i}
                            size="lg"
                            aria-labelledby="contained-modal-title-vcenter"
                            centered
                            show={show} 
                            onHide={handleClose}
                            // style={{background: '#ecececce', padding: '30px'}}
                            >
                                <Modal.Body style={{background: '#ecececce', padding: '30px'}}>
                                <GrClose 
                                style={{color: '#14141498', 
                                float: 'right', 
                                fontSize: '30px',
                                cursor: 'pointer'
                                }} onClick={handleClose}
                                />

                            
                                </Modal.Body >
                            </Modal> */}
                        </C.Box>
                        
                        )
                    })}
                    </C.Container>
                    </Fragment>
                )
            })}
        </C.Principal>
    )
}
