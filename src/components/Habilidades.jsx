import React, { Component } from 'react'
import styled from "styled-components";
import '../style/Cer-Hab.css'

const Contenedor = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: -5px;
    
`;




export default class Habilidades extends Component {
    render() {
        return (
            <Contenedor>
                <h1>Habilidades</h1>

                <div class="container">
                    <div class="row">
                        <div class="col">
                            <p>Html</p>
                            <div class="progress">
                            <div class="progress-bar html" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col">
                            <p>CSS</p>
                            <div class="progress">
                            <div class="progress-bar Css" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col">
                            <p>Javascript</p>
                            <div class="progress">
                            <div class="progress-bar Javascript" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <div class="col">
                            <p>ReactJS</p>
                            <div class="progress">
                            <div class="progress-bar ReactJs" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Contenedor>
        )
    }
}