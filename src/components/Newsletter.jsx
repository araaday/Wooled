import { Send } from "@material-ui/icons"
import styled from "styled-components"



const Container = styled.div`
    height : 60vh;
    background-color : #fcf5f5;
    display : flex;
    align-items : center;
    justify-content : center;
    flex-direction : column;
`

const Title = styled.h1`
    font-size : 70px;
    margin-bottom : 30px;
`

const Description = styled.div`
    font-size : 24px;
    font-weight : 300;
    margin-bottom : 20px;
`

const InputContainer = styled.div`
    width : 50%;
    height : 40px;
    background-color : white;
    display : flex;
    justify-content : space-between;
    border : 1px solid lightgray;
`

const Input = styled.input`
    border : none;
    flex : 8;
    padding-left : 30px;
    font-size: 20px;
`

const Button = styled.button`
    flex : 1;
    border: none;
    background-color : lightgreen;
    cursor : pointer;
`



const Newsletter = () => {
    return (
        <Container>
            <Title>
                Newsletter
            </Title>
            <Description>
                Get instant update on deals from your favourite items!
            </Description>
            <InputContainer>
                <Input placeholder="Your Email"></Input>
                <Button>
                    <Send></Send>
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter