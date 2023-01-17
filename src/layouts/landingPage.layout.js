import Footer from "components/footer";
import Header from "components/header";

export default function LandingPageLayout({ children }) {
  return (
    <>
      <Header />
      {children}

      <Footer />
    </>
  );
}
