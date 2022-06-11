import { Badge, Box, Flex, Grid, Text, VStack } from "@chakra-ui/react";
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
import Tilt from "react-parallax-tilt";
import Link from "next/link";

interface HomePageProps {
  gigs: GigInterface[];
  mixes: MixInterface[];
}

const Home: NextPage<HomePageProps> = ({ gigs, mixes }) => {
  const tabs = ["mixes", "gigs", "merch"];

  return (
    <BaseLayout>
      <Flex direction="column">
        <Flex justify="space-between">
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
            <AnimatedName text="Slum Disco Soundsystem" />
          </Flex>
          <LocationAndTime />
        </Flex>
        <Flex
          justify="start"
          width="100%"
          position="sticky"
          display={["inherit", "inherit", "none"]}
        >
          {tabs.map((tab) => (
            <Tilt key={tab}>
              <Box>
                {/* slightly more responsive this way */}
                <Link href={`#${tab}`}>
                  <Badge {...pillStyle}>
                    <Text _hover={{ color: "white" }} fontSize="sm" color="red">
                      {tab}
                    </Text>
                  </Badge>
                </Link>
              </Box>
            </Tilt>
          ))}
        </Flex>
        <Grid
          mt="1.5em"
          width="100%"
          templateColumns={["1fr", "1fr", "repeat(3, 1fr)"]}
          templateRows={["repeat(3, 1fr)", "1fr", "1fr"]}
          gap={6}
        >
          <Mixes mixes={mixes} />
          <Gigs gigs={gigs} />
          <Merch />
        </Grid>
      </Flex>
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
