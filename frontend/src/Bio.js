import styled from "styled-components";

import helene_img from "../src/assets/helene.jpg"
import katia_img from "../src/assets/katia.jpg"
import plante from "../src/assets/plante-blanche2.png"
import plante2 from "../src/assets/plante-blanche.png"

const Bio = () => {

    return (
        <Wrapper>
            <Main>
                <BioArea>
                    <BioWrapper>
                        <BioImageWrapper>
                            <BioImage src={helene_img}/>
                        </BioImageWrapper>
                        <BioSeparator>
                            <BioSeparatorImage src={plante}/>
                        </BioSeparator>
                        <BioTextWrapper>
                            <BioName>Hélène Blat</BioName>
                            <BioText>
                            Passionnée depuis son plus jeune âge par les massages,<br></br>
                            Hélène a choisi de se professionnaliser en se formant à l’école Fleur de Peau.<br></br><br></br> 
                            La diversité de ses techniques telles que le Suédois, le Californien, l’Oriental, le Lomi-Lomi 
                            ainsi que le thérapeutique lui permettent de proposer un massage personnalisé et unique 
                            qui favorise l’équilibre du corps et de l’esprit.<br></br><br></br>
                            Elle combine les bienfaits de ses techniques à l’aide de mouvements fluides, 
                            de points de pression, d’étirements pour favoriser l’amplitude des tissus musculaires 
                            et une profonde relaxation.<br></br><br></br>
                            Elle utilise ses mains comme des instruments pour faire circuler les énergies 
                            et ainsi amener à l’harmonisation de l’être dans son ensemble.<br></br><br></br>
                            Membre du RMPQ
                            </BioText>
                        </BioTextWrapper>
                    </BioWrapper>
                    
                    <BioWrapper>
                        <BioImageWrapper>
                            <BioImage src={katia_img}/>
                        </BioImageWrapper>
                        <BioSeparator>
                            <BioSeparatorImage src={plante2}/>
                        </BioSeparator>
                        <BioTextWrapper>
                            <BioName>Katia Breton</BioName>
                            <BioText>
                            Katia Breton est massothérapeute agréée certifiée, ainsi que réflexologue.<br></br><br></br>
                            Ses techniques sont le suédois, la fasciathérapie, la réflexologie,<br></br>
                            la thérapie crânienne et le massage pour personnes âgées.<br></br><br></br>
                            Elle pratique depuis 2009.
                            Pour Katia, la massothérapie est synonyme de mouvement, créant plus de souplesse dans les tissus tout en activant le système parasympathique.<br></br><br></br>
                            L’écoute ainsi que l’intention dans ses mains lui permettent d’accompagner la personne vers un meilleur équilibre et bien-être.<br></br><br></br>
                            Elle travaille en respectant chaque personne dans sa globalité.<br></br><br></br>
                            Membre de la FQM
                            </BioText>
                        </BioTextWrapper>
                    </BioWrapper>                    
                </BioArea>
            </Main>
        </Wrapper>
    )
};

const Wrapper = styled.div`
    width: 100vw;
    min-width: 640px;
    display: flex;
    justify-content: center;
`

const Main = styled.div`
    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;    
`
const BioArea = styled.div`    
    height: 80vh;
    display: grid;
    grid-template-columns: 50% 50%;    
`

const BioWrapper = styled.div`    
    background-color: #7e9e6c;
    height: 75vh;
    width: 40vw;
    justify-self: center;
    align-self: center;
    display: grid;
    grid-template-rows: 40% 15% 40%;
`
const BioImageWrapper = styled.div`    
    height: 100%;
    width: 100%;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BioImage = styled.img`
    width: 40%;
    border-radius: 5px;    
`

const BioSeparator = styled.div`    
    height: 100%;
    width: 100%;
    justify-self: center;
    align-self: center;
    display: flex;
    justify-content: center;
`
const BioSeparatorImage = styled.img`
    width: 20%;
`
const BioTextWrapper = styled.div`    
    height: 100%;
    width: 90%;
    justify-self: center;
    align-self: center;
`

const BioName = styled.p`
    font-size: 24px;
    color: white;
    font-variant-caps: small-caps;
    padding-bottom: 10px;
    text-align: center;
`
const BioText = styled.p`
    font-size: 16px;
    color: white;    
`

export default Bio;