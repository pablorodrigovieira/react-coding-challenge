import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { FOOTER_NAVIGATION_ITEMS, SOCIAL_LINKS, STORE_IMAGES } from "@/constants/frontend";

import { getCurrentYear } from "@/utils/helpers";
import ContentWrapper from "@/components/ContentWrapper";
import message from "@/constants/languages/en.json";

export default function Footer() {
  return (
    <footer className="footer">
      <ContentWrapper>
        <nav className="footer__links">
          {FOOTER_NAVIGATION_ITEMS.map((item, index) => (
            <Fragment key={item.id}>
              <Link href={item.path}>{item.label}</Link>
              <span>{index === FOOTER_NAVIGATION_ITEMS.length - 1 ? "" : " | "}</span>
            </Fragment>
          ))}
        </nav>

        <p className="footer__copy">
          {message.footer.copyright} &copy; {getCurrentYear()} {message.footer.all_rights_reserved}
        </p>

        <div className="footer__socials">
          <ul className="footer__socials-icons">
            {SOCIAL_LINKS.map((item) => (
              <li key={item.alt}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image src={item.imgSrc} alt={item.alt} width={30} height={30} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="footer__socials-stores">
            {STORE_IMAGES.map((item) => (
              <li key={item.alt}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  <Image src={item.imgSrc} alt={item.alt} width={135} height={40} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </ContentWrapper>
    </footer>
  );
}
