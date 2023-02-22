import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    padding-top : 0px;
    background-color : white;
    position : relative;
`;
const Arrow = styled.div`
    width : 50px;
    height : 50px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    background-color : #fff7f7;
    position : absolute;
    top: 0;
    bottom : 0;
    left : ${props => props.direction === "left" && "10px"};
    right : ${props => props.direction === "right" && "10px"};
    margin : auto;
    cursor : pointer;
    opacity : 0.5;
`;


const Wrapper = styled.div`
    height : 100%;
    background-color: white;
`
const Slide = styled.div`
    width : 90vw;
    height : 100vh;
    display : flex;
    align-items: center;
    padding-left : 200px;
    padding-top : 50px;
    
`

const ImgContainer = styled.div`
   flex : 1; 
   height : 100%;
   background-color: EBEBEB;
`
const Image = styled.img`
    height : 80%
`

const InfoContainer = styled.div`
    flex : 1;
    padding-right: 120px;
    padding-bottom : 150px;
    margin : 10px;
`

const Title = styled.h1`
    font-size : 100px;
    font-weight : 2000;
`

const Description = styled.p`
    top : 0px;
    margin : 50px 0px;
    font-size : 30px;
    font-weight : 2000;
    letter-spacing : 2px;
`

const Button = styled.button`
    padding : 10px;
    font-size : 20px;
    background-color : transparent;
     cursor : pointer;
`



const Slider = () => {
    return (
        <Container>
            <Arrow direction="left">
                <ArrowLeftOutlined>
                </ArrowLeftOutlined>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImgContainer>
                        <Image src='https://i.ibb.co/10NbL9X/model1.jpg'></Image>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>SUMMER SALE</Title>
                        <Description>SHOP NOW AND ENJOY FREE SHIPPING</Description>
                        <Button>SHOP NOW</Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction="right">
                <ArrowRightOutlined>
                </ArrowRightOutlined>
            </Arrow>
        </Container>
    )
}

export default Slider