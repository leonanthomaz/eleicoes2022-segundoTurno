import React from 'react'
import * as C from './CardStyles'
import imgLula from '../../assets/img/lula-img.png'
import imgBolsonaro from '../../assets/img/bolsonaro-img.png'


export const Card = ({ data }) => {
    return (
        <C.Principal >
            {data.map((st, i)=>{
                return(
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
                                        </C.Titulo>
                                    </C.TituloContainer>
                                    <C.EleitoInfo eleito={c.e === 's'}>
                                        {c.e === 's' ? 'Eleito' : 'Não eleito' }
                                    </C.EleitoInfo>
                                    <C.PercentualTotal>
                                        {c.pvap}%
                                    </C.PercentualTotal>
                                    <C.PercentualVotos>
                                        Votos: {c.vap}
                                    </C.PercentualVotos>
                                    <C.BotaoContainer>
                                        <C.Botao>Ver mais</C.Botao>
                                    </C.BotaoContainer>
                                </C.BoxInfo>
                            </C.Box>
                        )
                    })}
                    </C.Container>
                )
            })}
        </C.Principal>
    )
}
