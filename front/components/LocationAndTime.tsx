import { Flex, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const LocationAndTime: FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((time) => {
        var dt = new Date(time);
        dt.setSeconds(dt.getSeconds() + 1);
        return dt;
      });
    }, 1000); // in milliseconds
    return () => clearInterval(intervalId);
  }, []);

  // return (<Flex flexBasis='30em' marginLeft='5em' direction='column'>

  //     {/* <Text align='end' fontSize='sm'>
  //     {time.toLocaleDateString('en-US',{ weekday: 'long' })}
  //     </Text> */}
  //     {/* <Text align='end'  fontSize='sm'>
  //     {time.getDay()}/{time.getUTCMonth()}/{time.getUTCFullYear().toString().replace('20','')}
  //     </Text> */}
  //     <Text align='end'>
  //     {time.getHours()}:{time.getMinutes().toString().length===1 && '0'}{time.getMinutes()}:{time.getUTCSeconds()}{time.getUTCSeconds().toString().length===1 && '0'}
  //     </Text>
  //     <Text align='end' fontSize='xs' fontWeight='bold'>
  //         is your local time.
  //     </Text>
  // </Flex>)
  return <Text>ok</Text>;
};

export default LocationAndTime;
