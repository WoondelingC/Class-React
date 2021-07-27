import React from 'react'
import '../style/About.css'
import styled from 'styled-components';


const AboutStyle = styled.div`
    text-align: center;
`;

const AboutAvatar = styled.div`
    padding: 2em 0 0 0;
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
                    <AboutName>
                      <h2>Woondeling</h2>
                    </AboutName>
                  </AboutAvatar>
              </div>
              </AboutStyle> 
          </div>  
        
    )
}

