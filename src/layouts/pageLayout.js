import Footer from "components/footer";
import Header from "components/header";

export default function PageLayout({ children, isDappPage = false }) {
  return (
    <>
      <Header isDappPage={isDappPage} />
      <div className="layout-container">{children}</div>

      <Footer />
    </>
  );
}
