import Header from "../_component/Header";
import Footer from "../_component/Footer";
import "../globals.css";


export const metadata = {
  title: "Learning Nextjs",
  description: "Learning Nextjs",
};

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
