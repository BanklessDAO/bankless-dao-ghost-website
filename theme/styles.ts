/*
 TODO: TURN MOST OF THESE STYLES INTO NON-GLOBAL STYLES BY USING COMPONENTS OR STYLE MIXINS
 PLEASE TRY NOT TO ADD ANYTHING TO THIS FILE.
*/
export default {
  global: {
    ':root': {
      '--border': '1px dashed',
    },
    '.global-button': {
      fontFamily: 'spartan',
      lineHeight: 1,
      position: 'relative',
      zIndex: 0,
      cursor: 'pointer',
      letterSpacing: '1px',
      color: 'var(--chakra-colors-steel-100)',
      border: 0,
      outline: 0,
      _before: {
        zIndex: -1,
        background: 'var(--chakra-colors-red-500)',
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        content: "''",
      },
      _after: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        content: "''",
      },
    },
    '.global-main': {
      width: '100%',
      maxW: '1200px',
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    '.global-underline': {
      paddingBottom: '.2%',
      transition: 'background-size .6s ease-out',
      background:
        'linear-gradient(var(--chakra-colors-red-500), var(--chakra-colors-red-500)) no-repeat left 123%/0 40%',
    },
    '.global-underline:hover': {
      backgroundSize: '97% 40%',
    },
    '.global-special': {
      base: {
        paddingTop: '10px',
        borderTop: '4px solid var(--chakra-colors-red-500)',
        flexGrow: 1,
        position: 'relative',
        flexWrap: 'wrap',
      },
      sm: {
        margin: '10vh auto 25px',
        marginTop: 0,
      },
      md: {
        marginTop: 0,
      },
      lg: {
        marginTop: '5vh',
        maxW: '100%',
      },
      xl: {
        margin: '10vh auto 25px',
      },
    },
    '.global-meta': {
      marginBottom: '2vh',
      fontSize: '12px',
    },
    '.global-meta, .global-tags': {
      fontFamily: 'mono',
      fontSize: '13px',
      position: 'relative',
      zIndex: 1,
      width: '100%',
    },
    '.global-tags': {
      '& a': {
        display: 'inline-block',
        margin: '10px 1.5% 0 0',
      },
    },
    '.global-members-label': {
      fontFamily: 'mono',
      fontSize: '13px',
      lineHeight: '1.4',
      position: 'absolute',
      top: '-30px',
      left: '-1px',
      color: 'black',
      background: 'var(--chakra-colors-red-500)',
      textTransform: 'capitalize',
    },
    '.global-image': {
      lineHeight: 0,
      position: 'relative',
      zIndex: 1,
      float: 'right',
      width: '125px',
      height: '125px',
      marginLeft: '7%',
      marginBottom: '15px',
      _after: {
        background: 'orange',
      },
      '.is-hero &': {
        right: '40px',
        float: 'none',
        flex: '0 0 350px',
        order: 2,
        width: '350px',
        height: '100%',
        margin: 0,
      },
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      },
    },
    '.custom-image': {
      base: {
        width: 450,
      },
      sm: {
        display: 'none',
      },
    },
    '.custom-container': {
      flexDirection: 'column',
      flexGrow: 1,
    },
    '.header-section': {
      width: '100%',
    },
    '.header-wrap': {
      minH: '60px',
      marginTop: '20px',
      marginBottom: '20px',
      alignItems: 'center',
      position: 'relative',
    },
    '.header-logo': {
      base: {
        flexBasis: '75%',
      },
      md: {
        flexBasis: '50%',
      },
      xl: {
        zIndex: 98,
        top: 0,
        width: '300px',
        textAlign: 'center',
        position: 'absolute',
        left: 'calc(50% - 150px)',
      },
    },
    '#mobile-nav': {
      sm: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      xl: {
        display: 'none',
      },
    },
    '.header-nav': {
      base: {
        fontFamily: 'spartan',
        position: 'relative',
        zIndex: 99,
        flex: '0 1 100%',
      },
      sm: {
        flexBasis: '25%',
        '& nav': {
          display: 'none',
        },
      },
      md: {
        flexBasis: '50%',
      },
      xl: {
        '& nav, & nav>ul+ul': {
          display: 'flex',
          alignItems: 'center',
          flex: '0 0 auto',
        },
        '& li, & a': {
          fontSize: '14px',
          display: 'inline-block',
        },
        '& a, & .signin a, & .signout a, & .signup': {
          marginRight: '18px',
        },
        '& .signup a': {
          fontFamily: 'spartan',
          fontSize: '12px',
          marginRight: 0,
          padding: '10px 12px 8px',
          letterSpacing: '.5px',
          lineHeight: '18px',
        },
      },
    },
    '.header-checkbox': {
      display: 'none',
      '&:checked~nav ul': {
        position: 'relative',
      },
    },
    '.header-toggle': {
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
    '.pinned-section': {
      base: {
        boxSizing: 'content-box',
      },
      sm: {
        flexWrap: 'wrap',
        marginBottom: '4vh',
        border: 'var(--border) var(--chakra-colors-steel-500)',
        padding: '35px 5% 0',
      },
      lg: {
        padding: 0,
        border: 'none',
      },
      xl: {
        marginBottom: 0,
        flexWrap: 'nowrap',
      },
    },
    '.pinned-pages': {
      base: {
        boxSizing: 'content-box',
        borderColor: 'var(--chakra-colors-announcements)',
      },
      sm: {
        maxW: '100%',
      },
      md: {
        // marginTop: "5vh",
      },
      xl: {
        flexBasis: '25%',
      },
    },
    '.pinned-pages+.pinned-posts': {
      xl: {
        marginLeft: '35px',
      },
    },
    '.pinned-posts': {
      base: {
        marginLeft: 0,
        boxSizing: 'content-box',
      },
      sm: {
        '.pinned-pages+&': {
          marginTop: '15px',
        },
      },
      xl: {
        '.pinned-pages+&': {
          marginTop: '10vh',
        },
        flexBasis: '75%',
      },
    },
    '.loop-wrap': {
      flexWrap: 'wrap',
      marginBottom: 0,
    },
    '.item': {
      base: {
        maxW: '100%',
        '&.is-hero': {
          maxW: '100%',
          marginTop: '10vh',
          padding: '50px 0',
          flexBasis: '100%',
        },
      },
      sm: {
        flexBasis: '100%',
        marginTop: 0,
        paddingTop: '0',
        paddingBottom: '0',
        marginBottom: '20px',
        '&.is-hero.is-first': {
          marginTop: 0,
        },
      },
      md: {
        marginTop: '10vh',
        maxW: '50%',
        paddingTop: 0,
        paddingBottom: 0,
        flex: '1 0 50%',
        marginBottom: 0,
        '&.is-even': {
          paddingRight: '2%',
          paddingLeft: 0,
        },
        '&.is-odd': {
          paddingRight: 0,
          paddingLeft: '2%',
        },
      },
      lg: {
        '&.is-hero.is-first': {
          marginTop: '3vh',
        },
      },
    },
    '.item-container': {
      base: {
        boxSizing: 'border-box',
        maxW: '100%',
        position: 'relative',
      },
      sm: {
        flexWrap: 'wrap',
        '.post-header.is-hero &': {
          alignItems: 'center',
        },
      },
      md: {
        flexWrap: 'nowrap',
        '.post-header.is-hero.is-image': {
          minHeight: '45vh',
        },
        '.item.is-hero.is-image &': {
          _before: {
            zIndex: -2,
            maxW: '275px',
            width: '100%',
            top: '-3.1vh',
            right: 0,
            bottom: '-4vh',
            background: 'radial-gradient(steel.400 6%, transparent 0)',
            position: 'absolute',
            content: "''",
            backgroundSize: '28px 28px',
          },
          _after: {
            zIndex: -3,
            position: 'absolute',
            width: '100%',
            maxW: '245px',
            background: '#ff4a97',
            top: '-4vh',
            bottom: '3vh',
            right: '26px',
            content: "''",
          },
        },
        '.item.is-odd &': {
          borderLeft: 'var(--border) var(--chakra-colors-steel-400)',
        },
        '.item.is-even &': {
          borderLeft: 'var(--border) var(--chakra-colors-steel-400)',
        },
      },
    },
    '.item-title': {
      base: {
        fontSize: '24px',
        width: '100%',
        margin: '0 0 2vh -2px',
        '.item.is-hero &': {
          fontSize: '32px',
          marginBottom: '0',
          marginLeft: '-1px',
        },
      },
      xl: {
        fontSize: '30px',
      },
    },
    '.item-excerpt': {
      base: {
        fontFamily: 'spartan',
        fontSize: '13px',
        lineHeight: '1.6',
        width: '95%',
        maxW: '400px',
        marginTop: '0',
        marginBottom: '0',
        padding: '5px 0 10px',
        '.item.is-hero &': {
          lineHeight: 1.7,
          columnCount: 1,
          paddingTop: '15px',
          paddingBottom: '5px',
        },
      },
      lg: {
        maxW: '500px',
        paddingTop: '10px',
        paddingBottom: '3vh',
      },
      xl: {
        lineHeight: 1.7,
        columnCount: '1',
      },
    },
    '.item-content': {
      base: {
        width: '100%',
      },
      sm: {
        padding: '10px 0 10px 5%',
        paddingLeft: 0,
      },
      md: {
        paddingLeft: '5%',
      },
    },
    '.item-image': {
      base: {
        lineHeight: '0',
        position: 'relative',
        zIndex: 1,
        float: 'right',
        width: '95px',
        height: '95px',
        marginTop: '6px',
        marginBottom: '15px',
        marginLeft: '7%',
        _after: {
          position: 'absolute',
          zIndex: -1,
          content: "''",
          pointerEvents: 'none',
          top: '-6px',
          right: '6px',
          bottom: '6px',
          left: '-6px',
        },
        'a&': {
          display: 'block',
        },
        '.item.is-hero &': {
          height: '100%',
          margin: 0,
          marginBottom: '20px',
          flex: '0 0 350px',
          right: 0,
          _after: {
            display: 'none',
          },
        },
      },
      sm: {
        '.item.is-hero &': {
          order: 0,
        },
        '.item.is-hero & img': {
          maxW: '240px',
        },
        '.item.is-hero.is-image &': {
          _before: {
            zIndex: -2,
            right: 0,
            bottom: '10px',
            background: 'radial-gradient(var(--chakra-colors-steel-400) 6%, transparent 0)',
            position: 'absolute',
            top: '-35px',
            left: '35px',
            display: 'block',
            content: "''",
            backgroundSize: '17px 17px',
          },
          _after: {
            zIndex: -3,
            maxWidth: '240px',
            background: '#ff4a97',
            position: 'absolute',
            top: '-35px',
            bottom: '40px',
            left: '35px',
            right: '6px',
            display: 'block',
            content: "''",
            backgroundSize: '17px 17px',
          },
        },
      },
      md: {
        '.item.is-hero &': {
          order: 2,
          width: '290px',
          flexBasis: '290px',
        },
        '.item.is-hero.is-image &': {
          _before: {
            display: 'none',
          },
          _after: {
            display: 'none',
          },
        },
      },
      lg: {
        width: '95px',
        height: '95px',
        marginTop: '6px',
        '.item.is-hero &': {
          right: '0',
        },
      },
      xl: {
        right: '0',
      },
    },
    '.is-odd': {
      sm: {
        '.item& .item-container': {
          display: 'block',
          borderLeft: 'none',
        },
      },
    },
    '.subscribe-section': {
      base: {
        marginTop: '8vh',
      },
    },
    '.subscribe-wrap': {
      base: {
        marginTop: '8vh',
        margin: '0 auto',
        padding: '0 0 50px',
        alignItems: 'center',
      },
      sm: {
        flexWrap: 'wrap',
      },
      lg: {
        flexWrap: 'nowrap',
      },
    },
    '.subscribe-form': {
      base: {
        display: 'flex',
        position: 'relative',
        height: '50px',
        boxSizing: 'content-box',
      },
      sm: {
        flex: '0 0 auto',
        width: '100%',
        '& input': {
          width: '20%',
          height: 'unset',
          paddingRight: '10px',
          paddingLeft: '10px',
          wordBreak: 'normal',
          color: 'var(--chakra-colors-steel-100)',
          background: 'var(--chakra-colors-steel-900)',
          flex: '1 1 auto',
          fontSize: '16px',
          padding: '0 20px',
          borderRadius: 0,
          _focus: {
            width: '270px',
          },
        },
      },
      md: {
        height: '60px',
        width: '70%',
        '& input': {
          width: '250px',
        },
      },
      lg: {
        width: 'unset',
        '& input': {
          width: '250px',
        },
      },
    },
    '.subscribe-message': {
      base: {
        '& small': {
          fontFamily: 'mono',
          fontSize: '12px',
          lineHeight: 1.1,
          position: 'absolute',
          right: 0,
          bottom: '-38px',
          left: '20px',
          display: 'none',
          width: '100%',
          margin: 0,
          padding: 0,
          color: 'white',
        },
        '&.success .alert-success': {
          display: 'block',
        },
        '&.loading .alert-loading': {
          display: 'block',
        },
        '&.error .alert-error': {
          display: 'block',
        },
      },
    },
    '.pagination-section': {
      base: {
        paddingBottom: '1px',
        textAlign: 'center',
        boxSizing: 'content-box',
      },
      sm: {
        marginTop: '5vh',
        marginBottom: '9vh',
      },
      md: {
        margin: '10vh auto 15vh',
      },
    },
    '.global-footer': {
      width: '100%',
      maxW: '1200px',
      marginRight: 'auto',
      marginLeft: 'auto',
      flexShrink: '0',
    },
    '.post-share-section': {
      '& a': {
        display: 'flex',
        width: '85px',
        height: '64px',
        pointerEvents: 'none',
        border: 0,
        justifyContent: 'center',
        alignItems: 'center',
      },
      '& a:first-of-type': {
        paddingLeft: '10px',
        borderLeft: 'var(--border) var(--chakra-colors-steel-400)',
      },
      '& a:last-of-type': {
        paddingRight: '10px',
        borderRight: 'var(--border) var(--chakra-colors-steel-400)',
      },
    },
    body: {
      bg: '#182029',
      lineHeight: '1.5',
      wordWrap: 'break-word',
      wordBreak: 'break-word',
      fontSize: '19px',
      color: '#f7f9f9',
    },
    hr: {
      marginTop: '6vmin',
      width: '100%',
      position: 'relative',
      margin: '2.5em 0 3.5em',
      padding: '0',
      height: '1px',
      border: '0',
      borderTop: '1px solid #f0f0f0',
    },
    article: {
      base: {
        '.global-special &': {
          boxSizing: 'border-box',
        },
      },
      sm: {
        '.global-special &': {
          padding: '10px 25px 10px',
          paddingLeft: 0,
        },
      },
      md: {
        '.global-special &': {
          padding: '10px 25px 10px',
          paddingLeft: 0,
        },
      },
      lg: {
        '.global-special  &': {
          flexBasis: '100%',
          padding: '10px 25px 10px',
        },
        '.global-special &:not(:first-of-type):not(:last-of-type), .global-special &:last-of-type':
          {
            borderLeft: 'var(--border) var(--chakra-colors-steel-400)',
          },
        '.global-special &:first-of-type:last-of-type': {
          borderLeft: 'none',
        },
        '.global-special &:first-of-type': {
          paddingLeft: 0,
        },
        '.global-special &': {
          flex: '1 0 25%',
        },
      },
      xl: {
        '.global-special &': {
          padding: '10px 25px',
        },
      },
    },
    p: {
      fontSize: '19px',
      fontWeight: '400',
      lineHeight: '1.75',
      position: 'relative',
      fontFamily: 'mulish',
      marginRight: '0',
      marginLeft: '0',
      marginBottom: '40px',
    },
    blockquote: {
      fontSize: '30px',
      position: 'relative',
      width: '100%',
      paddingLeft: '55px',
      lineHeight: '1.5',
      boxSizing: 'border-box',
      fontFamily: 'spartan',
      my: '75px',
      '&::before': {
        fontFamily: 'spartan',
        position: 'absolute',
        content: "'\"'",
      },
    },
    ul: {
      paddingLeft: '15px',
      listStyle: 'disc outside',
      marginRight: '0',
      marginLeft: '15px',
      marginBottom: '40px',
      marginTop: '0',
      '.header-nav nav &': {
        zIndex: 1,
        margin: 0,
        padding: 0,
        listStyle: 'none',
        wordBreak: 'normal',
      },
      '.header-nav nav>&': {
        flexGrow: 1,
      },
    },
    li: {
      textAlign: '-webkit-match-parent',
    },
    'h1,h2,h3,h4,h5,h6': {
      fontFamily: 'spartan',
    },
    h1: {
      fontSize: '55px',
      marginTop: '60px',
    },
    h2: {
      fontSize: '41px',
      marginTop: '55px',
      lineHeight: '1.4',
      marginBottom: '20px',
      marginLeft: '-1px',
      '.global-special &': {
        fontFamily: 'mono',
        fontSize: '13px',
        lineHeight: '1.4',
        position: 'absolute',
        zIndex: 1,
        top: 0,
        left: 0,
        display: 'inline-block',
        margin: 0,
        transform: 'translateY(-100%)',
        letterSpacing: 0,
        color: 'var(--chakra-colors-steel-100)',
      },
      '.global-special & span': {
        background: 'var(--chakra-colors-red-500)',
      },
      '.pinned-pages & span': {
        background: 'var(--chakra-colors-announcements)',
      },
      '&.item-title': {
        fontSize: '24px',
        marginLeft: 0,
      },
    },
    h3: {
      base: {
        fontSize: '31px',
        '.global-special &': {
          fontSize: '20px',
        },
        '.subscribe-wrap &': {
          lineHeight: 1.1,
          boxSizing: 'border-box',
          minW: '280px',
          margin: 0,
          padding: '25px 5% 25px 0',
          flex: '1 1 50%',
        },
        '.global-special &+.global-meta': {
          marginBottom: 0,
        },
      },
      sm: {
        '.global-special &': {
          fontSize: '15px',
        },
        '.subscribe-wrap &': {
          fontSize: '35px',
        },
      },
      lg: {
        marginTop: '45px',
        '.global-special &': {
          marginTop: 0,
          marginBottom: '1vh',
        },
        '.subscribe-wrap &': {
          fontSize: '35px',
        },
      },
    },
    h4: {
      fontSize: '24px',
      marginTop: '40px',
    },
    h5: {
      fontSize: '20px',
      marginTop: '40px',
    },
    h6: {
      fontSize: '11px',
      marginTop: '45px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
    },
  },
};
