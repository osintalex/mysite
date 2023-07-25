import { Box, Heading, SlideFade, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import { talksList } from "./elements.js";
import { talkDetails } from "./details.js";
import "../CSS/blog.css";

/**
 * Talks component.
 * @return {ReactElement} the talks component.
 */
export default function Talks() {
  return (
    <>
      <Menu />
      <SlideFade in>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <Grid templateColumns="1fr">
            <Box as="section">
              <VStack spacing={8} align="left">
                <VStack spacing={2} align="left">
                  <Heading as="h1" size="xl">
                    Talks
                  </Heading>
                  <Text>
                    Here are some talks I&apos;ve given at conferences.
                  </Text>
                </VStack>
                {talkDetails.map((talk, index) => {
                  return (
                    <div
                      key={`${index} container`}
                      aria-label="blog posts container"
                    >
                      {talksList(talk, index)}
                    </div>
                  );
                })}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
}
