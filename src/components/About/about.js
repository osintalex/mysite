import { Box, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import { Header, Bio, Socials } from "./elements.js";

/**
 * About component.
 * @return {ReactElement} about component.
 */
export default function About() {
  return (
    <>
      <Menu />
      <Box maxW="2xl" mx="auto" px={4} py={8}>
        <Grid templateColumns="1fr">
          <Box as="section">
            <VStack spacing={4} align="left">
              <Header />
              <Bio />
              <Socials />
            </VStack>
          </Box>
        </Grid>
      </Box>
      <Footer />
    </>
  );
}
