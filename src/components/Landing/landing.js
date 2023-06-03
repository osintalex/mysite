import { Box, SlideFade, VStack, Heading } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import styled from "styled-components";
import { keyframes } from "styled-components";

/**
 * Landing page component.
 * @return {ReactElement} the landing page :-)
 */
export default function Landing() {
  return (
    <>
      <Menu />
      <SlideFade in>
        <Box
          as="section"
          h={[
            "calc(100vh - 109px)",
            "calc(100vh - 109px)",
            "calc(100vh - 64px)",
          ]}
          d="flex"
          alignItems="center"
          maxW="2xl"
          mx="auto"
          px={4}
        >
          <VStack
            spacing={8}
            alignItems="center"
            justifyContent="center"
            textAlign="center"
          >
            <Box>
              <AnimatedGradientText>
                Hi, I&apos;m Alexander
              </AnimatedGradientText>
            </Box>
            <Box>
              <Heading
                as="h2"
                size="lg"
                lineHeight="tall"
                color="gray.500"
                fontWeight="medium"
              >
                I&apos;m a{" "}
                <Box as="span" color="gray.300">
                  software engineer{" "}
                </Box>
                working in{" "}
                <Box as="span" color="gray.300">
                  cybersecurity
                </Box>
                . I like{" "}
                <Box as="span" color="gray.300">
                  socially engaged{" "}
                </Box>{" "}
                open source projects,{" "}
                <Box as="span" color="gray.300">
                  writing articles{" "}
                </Box>
                about coding, and{" "}
                <Box as="span" color="gray.300">
                  mentoring{" "}
                </Box>
                other developers.
              </Heading>
            </Box>
          </VStack>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
}
// Styled components for text gradient animation - based off https://codepen.io/caseycallow/pen/yMNqPY
const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
