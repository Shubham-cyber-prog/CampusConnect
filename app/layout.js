import "./globals.css";

export const metadata = {
  title: "CampusConnect",
  description: "Student Management Portal",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
