import React from 'react'
import '../style/About.css'
import styled from 'styled-components';


const AboutStyle = styled.div`
    text-align: center;
    width: 100%;
    height: 100vh;
    border-radius: 20px;
    padding:10px;
    
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        flex-direction: row;
      }
`;


const AboutAvatar = styled.div`
    margin-top: 30px;
    margin-bottom: 20%;
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
    padding: 10px 0;
    margin-bottom:40px;
`;
const AboutFooter = styled.img `
    width: 20px;
    height: 20px;
    display: flex-inline;
    margin: 20px;
`

//funcion statefull
export const About = () => {
    return (
        <div>
          
          <AboutStyle> 
              <div className="About-container">
                  <AboutAvatar>
                    <figure>
                      <AboutImg src="https://3.bp.blogspot.com/-JfL1o7oSnKI/VmodObHF9cI/AAAAAAAABLY/nKKRXw0-yiU/s1600/homero_456_336.jpg" alt="Mi foto" />
                    </figure>  
                  </AboutAvatar>

                  <AboutName>
                      <h2>Woondeling Jose Colina Martinez</h2>
                    </AboutName>
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

