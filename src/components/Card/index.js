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
                        <h1>Apuração</h1>
                        <div>{st.pea}% das urnas</div>
                        <div>(Horário local)</div>
                        <C.TituloUrnasApuradasContainer>
                            
                            <C.TituloUrnasApuradas porcentagem={st.pea}/>
                        </C.TituloUrnasApuradasContainer>
                        <div>Última atualização 04/10/2022 10:27:34</div>
                        {/* <C.TituloGrid>
                            { <C.TGLeft>
                                <p>D</p>
                                <p>D</p>
                                <p>D</p>
                            </C.TGLeft>
                            <C.TGRight>
                                <p>P</p>
                                <p>P</p>
                                <p>P</p>
                            </C.TGRight> }
                            <p>data dg {st.dg}</p>
                            <p>ultima dt {st.dt}</p>
                            <p>ultima h {st.ht}</p>
                        </C.TituloGrid> */}

                        
                        
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
