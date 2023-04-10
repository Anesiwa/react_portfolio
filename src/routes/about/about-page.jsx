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

export default function AboutPage() {
  return (
    <div>
      <Navigation />
      <Section>
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
            <a
              href="/"
              title="All of Amelia Arku's Front-End Developer Projects"
              className="btn btn-light btn-lg"
              rel="noreferrer"
            >
              See my projects
            </a>
          </div>
          <div className="col-lg-6">
            <div>
              <img
                src=""
                class="img-fluid rounded profile-pic"
                alt="Picture of Amelia Arku, Front-end Developer"
              />
            </div>
          </div>
        </div>
      </Section>
      <Footer />
    </div>
  );
}
