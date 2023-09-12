import React, { PureComponent } from "react";
import { Typography } from "@mui/material";
import styles from "./BottomSection.module.scss";

export class NoDataFound extends PureComponent {
  render() {
    return (
      <Typography variant="h4" className={styles.bottom_section__no_data}>
        No Data Found
      </Typography>
    );
  }
}
