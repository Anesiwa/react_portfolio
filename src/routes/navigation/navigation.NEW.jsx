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

const LinksWrapper = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #222;
  font-weight: 500;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  display: flex;
  border-top: 3px solid transparent;
  cursor: pointer;
  transition: all 220ms ease-in-out;
  &:hover {
    border-top: 2px solid var(--tertiary-color);
    color: var(--light-branding-color);
  }
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--branding-color);
  font-size: inherit;
`;
const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: var(--branding-color);
  color: (var--background-color);
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
      <NavBar>
        <NavigationContainer>
          <LeftSection>
            <Logo src="..//img/logo.png" />
            <LinksWrapper>
              <LinkItem>
                <Link href="/">Home</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/about">About</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/portfolio">Portfolio</Link>
              </LinkItem>
              <LinkItem>
                <Link href="/contact">Contact</Link>
              </LinkItem>
            </LinksWrapper>
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
