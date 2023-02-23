import store from "./store";
import { setLoadingState } from "actions";

export const debounce = (func) => {
  let timer;

  return function (...args) {
    const context = this;
    store.dispatch(setLoadingState(true));
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(context, args);
    }, 1000);
  };
};
