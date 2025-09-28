import { useContext } from "preact/hooks";
import { RequestContext } from "../../middleware";

export function useRequestContext() {
  const c = useContext(RequestContext);
  if (!c) {
    return;
  }

  return c;
}
