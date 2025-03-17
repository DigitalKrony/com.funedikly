/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";

import { Github, LinkedIn, Devops } from '../icons';
import { Grid } from '../Grid';

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
      <Grid container rowSpacing={{ base: 'xl' }} columnSpacing={{ base: 'xxl'}} noWrap>
        <Grid item contentAlignment={'center'}>
        <a
            className={styles.socialLink}
            href={"https://www.linkedin.com/in/funedikly/"}
            target={"_blank"} rel="noreferrer"
          >
            <LinkedIn />
          </a>
        </Grid>
        <Grid item contentAlignment={'center'}>
          <a
            className={styles.socialLink}
            href={"https://github.com/DigitalKrony"}
            target={"_blank"} rel="noreferrer"
          >
            <Github />
          </a>
        </Grid>
        <Grid item contentAlignment={'center'}>
          <a
            className={styles.socialLink}
            href={"https://dev.azure.com/DesignFunedikly/OpenSource"}
            target={"_blank"} rel="noreferrer"
          >
            <Devops />
          </a>
        </Grid>
      </Grid>
    </div>
  );
};
