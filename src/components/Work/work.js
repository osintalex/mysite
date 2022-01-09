import { Box, Grid, SlideFade, VStack, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import { workTitle, workButton } from "./elements.js";
import { projects } from "./projects.js";

/**
 * Work component.
 */
export default function Work() {
  return (
    <>
      <Menu />
      <SlideFade in>
        <Box maxW="6xl" mx="auto" px={4} py={8}>
          <Box style={{ marginBottom: "2rem" }}>
            <VStack spacing={2} align="left">
              <Heading as="h1" size="xl">
                Professional Experience
              </Heading>
              <Text>
                This section is a mix of positions I've held full time and
                personal coding projects.
              </Text>
            </VStack>
          </Box>

          <Grid templateColumns="1fr">
            <Box as="section" >
              <Grid
                templateColumns={[
                  "repeat(1, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(2, 1fr)",
                  "repeat(3, 1fr)",
                ]}
                gap={8}
              >
                {projects.map((project, index) => {
                  return (
                 
                      <Box
                        as="div"
                        key={`first container ${index}`}
                        bg="gray.800"
                        color="white"
                        rounded="sm"
                      >
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"

                        >
                          <Box p={8} as="div" key={`second container ${index}`}>
                            <VStack
                              spacing={4}
                              minH={48}
                              justifyContent="space-between"
                              align="left"

                            >
                              <VStack
                                spacing={1}
                                align="left"
                              >
                                {workTitle(project.title)}
                                {project.description}
                              </VStack>
                              {project.url ? <Box>{workButton()}</Box> : null}
                            </VStack>
                          </Box>
                        </a>
                      </Box>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
}
