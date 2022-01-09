import {
  Box,
  Heading,
  SlideFade,
  Grid,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Menu from "../Menu/menu.js";
import Footer from "../Footer/footer.js";
import { Loader } from "react-feather";
import { articleList } from "./elements.js";

// Used to parse medium API response
const parser = new DOMParser();

export default function Blog() {
  const [medium, setMedium] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Function to fetch and parse data from the medium API and save it into state.
   */
  const fetchData = () => {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@alexanderdarby",
      {
        headers: {
          Accept: "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setMedium(
          data.items.map((x) => {
            return {
              title: x.title,
              description: parser
                .parseFromString(x.description, "text/html")
                .querySelector("p.medium-feed-snippet").textContent,
              url: x.link,
              date: x.pubDate.split(" ")[0],
            };
          })
        );
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  /**
   * Hook to call the above function along with cleanup.
   */
  useEffect(() => {
    fetchData();
    return () => {
      setMedium([]);
    };
  }, []);

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
                    Writing
                  </Heading>
                  <Text>
                    Here are my some recent blog posts from my{" "}
                    <Link
                      href="https://medium.com/@alexanderdarby"
                      fontWeight="bold"
                      isExternal
                    >
                      Medium
                    </Link>{" "}
                    page.
                  </Text>
                </VStack>

                {isLoading ? (
                  <Loader role="loading" />
                ) : (
                  medium.map((article, index) => {
                    return (
                      <div
                        key={`${index} container`}
                        aria-label="blog posts container"
                      >
                        {articleList(article, index)}
                      </div>
                    );
                  })
                )}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </SlideFade>
      <Footer />
    </>
  );
}
