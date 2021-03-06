import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const LocationAndTime: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000); // in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  return !isSSR ? (
    <Flex
      //flexBasis="30em"
      align="end"
      justify={["end", "start"]}
      marginLeft="5em"
      direction="column"
    >
      {/* <Text p={0} fontSize='2em' fontWeight='bold'>*</Text> */}
      <Flex direction="column">
        <Text align="end" fontSize="xs" fontWeight="bold">
          Local time:
        </Text>
        {/* <Text align='end' fontSize='sm'>
      {time.toLocaleDateString('en-US',{ weekday: 'long' })}
      </Text> */}
        {/* <Text align='end'  fontSize='sm'>
      {time.getDay()}/{time.getUTCMonth()}/{time.getUTCFullYear().toString().replace('20','')}
      </Text> */}
        <Text align="end">
          {time.getHours()}:{time.getMinutes().toString().length === 1 && "0"}
          {time.getMinutes()}:
          {time.getUTCSeconds().toString().length === 1 && "0"}
          {time.getUTCSeconds()}
        </Text>
      </Flex>
    </Flex>
  ) : (
    <></>
  );
};

export default LocationAndTime;
