import { React } from "react";
import { Text, ListItem, UnorderedList, Heading, Link } from "@chakra-ui/react";

// Array of objects containing information on each project
export const projects = [
  {
    title: "Palo Alto Networks",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I&apos;m a Principal Software Engineer at Palo Alto Networks, where I
          design and maintain distributed systems to enable threat intelligence
          at massive scale.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>JavaScript/TypeScript</ListItem>
          <ListItem>Rust</ListItem>
          <ListItem>Kubernetes</ListItem>
          <ListItem>GCP/AWS</ListItem>
          <ListItem>Terraform</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  {
    title: "PwC Cybersecurity",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I worked as a Senior Software Engineer writing code to help analyze
          Advanced Persistent Threats (APTs). Think nation state hackers and
          organized crime! My team provided cutting edge research, development,
          and intelligence to clients and all other cybersecurity business units
          at PwC.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>JavaScript/TypeScript</ListItem>
          <ListItem>Go</ListItem>
          <ListItem>Kubernetes</ListItem>
          <ListItem>GCP</ListItem>
          <ListItem>Terraform</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  {
    title: "PGI",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I worked in a hybrid data science/developer/devops role to analyse
          social media misinformation. I pioneered a data driven approach to
          this work and an internal web app to make this accessible to my
          colleagues.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Pandas/Scikit Learn/Numpy</ListItem>
          <ListItem>GCP/Azure</ListItem>
          <ListItem>Flask</ListItem>
        </UnorderedList>
      </>
    ),
    url: null,
  },
  {
    title: "General Assembly Data Science",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I completed a fantastic data science bootcamp course. For my capstone,
          I built a project looking at what drove divisiveness in President
          Trump&apos;s tweets.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Pandas/Scikit Learn/Numpy</ListItem>
          <ListItem>
            Statistics <span>😉</span>
          </ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://towardsdatascience.com/trumps-twitter-network-7c59522ffe82",
  },
  {
    title: "Open Source Software",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I am a big believer in open source. I try and contribute to useful
          projects whenever I can and make my own small projects - like this
          website - public too!
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Some stuff I made or contributed to:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <Link href="https://github.com/osintalex/sudan-art" isExternal>
            <ListItem>Sudan Art Website</ListItem>
          </Link>
          <Link href="https://github.com/osintalex/Dash-BLM" isExternal>
            <ListItem>BLM Project</ListItem>
          </Link>
          <Link href="https://github.com/samuelcolvin/dirty-equals" isExternal>
            <ListItem>Dirty Equals</ListItem>
          </Link>
          <Link href="https://github.com/edgelesssys/constellation" isExternal>
            <ListItem>Constellations</ListItem>
          </Link>
        </UnorderedList>
      </>
    ),
  },
];
