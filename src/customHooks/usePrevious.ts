import { useRef, useEffect } from "react";

function usePrevious(value: string) {
  const ref = useRef<string | undefined>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export default usePrevious;
