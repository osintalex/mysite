import React from "react";
import { PostDate, PostTitle, PostDescription } from "../Blog/elements.jsx";
import { Box, VStack, Tag } from "@chakra-ui/react";
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
            <Tag.Root
              size="sm"
              colorPalette="teal"
              borderRadius="full"
              variant="subtle"
              className="slides-link"
            >
              <Tag.Label>Slides</Tag.Label>
            </Tag.Root>
          </a>
        )}
        {recordingLink && (
          <a
            href={recordingLink}
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <Tag.Root size="sm" colorPalette="teal" borderRadius="full" variant="subtle">
              <Tag.Label>Recording</Tag.Label>
            </Tag.Root>
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
        <VStack gap={1} align="start">
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
