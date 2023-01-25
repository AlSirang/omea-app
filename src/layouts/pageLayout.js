import Footer from "components/footer";
import Header from "components/header";

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-container">{children}</div>

      <Footer />
    </>
  );
}
