import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  const sum = (a: number, b: number) => {
    return a + b;
  };

  return (
    <>
      <Head>Hello DevOps!</Head>
      <h1>Hello DevOps</h1>
      <div>{sum(1, 2)}</div>
    </>
  );
};

export default Home;
