/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
import { mergeClasses } from '@griffel/react';
import { getSlots } from '@fluentui/react-utilities';

import { siteData } from './../assets/data';
import { Skills, Tags, Header, Footer, Grid, Type, Companies, Projects } from './../components';

import { ShellContext } from './context/ShellContext';
import { shellStyles } from './useShellStyles';
import type { ShellContextValues } from './context/ShellContext.types';
import type { ShellSlots, ShellState } from './Shell.types';

/**
 * Render the final JSX of  Shell
 */
export const renderShell = (state: ShellState, contextValues: ShellContextValues) => {
  const { slots, slotProps } = getSlots<ShellSlots>(state);
  const { coProgId } = state;
  const styles = shellStyles();

  return (
    <ShellContext.Provider value={{...contextValues.shell, coProgId}}>
        <slots.root {...slotProps.root}>
            <Grid className={styles.contentWrapper} container item itemDirection={'column'} rowSpacing={{ base: 'none'}} noWrap>

              <Grid className={mergeClasses(styles.entryDot, styles.entryDotRight)} item columns={{ base: 4}} rowSpacing={{ base: 'md'}}>
                <Header />
              </Grid>
              
              <Grid className={mergeClasses(styles.entryDot, styles.itemThreeQuarter)} item selfAlign={'end'} columns={{ }} rowSpacing={{ base: 'md'}}>
                <Type className={styles.entries} level={'md'}>
                  Established in 2006 with the idea of working on <Skills className={styles.skillsStyles} skillList={siteData.skills} /> to
                  enhance the digital experience for users.
                </Type>
              </Grid>

              <Grid className={mergeClasses(styles.entryDot, styles.itemThreeQuarter)} item selfAlign={'end'} columns={{ }} rowSpacing={{ base: 'md'}}>
                <Type className={styles.entries} level={'md'}>
                    I specialize in <Tags className={styles.tagStyles} tagList={siteData.tags} />
                </Type>
              </Grid>

              <Grid className={mergeClasses(styles.entryDot, styles.itemThreeQuarter)} item selfAlign={'end'} columns={{ }} rowSpacing={{ base: 'md'}}>
                <Type className={styles.entries} level={'md'}>
                  I've worked with <Companies className={styles.companyStyles} coProjList={siteData.projects} /><br />and it's teams on <Projects className={styles.projectStyles} coProjList={siteData.projects} />
                </Type>
              </Grid>

              <Grid className={mergeClasses(styles.entryDot, styles.entryDotRight)} item columns={{ base: 4 }}>
                <Footer />
              </Grid>

            </Grid>
        </slots.root>
    </ShellContext.Provider>
  );
};
