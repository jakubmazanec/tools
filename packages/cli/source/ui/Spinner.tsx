import {Text} from 'ink';
import {useEffect, useState} from 'react';

const SPINNER = {
  interval: 80,
  frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
};

/**
 * Spinner component.
 */
export function Spinner() {
  let [frame, setFrame] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setFrame((previousFrame) => {
        let isLastFrame = previousFrame === SPINNER.frames.length - 1;

        return isLastFrame ? 0 : previousFrame + 1;
      });
    }, SPINNER.interval);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <Text>{SPINNER.frames[frame]}</Text>;
}
