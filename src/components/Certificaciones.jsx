import React, { Component } from 'react'
import styled from "styled-components";

const Certificacion = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 20px;
    line-height: 20px;

`;
export default class Certificaciones extends Component {
    render() {
        return (
            <Certificacion>
                <h1>Certificaciones</h1>
                <p>Ingenieria de Petroleo</p>
                <p>Ingeniero de Yacimientos</p>
                <p>Monitoreo , acualizacion de base de datos local de pozos</p>
                <p>Curso de Javascript Platzi</p>
            </Certificacion>
        )
    }
}