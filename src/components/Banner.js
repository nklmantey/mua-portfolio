import {Container, Row} from "react-bootstrap";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  return (
    <div className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <TrackVisibility>
            {({isVisible}) => (
              <div
                className={isVisible ? "animate__animated animate__fadeIn" : ""}
              >
                <h1>OctobersBeauty</h1>
                <h1>Makeup</h1>
                <h1>Portfolio</h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            )}
          </TrackVisibility>
        </Row>
      </Container>
    </div>
  );
};
