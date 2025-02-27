/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from "react";
import { mergeClasses } from '@griffel/react';

import { Type } from './../';

import type { SkillsProps } from "./Skills.types";
import { useSkillsStyles } from "./Skills.styles";

/**
 * Render the final JSX of Skills
 */
export const Skills: React.FC<SkillsProps> = (props: SkillsProps) => {
  const { skillList } = props;
  const styles = useSkillsStyles();
  const [useSkill, setSkill] = React.useState(0);

  React.useEffect(() => {
    const andChange = setInterval(() => {
      if (useSkill === skillList.length - 1) {
        setSkill(0);
      } else {
        setSkill(useSkill+1);
      }
    }, 3000);

    return () => clearInterval(andChange || undefined) ;
  }, [skillList, useSkill, setSkill]);

  return <Type className={mergeClasses(props.className, styles.root)} as={'h2'} type={'heading'} level={'lg'}>{skillList[useSkill]}</Type>;
};
