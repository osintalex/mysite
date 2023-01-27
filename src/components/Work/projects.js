import { React } from "react";
import { Text, ListItem, UnorderedList, Heading, Link } from "@chakra-ui/react";

// Array of objects containing information on each project
export const projects = [
  {
    title: "Palo Alto Networks",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I&apos;m a Senior Staff Software Engineer in{" "}
          <Link
            href="https://unit42.paloaltonetworks.com/"
            fontWeight="bold"
            isExternal
          >
            Unit 42
          </Link>
          , Palo Alto Network&apos;s industry leading cyber threat intelligence
          and incident response practice. We work on some really cool stuff that
          I can&apos;t tell you about 😉.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>JavaScript</ListItem>
          <ListItem>React</ListItem>
          <ListItem>Kubernetes</ListItem>
          <ListItem>GCP</ListItem>
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
          organized crime! My team provides cutting edge research, development,
          and intelligence to clients and all other cybersecurity business units
          at PwC.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>JavaScript/Typescript</ListItem>
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
    title: "Sudan Art Website",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I was inspired by a websited called threefingers.org that hosted
          revolutionary art in Myanmar to make something similar following the
          coup in Sudan.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Django</ListItem>
          <ListItem>React JS</ListItem>
          <ListItem>Digital Ocean</ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://github.com/osintalex/sudan-art",
  },
  {
    title: "Black Lives Matter",
    description: (
      <>
        <Text style={{ marginBottom: "1rem" }}>
          I built a social justice focus web app to focus on the effects of
          structural racism in the UK, using data from the Office of National
          Statistics and the UK Police&apos;s own data API. I&apos;m hopeful it
          made a small difference during the protest movement in the UK.
        </Text>
        <Heading as="h6" size="xs" style={{ marginBottom: "1rem" }}>
          Technologies:
        </Heading>
        <UnorderedList style={{ marginLeft: "1rem" }}>
          <ListItem>Python</ListItem>
          <ListItem>Plotly</ListItem>
          <ListItem>Dash</ListItem>
        </UnorderedList>
      </>
    ),
    url: "https://github.com/osintalex/Dash-BLM",
  },
];
