import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
    width: 100%;
    heigth: 100vh;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`;

const ProfContainer = styled.div`
    width: 30%;
    heigth: 50vh;
    border: 1px solid #000;
    border-radius: 10px;
`;
const StuExpContainer = styled.div`
    width: 70%;
    heigth: 50vh;
    border: 1px solid #000;
    border-radius: 10px;
`
;const CertSkillsContainer = styled.div`
    width: 70%;
    heigth: 50vh;
    border: 1px solid #000;
    border-radius: 10px;
`;


export default class Portafolio extends Component {
    render() {
        return (
            <Container>
                <ProfContainer>

                </ProfContainer>
                <StuExpContainer>

                </StuExpContainer>
                <CertSkillsContainer>

                </CertSkillsContainer>
            </Container>
        )
    }
}
