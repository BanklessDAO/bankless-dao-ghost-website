export default {
  parts: ['container', 'primarylink', 'linkimage', 'heading', 'postcount'],
  baseStyle: {
    container: {
      flex: '1 0 33.333%',
      padding: '0 30px 5vh',
      paddingBottom: '25px',
      paddingRight: '12px',
      paddingLeft: '12px',
      textAlign: 'center',
      boxSizing: 'content-box',
    },
    linkimage: {
      objectFit: 'cover',
      padding: {
        sm: '6px',
        md: '10px',
      },
      border: 'var(--border) var(--color-three)',
      borderRadius: '100%',
      marginBottom: '2vh',
    },
    primarylink: {
      boxSizing: 'content-box',
      display: 'inline-flex',
    },
    heading: {
      margin: 0,
      fontSize: {
        sm: '16px',
        md: '20px',
        xl: '30px',
      },
    },
    postcount: {
      fontFamily: 'four',
      fontSize: '13px',
      boxSizing: {
        sm: 'content-box',
        xl: 'border-box',
      },
    },
  },
  sizes: {},
  variants: {
    primary: {
      container: {
        maxW: {
          sm: '120px',
          md: '200px',
          lg: '300px',
          xl: '400px',
        },
        padding: {
          xl: '0',
        },
      },
      linkimage: {
        width: {
          sm: '78px',
          md: '130px',
          lg: '170px',
          xl: '200px',
        },
        height: {
          sm: '78px',
          md: '130px',
          lg: '170px',
          xl: '200px',
        },
      },
      heading: {
        boxSizing: 'content-box',
      },
    },
    secondary: {
      container: {
        maxW: {
          sm: '200px',
          md: '210px',
        },
        paddingBottom: '4vh',
      },
      linkimage: {
        width: {
          sm: '78px',
          md: '130px',
          lg: '170px',
          xl: '200px',
        },
        height: {
          sm: '78px',
          md: '130px',
          lg: '170px',
          xl: '200px',
        },
      },
    },
  },
  defaultProps: {},
};
