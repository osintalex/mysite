import { React } from "react";
import { Button, Heading } from "@chakra-ui/react";

/**
 * Title for a work card.
 * @param {String} title
 * @return {JSX} the title.
 */
const workTitle = (title) => {
  return (
    <Heading as="h3" size="md" lineHeight="tall" color="blue.400">
      {title}
    </Heading>
  );
};

/**
 * CTA style button for each project.
 * @return {JSX} the button.
 */
const workButton = () => {
  return (
    <Button fontSize="sm" bg="gray.900" _hover={{}}>
      View project
    </Button>
  );
};

export { workTitle, workButton };
