import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    height: 60px;
`;
const Wrapper = styled.div`
    padding : 10px 20px;
    display : flex;
    justify-content : space-between;
    align-items : center;
`;


const Left = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
`;

const Language = styled.span`
    font-size : 25px;
    cursor : pointer;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display : flex;
    align-items : center;
    margin-left : 25px;
    padding : 5px;
`

const Input = styled.input`
    border : none;
    font-size : 20px;
`


const Center = styled.div`
    flex : 1;
    text-align : center;
`;

const Logo = styled.h1`
    font-weight : bold;
    letter-spacing : 15px;
`


const Right = styled.div`
    flex : 1;
    display : flex;
    align-items : center;
    justify-content: flex-end;
`;

const MenuItems = styled.div`
    font-size: 20px;
    cursor : pointer;
    margin-left : 35px;
    margin-right : 15px;
`


const Navbar = () => {
    return (
        <div>
            <Container>
                <Wrapper>
                    <Left>
                        <Language>EN</Language>
                        <SearchContainer>
                            <Input placeholder="Search"></Input>
                            <Search style={{ color: "gray" }} ></Search>
                        </SearchContainer>
                    </Left>
                    <Center>
                        <Logo>Wooled</Logo>
                    </Center>
                    <Right>
                        <MenuItems>LOGIN</MenuItems>
                        <MenuItems>REGISTER</MenuItems>
                        <MenuItems>
                            <Badge badgeContent={4} color="primary">
                                <ShoppingCartOutlined></ShoppingCartOutlined>
                            </Badge>
                        </MenuItems>
                    </Right>
                </Wrapper>
            </Container>
        </div>
    )
}

export default Navbar;