import { Box, Text } from "@chakra-ui/react";
import MainSectionContainer from "../layout/MainSectionContainer";

const Merch = () => {
  return (
    <MainSectionContainer omitBorder id='merch'>
      <>
        <Text textDecoration="underline">MERCH</Text>
        <Box height="2em" />
        <Text>Coming soon.</Text>
      </>
    </MainSectionContainer>
  );
};

export default Merch;
