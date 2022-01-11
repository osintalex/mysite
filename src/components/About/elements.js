import {
  Box,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { GitHub, Linkedin } from "react-feather";
import Headshot from "./headshot.jpg";
import "./loading.css"
/**
 * Header JSX element.
 */
const header = () => {
  return (
    <HStack spacing={4} alignItems="center">
      <Box
        bgGradient="linear(to-l, #79c2ff, #4a5888)"
        rounded="full"
        p={1}
        w={100}
        h={100}
      >
        <Image
          src={Headshot}
          fallbackSrc='https://via.placeholder.com/150'
          alt="Alexander Darby"
          height={100}
          width={80}
          quality={100}
          style={{ borderRadius: "75%" }}
          // This handles an annoying error on firefox where it flashes alt text while loading
          className='headshot'
        />
      </Box>
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
 * Bio element.
 */
const bio = () => {
  return (
    <Box className="article" as="div">
      <Text>
        That means hello in Russian, which is how I first got into coding. I
        took a job to investigate disinformation targeting the Ukrainian
        elections and was rapidly overwhelmed. So, I looked to{" "}
        <Box as="span" fontWeight="bold">
          Python <span>🐍</span>{" "}
        </Box>
        for assistance. I now work full stack with Python as my primary
        language,{" "}
        <Box as="span" fontWeight="bold">
          JavaScript{" "}
        </Box>
        as my secondary, and dabble in{" "}
        <Box as="span" fontWeight="bold">
          Dev Ops{" "}
        </Box>
        for my sins.
      </Text>
      <Text>
        I really enjoy working in{" "}
        <Box as="span" fontWeight="bold">
          cybersecurity <span>🖥️ </span>{" "}
        </Box>{" "}
        since I think it's a worthwhile thing to do. Right now, we're building
        the infrastructure of the future and so much of it{" "}
        <Box as="span" fontWeight="bold">
          just isn't safe
        </Box>
        . I also really care about inclusion within tech and like to{" "}
        <Box as="span" fontWeight="bold">
          mentor developers
        </Box>{" "}
        from marginalised backgrounds.
      </Text>
      <Text>
        I studied Philosophy at university, so I'm a bit of a nut for{" "}
        <Box as="span" fontWeight="bold">
          clean logical processes{" "}
        </Box>{" "}
        and this bleeds into my programming style. For instance, I actually
        really like{" "}
        <Box as="span" fontWeight="bold">
          writing tests{" "}
        </Box>{" "}
        and{" "}
        <Box as="span" fontWeight="bold">
          typing Python statically
        </Box>
        . I try to write code that is robust, easy to read, and great at
        handling errors.
      </Text>
    </Box>
  );
};

/**
 * Socials JSX element.
 */
const socials = () => {
  return (
    <Box d="flex" alignItems="center">
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
        <Link
          py={2}
          px={4}
          href="https://www.linkedin.com/in/alexander-darby-01/"
          rounded="sm"
          bg="#0e76a8"
          color="#fff"
          fontWeight="bold"
          isExternal
        >
          <HStack spacing={2} alignItems="center">
            <Box as={Linkedin} /> <Text>LinkedIn</Text>
          </HStack>
        </Link>
      </HStack>
    </Box>
  );
};

export { header, bio, socials };
