import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const baseButton = {
  fontFamily: 'spartan',
  cursor: 'pointer',
  letterSpacing: '1px',
  borderRadius: 0,
  _focus: {
    boxShadow: "none"
  },
}

const Button: ComponentSingleStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    solid: {
      ...baseButton,
      bg: 'red.500',
      color: 'steel.100',
      _hover: {
        bg: 'red.600',
      },
    },
    red: {
      ...baseButton,
      py: '3',
      paddingTop: '4',
      px: '6',
      width: 'fit-content',
      bg: 'red.500',
      color: 'white',
      fontSize: 'sm',
      _hover: {
        bg: 'red.700'
      }
    },
    black: {
      ...baseButton,
      py: '3',
      paddingTop: '4',
      px: '6',
      width: 'fit-content',
      bg: 'black',
      color: 'white',
      fontSize: 'sm',
      _hover: {
        color: 'whiteAlpha.500'
      }
    },
    outline: {
      _hover: {
        bg: 'black',
      },
    },
    loadMore: {
      display: 'none',
      width: '50px',
      height: '50px',
      padding: '0',
      cursor: 'pointer',
      transitionTimingFunction: 'cubic-bezier(.39,.07,.68,1.7)',
      transitionDuration: '.25s',
      transitionProperty: 'transform,background-color',
      border: '10px solid var(--color-details)',
      borderRadius: '50px',
      outline: '0',
      backgroundColor: 'var(--color-body)',
      _hover: {
        transform: 'scale(.6)',
        backgroundColor: 'var(--color-details)',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};

export default Button;
