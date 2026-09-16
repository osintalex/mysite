import {
  Box,
  Heading,
  Grid,
  Text,
  VStack,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import Menu from "../Menu/menu.jsx";
import Footer from "../Footer/footer.jsx";
import { FadeIn } from "../FadeIn/fadeIn.jsx";
import { Loader } from "react-feather";
import { ArticleList } from "./elements.jsx";
import "../CSS/blog.css";

// Used to parse medium API response
const parser = new DOMParser();

/**
 * Blog component.
 * @return {ReactElement} the blog component.
 */
export default function Blog() {
  const [medium, setMedium] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  /**
   * Function to parse description content, which annoyingly changes sometimes.
   * @param {String} description
   * @return {String} result, a concise relevant description for each post
   */
  const parseDescription = (description) => {
    const parsed = parser.parseFromString(description, "text/html");
    const result =
      parsed.querySelector("p.medium-feed-snippet") !== null
        ? parsed.querySelector("p.medium-feed-snippet").textContent
        : parsed.querySelector("p").textContent;
    return result;
  };

  //
  /**
   * Hook to call the above function along with cleanup.
   */
  useEffect(() => {
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
              description: parseDescription(x.description),
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

    return () => {
      setMedium([]);
    };
  }, []);
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
                    Writing
                  </Heading>
                  <Text>
                    Here are my some recent blog posts from my{" "}
                    <Link
                      href="https://medium.com/@alexanderdarby"
                      fontWeight="bold"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Medium
                    </Link>{" "}
                    page.
                  </Text>
                </VStack>

                {isLoading ? (
                  <Box>
                    <Loader role="loading" className="spinning-loader" />
                  </Box>
                ) : (
                  medium.map((article, index) => {
                    return (
                      <div
                        key={`${index} container`}
                        aria-label="blog posts container"
                      >
                        <ArticleList
                          article={article}
                          key={`article-${index}`}
                        />
                      </div>
                    );
                  })
                )}
              </VStack>
            </Box>
          </Grid>
        </Box>
      </FadeIn>
      <Footer />
    </>
  );
}
