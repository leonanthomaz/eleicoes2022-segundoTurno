import React, { Fragment, useState } from 'react'
import * as C from './CardStyles'
import imgLula from '../../assets/img/lula-img.png'
import imgBolsonaro from '../../assets/img/bolsonaro-img.png'

export const Card = ({ data }) => {

    return (
    <C.Principal >
        {data.map((st, i)=>{
            return(
                <Fragment>
                    <C.TituloContainer>
                        <C.TituloBox>
                            <C.TituloH1>Apuração Presidencial - 2º turno</C.TituloH1>
                            <C.TituloInfoUrnas><b>{st.pea}%</b> das urnas apuradas</C.TituloInfoUrnas>
                            <C.TituloUrnasApuradasContainer>
                                <b>0%</b><C.TituloUrnasApuradas porcentagem={st.pea}/><b>100%</b>
                            </C.TituloUrnasApuradasContainer> 
                            <C.TituloData>Última atualização {st.dt} {st.ht} (Horário local)</C.TituloData>
                        </C.TituloBox>                      
                    </C.TituloContainer>
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
                                    <C.TituloCandidato>
                                        <C.Candidato>
                                            {c.nm === 'LULA' ? 'LUIZ INÁCIO LULA DA SILVA' : 'JAIR MESSIAS BOLSONARO' }
                                        </C.Candidato>
                                        <C.Vice>
                                            Vice: {c.nv}
                                        </C.Vice>
                                    </C.TituloCandidato>
                                   {c.e === 's' ? 
                                    <C.EleitoInfo eleito={c.e === 's'}>
                                    {c.e === 's' ? <span>Eleito</span> : <span>não Eleito</span> }
                                    </C.EleitoInfo> :
                                    ''}
                                    <C.PercentualTotal>
                                        {c.pvap}%
                                    </C.PercentualTotal>
                                    <C.PercentualVotos>
                                        Votos: {Number(c.vap).toLocaleString('pt-BR')}
                                    </C.PercentualVotos>
                                </C.BoxInfo>
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
