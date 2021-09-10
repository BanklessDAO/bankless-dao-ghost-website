// eslint-disable-next-line import/no-anonymous-default-export
export default {
  parts: ['wrapper', 'content'],
  baseStyle: {
    wrapper: {
      height: '100%',
    },
    content: {
      display: 'flex',
      position: 'relative',
      flexDirection: 'column',
      padding: {
        base: '0 6%',
        xl: '0 55px',
      },
      height: '100%',
      maxW: '100%',
    },
  },
};
