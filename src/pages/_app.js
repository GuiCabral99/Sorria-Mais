import ScheduleBtn from "@/components/ScheduleBtn/ScheduleBtn";
import Footer from "@/components/Footer/Footer";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ScheduleBtn />
      <Footer />
    </>
  );
}
