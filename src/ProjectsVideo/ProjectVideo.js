import React, {  useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./ProjectVideo.css";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import { Col, Container, Row } from "reactstrap";

const dash = [
  {
    id: "100",
    vLink: "./video/advCounter.mp4",
  },
  {
    id: "101",
    vLink: "./video/compition flex.mp4",
  },
  {
    id: "102",
    vLink: "./video/flashCard.mp4",
  },
  {
    id: "103",
    vLink: "./video/js clock.mp4",
  },
  {
    id: "104",
    vLink: "./video/netflex bootstrap.mp4",
  },
  {
    id: "105",
    vLink: "./video/portfollio.mp4",
  },
  {
    id: "106",
    vLink: "./video/qoutesGenerator.mp4",
  },
  {
    id: "107",
    vLink: "./video/udacity.mp4",
  },
];

function ProjectVideo() {
  const [video, setvideo] = useState(dash);
console.log(video)

  // setvideo(()=>dash)

  // useEffect(() => {
  //   setvideo(() => {
  //     return dash;
  //   });
  // }, []);

  // useEffect(() => {
  //   return () => {
  //     axios.get(videoJson).then((resp) => setvideo(resp.data));
  //   };
  // }, [video]);

  return (
    <Container className="VideoContainer bg-dark">
      <Zoom>
        <Jump forever={true}>
          <h2 className="text-center pt-5 text-info">Videos</h2>
        </Jump>
      </Zoom>
      <Zoom>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-5 mb-5"
        >
          <Row>
            <Col sm={12}>
              {video.map((v) => {
                return (
                  <SwiperSlide key={v.id}>
                    <video controls className="Swipper__video">
                      <source src={v.vLink} />
                    </video>
                  </SwiperSlide>
                );
              })}
            </Col>
          </Row>
        </Swiper>
      </Zoom>
    </Container>
  );
}

export default ProjectVideo;
