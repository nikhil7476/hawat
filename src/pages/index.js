import React from "react";
import styles from "@/styles/Home.module.css";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import MarqueeSection from "@/components/MarqueeSection";
import Head from "next/head";
import Image from "next/image";

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
        <section className={styles.servicesSection}>
          <Container>
            <Row className="my-4 py-4">
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/connect.svg"
                      alt="Connect"
                      title="Connect"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Connect</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/data.svg"
                      alt="Data"
                      title="Data"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Data</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/solution.svg"
                      alt="Solution"
                      title="Solution"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>IT Solution</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/register.svg"
                      alt="Register"
                      title="Register"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Register</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="my-4 py-4">
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/servers.svg"
                      alt="Servers"
                      title="Servers"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Servers</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/software.svg"
                      alt="Software"
                      title="Software"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Software</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/statstics.svg"
                      alt="Statistics"
                      title="Statistics"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Statistics</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <div className="d-flex gap-3">
                  <div>
                    <Image
                      src="/storage.svg"
                      alt="Storage"
                      title="Storage"
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2>Storage</h2>
                    <p>Lorem ipsum dolor consecetur ameet ad.</p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}

export default Home;
