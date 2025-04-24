import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minai from "../../Assets/Projects/minai.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import proto from "../../Assets/Projects/proto.png";
import medicine from "../../Assets/Projects/medicine.png";
import mlpcos from "../../Assets/Projects/mlpcos.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        {/* <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row> */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={minai} // Replace with your actual image import
      isBlog={false}
      title="MinAI 2.0 - Chat with PDFs"
      description="A smart AI web app to chat with multiple PDFs using Streamlit, LangChain, and Google Generative AI. Supports FAISS-based semantic search, chat history, dark mode, and more."
      ghLink="https://github.com/bhargava-prashant/MinAI-2.0"
      demoLink="https://minai-2-0.onrender.com/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={proto}
      isBlog={false}
      title="ProtoQuery Search Engine"
      description="A high-performance search engine built with Go, MongoDB, and React. Supports MCQ and Anagram search types over 100,000+ entries with gRPC and real-time features."
      ghLink="https://github.com/bhargava-prashant/ProtoQuery-Search-Engine"
      demoLink="https://speakx-query-search-assignment.onrender.com/"
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={healthcare}
      isBlog={false}
      title="Niramaya - Healthcare Management System"
      description="A full-fledged system for patients, doctors, and admins. Features include digital health cards, appointments, prescriptions with QR, reminders, chatbot, and Google Maps integration."
      ghLink="https://github.com/bhargava-prashant/NIRAAMAYAA"
      demoLink="" // Add if available
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={medicine}
      isBlog={false}
      title="Health Booking & Medicine Management System"
      description="A Dockerized full-stack health platform with portals for admins, doctors, and patients. Includes CI/CD pipelines, QR-based prescriptions, appointment booking, and reminder integration."
      ghLink="https://github.com/bhargava-prashant/Health-booking"
      demoLink="" // Add live demo link if available
    />
  </Col>

  <Col md={4} className="project-card">
    <ProjectCard
      imgPath={mlpcos}
      isBlog={false}
      title="PCOS Diagnosis using Machine Learning"
      description="Co-authored book chapter on ML for PCOS prediction. Kaggle notebook with data analysis and model optimization. Published in 'Next Gen Computing Techniques for Biomedical Applications'."
      ghLink="https://www.kaggle.com/code/bhargavaprashant/notebook2ee514e6ae"
      demoLink="https://www.kaggle.com/code/bhargavaprashant/notebook2ee514e6ae" // Optional – add publication/book link if available
    />
  </Col>
</Row>

      </Container>
    </Container>
  );
}

export default Projects;
