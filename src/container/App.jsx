import React, { Component } from 'react';
import Portafolio from "../components/Portafolio";
import styled from "styled-components";
import '../style/general-styles.css';

const Container = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
`;

export class App extends Component {
    render() {
        return (
            <Container>
                <Portafolio />
            </Container>
        )
    }
}
