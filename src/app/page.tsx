import Footer from "@components/footer/Footer";
import Header from "@components/header/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"></main>
      <Footer />
    </div>
  );
}
