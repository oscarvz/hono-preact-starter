import { useContext } from "preact/hooks";
import { RequestContext } from "../../../renderer";

export function useRequestContext() {
  const c = useContext(RequestContext);
  if (!c) {
    throw new Error("RequestContext is not provided.");
  }
  return c;
}
