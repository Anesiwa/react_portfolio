import { FooterContainer, LeftSection, RightSection } from "./footer.styles";
import SocialMediaLinks from "./social-media-links";

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <LeftSection>
          <span>Open sourced code by Amelia Arku</span>
        </LeftSection>
        <RightSection>
          <SocialMediaLinks />
        </RightSection>
      </FooterContainer>
    </div>
  );
}
