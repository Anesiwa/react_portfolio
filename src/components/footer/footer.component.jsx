import SocialMediaLinks from "./social-media-links";
import "./footer.styling.css";
import styled from "styled-components";

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  line-height: 3;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;
const FooterContainer = styled.div`
  width: 1400px;
  display: flex;
  padding: 10px 0;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

    @media only screen and (max-width: 768px) {
          display:none;
`;

const RightSection = styled.div`
  display: flex
  align-items: center;
  gap: 50px;
  
  @media only screen and (max-width: 768px) {
    gap: 10px;

  }
`;
export default function Footer() {
  return (
    <FooterWrapper>
      <FooterContainer className="footerContainer">
        <LeftSection>
          <p className="text-center">
            Open sourced code by Amelia Arku on Github
          </p>
        </LeftSection>
        <RightSection>
          <SocialMediaLinks />
        </RightSection>
      </FooterContainer>
    </FooterWrapper>
  );
}
