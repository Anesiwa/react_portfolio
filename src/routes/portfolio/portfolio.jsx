import React from "react";
import Footer from "../../components/footer/footer.component";
import Navigation from "../navigation/navigation.NEW";
import styled from "styled-components";
import Gallery from "./gallery/gallery";

const Section = styled.div`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 300;
  margin: 100px 0;

    @media only screen and (max-width: 768px) {
    scroll-snap-align: start;
   padding-top: 60px;
 `;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  justify-content: space-around;

  @media only screen and (max-width: 768px) {
    gap: 10px;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
  transition: all 220ms ease-in-out;
  font-weight: 500;
  align-items: center;
  justify-content: center;
  display: inline-flex;
`;

export default function Portfolio() {
  return (
    <div>
      <Navigation />
      <Section>
        <div>
          <List className="row d-flex">
            <ListItem className="filter">ALL </ListItem>
            <ListItem className="filter">REACT-JS</ListItem>
            <ListItem className="filter">HTML/CSS</ListItem>
            <ListItem className="filter">JAVASCRIPT</ListItem>
            <ListItem className="filter">TYPESCRIPT</ListItem>
          </List>
          <Gallery />
        </div>
      </Section>
      <Footer />
    </div>
  );
}
