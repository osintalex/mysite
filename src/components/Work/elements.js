import { React } from "react";
import { Button, Heading } from "@chakra-ui/react";
import PropTypes from "prop-types";

/**
 * Title for a work card.
 * @param {WorkTitle.propTypes} props
 * @return {ReactElement}
 */
const WorkTitle = ({ title }) => {
  return (
    <Heading as="h3" size="md" lineHeight="tall" color="blue.400">
      {title}
    </Heading>
  );
};
WorkTitle.propTypes = {
  title: PropTypes.string,
};
/**
 * CTA style button for each project.
 * @return {ReactElement}
 */
const WorkButton = () => {
  return (
    <Button fontSize="sm" bg="gray.900" _hover={{}}>
      View project
    </Button>
  );
};

export { WorkTitle, WorkButton };
