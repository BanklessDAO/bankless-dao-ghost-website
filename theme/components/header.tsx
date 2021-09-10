// eslint-disable-next-line import/no-anonymous-default-export
export default {
  parts: ['section', 'wrap', 'logo', 'hNav', 'checkbox', 'toggle'],
  baseStyle: {
    section: {
      width: '100%',
    },
    wrap: {
      minH: '60px',
      margin: {
        sm: '30px 0',
        xl: '20px 0',
      },
      alignItems: 'center',
      position: 'relative',
    },
    logo: {
      display: 'inline-block',
      flex: '1 0 auto',
      flexBasis: {
        sm: '75%',
        md: '50%',
      },
      zIndex: {
        xl: 98,
      },
      top: {
        xl: 0,
      },
      width: {
        xl: '300px',
      },
      textAlign: {
        xl: 'center',
      },
      position: {
        xl: 'absolute',
      },
      left: {
        xl: 'calc(50% - 150px)',
      },
    },
  },
  hNav: {
    fontFamily: 'spartan',
    position: 'relative',
    zIndex: 99,
    flex: '0 1 100%',
    flexBasis: {
      sm: '25%',
      md: '50%',
    },
  },
  checkbox: {
    display: 'none',
    '&:checked~nav ul': {
      position: 'relative',
    },
  },
  toggle: {
    display: 'block',
    position: 'relative',
    zIndex: '99',
    overflow: 'visible',
    width: '25px',
    height: '25px',
    margin: '0',
    padding: '5px',
    cursor: 'pointer',
    opacity: '1',
    border: '0',
    outline: '0',
    background: 'transparent',
    '&>span': {
      top: '50%',
    },
    '& span': {
      display: 'block',
      width: '100%',
    },
    '& .bar': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      height: '3px',
      content: "''",
      transition:
        'transform .3s cubic-bezier(.645, .045, .355, 1), top .3s cubic-bezier(.645, .045, .355, 1) .2s',
      background: 'var(--chakra-colors-steel-900)',
    },
    '& .bar:nth-of-type(1)': {
      top: '-10px',
    },
    '& .bar:nth-of-type(3)': {
      top: '10px',
    },
  },
};
