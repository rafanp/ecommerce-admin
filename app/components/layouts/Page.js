import { jsx, css } from "@emotion/react";
import Header from "@/components/common/Header";
import Navigation from "@/components/common/Navigation";

import { Flex } from "@chakra-ui/layout";
import { Grid, GridItem } from "@chakra-ui/react";

const Page = (props) => {
  const { children } = props;
  return (
    <>
      <Grid
        h={"100vh"}
        templateRows="60px 1fr"
        templateColumns="repeat(5, 1fr)"
        mg={0}
        gap={8}
        p={8}
        // overflow={"hidden"}
      >
        <GridItem rowSpan={2} colSpan={1}>
          <Navigation />
        </GridItem>

        <GridItem colSpan={4}>
          <Header />
        </GridItem>

        <GridItem colSpan={4} overflow="auto">
          {children}
        </GridItem>
      </Grid>
    </>
  );
};

export default Page;
