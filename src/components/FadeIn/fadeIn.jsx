import { Box } from "@chakra-ui/react";
import "./fade.css";

/**
 * One-shot fade-in wrapper. Replaces Chakra v1's SlideFade which
 * no longer exists in Chakra v3.
 * @param {Object} props children to fade in
 * @return {ReactElement} fading container
 */
export const FadeIn = ({ children, ...props }) => (
  <Box as="div" className="fade-in" {...props}>
    {children}
  </Box>
);
