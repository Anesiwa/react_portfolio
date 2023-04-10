import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "..//../App.css";
import Navigation from "../navigation/navigation.NEW";
import Footer from "../../components/footer/footer.component";

const ContactHeader = styled.div`
  padding: 20px;
  @media only screen and (max-width: 768px) {
    height: 70vh;
  }
`;
const ContactSection = styled.div`
  height: 80vh;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-top: 100px;
  align-items: center;
  
 }
`;
const Title = styled.h2`
  font-weight: 200;
  color: var(--branding-color);

  @media only screen and (max-width: 768px) {
    color: var(--tertiary-color);

`;
const HeaderTitle = styled.h1`
  font-size: 74px;
  font-weight: 200;

  @media only screen and (max-width: 768px) {
    font-size: 55px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    align-items: center;
    height: 100vh;
  }
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
`;
const Section = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  padding: 20px;
  background-color: var(--light-branding-color);
  border: none;
  border-radius: 5px;
  ::placeholder {
    color: var(--font-color);
  }
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--light-branding-color);

  ::placeholder {
    color: var(--font-color);
  }
`;

const Button = styled.button`
  background-color: var(--tertiary-color);
  color: var(--font-color);
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  &:hover {
    background-color: var(--secondary-color);
    color: var(--light-branding-color);
  }
`;

const List = styled.ul`
  list-style: none;
  gap: 20px;
  line-height: 3;
  padding: 0;
  margin: 0 auto;
  color: var(--branding-color);

  @media only screen and (max-width: 768px) {
    color: var(--tertiary-color);
  }
`;
const ListItem = styled.li`
  cursor: pointer;
`;
const Paragraph = styled.p`
  display: flex;
  color: var(--branding-color);
  @media only screen and (max-width: 768px) {
    color: var(--tertiary-color);
  }
`;

export default function ContactPage() {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rmwq9yo",
        "template_m9j8whc",
        ref.current,
        "N3zSGVVF4V_8OFM3K"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <div>
      <Navigation />
      <Container>
        <div>
          <ContactHeader>
            <HeaderTitle className="text-center">
              Let's make something special
            </HeaderTitle>
            <p className="text-center mb-5">
              Want to get in touch? I'd love to hear from you. Here's how you
              can reach me.
            </p>
          </ContactHeader>
          <br />
          <ContactSection>
            <div className="row d-flex">
              <Section className="col-6">
                <Paragraph className="text-center">
                  I'm always looking for new opportunities and connections, so
                  my inbox is always open.
                </Paragraph>
                <List>
                  <ListItem>
                    Email:
                    <a
                      href="mailto:lwvibed@gmail.com"
                      title="Email Amelia Arku"
                      className="social-icons"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </ListItem>
                  <ListItem>Phone: 1 (765) 430-7768 </ListItem>
                  <ListItem>
                    LinkedIn{" "}
                    <a
                      href="https:/www.linkedin.com/in/ameliaarku"
                      title="Connect with Amelia Arku on LinkedIn"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icons"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </ListItem>

                  <ListItem>
                    Github
                    <a
                      className="social-icons"
                      href="https://github.com/Anesiwa/Portfolio-Project_Preliminary"
                      target="_blank"
                      rel="noreferrer"
                      title="Github logo"
                    >
                      <i className="fab fa-github"></i>
                    </a>
                  </ListItem>
                </List>
              </Section>
              <div className="col-6">
                <FormContainer>
                  <Form ref={ref} onSubmit={handleSubmit}>
                    <Title>Get in touch</Title>
                    <Input placeholder="Name" name="name" />
                    <Input placeholder="Email" name="email" />
                    <TextArea
                      placeholder="What dream can I help you build?"
                      name="message"
                      rows={8}
                    />
                    <Button type="submit">Send</Button>
                    {success &&
                      "Your message has been sent. I'll get back to you soon"}
                  </Form>
                </FormContainer>
              </div>
            </div>
          </ContactSection>
        </div>
      </Container>
      <div className="bottomContainer">
        <Footer />
      </div>
    </div>
  );
}
