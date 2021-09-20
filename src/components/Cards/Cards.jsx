import React from "react";
import styles from "./Cards.module.css";
import { Container, Row, Card, Col } from "react-bootstrap";
import CountUp from "react-countup";
import cx from "classnames";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) return "Loading...";
  console.log(recovered);
  return (
    <div className={styles.container}>
      <Container>
        <Row className="justify-content-between">
          <Col xs={12} md={4} lg={4} className={styles.cardContainer}>
            <Card>
              <Card.Body className={cx(styles.card, styles.infected)}>
                <Card.Subtitle className="mb-2 text-muted">
                  Infected
                </Card.Subtitle>
                <Card.Title className="text-danger">
                  {confirmed.value === 0 ? (
                    "Broken, fix soon.. 😟 "
                  ) : (
                    <CountUp
                      start={0}
                      end={confirmed.value}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </Card.Title>
                <Card.Title className="text-muted">
                  {new Date(lastUpdate).toDateString()}
                </Card.Title>
                <Card.Text>Active confirmed for COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className={styles.cardContainer}>
            <Card>
              <Card.Body className={cx(styles.card, styles.recovered)}>
                <Card.Subtitle className="mb-2 text-muted">
                  Recovered
                </Card.Subtitle>
                <Card.Title className="text-success">
                  {recovered.value === 0 ? (
                    "Broken, fix soon.. 😟 "
                  ) : (
                    <CountUp
                      start={0}
                      end={recovered.values}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </Card.Title>
                <Card.Title className="text-muted">
                  {new Date(lastUpdate).toDateString()}
                </Card.Title>
                <Card.Text>Active confirmed for COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4} lg={4} className={styles.cardContainer}>
            <Card>
              <Card.Body className={cx(styles.card, styles.deaths)}>
                <Card.Subtitle className="mb-2 text-muted">
                  Deaths
                </Card.Subtitle>
                <Card.Title>
                  {deaths.value === 0 ? (
                    "Broken, fix soon.. 😟 "
                  ) : (
                    <CountUp
                      start={0}
                      end={deaths.value}
                      duration={2.5}
                      separator=","
                    />
                  )}
                </Card.Title>
                <Card.Title className="text-muted">
                  {new Date(lastUpdate).toDateString()}
                </Card.Title>
                <Card.Text>Active confirmed for COVID-19</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cards;
