import { Box, Flex, Text } from "@chakra-ui/react";
import { faMinus, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, useEffect, useState } from "react";
import MainSectionContainer from "../layout/MainSectionContainer";

export interface MixInterface {
  name: string;
  embedded: string;
}

const Mix: FC<{ mix: MixInterface; i: number }> = ({ mix, i }) => {
  const isUrl = mix.embedded[0] === "h";
  const [isExpanded, setIsExpanded] = useState(i % 2 == 0 && !isUrl);
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <>
      <Flex
        width="100%"
        pr="2em"
        direction="column"
        borderBottom="1px"
        pb="1em"
        mb="1em"
      >
        <Flex mb="1em" alignItems="center" alignContent="center">
          {isExpanded ? (
            <FontAwesomeIcon
              onClick={() => {
                setIsExpanded(false);
              }}
              cursor="pointer"
              icon={faMinus}
            />
          ) : (
            <FontAwesomeIcon
              onClick={() => {
                if (isUrl) {
                  window.open(mix.embedded, "_blank");
                  return;
                }
                setIsExpanded(true);
              }}
              cursor="pointer"
              icon={faPlay}
            />
          )}
          <Text ml="1em" fontSize="sm">
            {mix.name}
          </Text>
        </Flex>

        {isExpanded && (
          <Box
            mx="auto"
            pr="1em"
            dangerouslySetInnerHTML={{ __html: mix.embedded }}
          ></Box>
        )}
      </Flex>
    </>
  ) : (
    <div></div>
  );
};

const Mixes: FC<{ mixes: MixInterface[] }> = ({ mixes }) => {
  return (
    <MainSectionContainer id="mixes">
      <>
        <Text textDecoration="underline">MIXES</Text>
        <Box height="2em" />
        <Flex direction="column" pr={["0","0", "1.5em"]}>
          {mixes
            .map((value) => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
            .map((mix, i) => (
              <Mix mix={mix} key={i} i={i} />
            ))}
        </Flex>
      </>
    </MainSectionContainer>
  );
};

export default Mixes;
