import styled from "styled-components";
import "./gallery-styles.css";
import Monster from "./img/Monster-rolodex-preview.png";
import Store from "./img/store-preview.png";
import Dictionary from "./img/dictionary-preview.png";
import ElaineBirthday from "./img/elaine-birthday-site-preview.png";
import Weather from "./img/weather-app-preview.png";

const Section = styled.section`
  align-items: center;
  justify-content: space-between;
  padding: 15px;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: var(--tertiary-color);
  color: var(--font-color);
  border: none;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: var(--branding-color);
    color: var(--secondary-color);
  }
`;
const Details = styled.div`
  color: var(--light-branding-color);
  text-align: center;
  margin-top: 2px;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    display: none;
  } ;
`;
const Title = styled.h2`
  color: var(--light-branding-color);
`;

const Desc = styled.p`
  color: var(--branding-color);
  font-weight: 600;
`;

const Gallery = () => {
  return (
    <Section className="card-list">
      <div className="card-container">
        <img className="img-fluid" alt="tbd" src={Monster} />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>

      <div className="card-container">
        <img className="img-fluid" alt="tbd" src={Store} />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>

      <div className="card-container">
        <img className="img-fluid" alt="tbd" src={Dictionary} />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>

      <div className="card-container">
        <img className="img-fluid" alt="tbd" src={ElaineBirthday} />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>

      <div className="card-container">
        <img className="img-fluid" alt="tbd" src={Weather} />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>

      <div className="card-container">
        <img
          className="img-fluid"
          alt="tbd"
          src={`https://robohash.org/${1}?set=set2&size=180x180`}
        />
        <Details>
          <Title>Monster Rolodex</Title>
          <Desc>React JS/ Typescript</Desc>
          <Button>Learn More</Button>
        </Details>
      </div>
    </Section>
  );
};

export default Gallery;
