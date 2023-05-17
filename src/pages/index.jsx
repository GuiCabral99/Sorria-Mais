import Head from "next/head";
import styles from "@/styles/Home.module.css";
import PageHeader from "@/components/PageHeader/PageHeader";
import ServicesCard from "@/components/ServicesCard/ServicesCard";
import Slider from "@/components/Slider/Slider";
import Maps from "@/components/Maps/Maps";

export default function Home() {
  const depoimentos = [
    {
      name: "Solange",
      witness:
        "Frequento a clinica desde 2019. Dr. Rogério é o melhor dentista do mundo! O clareamento é sempre feito de forma consistente e com alta qualidade. Sou muito exigente e sempre acompanho o Dr. Rogério  da Clínica Sorria Mais até porque não gosto de mudar de profissional. Muito obrigada!",
    },
    {
      name: "Ana Beatriz",
      witness:
        "Incrível! Eu mal acreditei. A Dr. Carol deixou meu sorriso perfeito! Minha irmã e eu estávamos de férias na cidade e queríamos ficar bonitas. Decidi tentar um dentista diferente do que estou acostumada e amei o resultado. Os profissionais foram ótimos!",
    },
    {
      name: "Camila Ribeiro",
      witness:
        "Preciso admitir, sou bastante exigente. Fui atendida pelo Dr. Rogério e não poderia estar mais satisfeita. Meus dentes ficaram incríveis! Estou me sentindo maravilhosa. Também fiz um clareamento e ficou perfeito! Já recomendei o Dr. Rogério para todas as minhas amigas. Adorei este dentista",
    },
  ];

  return (
    <>
      <Head>
        <title>Clínica Sorria Mais</title>
      </Head>
      <PageHeader
        homeLink={styles.linkActive}
        page_header_home={styles.page_header_back}
      />
      <main className={styles.main}>
        <section className={styles.about}>
          <article className={styles.articleAbout}>
            <div className={styles.textAbout}>
              <h1>Dr. Rogério Morais</h1>
              <p>
                Desde Agosto de 2019 estamos atendendo com a missão de fazer
                nossos clientes sorrirem mais.
              </p>
            </div>
          </article>
          <img
            src="/imgs/dentist-cover.png"
            alt="Dr. Rogério Morais"
            className={styles.imgDr}
          />
        </section>
        <section className={styles.specialties} id="services">
          <h1>Todas as especialidades</h1>
          <div className={styles.specialties_card}>
            <ServicesCard
              srcImg="/imgs/implant.png"
              altImg="Implante"
              titleCard="Implante"
              paragraphCard="Um sorriso renovado em apenas um implante! Recupere sua autoconfiança e desfrute de um sorriso completo."
              link="/"
            />
            <ServicesCard
              srcImg="/imgs/wisdom-tooth.png"
              altImg="Dente do siso"
              titleCard="Extração"
              paragraphCard="Extrair um dente nunca foi tão fácil! Estamos prontos para fornecer a você um procedimento rápido e seguro."
              link="/"
            />
            <ServicesCard
              srcImg="/imgs/whitening-month.png"
              altImg="Mês do clareamento"
              titleCard="Clareamento"
              paragraphCard="Sorriso mais brilhante, confiança mais elevada! Dê uma revigorada em sua aparência com o nosso tratamento de clareamento dental."
              link="/"
            />
            <ServicesCard
              srcImg="/imgs/family.png"
              altImg="Familia"
              titleCard="Odontopediatria"
              paragraphCard="Sorrisos saudáveis desde cedo! Nosso atendimento pediátrico é projetado para tornar a visita ao dentista uma experiência agradável para as crianças."
              link="/"
            />
          </div>
        </section>
        <section className={styles.witnessContainer} id="testimonies">
          <h1>Opinião dos nossos pacientes</h1>
          <div className={styles.slider}>
            <Slider>
              {depoimentos.map((d) => (
                <div className={styles.witness}>
                  <h1>{d.name}</h1>
                  <p>{d.witness}</p>
                </div>
              ))}
            </Slider>
          </div>
        </section>
        <section>
          <div className={styles.local} id="local">
            <div className={styles.address}>
              <h2>Faça uma visita:</h2>
              <div>
                <p>AVENIDAS DOS COQUEIROS Nº0120</p>
                <p>BAIRRO - DERBY CLUBE</p>
                <p>BARRETOS/SP</p>
              </div>
              <Maps />
            </div>
            <img
              src="/imgs/location.png"
              alt="Fachada da Clínica Sorria Mais"
            />
          </div>
        </section>
        <section className={styles.contact_btn}></section>
      </main>
    </>
  );
}
