import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import minai from "../../Assets/Projects/minai.png";
import healthcare from "../../Assets/Projects/healthcare.png";
import proto from "../../Assets/Projects/proto.png";
import medicine from "../../Assets/Projects/medicine.png";
import mlpcos from "../../Assets/Projects/mlpcos.png";
import socialmedia from "../../Assets/socialmedia.png"
import aicomponent from "../../Assets/aicomponentgenerator.png"
import nginxredis from "../../Assets/nginxredis.png"
import minicrm from "../../Assets/crm.png"
import healthbooking from "../../Assets/healthbooking.jpg"

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
    imgPath={socialmedia} // your image asset
    isBlog={false}
    title="Social Media Platform Backend"
    description="RESTful backend built with Node.js, Express, and PostgreSQL (Neon). Supports JWT-based auth, follow system, media uploads via Cloudinary, content feed, comments/likes, and search. Features Joi validation, Helmet security, and CORS."
    ghLink="https://github.com/bhargava-prashant/Social-Media-Backend"
    demoLink="https://social-media-backend-mob6.onrender.com/health" // optional demo link if hosted
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
    imgPath={aicomponent} // import your image asset for this project
    isBlog={false}
    title="AI Component Generator"
    description="Full-stack app to generate React components using Google Gemini AI with real-time preview, refinement, Redis caching, and session management. Built with Node.js, MongoDB, and React."
    ghLink="https://github.com/bhargava-prashant/AI-Component-Generator"
    demoLink="https://ai-component-generator-frontend-oor6.onrender.com/" // Add live demo if deployed
  />
</Col>




  <Col md={4} className="project-card">
  <ProjectCard
    imgPath={nginxredis} // import your image asset for this project
    isBlog={false}
    title="NGINX Redis Chat Engine"
    description="A scalable real-time chat app using Socket.IO, Redis for offline message queueing, and MongoDB for persistence. Fully Dockerized with NGINX load balancing for high availability."
    ghLink="https://github.com/bhargava-prashant/NGINX-Redis-Chat-Engine"
    demoLink="" // Add live demo if you host it
  />
</Col>




<Col md={4} className="project-card">
  <ProjectCard
    imgPath={minicrm} // import your image asset for this project
    isBlog={false}
    title="Mini-CRM Platform"
    description="Microservices CRM with Redis Streams, MongoDB, and AI-powered segmentation. Features Google OAuth, dynamic campaign management, and natural language to query conversion."
    ghLink="https://github.com/bhargava-prashant/Mini-CRM"
    demoLink="" // Add demo link if deployed
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
    imgPath={healthbooking} // import your image asset for this project
    isBlog={false}
    title="Health Booking System"
    description="Microservice-based health booking platform with Node.js, PostgreSQL, Docker, and Jenkins CI/CD. Includes Auth, Booking, Doctor, and Admin services with containerized deployment."
    ghLink="https://github.com/bhargava-prashant/Health-booking"
    demoLink="" // Add live demo if deployed
  />
</Col>




</Row>

      </Container>
    </Container>
  );
}

export default Projects;
