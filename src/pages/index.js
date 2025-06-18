import React from "react";
import styles from "@/styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import MarqueeSection from "@/components/MarqueeSection";

function Home() {
  return (
    <>
      <div className={styles.Home}>
        <section className={styles.heroSection}>
          <Container>
            <Row className="pb-5">
              <Col>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className={styles.backgroundVideo}
                  src="/banner-video.mp4"
                />
                <h1 className="mb-5">
                  Digital Agency
                  <br />
                  For Creators
                </h1>
                <Link href="/" title="View More" className={styles.viewMore}>
                  View More{" "}
                  <span>
                    <FaPlus />
                  </span>
                </Link>
              </Col>
            </Row>
            <Row className={`pb-3 ${styles.marqueeSection}`}>
              <MarqueeSection
                text={["We Choose Only The BeThe Best Technology*", " ", "//"]}
                repeat={6}
              />
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
