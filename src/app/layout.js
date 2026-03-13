import "./globals.css";
export const metadata = {
  title: "Book Library Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body className="bg-gray-100">
        <main className="max-w-7xl mx-auto px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}