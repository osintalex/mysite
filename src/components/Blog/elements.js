import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

/**
 * Date element for article
 * @param {String} date
 * @return {JSX} the date.
 */
export const postDate = (date) => {
  return (
    <Box>
      <Text fontSize="sm" color="gray.400">
        {date}
      </Text>
    </Box>
  );
};

/**
 * Title element for article
 * @param {String} title
 * @return {JSX} the title.
 */
export const postTitle = (title) => {
  return (
    <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
      {title}
    </Heading>
  );
};

/**
 * Description element for article
 * @param {String} description
 * @return {JSX} article description.
 */
export const postDescription = (description) => {
  return <Text fontSize="sm">{description}</Text>;
};

/**
 * List of all articles returned from medium RSS feed.
 * @param {Array} article contains objects pertaining to parsed articles
 * from the RSS feed.
 * @param {Number} index just the index of each item in the list
 * @return {JSX} elements for each article.
 */
const articleList = (article, index) => {
  return (
    <>
      <Box key={index}>
        <a
          href={article.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Box>
            <VStack spacing={1} align="left">
              {postDate(article.date)}
              {postTitle(article.title)}
              {postDescription(article.description)}
            </VStack>
          </Box>
        </a>
      </Box>
    </>
  );
};

export { articleList };
