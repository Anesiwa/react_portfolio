import Footer from "../../components/footer/footer.component";
import Navigation from "../navigation/navigation.NEW";
import styled from "styled-components";
import Headshot from "..//../images/Profile pic_no bg.png";
import Fast from "..//..//images/Fast.png";
import Dynamic from "..//..//images/lively.png";
import Responsive from "..//..//images/Responsive.png";
import Thorough from "..//..//images/Thorough.png";
import "./about-page.css";

const Section = styled.div`
  font-size: 14px;
  font-weight: 300;
`;
const Header = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  position: relative;
`;
const Body = styled.div`
  font-size: 14px;
  text-align: center;
  justify-content: center;
`;

const Focus = styled.div`
  font-weight: 700;
`;

const Snippet = styled.div`
  text-align: center;
`;

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <Header>
        <div className="row d-flex">
          <div className="col-lg-6 text-left content">
            <h1 className="">Hello I am Amelia Arku</h1>
            <h3 className="mt-3 content-job-location">
              Front-end Developer, based in U.S.A.
            </h3>
            <h2 className="mt-3">Who is she?</h2>
            <p className="mt-3 mb-4 about-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam
              aperiam provident tempora? Cumque adipisci, non dolorem quia, odit
              qui alias veniam excepturi rem dolor fugit dignissimos, sed
              voluptatum blanditiis harum.
            </p>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src={Headshot}
                class="img-fluid rounded profile-pic"
                alt="Picture of Amelia Arku, Front-end Developer"
              />
            </div>
          </div>
        </div>
      </Header>
      <Section className="mt-5 mb-5">
        <div className="row">
          <div className="col-md-3">
            <img src={Fast} class="img-fluid rounded" alt="" />
            <div>
              <Focus>Fast</Focus>
              <Snippet>
                My creations will adjust on any screen. Guarenteed.
              </Snippet>
            </div>
          </div>
          <div className="col-md-3">
            <img src={Dynamic} className="img-fluid rounded" alt="" />

            <div>
              <Focus>Dynamic</Focus>
              <Snippet>
                My creations will adjust on any screen. Guarenteed.
              </Snippet>
            </div>
          </div>
          <div className="col-md-3">
            <img src={Thorough} className="img-fluid rounded" alt="" />
            <Focus>Thorough</Focus>
            <Snippet>
              My creations will adjust on any screen. Guarenteed.
            </Snippet>
          </div>
          <div className="col-md-3">
            <img src={Responsive} class="img-fluid rounded" alt="" />
            <Focus>Responsive</Focus>
            <Snippet>
              My creations will adjust on any screen. Guarenteed.
            </Snippet>
          </div>
        </div>
        <Body>
          Body paragraphhhhhhhhhhhhhhhhhhhhhhBody paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh Body
          paragraphhhhhhhhhhhhhhhhhhhhhh Body paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh Body
          paragraphhhhhhhhhhhhhhhhhhhhhh Body paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh Body
          paragraphhhhhhhhhhhhhhhhhhhhhh Body paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh Body
          paragraphhhhhhhhhhhhhhhhhhhhhh Body paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh Body
          paragraphhhhhhhhhhhhhhhhhhhhhh Body paragraphhhhhhhhhhhhhhhhhhhhhh
          Body paragraphhhhhhhhhhhhhhhhhhhhhh
        </Body>
        <div className="mt-5">
          <a
            href="/"
            title="All of Amelia Arku's Front-End Developer Projects"
            className="btn btn-light btn-lg"
            rel="noreferrer"
          >
            See my projects
          </a>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
