/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';

import type { TagsProps } from './Tags.types';
import { useTagsStyles } from './Tags.styles';

/**
 * Render the final JSX of Tags
 */
export const Tags: React.FC<TagsProps> = (props: TagsProps) => {
  const { tagList } = props;
  const styles = useTagsStyles();
  const [useTag, setTag] = React.useState(0);

  React.useEffect(() => {
    const andChange = setInterval(() => {
      if (useTag === tagList.length - 1) {
        setTag(0);
      } else {
        setTag(useTag+1);
      }
    }, 2500);

    return () => clearInterval(andChange || undefined) ;
  }, [tagList, useTag, setTag]);

  return <span className={styles.root}>{tagList[useTag]}</span>;
};
