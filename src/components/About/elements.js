import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { GitHub } from "react-feather";
import Headshot from "./headshot.jpg";
import "../CSS/loading.css";
/**
 * Header component.
 * @return {ReactElement}
 */
const Header = () => {
  return (
    <HStack spacing={4} alignItems="center">
      <VStack>
        <Box
          bgGradient="linear(to-l, #79c2ff, #4a5888)"
          rounded="full"
          style={{ marginBottom: "0.25rem" }}
        >
          <Image
            src={Headshot}
            alt="headshot"
            boxSize="40vw"
            style={{ borderRadius: "75%" }}
            // This handles an annoying error on firefox where it
            // flashes alt text while loading
            id="image-that-loads"
          />
        </Box>
        <Text as="i" fontSize="sm">
          illustration by Dmitrii Narozhnii
        </Text>
      </VStack>
      <Box>
        <VStack spacing={2} align="left">
          <Heading as="h1" size="xl">
            Alexander Darby
          </Heading>
          <Text>Здравствуйте!</Text>
        </VStack>
      </Box>
    </HStack>
  );
};

/**
 * Bio component
 * @return {ReactElement}
 */
const Bio = () => {
  const technologies = ["TypeScript", "Go", "Rust", "Kubernetes", "Terraform"];
  const technologiesLength = technologies.length;
  return (
    <Box className="article" as="div">
      <Text>
        That means hello in Russian, which is how I first got into coding. I
        took a job to investigate disinformation targeting the Ukrainian
        elections and was rapidly overwhelmed. So, I looked to{" "}
        <Box as="span" fontWeight="bold">
          Python <span>🐍</span>{" "}
        </Box>
        for assistance. I now work full stack with Python,
        {technologies.map((x, index) => (
          <Fragment key={`${x}-${index}`}>
            <Box as="span" fontWeight="bold">
              {" "}
              {x}
            </Box>
            {index < technologiesLength - 2 && ","}
            {index === technologiesLength - 1 && "."}
            {index === technologiesLength - 2 && " and"}{" "}
          </Fragment>
        ))}
      </Text>
      <Text>
        I enjoy working in{" "}
        <Box as="span" fontWeight="bold">
          cybersecurity <span>🖥️ </span>{" "}
        </Box>{" "}
        since I think it&apos;s a worthwhile thing to do. Right now, we&apos;re
        building the infrastructure of the future and so much of it{" "}
        <Box as="span" fontWeight="bold">
          isn&apos;t safe
        </Box>
        .
      </Text>
      <Text>
        I also care about inclusion within tech and like to{" "}
        <Box as="span" fontWeight="bold">
          mentor other developers
        </Box>
        .
      </Text>
      <Text>
        I studied Philosophy at university, so I&apos;m a bit of a nut for{" "}
        <Box as="span" fontWeight="bold">
          clean logical processes{" "}
        </Box>{" "}
        and this bleeds into my programming style. For instance, I love{" "}
        <Box as="span" fontWeight="bold">
          writing tests{" "}
        </Box>{" "}
        and{" "}
        <Box as="span" fontWeight="bold">
          static typing
        </Box>
        . I try to write code that is robust, easy to read, and great at
        handling errors.
      </Text>
    </Box>
  );
};

/**
 * Socials component
 * @return {Fragment}
 */
const Socials = () => {
  return (
    <Box display="flex" alignItems="center">
      <HStack spacing={4}>
        <Link
          py={2}
          px={4}
          href="https://github.com/osintalex"
          rounded="sm"
          bg="#333"
          color="#fff"
          fontWeight="bold"
          isExternal
        >
          <HStack spacing={2} alignItems="center">
            <Box as={GitHub} /> <Text>Github</Text>
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export { Header, Bio, Socials };
