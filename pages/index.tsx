import Head from "next/head";
import type { NextPage } from "next";
import { styled } from "../styles/stitches.config.ts";

const H1 = styled("h1", {
  height: "300px",
  color: "$amber400",
  fontSize: "$base",
  backgroundColor: "$amber10",
});

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Use Stitches with Next.js</title>
      </Head>
      <H1>Hello</H1>
    </>
  );
};

export default Home;
