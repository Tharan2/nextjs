import Header from "./component/Header";
import Footer from "./component/Footer";
import "./globals.css";


export const metadata = {
  title: "Learning Nextjs",
  description: "Learning Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
