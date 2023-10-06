
import styled from "styled-components"

const InputEstilizado = styled.input`
    width: 602px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid var(--Degrad-com-rosa, #C98CF1);
    color: #D9D9D9;
    background-color: rgba(0, 0, 0, 0);
    background-image: url('/imagens/search.png');
    background-repeat: no-repeat;
    background-size: 40px; 
    background-position: right;
`

const CampoTexto = () =>{
    return <InputEstilizado placeholder="O que você procura?" />;
}

export default CampoTexto