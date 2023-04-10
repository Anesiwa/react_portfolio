import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Footer from "../../components/footer/footer.component";
import Navigation from "../navigation/navigation.NEW";
import styled from "styled-components";

const Section = styled.div`
  height: 90vh;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
  font-size: 14px;
  font-weight: 300;
`;

export default function Portfolio() {
  return (
    <div>
      <Navigation />

      <div classname="row">
        <div className="col-4">column1 </div>
        <div className="col-4">column1 </div>
        <div className="col-4">column1 </div>
      </div>
      <CardGroup>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{" "}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
      <Footer />
    </div>
  );
}
