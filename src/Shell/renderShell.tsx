/*!
 * Copyright (C) Design:Funedikly. All rights reserved.
 */

import * as React from 'react';
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
            <Grid className={styles.contentWrapper} container item itemDirection={'column'} rowSpacing={{ base: 'xl'}}>

              <Grid className={''} item columns={{ base: 4}}>
                <Header />
              </Grid>
              
              <Grid className={''} item selfAlign={'end'} columns={{ base: 2 }}>
                <Type level={'md'}>
                  Established in 2006 with the idea of working on <Skills className={styles.skillsStyles} skillList={siteData.skills} /> to
                  enhance the digital experience for users.
                </Type>
              </Grid>

              <Grid className={''} item selfAlign={'end'} columns={{ base: 2 }}>
                <Type level={'md'}>
                    I specialize in <Tags className={styles.tagStyles} tagList={siteData.tags} />.
                </Type>
              </Grid>

              <Grid className={''} item selfAlign={'end'} columns={{ base: 2 }}>
                <Type level={'md'}>
                  I've worked with <Companies coProjList={siteData.projects} /> and it's teams on <Projects coProjList={siteData.projects} />
                </Type>
              </Grid>

              <Grid className={''} item columns={{ base: 1 }}>
                <Footer />
              </Grid>

            </Grid>
        </slots.root>
    </ShellContext.Provider>
  );
};
