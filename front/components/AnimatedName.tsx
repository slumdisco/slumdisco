import { Box, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";

const AnimatedName: FC<{ text: string }> = ({ text }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      mt="0.5em"
      fontWeight="bold"
      fontSize="3xl"
      height="1.5em"
      maxWidth={["100vw", "80vw"]}
      overflow="hidden"
    >
      <Text ml={`-${offset * 1.8}px`}>
        {Array.from(Array(10))
          .map(() => text)
          .join(" / ")}
      </Text>
    </Box>
  );
};

export default AnimatedName;
