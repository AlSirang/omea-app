import "src/styles/header.css";

export default function Header() {
  return (
    <header className="header-main">
      <h1>Omea</h1>

      <ul className="">
        <li>Whitepaper</li>
        <li>About Us</li>
        <li>Audit</li>
        <li>Contract</li>
        <li>
          <button className="">Enter</button>
        </li>
      </ul>
    </header>
  );
}
