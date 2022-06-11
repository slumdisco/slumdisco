import { Badge, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedName from "../components/AnimatedName";
import BaseLayout from "../components/layout/BaseLayout";
import LocationAndTime from "../components/LocationAndTime";
import Gigs from "../components/MainSection/Gigs";
import Merch from "../components/MainSection/Merch";
import Mixes from "../components/MainSection/Mixes";
import { flexDirection } from "../theme/responsiveStyles";
import { pillStyle } from "../theme/styles";

const tabs = ["mixes", "merch", "gigs"];
const Home: NextPage = (props) => {
  return (
    <BaseLayout>
      <VStack spacing="1.5em">
        <Flex
          flexBasis={1}
          direction={["column", "row"]}
          justify="space-between"
        >
          <Flex direction="column">
            <Text fontSize="small">
              Slum Disco Soundsystem asdgshagdhas dasd asdsadljksadals some
              description goes here. bangkok bblabalablaah askjdhsakj hk sad sad
              asd hjas dgyuhas dsahjkdsah diusa lasdsa dsag kgsadldu;asdlasd as
            </Text>
            <Text mt="1em" fontSize="small">
              Another paragrapasddas goes here. sommething something sajdhsdksa
              sajkdas. askdh askd ksa das. askjdh askl sadaKS 122.
            </Text>
            <AnimatedName text="Slum disco Soundsystem" />
          </Flex>
          <LocationAndTime />
        </Flex>
        <Flex justify="start" width="100%">
          {tabs.map((tab) => (
            <Badge {...pillStyle} key={tab}>
              <Text _hover={{ color: "white" }} fontSize="sm" color="red">
                {tab}
              </Text>
            </Badge>
          ))}
        </Flex>
        <Grid
          width="100%"
          templateColumns={["1fr", "repeat(3, 1fr)"]}
          templateRows={["repeat(3, 1fr)", "1fr"]}
          gap={6}
        >
          <Mixes />
          <Gigs />
          <Merch />
        </Grid>
      </VStack>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()
  const time = "abc";
  console.log(process.env.AIR_TABLE_KEY);

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      time,
    },
  };
}

export default Home;
