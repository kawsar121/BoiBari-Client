import Banner from "./Components/Banner";
import Services from "./Components/Services";
import Footer from "./Shared/Footer";

export default async function Home() {

  return (
    <main className="max-w-7xl mx-auto mt-5">
      <Banner></Banner>
      <Services></Services>
      <Footer></Footer>
    </main>
  );
}