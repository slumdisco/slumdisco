import { Flex } from "@chakra-ui/react";

export type JSXChildrenType = {
  children: JSX.Element;
};

interface MainSectionContainer extends JSXChildrenType {
  omitBorder?: boolean;
  id:string
}

const MainSectionContainer: React.FC<MainSectionContainer> = ({
  children,
  omitBorder = false,
  id
}) => {
  return (
    <Flex
    id={id}
      width="100%"
      direction="column"
      pb={["1em", "0"]}
      borderRight={["none", "none", omitBorder ? "none" : "1px"]}
      borderBottom={["1px", "none"]}
      //padding='0.5em'
    >
      {children}
    </Flex>
  );
};

export default MainSectionContainer;
