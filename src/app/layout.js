import "./globals.css";
import Navbar from "./Shared/Navbar";
export const metadata = {
  title: "Book Library Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html>
      {/* max-w-7xl mx-auto */}
      <body className="bg-gray-100">
        <main className="">
          <Navbar></Navbar>
          <div className="">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}