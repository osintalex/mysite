// Array of objects containing information on each talk
export const talkDetails = [
  {
    date: "2022-12-10",
    conference: "BSides",
    title: "Everybody Loves TAXII",
    description: `These days, it seems like everyone and their mother wants a TAXII
      (Trusted Automated eXchange of Intelligence Information)
      server. But how do you actually build one quickly and well?`,
    slidesLink: "https://cryptpad.fr/file/#/2/file/uiNS9iFTnCAb6iK9d2cR78I3/",
    recordingLink: "https://www.youtube.com/watch?v=vv2EA3IapQ8",
  },
  {
    date: "2023-05-28",
    conference: "PyCon Italia",
    title: "Hack Your Own Code",
    description: `Is your code hard to hack? 
    Sure, code scans and lints are helpful but they don't guarantee that your code is secure. 
    In fact, there is only one good way to answer that question: hack your own code.  
    But we're software engineers, not hackers. So how do we do that?`,
    slidesLink:
      "https://drive.google.com/file/d/1QhmHJMdgtzATrbwCYRcJr51WXPxOt1Gw",
    recordingLink: "https://www.youtube.com/watch?v=td4X_h85CSg",
  },
  {
    date: "2023-07-21",
    conference: "EuroPython",
    title: "A Magic Implementation of NotImplemented",
    description: `Dirty Equals is a new python library by Samuel Colvin, the creator of Pydantic. It will transform how you write tests, especially for APIs.

    I made some contributions to it, which forever changed how I thought about NotImplemented.`,
    slidesLink:
      "https://drive.google.com/file/d/1sKuI4-PhjWtR6I5kd-CEN0GHv_ElrMcC",
    recordingLink: "https://www.youtube.com/watch?v=L-npVKkcnrQ",
  },
  {
    date: "2024-06-17",
    conference: "PyData London",
    title: " 5 Things I Learnt from Causing a Cloud Provider Outage",
    description: `Earlier this year, my team caused an outage across Europe for a major cloud provider. 
    The incident response taught me a lot about working with cloud data lake systems at massive scale. 
    How do you make these systems performant, resilient, and easy to maintain? 
    And of course, how do you stop them from behaving like a DDOS attack on the cloud provider?`,
    slidesLink:
      "https://drive.google.com/file/d/1OrKJhOOOXPMzISnSfR-nKEMf-TmnUJlH",
    recordingLink: "https://www.youtube.com/watch?v=VW5wHh-XJug",
  },
];
talkDetails.sort(function (a, b) {
  return new Date(b.date) - new Date(a.date);
});
