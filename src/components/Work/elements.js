import { Button, Heading } from "@chakra-ui/react";

/**
 * Title for a work card.
 * @param {String} title 
 * @returns JSX element - the title
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
 */
const workButton = () => {
  return (
    <Button fontSize="sm" bg="gray.900" _hover={{}}>
      View project
    </Button>
  );
};

export { workTitle, workButton };
