import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ALX Listing App</title>
      </Head>
      <main className="flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Welcome to ALX Listing App
        </h1>
      </main>
    </>
  );
}
