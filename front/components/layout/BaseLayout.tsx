import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { FC, useEffect } from "react";
import { JSXChildrenType } from "./MainSectionContainer";

const Footer: FC = () => {
  return (
    <Flex
      marginTop="5em"
      alignItems="center"
      minH="5em"
      direction="row"
      justifyContent="space-between"
      paddingX={3}
      paddingY={5}
      background="black"
      color="white"
    >
      <Text fontSize="small">©2022 slum disco soundsystem</Text>
    </Flex>
  );
};
const BaseLayout: React.FC<JSXChildrenType> = ({ children }) => {
  return (
    <>
      <Flex width="100vw" flexDirection="column">
        <Box minH="90vh" padding="1em">
          {children}
        </Box>
        <Footer />
      </Flex>
    </>
  );
};

export default BaseLayout;
