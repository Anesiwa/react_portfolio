import "./footer.styling.css";

export default function SocialMediaLinks() {
  return (
    <div className="footer-social-links">
      <a
        className="footer-social-icons"
        href="https://github.com/Anesiwa/Portfolio-Project_Preliminary"
        target="_blank"
        rel="noreferrer"
        title="Github logo"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="mailto:lwvibed@gmail.com"
        title="Email Amelia Arku"
        className="footer-social-icons"
      >
        <i className="fas fa-envelope"></i>
      </a>
      <a
        href="https:/www.linkedin.com/in/ameliaarku"
        title="Connect with Amelia Arku on LinkedIn"
        target="_blank"
        rel="noreferrer"
        className="footer-social-icons"
      >
        <i className="fab fa-linkedin"></i>
      </a>

      <a
        href="https://www.lifewellvibed.com"
        title="Check out Amelia's personal Wordpress website"
        rel="noreferrer"
        className="footer-social-icons"
      >
        Life Well Vibed
      </a>
    </div>
  );
}
