import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 20px 30px;
    overflow-x: hidden;
    overflow-y: scroll;
    scrollbar-width: thin;
    box-sizing: border-box;

    &::-webkit-scrollbar {
        width: 7px;
        height: 90%;
        background-color: inherit;
    }
    &::-webkit-scrollbar-track{
        border-radius: 10px;
        background-color: inherit;
    }
    &::-webkit-scrollbar-thumb{
        background-color: #797979;
        border-radius: 20px;
}
`;

const Studies = styled.div`
    width: 100%;
    height: 50%;
    margin-bottom: 20px;
`;
const StudiesInfo = styled.div`

`;
const InfoSection = styled.div`
    margin-bottom: 10px;
`;
const Experience = styled.div`
    width: 100%;
    height: 50%;
`;
const ExperienceInfo = styled.div`
    padding-bottom:20px;
`;
const Subtitles = styled.div`
    text-transform: uppercase;
    font-weight: 700;
    padding: 10px 0;
`;

export class EstudiosExperiencia extends Component {
    render() {
        return (
            <Container>
                <Studies>
                    <Subtitles>estudios</Subtitles>
                    <StudiesInfo>
                        <InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                ingeniero informatico
                            </p>
                        </InfoSection>
                        <InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection>
                    </StudiesInfo>
                </Studies>
                <Experience>
                    <Subtitles>experiencia</Subtitles>
                    <ExperienceInfo>
                        <InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection>
                        <InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection><InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection><InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection><InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection><InfoSection>
                            <h4>PCJIC - 2016</h4>
                            <p>
                                Magister en ingenieria de software
                            </p>
                        </InfoSection>
                    </ExperienceInfo>
                </Experience>
            </Container>
        )
    }
}

