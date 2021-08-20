/* eslint-disable no-unused-vars */

// eslint-disable-next-line import/prefer-default-export
const variants = {
  initial: {
    opacity: 0,
    y: -8,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
    y: 8,
  },
};

export { variants as default };
