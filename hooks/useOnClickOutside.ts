// Source:
// - https://usehooks.com/useOnClickOutside/
// - https://github.com/Andarist/use-onclickoutside

import React from 'react';

const MOUSEDOWN = 'mousedown';
const TOUCHSTART = 'touchstart';

type HandledEvents = [typeof MOUSEDOWN, typeof TOUCHSTART];
type HandledEventsType = HandledEvents[number];
type PossibleEvent = {
  [Type in HandledEventsType]: HTMLElementEventMap[Type];
}[HandledEventsType];
type Handler = (event: PossibleEvent) => void;

function useOnClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: Handler
) {
  React.useEffect(() => {
    function listener(event: PossibleEvent) {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      handler(event);
    }

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [handler, ref]);
}

export { useOnClickOutside };
