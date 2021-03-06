import React, { Component } from 'react';
import styled from 'styled-components';

import { EstudiosExperiencia } from './EstudiosExperiencia';
import { About } from './About';

import Habilidades from './Habilidades';
import Certificaciones from './Certificaciones';

const Container = styled.div`
    background-color: #ccc;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        flex-direction: row;
      }

`;

const ProfContainer = styled.div`
    background-color: #ccc;
    width: 35%;
    height: 100%;
    border: 1px solid #000;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
`;
const StuExpContainer = styled.div`
    background-color: #ccc;
    width: calc( 65% - 25px);
    height: calc(50% - 5px);
    border: 1px solid #000;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
`;
const CertSkillsContainer = styled.div`
    background-color: #ccc;
    width: calc( 65% - 25px);
    height: calc(50% - 5px);
    border: 1px solid #000;
    border-radius: 10px;

    @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
`;

export default class Portafolio extends Component {
    render() {
        return (
            <Container>
                <ProfContainer>
                    <About />
                </ProfContainer>
                <StuExpContainer>
                    <EstudiosExperiencia />
                </StuExpContainer>

                <CertSkillsContainer>
                    <Certificaciones></Certificaciones>
                    <Habilidades></Habilidades>
                </CertSkillsContainer>



            </Container>
        )
    }
}
