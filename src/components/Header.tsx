import Link from "next/link";
import ContentWrapper from "@/components/ContentWrapper";
import message from "@/constants/languages/en.json";

export default function Header() {
  return (
    <header className="header">
      <ContentWrapper>
        <div className="header__wrapper">
          <div className="header__logo">
            <Link href="/">{message.buttons.demo_streaming}</Link>
          </div>
          <nav>
            <Link href="#">Log in</Link>
            <Link href="#" className="grey-button">
              {message.buttons.start_your_free_trial}
            </Link>
          </nav>
        </div>
      </ContentWrapper>
    </header>
  );
}
