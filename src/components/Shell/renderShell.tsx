import * as React from "react";
import { getSlots } from "@fluentui/react-utilities";

import { siteData } from '../../assets/data';
import { Skills, Tags, Header, Footer } from '..';
import { ShellContext } from "./context/ShellContext";
import type { ShellContextValues } from './context/ShellContext.types';
import type { ShellSlots, ShellState } from "./Shell.types";

/**
 * Render the final JSX of  Shell
 */
export const renderShell = (
  state: ShellState,
  contextValues: ShellContextValues
) => {
  const { slots, slotProps } = getSlots<ShellSlots>(state);

  return (
    <ShellContext.Provider value={contextValues.shell}>
      <slots.root {...slotProps.root}>
        <Header />
        <article className={""}>
          <p>
            Established in 2006 with the idea of working on <Skills skillList={siteData.skills} /> to enhance the digital experience for users.
          </p>
          <p>
            I specialize in <Tags tagList={siteData.tags} />.
          </p>
          <p>
            I've worked with <span>_____</span> and it's teams on <span>_____</span>
          </p>
        </article>
        <Footer />
      </slots.root>
    </ShellContext.Provider>
  );
};
