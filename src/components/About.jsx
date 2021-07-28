import React from 'react'
import '../style/About.css'
import styled from 'styled-components';


const AboutStyle = styled.div`
    text-align: center;
    width: 250px;
    margin:100px 0 0 300px;
    border: 2px solid blue;
    border-radius: 20px;
    padding:10px;
`;


const AboutAvatar = styled.div`
    padding:0;
`;

const AboutImg = styled.img`
    border-radius: 100%;
    width: 160px;
    height: 160px;
    border: 2px solid #3F51B5;
    margin: 0 auto;
    display: block;
    box-shadow: 0 0 10px rgba(0,0,0,0,0.6);
`;

const AboutName = styled.div`
    text-align: center;
`;

const AboutInf = styled.div `
text-align: center;
margin-bottom:50px;
`;
const AboutFooter = styled.img `
width: 20px;
height: 20px;
display: flex-inline;
margin-left: 20px;
`

//funcion statefull
export const About = () => {
    return (
        <div>
          
          <AboutStyle> 
              <div className="About-container">
                  <AboutAvatar>
                    <figure>
                      <AboutImg src="https://w7.pngwing.com/pngs/359/411/png-transparent-computer-icons-user-profile-service-others-service-business-formal-wear.png" alt="Mi foto" />
                    </figure>
                    <AboutName>
                      <h2>Woondeling Jose Colina Martinez</h2>
                    </AboutName>
                  </AboutAvatar>
              </div>
              <AboutInf>
              <p>Estudiante del curso oficial Frontend</p>
              </AboutInf>
              <div>
                  Bogotá, Colombia 
              </div>
              <footer>
                  <figure>
                      <AboutFooter src="https://images.vexels.com/media/users/3/137253/isolated/lists/90dd9f12fdd1eefb8c8976903944c026-logotipo-del-icono-de-facebook.png" alt="" />
                      <AboutFooter src="https://p.kindpng.com/picc/s/378-3783009_icono-pequeo-de-linkedin-hd-png-download.png" alt="" />
                      <AboutFooter src="https://image.flaticon.com/icons/png/512/25/25231.png" alt="" />
                  </figure>
              </footer>
              </AboutStyle> 
          </div>
          
    )
}

