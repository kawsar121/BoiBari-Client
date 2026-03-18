import SearchInput from "../app/Components/practise";
export default async function Home() {

  return (
    <main className="max-w-7xl mx-auto">
      <h1>This is Boi bari</h1>

      {/* Desktop */}
      <ul className="hiden md:flex space-x-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
      </ul>

      {/* Humberg */}
      <div>
        <button onClick="document.getElementById('mobileMenu').classList.toggle('hidden')">
          ☰
        </button>
      </div>


      {/* Mobile */}
       <ul id="mobileMenu" className="hiden flex-col md:hidden space-y-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Home</a></li>
      </ul>
      <practise></practise>
    </main>
  );
}