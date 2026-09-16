import { Box, Heading, Grid, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.jsx";
import Footer from "../Footer/footer.jsx";
import { FadeIn } from "../FadeIn/fadeIn.jsx";
import { TalksList } from "./elements.jsx";
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
      <FadeIn>
        <Box maxW="2xl" mx="auto" px={4} py={8}>
          <Grid templateColumns="1fr">
            <Box as="section">
              <VStack gap={8} align="start">
                <VStack gap={2} align="start">
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
                      <TalksList
                        conference={talk.conference}
                        date={talk.date}
                        title={talk.title}
                        description={talk.description}
                        recordingLink={talk.recordingLink}
                        slidesLink={talk.slidesLink}
                      />
                    </div>
                  );
                })}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </FadeIn>
      <Footer />
    </>
  );
}
