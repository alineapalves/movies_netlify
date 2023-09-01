import React from "react";
import styled from 'styled-components';

const Box = styled.div`
width:220px;
height: 380px;
background-color: #38161b;
margin: 10px;
margin-top: 25px;
`;

const ImagemBox = styled.img`
width: 220px;
height: 380px;
`;

const Button = styled.button`
 width: 100px;
 height: 25px;
 background-color: #6d2f39;
 color: #fff;
 border-radius: 8px;
 box-shadow: none;
 margin: 8px;
 cursor: pointer;
`
const Sinopse = styled.div`
width: auto;
height: 130px;
background-color: #c9c9c9;
text-align: justify;
padding: 8px;
`;

export default function CaixaFilme ({movies}){
    return (
        <>
            <Box>
                 <ImagemBox src={movies.image} alt="" />
                 <Sinopse>{movies.sinopse}</Sinopse>
                 <a href={movies.url}><Button>Saiba +</Button></a>
            </Box>
        
        </>
    )

}