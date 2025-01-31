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
        <div className="flex flex-col h-screen justify-between">
        <Header/>
        {children}
        <Footer/>
        </div>
      </body>
    </html>
  );
}
