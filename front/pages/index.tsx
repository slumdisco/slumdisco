import { Badge, Flex, Grid, Text, VStack } from "@chakra-ui/react";
import type { NextPage } from "next";
import AnimatedName from "../components/AnimatedName";
import BaseLayout from "../components/layout/BaseLayout";
import LocationAndTime from "../components/LocationAndTime";
import Gigs, { GigInterface } from "../components/MainSection/Gigs";
import Merch from "../components/MainSection/Merch";
import Mixes, { MixInterface } from "../components/MainSection/Mixes";
import {
  GIGS_TABLE_ENDPOINT,
  MIXES_TABLE_ENDPOINT,
  VENUES_TABLE_ENDPOINT,
} from "../endpoints/endpoints";
import { pillStyle } from "../theme/styles";

interface HomePageProps {
  gigs: GigInterface[];
  mixes: MixInterface[];
}

const Home: NextPage<HomePageProps> = ({ gigs, mixes }) => {
  const tabs = ["mixes", "merch", "gigs"];

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
          <Mixes mixes={mixes} />
          <Gigs gigs={gigs} />
          <Merch />
        </Grid>
      </VStack>
    </BaseLayout>
  );
};

export async function getStaticProps() {
  var headers = new Headers();
  headers.append("Authorization", `Bearer ${process.env.AIR_TABLE_KEY}`);

  const venueRes = await fetch(VENUES_TABLE_ENDPOINT, { headers: headers });
  const venues = (await venueRes.json()).records.map((x: any) => ({
    id: x.id,
    name: x.fields.Name,
    country: x.fields.country,
  }));
  const gigRes = await fetch(GIGS_TABLE_ENDPOINT, { headers: headers });
  const gigs = (await gigRes.json()).records
    .map((x: any) => ({ ...x.fields }))
    .map((x: any) => ({
      ...x,
      Venue: venues.find((v: any) => v.id === x.Venue[0]).name,
      country: venues.find((v: any) => v.id === x.Venue[0]).country,
    }));
  const mixRes = await fetch(MIXES_TABLE_ENDPOINT, { headers: headers });
  const mixes = (await mixRes.json()).records.map((x: any) => ({
    id: x.id,
    name: x.fields.name,
    embedded: x.fields.embedded,
  }));
  return {
    props: {
      gigs,
      mixes,
      //venues,
    },
  };
}

export default Home;
