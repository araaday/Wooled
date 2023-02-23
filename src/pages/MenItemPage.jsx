import styled from "styled-components";
import Bar from "../components/Bar";
import Navbar from "../components/ListNavbar";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { Search } from '@material-ui/icons';

const Container = styled.div`
`;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;


const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  font-size: 15px;
`;
const Option = styled.option`
align-items : center;
font-size: 20px;`;

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display : flex;
    align-items : center;
    margin-right : 25px;
    padding : 5px;
    height: 30px;
`


const Input = styled.input`
    border : none;
    font-size : 20px;
`

const Right = styled.div`
    display : flex;
    align-items : center;
`

const ProductList = () => {
    return (
        <Container>
            <Navbar />
            <Bar />
            <Title>MEN</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select>
                        <Option>
                            FEATURED
                        </Option>
                        <Option>SHIRT</Option>
                        <Option>PANTS</Option>
                        <Option>JACKET</Option>
                        <Option>SHORT</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Right>
                    <SearchContainer>
                        <Input placeholder="Search"></Input>
                        <Search style={{ color: "gray" }}></Search>
                    </SearchContainer>
                    <Filter>
                        <FilterText>Sort Products:</FilterText>
                        <Select>
                            <Option selected>Newest</Option>
                            <Option>Price (asc)</Option>
                            <Option>Price (desc)</Option>
                        </Select>
                    </Filter>
                </Right>
            </FilterContainer>
            <a href='/item'> <Products /> </a>
            <Newsletter />
            <Footer />
        </Container>
    );
};

export default ProductList;