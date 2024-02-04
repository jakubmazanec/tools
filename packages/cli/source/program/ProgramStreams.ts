/**
 * {@link Program} streams;
 */
export type ProgramStreams = {
  stderr: NodeJS.WriteStream;
  stdin: NodeJS.ReadStream;
  stdout: NodeJS.WriteStream;
};
