/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";

import LinkedIn from "./../../assets/images/linkedIn.svg";
import Github from "./../../assets/images/github.svg";
import Azure from "./../../assets/images/azure-devops.svg";

import { Grid } from './../Grid';

import type { FooterProps } from "./Footer.types";
import { useFooterStyles } from "./Footer.styles";

/**
 * Render the final JSX of Footer
 */
export const Footer: React.FC<FooterProps> = (props: FooterProps) => {
  const { children } = props;
  const styles = useFooterStyles();

  return (
    <div className={styles.root}>
      <Grid container rowSpacing={{ base: 'xl' }} columnSpacing={{ base: 'xl'}}>
        <Grid item>
        <a
            className={styles.socialLink}
            href={"https://www.linkedin.com/in/funedikly/"}
            target={"_blank"}
          >
            <img src={LinkedIn} />
          </a>
        </Grid>
        <Grid item>
          <a
            className={styles.socialLink}
            href={"https://dev.azure.com/DesignFunedikly/OpenSource"}
            target={"_blank"}
          >
            <img src={Azure} />
          </a>
        </Grid>
        <Grid item>
          <a
            className={styles.socialLink}
            href={"https://github.com/DigitalKrony"}
            target={"_blank"}
          >
            <img src={Github} />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
