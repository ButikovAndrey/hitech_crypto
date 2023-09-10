import React, { PureComponent } from "react";
import { Typography } from "@mui/material";
import styles from "./TopSection.module.scss";

export class Banner extends PureComponent {
  render() {
    return (
      <div className={styles.top_section__tagline}>
        <Typography variant="h2">Hitech Crypto</Typography>
        <Typography
          className={styles.top_section__description}
          variant="subtitle2"
        >
          Get all the Info regarding your favorite Crypto Currency
        </Typography>
      </div>
    );
  }
}
