import { Text } from "@chakra-ui/react";
import MainSectionContainer from "../layout/MainSectionContainer"

const Merch = ()=>{
return(
    <MainSectionContainer omitBorder>
        <>
        <Text textDecoration='underline'>
            Merch
        </Text>
        <p>something something</p>
        </>
    </MainSectionContainer>
)
}

export default Merch;