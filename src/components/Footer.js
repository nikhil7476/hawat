import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "@/styles/Footer.module.css";
import MarqueeSection from "./MarqueeSection";

function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <section className={styles.footerSection}>
          <Container>
            <Row>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <Link href="/" title="Hawat">
                  <Image
                    src="/logo-footer.png"
                    alt="Logo"
                    title="Hawat"
                    width={70}
                    height={70}
                    style={{ marginBottom: "20px" }}
                  />
                </Link>
                <h3>A cutting-edge tech solution. {"It's"} Hawat.</h3>
                <p>
                  &copy; {new Date().getFullYear()}{" "}
                  <Link href="/" title="Hawat">
                    Hawat
                  </Link>
                  , All rights reserved
                </p>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <h3>Our Services</h3>
                <ul>
                  <li>
                    <Link href="/" title="Digital Engineering Projects">
                      Digital Engineering Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Creative Technologies">
                      Creative Technologies
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Analyzing Project Data">
                      Analyzing Project Data
                    </Link>
                  </li>
                  <li>
                    <Link href="/" title="Commercial Packaging">
                      Commercial Packaging
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <h3>New Office</h3>
                <ul>
                  <li>
                    <Link
                      href="https://www.google.com/maps/place/105+Lincoln+Ave,+The+Bronx,+NY+10454,+USA/@40.807659,-73.9318071,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f5dde67be7c7:0x41a6b3b046c77404!8m2!3d40.807655!4d-73.9296184"
                      title="105 Lincoln Avenue Bronx, NY 10454, USA"
                      target="_blank"
                    >
                      105 Lincoln Avenue Bronx,
                      <br />
                      NY 10454, USA
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="tel:+112345678900"
                      title="+(112) 345-678-900"
                      target="_blank"
                    >
                      +{"(112)"} 345-678-900
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col xl={3} lg={3} md={6} sm={12} xs={12}>
                <h3>Our Location</h3>
                <Link
                  href="https://www.google.com/maps/place/105+Lincoln+Ave,+The+Bronx,+NY+10454,+USA/@40.807659,-73.9318071,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2f5dde67be7c7:0x41a6b3b046c77404!8m2!3d40.807655!4d-73.9296184"
                  title="Our Location"
                  target="_blank"
                >
                  <Image
                    src="/footer-image-map.png"
                    alt="Hawat Location MAp"
                    title="Hawat Location MAp"
                    width={300}
                    height={180}
                  />
                </Link>
              </Col>
            </Row>
          </Container>
        </section>
        <section className={styles.marqueeSection}>
          <MarqueeSection text="QodeInteractive.com" repeat={6} />
        </section>
      </div>
    </>
  );
}

export default Footer;
