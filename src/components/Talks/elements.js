import React from "react";
import { PostDate, PostTitle, PostDescription } from "../Blog/elements.js";
import { Box, VStack, Tag, TagLabel } from "@chakra-ui/react";
import "../CSS/talks.css";
import PropTypes from "prop-types";

/**
 * Tags for talk recording and slide links.
 * @param {TalkTags.propTypes} props
 * @return {ReactElement}
 */
const TalkTags = ({ slideLink, recordingLink }) => {
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
TalkTags.propTypes = {
  slideLink: PropTypes.string,
  recordingLink: PropTypes.string,
};
/**
 * List of talks.
 * @param {TalksList.propTypes} props
 * @return {ReactElement}
 */
const TalksList = ({
  conference,
  date,
  description,
  slidesLink,
  recordingLink,
  title,
}) => {
  return (
    <>
      <Box>
        <VStack spacing={1} align="left">
          <PostDate date={date} />
          <PostTitle title={title} />
          <Box as="span" fontWeight="bold">
            {conference}
          </Box>
          <PostDescription description={description} />
          {(slidesLink || recordingLink) && (
            <TalkTags slideLink={slidesLink} recordingLink={recordingLink} />
          )}
          <Box></Box>
        </VStack>
      </Box>
    </>
  );
};
TalksList.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  conference: PropTypes.string,
  recordingLink: PropTypes.string,
  slidesLink: PropTypes.string,
  title: PropTypes.string,
};
export { TalksList };
