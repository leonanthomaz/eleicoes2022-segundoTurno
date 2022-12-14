import styled from "styled-components";
import { BiRefresh } from "react-icons/bi";
import { FaVoteYea } from "react-icons/fa";

export const Principal = styled.div`
min-height: calc(100vh - 90px);
background-size: cover;
background-repeat: no-repeat;
background-position: center;
padding-top: 10px;
padding-bottom: 10px;
background-image: url('https://cep.unifesp.br/images/abstrato1.png');


h2{
    text-align: center;
    padding: 10px;
    font-weight: 700;
    background: whitesmoke;
    margin: 10px;
    color: green;
    text-transform: uppercase;
}
`;

export const Titulo = styled.div`
padding: 10px;
text-align: center;
line-height: 20px;
background: #4747477c;
color: white;
padding-top: 10px;

.titulo-footer{
    font-size: 13px;
}

@media(max-height: 500px){
    max-height: 130px;
    padding-top: 0px;
    
   .titulo-header{
        font-size: 14px;
   }

   .titulo-footer{
        font-size: 10px;
   }
}
`;

export const IconAtualizar = styled(BiRefresh)`
    font-size: 25px;
    margin-right: 3px;
`;

export const IconVotos = styled(FaVoteYea)`
    font-size: 20px;
    margin-right: 5px;
`;

export const TopBar = styled.div`
display: flex;
justify-content: center;
align-items: center;

.atualizar, .gerais, .estados{
    background: #434392ee;
    min-width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 7px;
    color: white;
    border-radius: 10px;  
    text-decoration: none;
    cursor: pointer;
    font-size: 16px;
    flex-wrap: wrap;

    @media(max-height: 500px){
        font-size: 12px;
        margin: 3px;
        padding: 2px;
    }

    @media(max-width: 400px){
        font-size: 10px;
        padding: 5px;
        min-width: 90px;
    }
}

.estados{
    padding: 10x;
}

`;

export const TituloUrnasApuradasContainer = styled.div`
display: grid;
grid-template-columns: 30px auto 30px;
width: 320px;
margin: auto;
border-radius: 10px;
align-items: center;
font-size: 12px;

.bleft{
    margin-left: 10px;
}

.bright{
    margin-left: 5px;
}
`;

export const TituloUrnasApuradas = styled.div`
margin: auto;
width: 300px;
margin: 2px;
border: 1px solid whitesmoke;
border-radius: 20px;
transition: all ease-in-out 0.5s;
`;

export const Container = styled.div`

display: grid;
grid-template-columns: auto auto;
justify-content: center;
align-items: center;
gap: 8px;
padding-top: 10px;


@media(max-width: 375px){
    gap: 3px;
    padding-top: 5px;
}


`;

export const Candidato = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

background: #eeeeee;
border-radius: 10px;
cursor: pointer;

box-shadow: ${({eleito}) => (eleito ? 'rgba(30, 179, 16) 0px 5px 15px' : 'rgba(0, 0, 0, 0.35) 0px 5px 15px')};

width: 320px;
padding: 8px;


@media(max-width: 760px){
    width: 200px;
}

@media(max-width: 450px){
    width: 170px;
}

@media(max-width: 375px){
    width: 160px;
    padding: 3px;
}

.candidato-header{
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
    padding: 10px;
    

    @media(max-height: 500px) and (min-width: 760px){
        display: grid;
        grid-template-columns: auto auto;
        padding: 5px;
    }

    /* @media(max-width: 760px){
        width: 200px;
        height: 150px;
    } */

    .candidato-left{
        display: flex;
        align-items: center;
        justify-content: center;

        .candidato-img{
            border-radius: 50%;
            width: 150px;
            height: 150px;

            img{
                background: ${({eleito}) => (eleito ? '#93f893' : '#f89393')};
                width: 100%;
                border-radius: 50%;
            }

            @media(max-height: 500px) and (min-width: 760px){
                /* width: 130px; */
                width: 100px;
                height: 100px;
                margin-right: 24px;
                padding-bottom: 30px;
            }

            @media(max-width: 760px){
                width: 130px;
                height: 130px;

                img{
                    border: ${({eleito}) => (eleito ? '2px solid #93f893' : '2px solid #f89393')};
                }
            }

            @media(max-width: 450px){
                width: 90px;
                height: 90px;
                margin: auto;

                img{
                    width: 100%;
                }
            }

        }
    }

    .candidato-right{
        /* line-height: 9px; */
        text-align: center;
        padding-top: 10px;

        .candidato-votos{

            @media(max-height: 500px) and (min-width: 760px){
                /* width: 130px; */
                text-align: end;
                margin-right: 25px;
            }

            .candidato-porcentagem h3{

                font-size: 40px;
                font-weight: 900;
                color: #090983;

                @media(max-height: 500px){
                    /* width: 130px; */
                    font-size: 35px;
                }

                @media(max-width: 760px){
                    font-size: 32px;
                }

                @media(max-width: 450px){
                    font-size: 30px;
                }
            }

            .candidato-qtd-votos span{
               
                font-size: 16px;
                color: #838383;
                line-height: 15px;

                @media(max-height: 500px){
                    /* width: 130px; */
                    font-size: 12px;
                    text-align: end;
                    
                }

                @media(max-width: 760px){
                    font-size: 12px;
                }
            }
        }
    }
}

.candidato-footer{
    text-align: center;

    .candidato-nome{

        h2{
            font-size: 30px;
            font-weight: 900;
            color: #187918;

            @media(max-height: 500px){
                font-size: 25px;
            }

            @media(max-width: 760px){
                font-size: 25px;
            }

            @media(max-width: 500px){
                font-size: 20px;
            }

            @media(max-width: 375px){
                font-size: 18px;
            }
        }

        h5{
            font-size: 18px;

            @media(max-height: 500px){
                font-size: 14px;
            }

            @media(max-width: 760px){
                font-size: 14px;
            }

            @media(max-width: 500px){
                font-size: 10px;
            }
        }
    }

    .candidato-qtd-votos{
        text-align: end;

        @media(max-width: 760px){
            font-size: 12px;
        }
    }
}

.candidato-info-eleito{
    border: 2px solid red;
}

`;

export const EleitoInfo = styled.div`

display: flex;
text-align: center;
align-items: center;
justify-content: center;
height: 12px;
padding: 10px;
border-radius: 8px;

border: ${({eleito}) => (eleito === "s" ? '2px solid green' : eleito === "n" ? '2px solid red' : 'none')};
background: ${({eleito}) => (eleito === "s" ? 'green' : eleito === "n" ? 'red' : 'none')};

span{
    color: white;
    text-align: center;
}

@media(max-width: 760px){
    font-size: 16px;
}
`;