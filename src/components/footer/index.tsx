import React, { PureComponent } from "react";
import { Container } from "@mui/material";
import styles from "./Footer.module.scss";

export class Footer extends PureComponent {
  render() {
    return (
      <Container className={styles.footer__container}>
        <span className={styles.footer__left}>
          <p>Andrey Butikov</p>
          <p>Frontend Developer</p>
        </span>
        <span className={styles.footer__right}>
          <p>Test task for Hitech</p>
          <p>Sep 2023</p>
        </span>
      </Container>
    );
  }
}
