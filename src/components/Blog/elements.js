import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Date component for article
 * @param {PostDate.propTypes} props
 * @return {ReactElement}
 */
export const PostDate = ({ date }) => {
  return (
    <Box>
      <Text fontSize="sm" color="gray.400">
        abc
      </Text>
    </Box>
  );
};
PostDate.propTypes = {
  date: PropTypes.string,
};
/**
 * Title component for article
 * @param {PostTitle.propTypes} props
 * @return {ReactElement}
 */
export const PostTitle = ({ title }) => {
  return (
    <Heading as="h3" size="md" color="blue.400" fontWeight="bold">
      {title}
    </Heading>
  );
};
PostTitle.propTypes = {
  title: PropTypes.string,
};

/**
 * Description component for article
 * @param {PostDescription.propTypes} description
 * @return {ReactElement}
 */
export const PostDescription = ({ description }) => {
  return <Text fontSize="sm">{description}</Text>;
};
PostDescription.propTypes = {
  description: PropTypes.string,
};
/**
 * List of all articles returned from medium RSS feed.
 * @param {ArticleList.propTypes} article
 * @return {ReactElement}
 */
const ArticleList = ({ article }) => {
  return (
    <>
      <Box>
        <a
          href={article.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <Box>
            <VStack spacing={1} align="left">
              <PostDate date={article.date} />
              <PostTitle title={article.title} />
              <PostDescription description={article.description} />
            </VStack>
          </Box>
        </a>
      </Box>
    </>
  );
};
ArticleList.propTypes = {
  article: PropTypes.object,
};
export { ArticleList };
