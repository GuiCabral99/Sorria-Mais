import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";

export default function Home() {
  return (
    <>
      <Head>
        <title>Clínica Sorria Mais</title>
      </Head>
      <main className={styles.main}>
        <PageHeader />
        <section className={styles.content}>
          <h1>Todas as especialidades</h1>
        </section>
      </main>
    </>
  );
}
