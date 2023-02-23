import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Bar from "../components/Bar";
import Footer from "../components/Footer";
import Navbar from "../components/ListNavbar";
import Newsletter from "../components/Newsletter";


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
  background-color : #ccf3fc;
  border: 5px solid black;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  
`;

const Title = styled.h1`
  font-weight: 900;
`;
const Brand = styled.p`
    padding-top : 10px;
    font-size : 18px;
    font-weight : 700;
`;
const Desc = styled.p`
  margin: 70px 0px;
  font-size :25px
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 900;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 10px 9px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  font-weight: 900;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 1000;
  &:hover{
      background-color: #f8f4f4;
  }
`;

const Item = () => {
  return (
    <Container>
      <Navbar />
      <Bar />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.pngarts.com/files/3/Women-Jacket-PNG-High-Quality-Image.png" />
        </ImgContainer>
        <InfoContainer>
          <Title>Brown Denim Jacket</Title>
          <Brand>Louis Vuitton</Brand>
          <Desc>
            This heavy-duty canvas chore coat has a minimalist, boxy silhouette, with square
            chest pockets and a hidden snap button front closure. It has two roomy kangaroo pockets
            and is lined with cotton. Signatures include a contrasting pin
            under the collar and a retro embroidered Louis Vuitton on the bottom left pocket.
          </Desc>
          <Price>$ 2500</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color : </FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size : </FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Item;