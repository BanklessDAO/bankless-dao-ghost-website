import { ComponentSingleStyleConfig } from '@chakra-ui/react';

const Button: ComponentSingleStyleConfig = {
  baseStyle: {},
  sizes: {},
  variants: {
    solid: {
      fontFamily: 'spartan',
      cursor: 'pointer',
      letterSpacing: '1px',
      borderRadius: 0,
      color: 'steel.100',
      bg: 'red.500',
      _hover: {
        bg: 'red.600',
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
      border: '10px solid var(--chakra-colors-red-500)',
      borderRadius: '50px',
      outline: '0',
      backgroundColor: 'var(--chakra-colors-steel-100)',
      _hover: {
        transform: 'scale(.6)',
        backgroundColor: 'var(--chakra-colors-red-500)',
      },
    },
  },
  defaultProps: {
    variant: 'solid',
  },
};

export default Button;
