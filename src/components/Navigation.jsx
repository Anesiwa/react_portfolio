import React from "react";
import styled from "styled-components";

const NavBar = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const NavigationContainer = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  padding: 10px 0;
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;
const Logo = styled.img`
  height: 80px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: var(--tertiary-color);
  color: var(--font-color);
  font-weight: 500;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;
export default function Navigation() {
  return (
    <div>
      <NavBar className="fixed-top">
        <NavigationContainer>
          <LeftSection>
            <Logo src="..//img/logo.png" />
            <List>
              <ListItem>Home</ListItem>
              <ListItem>Studio</ListItem>
              <ListItem>Work</ListItem>
              <ListItem>Contact</ListItem>
            </List>
          </LeftSection>

          <RightSection>
            <Icon src="..//img/logo.png" alt="search Amelia's Portfolio"></Icon>
            <Button>Hire Now</Button>
          </RightSection>
        </NavigationContainer>
      </NavBar>
    </div>
  );
}
