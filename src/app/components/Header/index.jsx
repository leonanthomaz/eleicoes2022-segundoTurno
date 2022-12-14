import React from 'react'
import * as H from './HeaderStyles'
import brasao from '../../assets/img/brasao.png'

export const Header = () => {
    return (
        <H.Container>
            <H.Titulo>Eleições 2022 - 2º Turno</H.Titulo>
            <H.Brasao>
                <img src={brasao} alt="Brasão da Presiência da República" loading="lazy" />
            </H.Brasao>
        </H.Container>
    )
}
