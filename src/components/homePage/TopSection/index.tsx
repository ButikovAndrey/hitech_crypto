import React from "react";
import { Container } from "@mui/material";
import { Banner } from "./Banner";
import { Carousel } from "./Carousel";
import styles from "./TopSection.module.scss";

export const TopSection = () => {
  return (
    <div className={styles.top_section__banner}>
      <Container className={styles.top_section__banner_content}>
        <Banner />
        <Carousel />
      </Container>
    </div>
  );
};
