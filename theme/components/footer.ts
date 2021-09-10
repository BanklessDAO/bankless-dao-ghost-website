export default {
  parts: [
    'section',
    'wrapper',
    'data',
    'logo',
    'isImg',
    'icons',
    'nav',
    'navColumn',
    'navList',
    'navItem',
    'copyright',
    'description',
  ],
  baseStyle: {
    section: {
      paddingTop: '7vh',
      paddingBottom: '6vh',
      borderTop: '1px dashed #485b73',
      width: '100%',
      maxW: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto',
      flexShrink: '0',
    },
    wrapper: {
      width: '100%',
      margin: '0 auto',
      alignItems: 'flex-start',
      boxSizing: 'border-box',
      flexWrap: 'wrap',
    },
    data: {
      boxSizing: 'border-box',
      paddingRight: '5%',
      flex: '999 0 30%',
    },
    logo: {
      marginBottom: '15px',
      maxWidth: '350px',
    },
    isImg: {
      maxW: '150px',
      maxH: '45px',
    },
    icons: {
      marginTop: '30px',
      marginBottom: '30px',
      maxW: '340px',
    },
    nav: {
      flex: '1 0 auto',
      flexWrap: 'nowrap',
    },
    navColumn: {
      width: '150px',
      marginBottom: '30px',
    },
    navList: {
      margin: 0,
      paddingLeft: '15%',
    },
    navItem: {
      fontFamily: 'spartan',
      fontSize: '13px',
      lineHeight: '2',
      marginBottom: '16px',
      listStyle: 'none',
    },
    copyright: {
      display: 'block',
      height: '25px',
      marginTop: '30px',
      padding: 0,
      fontFamily: 'mono',
      fontSize: '13px',
    },
    description: {
      margin: '0',
      maxW: '350px',
      fontFamily: 'mono',
      fontSize: '13px',
    },
  },
  sizes: {
    wrapper: {
      lg: {
        flexWrap: 'nowrap',
      },
    },
    data: {
      md: {
        flexBasis: '100%',
      },
    },
    nav: {
      sm: {
        flexWrap: 'wrap',
      },
      md: {
        maxW: '100%',
        flexWrap: 'wrap',
      },
    },
    navColumn: {
      sm: {
        flex: '1 0 50%',
      },
      md: {
        width: '100%',
      },
    },
    navList: {
      md: {
        paddingRight: '20px',
        paddingLeft: 0,
      },
    },
    navItem: {
      lg: {
        fontSize: '12px',
      },
    },
  },
};
