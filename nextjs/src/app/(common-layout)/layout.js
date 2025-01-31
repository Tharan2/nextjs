import Header from "../_component/Header";
import Footer from "../_component/Footer";
import "../globals.css";


export const metadata = {
  title: "Learning Nextjs",
  description: "Learning Nextjs",
};

export default function CommonLayout({ children }) {
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
