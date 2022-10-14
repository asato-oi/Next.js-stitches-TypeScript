import Head from "next/head";
import type { NextPage } from "next";
import { styled } from "../styles/stitches.config";

import StitchesLogo from "../components/StitchesLogo";

const Box = styled("div", {
  backgroundColor: "$amber3",
});

const Text = styled("p", {
  fontFamily: "$base",
  color: "$hiContrast",
});

const Link = styled("a", {
  fontFamily: "$base",
  textDecoration: "none",
  color: "$amber9",
});

const Container = styled("div", {
  marginX: "auto",
  paddingX: "$3",

  variants: {
    size: {
      1: {
        maxWidth: "300px",
      },
      2: {
        maxWidth: "585px",
      },
      3: {
        maxWidth: "865px",
      },
    },
  },
});

const Home: NextPage = () => {
  return (
    <Box css={{ paddingY: "$6" }}>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <Container size={{ "@bg2": "1", "@bp1": "2" }}>
        <StitchesLogo />
        <Text as="h1">Hello, from Stitches.</Text>
        <Text>
          For full documentation, visit{" "}
          <Link href="https://stitches.dev">stitches.dev</Link>.
        </Text>
      </Container>
    </Box>
  );
};

export default Home;
