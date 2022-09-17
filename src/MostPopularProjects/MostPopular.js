import React, { useState } from "react";
import { Zoom } from "react-reveal";
import {
  Card,
  CardBody,
  CardLink,
  CardText,
  CardTitle,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";
import Foooter from "../Foooter/Foooter";
import ProjectVideo from "../ProjectsVideo/ProjectVideo";
import "./MostPopular.css";

const allImg = [
  {
    id: "1",
    description: "Expenses Project",
    imageurl: "./images/expenses.jpg",
    githubLink: "https://github.com/ahmed-mohsen88/expenses-react-resp.git",
    vercelLink: "https://expenses-react-resp.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details:
      "React application to add and remove expenses and remove it and get total expenses",
    language: "HTML , CSS , JS , React",
  },
  {
    id: "2",
    description: "Advanced Counter",
    imageurl: "./images/counter.jpg",
    githubLink:
      "https://github.com/ahmed-mohsen88/ADVANCED-COUNTER-AHMED-MOHSEN",
    vercelLink: "https://advanced-counter-ahmed-mohsen.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details: "Counter by second single add or sub or automatic counter",
    language: "HTML , CSS , JS ",
  },
  {
    id: "3",
    description: " Flash Cards",
    imageurl: "./images/flashCard.png",
    githubLink: "https://github.com/ahmed-mohsen88/Flash-card-ahmed-mohsen",
    vercelLink: "https://vercel.com/ahmed-mohsen88/flash-card-ahmed-mohsen",
    video: "./expenseUpdatedreact.mp4",
    details: "Create a flash card quick and easy",
    language: "HTML , CSS , JS ",
  },
  {
    id: "4",
    description: "Portfollio Project",
    imageurl: "./images/port.jpg",
    githubLink:
      "https://github.com/ahmed-mohsen88/portfollio-html-css-only-non-resp",
    vercelLink: "https://portfollio-html-css-only-non-resp.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details: "HTML CSS pure only to create nice website",
    language: "HTML , CSS ",
  },
  {
    id: "5",
    description: "Qouetes generator",
    imageurl: "./images/Quote-frame-2.png",
    githubLink: "https://github.com/ahmed-mohsen88/Flash-card-ahmed-mohsen",
    vercelLink: "https://qoutes-generator.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details: "THos application generate new qoute by clicking a button",
    language: "HTML , CSS , JS ",
  },
  {
    id: "6",
    description: " Udacity Clone",
    imageurl: "./images/udacity-2-logo.png",
    githubLink: "https://github.com/ahmed-mohsen88/udacity-clone",
    vercelLink: "https://udacity-clone-six.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details: "Just clone of udacity website",
    language: "HTML , CSS ",
  },
  {
    id: "7",
    description: " Flex box website",
    imageurl: "./images/f458a446-63fc-45c6-8aaa-b91d10350b1d.png",
    githubLink: "https://github.com/ahmed-mohsen88/competition-flexbox",
    vercelLink: "https://competition-flexbox.vercel.app/",
    video: "./expenseUpdatedreact.mp4",
    details: "Just clone of website",
    language: "HTML , CSS ",
  },
];

function MostPopular() {
  const [projects, setprojects] = useState(allImg);
  console.log(projects);

  // useEffect(() => {
  //   return () => {
  //     setprojects(() => allImg);
  //   };
  // }, []);
  const h = projects.map((project) => {
    return (
      <Col
        xs={10}
        sm={10}
        md={4}
        lg={4}
        offset-xs={1}
        className="mt-4 offset-sm-1 offset-md-0 offset-lg-0 col__card "
        key={project.id}
      >
        <Zoom>
          <Card className="bg-dark card_self">
            <img src={project.imageurl} alt="expense" />
            <CardBody className="card__body">
              <CardTitle tag="h5">{project.description}</CardTitle>
              <CardText>{project.language}</CardText>
              <CardText>{project.details}</CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                {" "}
                <CardLink href={project.githubLink}>GitHub Link </CardLink>
              </ListGroupItem>
              <ListGroupItem>
                {" "}
                <CardLink href={project.vercelLink}>Vercel link </CardLink>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Zoom>
      </Col>
    );
  });

  return (
    <>
      <Container
        className="bg-dark  Container__card text-info pb-3"
        id="Mostpop"
      >
        <Row className="Row__card">{h}</Row>
      </Container>
      <ProjectVideo />
      <Foooter />
    </>
  );
}

export default MostPopular;
