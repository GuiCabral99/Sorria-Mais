import Head from "next/head";

import PageHeader from "@/components/PageHeader/PageHeader";

export default function about() {
  return (
    <>
      <Head>
        <title>Clínica Sorria Mais</title>
      </Head>
      <PageHeader />
      <h1>Sobre</h1>
    </>
  );
}
