import * as React from "react";

import type { HeaderProps } from "./Header.types";
import { useHeaderStyles } from "./Header.styles";

/**
 * Render the final JSX of Header
 */
export const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  const { children } = props;
  const styles = useHeaderStyles();

  return (
    <div className={styles.root}>
      <h1 className={styles.pageTitle}>Design: Funedikly</h1>
      <p className={styles.titleBy}>From Adam Sivins</p>
    </div>
  );
};
