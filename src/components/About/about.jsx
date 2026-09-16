import { Box, Grid, VStack } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.jsx";
import Footer from "../Footer/footer.jsx";
import { Header, Bio, Socials } from "./elements.jsx";

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
            <VStack gap={4} align="start">
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
