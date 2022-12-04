// using ES6 modules
import mitt from "mitt";

export const emitter = mitt();

export const emitterEvent = {
  TESTING: "testing",
  NAVBAR: "nav_bar"
};
