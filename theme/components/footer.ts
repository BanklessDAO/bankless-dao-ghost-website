export default {
  parts: [
    'section',
    'wrapper',
    'data',
    'logo',
    'icons',
    'fNav',
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
      flexWrap: {
        base: 'wrap',
        lg: 'nowrap',
      },
    },
    data: {
      boxSizing: 'border-box',
      paddingRight: '5%',
      flex: '999 0 30%',
      flexBasis: {
        md: 'unset',
        sm: '100%',
      },
    },
    logo: {
      marginBottom: '15px',
      maxWidth: '350px',
      img: {
        maxW: '150px',
        maxH: '45px',
      },
    },
    icons: {
      marginTop: '30px',
      marginBottom: '30px',
      maxW: '340px',
    },
    fNav: {
      flex: '1 0 auto',
      flexWrap: {
        sm: 'wrap',
        md: 'wrap',
      },
      maxW: {
        md: '100%',
      },
    },
    navColumn: {
      flex: {
        sm: '1 0 50%',
      },
      width: {
        base: '150px',
        md: '100%',
      },
      marginBottom: '30px',
      '& ul': {
        margin: 0,
        paddingLeft: {
          base: '15%',
          md: 0,
        },
        paddingRight: {
          md: '20px',
        },
      },
      '& li': {
        fontFamily: 'spartan',
        fontSize: {
          base: '13px',
          lg: '12px',
        },
        lineHeight: '2',
        marginBottom: '16px',
        listStyle: 'none',
      },
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
};
