import Banner from "./Components/Banner";
import Sale from "./Components/Sale";
import Services from "./Components/Services";
import Footer from "./Shared/Footer";

export default async function Home() {
  return (
    <main className="mt-0">
      <Banner></Banner>
      <div className="max-w-7xl mx-auto">
        <Sale></Sale>
        <Services></Services>
      </div>
      <Footer></Footer>
    </main>
  );
}
