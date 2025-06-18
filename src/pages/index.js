import React from "react";
import styles from "@/styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import MarqueeSection from "@/components/MarqueeSection";
import Head from "next/head";

function Home() {
  return (
    <>
      <Head>
        <title>Hawat - Digital Agency for Creators</title>
        <meta
          name="description"
          content="Hawat is a digital agency that provides cutting-edge technology solutions for creators. We specialize in digital engineering projects, creative technologies, and commercial packaging."
        />
        <meta
          name="keywords"
          content="Hawat, digital agency, technology solutions, creators, digital engineering, creative technologies, commercial packaging"
        />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Hawat - Digital Agency for Creators"
        />
        <meta
          property="og:description"
          content="Hawat is a digital agency that provides cutting-edge technology solutions for creators. We specialize in digital engineering projects, creative technologies, and commercial packaging."
        />
        <meta property="og:image" content="/hawat.png" />
      </Head>
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
