import React from "react";
import { postDate, postTitle, postDescription } from "../Blog/elements.js";
import { Box, VStack, Tag, TagLabel } from "@chakra-ui/react";
import "../CSS/talks.css";

/**
 * Tags for talk recording and slide links.
 * @param {String} slideLink contains url for slides to a talk.
 * @param {String} recordingLink contains url for recording of a talk.
 * @return {JSX} elements for each article.
 */
const talkTags = (slideLink, recordingLink) => {
  return (
    <>
      <Box className="tags-container">
        {slideLink && (
          <a
            href={slideLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Tag
              size="sm"
              colorScheme="teal"
              borderRadius="full"
              variant="subtle"
              className="slides-link"
            >
              <TagLabel>Slides</TagLabel>
            </Tag>
          </a>
        )}
        {recordingLink && (
          <a
            href={recordingLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Tag
              size="sm"
              colorScheme="teal"
              borderRadius="full"
              variant="subtle"
            >
              <TagLabel>Recording</TagLabel>
            </Tag>
          </a>
        )}
      </Box>
    </>
  );
};
/**
 * List of talks.
 * @param {Array} talk contains objects for a given talk.
 * @param {Number} index just the index of each item in the list
 * @return {JSX} elements for each article.
 */
const talksList = (talk, index) => {
  return (
    <>
      <Box key={index}>
        <Box>
          <VStack spacing={1} align="left">
            {postDate(talk.date)}
            {postTitle(talk.title)}
            <Box as="span" fontWeight="bold">
              {talk.conference}
            </Box>
            {postDescription(talk.description)}
            {(talk.slidesLink || talk.recordingLink) &&
              talkTags(talk.slidesLink, talk.recordingLink)}
            <Box></Box>
          </VStack>
        </Box>
      </Box>
    </>
  );
};

export { talksList };
