import styled from "styled-components";

const Contact = () => {

    return (
        <Wrapper>
            <ContactWrapper>
                <Placeholder>Contact</Placeholder>
            </ContactWrapper>
        </Wrapper>
    )
};

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
`

const ContactWrapper = styled.div`

    height: 85vh;
    width: 98vw;
    margin-top: 0px;
    border-radius: 0px 0px 15px 15px;
    background-color: white;
    box-shadow: 1px 8px 8px #888888;
    display: grid;
    grid-template-rows: 10% 80% 10%;
    justify-content: center;  

`
const Placeholder = styled.p`
    font-size: 32px;
`
export default Contact;