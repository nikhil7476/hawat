// components/MarqueeSection.js
import React from "react";
import { Container } from "react-bootstrap";
import styles from "@/styles/Footer.module.css";

const MarqueeSection = ({ text = "QodeInteractive.com", repeat = 10 }) => {
  // Generate repeated items (twice for seamless loop)
  const items = Array.from({ length: repeat }, (_, i) => (
    <div key={i} className={styles.item}>
      {text}
    </div>
  ));

  return (
    <Container fluid>
      <div className={styles.marqueeTrack}>
        {items}
        {items /* duplicated for seamless scroll */}
      </div>
    </Container>
  );
};

export default MarqueeSection;
