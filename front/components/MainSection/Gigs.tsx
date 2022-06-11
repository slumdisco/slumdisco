import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import { FC, useMemo, useState } from "react";
import { pillStyle } from "../../theme/styles";
import MainSectionContainer from "../layout/MainSectionContainer";
import Flags from "country-flag-icons/react/3x2";
import getUnicodeFlagIcon from "country-flag-icons/unicode";

export interface GigInterface {
  tek: boolean;
  cho: boolean;
  Date: string;
  Venue: string;
  country: string;
}

enum pastUpcoming {
  Past = "past",
  Upcoming = "upcoming",
}

const GigsList: FC<{ gigs: GigInterface[] }> = ({ gigs }) => {
  return (
    <>
      {gigs.map((g, i) => {
        return (
          <Flex width="100%" direction="column" key={i}>
            <Text fontSize="xs">{g.Date}</Text>
            <Flex>
              {getUnicodeFlagIcon(g.country)}
              <Text ml="0.5em" fontSize="sm">
                {g.Venue}
              </Text>
            </Flex>
            <Text fontSize="sm">.</Text>
          </Flex>
        );
      })}
    </>
  );
};

const Gigs: FC<{ gigs: GigInterface[] }> = ({ gigs }) => {
  const dateAwareGigs = useMemo(() => {
    const gigsWithStates = gigs.map((x) => ({
      ...x,
      state:
        new Date(x.Date) < new Date()
          ? pastUpcoming.Past
          : pastUpcoming.Upcoming,
    }));

    return {
      past: gigsWithStates.filter((x) => x.state === pastUpcoming.Past),
      upcoming: gigsWithStates.filter((x) => x.state === pastUpcoming.Upcoming),
    };
  }, [gigs]);

  const [currentState, setCurrentState] = useState(pastUpcoming.Past);

  const states = [pastUpcoming.Past, pastUpcoming.Upcoming];
  return (
    <MainSectionContainer>
      <>
        <Flex width="100%" justify="space-between">
          <Text textDecoration="underline">GIGS</Text>
          <Flex justify="end" pr="0.5em">
            {states.map((x) => (
              <Badge
                key={x}
                {...pillStyle}
                bgColor={currentState === x ? "blue" : "none"}
                onClick={() => {
                  setCurrentState(x);
                }}
                ml="1em"
                cursor="pointer"
                //textDecoration={currentState === x ? "underline" : "none"}
              >
                <Text
                  fontSize="xs"
                  color={currentState === x ? "white" : "black"}
                >
                  {x}
                </Text>
              </Badge>
            ))}
          </Flex>
        </Flex>
        <Accordion
          mt="2em"
          mr="1.5em"
          index={currentState === pastUpcoming.Past ? 0 : 1}
          allowMultiple
        >
          {states.map((state) => (
            <AccordionItem key={state}>
              <h2>
                <AccordionButton
                  px="0"
                  onClick={() => {
                    setCurrentState(state);
                  }}
                >
                  <Box flex="1" textAlign="left" px="0">
                    <Text fontWeight="bold">{state}:</Text>
                  </Box>
                  {/* <AccordionIcon /> */}
                </AccordionButton>
              </h2>
              <AccordionPanel padding="0">
                <Box height="1em" />
                <GigsList gigs={dateAwareGigs[state]} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </>
    </MainSectionContainer>
  );
};

export default Gigs;
