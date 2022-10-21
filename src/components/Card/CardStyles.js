import styled from "styled-components";
import background from '../../assets/img/background.png'

export const Principal = styled.div`
/* height: calc(100vh - 80px); */
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-top: 10px;

@media(min-width: 720px){
    height: calc(100vh);
    background-image: url('https://abradep.org/wp-content/uploads/2020/09/abradep-bg.jpg');
}

@media(max-width: 720px){
   background-image: ${`url(${background})`};
}
`;

export const TituloContainer = styled.div`
text-align: center;
background: #eeeeee;
`;

export const TituloUrnasApuradasContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 80%;
margin: auto;
height: 20px;
/* box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; */
border-radius: 10px;
`;

export const TituloUrnasApuradas = styled.div`
background-image: linear-gradient(to right, blue, rgba(255,0,0,1));
height: 10px;
width: ${({ porcentagem }) => (porcentagem  ? `${parseFloat(porcentagem)}%` : '0%')};
/* width: 0%; */
border-radius: 20px;

`;

// export const TituloGrid = styled.div`
// /* display: grid;
// grid-template-columns: 100px auto; */
// `;

// export const TGLeft = styled.div`
// /* border: 2px solid red; */
// `;

// export const TGRight = styled.div`
// /* border: 2px solid red; */

// `;

export const Container = styled.div`
/* border: 2px solid red; */
display: grid;
grid-template-columns: auto auto;
align-items: center;
justify-content: center;
color: black;
gap: 10px;
/* line-height: 10px; */



@media(max-width: 720px){
    grid-template-columns: 200px 200px;
}

@media(max-width: 450px){
    grid-template-columns: 150px 150px;
}

`;

export const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
background: #eeeeee;
align-items: center;
border-radius: 10px;
max-width: 300px;
text-align: center;



img{
    width: 250px;
    height: 250px;
}

@media(max-width: 720px){
    
    img{
        width: 200px;
        height: 200px;
    }
}

@media(max-width: 450px){
    
    img{
        width: 180px;
        height: 180px;
    }
}


`;

export const Imagem = styled.div`

img{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    background: #bebebe;
}

@media(max-width: 720px){
    img{
        width: 180px;
        height: 180px;
    }
}

@media(max-width: 450px){
    img{
        width: 120px;
        height: 120px;
    }
}
`;

export const BoxInfo = styled.div`
margin: 10px;
`;

export const TituloCandidato = styled.div`
line-height: 20px;
padding-bottom: 10px;
`;

export const Titulo = styled.h2`

`;

export const Candidato = styled.h2`

@media(max-width: 720px){
    font-size: 20px;
}

@media(max-width: 450px){
    font-size: 16px;
}

`;

export const Vice = styled.span`
    font-size: 16px;
`;

export const EleitoInfo = styled.div`
border: ${({eleito}) => (eleito ? '2px solid green' : '2px solid red')};
background: ${({eleito}) => (eleito ? 'green' : 'red')};
color: white;
padding: 3px;
border-radius: 8px;
width: 100px;
margin: auto;
margin-top: 10px;

@media(max-width: 760px){
    font-size: 16px;
}
`;


export const PercentualTotal = styled.h2`
font-size: 40px;
font-weight: 900;

@media(max-width: 720px){
    font-size: 30px;
}

@media(max-width: 450px){
    font-size: 20px;
}
`;

export const PercentualVotos = styled.span`
font-size: 20px;
font-weight: 500;

@media(max-width: 720px){
    font-size: 18px;
}

@media(max-width: 450px){
    font-size: 12px;
}
`;

export const BotaoContainer = styled.div`
padding-top: 15px;
`;

export const Botao = styled.button`
background: green;
color: white;
padding: 10px;
border: none;
border-radius: 8px;
`;