import "./globals.css";
import Navbar from "./Shared/Navbar";
export const metadata = {
  title: "Book Library Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">
        <main className="max-w-7xl mx-auto">
          <Navbar></Navbar>
          {children}
        </main>
      </body>
    </html>
  );
}