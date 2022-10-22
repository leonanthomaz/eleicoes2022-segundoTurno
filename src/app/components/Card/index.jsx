import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'
import imgLula from '../../assets/img/lula.png'
import imgBolsonaro from '../../assets/img/bolsonaro.png'
import { BiRefresh } from "react-icons/bi";
import { CandidatoModal } from '../CandidatoModal'

export const Card = ({ data }) => {

    const [ list, setList ] = useState([])
    console.log('listagem:',list)

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleFind = (id, nome, partido, numero) => {
        console.log(id)
        // const item = data.filter(e => e.map(i => i.seq === id))
        setList({ id, nome, partido, numero })
        handleShow()
    }

    return (
    <C.Principal >

        {data.map((st, i)=>{
            return(
            <Fragment>
                <C.Titulo>
                    <h3>Acompanhe a apuração</h3>
                    <div className='titulo-header'>
                        <b>{st.pea}%</b> das urnas apuradas
                    </div>
                    <C.TituloUrnasApuradasContainer>
                        <b className='bleft'>0%</b><C.TituloUrnasApuradas porcentagem={st.pea}/><b className='bright'>100%</b>
                    </C.TituloUrnasApuradasContainer>
                    <div className='titulo-footer'>
                        <span>Última atualização: {st.dt} - {st.ht} (Horário local) - Fonte: TSE</span>
                    </div>
                </C.Titulo>
                <C.TopBar>
                   <span><a onClick={()=>{window.location.reload()}} className='atualizar'><BiRefresh/> Atualizar</a></span>
                </C.TopBar>

                <CandidatoModal 
                list={list} 
                handleClose={handleClose}
                show={show}
                setShow={setShow}
                />
                
                <C.Container>
                    {st.cand.map((c, i)=>{
                        return(
                        <C.Candidato key={i} eleito={c.e === 's'} onClick={()=>handleFind(
                            c.seq, c.nm, c.cc, c.n)}>
                            <div className='candidato-header'>
                                <div className='candidato-left'>
                                    <div className='candidato-img'>
                                        <img src={
                                            c.nm === "LULA" ? imgLula 
                                            : c.nm === "JAIR BOLSONARO" ? imgBolsonaro 
                                            : ''} />
                                    </div>
                                </div>
            
                                <div className='candidato-right'>
                                    <div className='candidato-votos'>
                                        <div className='candidato-porcentagem'>
                                            <h3>{c.pvap}%</h3>
                                        </div>
                                        <div className='candidato-qtd-votos'>
                                            <span>{Number(c.vap).toLocaleString('pt-BR')} votos</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
    
                            <div className='candidato-footer'>
                                <div className='candidato-nome'>
                                    <h2>
                                        {
                                            c.nm === "LULA" ? 'LULA' 
                                            : c.nm === "JAIR BOLSONARO" ? 'BOLSONARO' 
                                            : ''
                                        }
                                    </h2>
                                    <h5>Vice: {c.nv}</h5>
                                    {c.e === 's' ? 
                                        <C.EleitoInfo eleito={c.e === 's'}>
                                        {c.e === 's' ? <span>2º Turno</span> : <span>Não Eleito</span> }
                                        </C.EleitoInfo> :
                                        ''}
                                </div>
                            </div>
                        </C.Candidato>
                        )
                    })}
                </C.Container>
            </Fragment>
            )
        })}
    </C.Principal>
    )
}
