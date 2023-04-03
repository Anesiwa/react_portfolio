import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import "..//../App.css";

const ContactHeader = styled.div`
  padding: 20px;
`;
const ContactSection = styled.div`
  height: 100vh;
  align-items: center;
  display: flex;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;
const Title = styled.h1`
  font-weight: 200;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 3px solid var(--tertiary-color);
  border-radius: 5px;
  padding: 20px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: var(--light-branding-color);
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: var(--light-branding-color);
`;

const Button = styled.button`
  background-color: var(--tertiary-color);
  color: var(--font-color);
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const List = styled.ul`
  list-style: none;
  gap: 20px;
  line-height: 3;
  padding: 0;
  margin: 0 auto;
`;
const ListItem = styled.li`
  cursor: pointer;
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
    <Container>
      <div>
        <ContactHeader>
          <h1 className="text-center">Let's make something special</h1>
          <p className="text-center mb-5">
            Want to get in touch? I'd love to hear from you. Here's how you can
            reach me.
          </p>
        </ContactHeader>
        <br />
        <ContactSection>
          <div className="row d-flex justify-content-center">
            <div className="col-4">
              <p className="text-center">
                I'm always looking for new opportunities and connections, so my
                inbox is always open.
              </p>
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
            </div>
            <div className="col-6">
              <FormContainer>
                <Form ref={ref} onSubmit={handleSubmit}>
                  <Title>Get in touch</Title>
                  <Input placeholder="Name" name="name" />
                  <Input placeholder="Email" name="email" />
                  <TextArea
                    placeholder="What dream can I help you build?"
                    name="message"
                    rows={10}
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
  );
}
