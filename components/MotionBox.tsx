import { motion, MotionProps } from "framer-motion";
import {
    forwardRef,
    ChakraProps,
    chakra,
    ComponentWithAs
  } from '@chakra-ui/react';
export type MotionBoxProps = Omit<
  ChakraProps,
  keyof MotionProps
> &
  MotionProps & {
    as?: React.ElementType;
  };

  

export const MotionBox = motion(
  forwardRef<ChakraProps, "div">((props, ref) => {
    return <chakra.div ref={ref} {...props} />;
  })
) as ComponentWithAs<"div", MotionBoxProps>;