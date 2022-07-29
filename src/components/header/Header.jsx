import { SearchRounded } from "@mui/icons-material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 10px 20px;
`;
const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Left = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;
const Language = styled.div``;
const Search = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: 5px;
  margin-left: 25px;
  border-radius: 3px;
`;
const SearchInput = styled.input`
  border: none;
  &:focus {
    outline: none;
  }
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Logo = styled.div`
  font-size: 32px;
  font-family: "Rubik", sans-serif;
`;
const Menus = styled.div`
  margin-left: 25px;
`;

export const Header = () => {
  return (
    <Container>
      <Wrapper>
        <NavBar>
          <Left>
            <Language>EN</Language>
            <Search>
              <SearchInput />
              <SearchRounded style={{ color: "gray", fontSize: "24px" }} />
            </Search>
          </Left>
          <Center>
            <Logo>Flone.</Logo>
          </Center>
          <Right>
            <Menus>Register</Menus>
            <Menus style={{ marginLeft: "5px" }}>/ Sign In</Menus>
            <Menus>
              <Badge
                badgeContent={4}
                color="primary"
              >
                <ShoppingCartOutlinedIcon />
              </Badge>
            </Menus>
          </Right>
        </NavBar>
      </Wrapper>
    </Container>
  );
};
