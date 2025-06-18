import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import OffHeader from "./OffHeader";

const Header = () => {
  return (
    <Navbar expand="lg" className={styles.navbar} sticky="top">
      <Container>
        <Navbar.Brand href="/" title="Hawat">
          <Image
            src="/logo-light.svg"
            alt="Logo"
            title="Hawat"
            width={70}
            height={70}
            style={{ marginBottom: "20px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleBtn}
        />
        <Navbar.Collapse
          className="justify-content-center"
          id="basic-navbar-nav"
        >
          <Nav className="gap-5">
            <Nav.Link href="/" className={styles.link}>
              Home
            </Nav.Link>
            <Nav.Link href="/about-us" className={styles.link}>
              About Us
            </Nav.Link>
            <Nav.Link href="/our-services" className={styles.link}>
              Our Services
            </Nav.Link>
            <Nav.Link href="/portfolio" className={styles.link}>
              Portfolio
            </Nav.Link>
            <Nav.Link href="/blog" className={styles.link}>
              Blog
            </Nav.Link>
            <Nav.Link href="/contact-us" className={styles.link}>
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <OffHeader />
      </Container>
    </Navbar>
  );
};

export default Header;
