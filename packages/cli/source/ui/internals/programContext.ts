import React from 'react';

import {type Program} from '../../program/Program.js';

export type ProgramContext = {
  program: Program;
};

/**
 * A React context that stores {@link Program} instance.
 */
export const programContext = React.createContext<ProgramContext>({} as ProgramContext);
