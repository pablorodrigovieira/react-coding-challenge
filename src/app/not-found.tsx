import Link from "next/link";
import message from "@/constants/languages/en.json";
export default function NotFound() {
  return (
    <main className="not-found">
      <h2>{message.not_found_page.oops}</h2>
      <p>{message.not_found_page.does_not_exist}</p>
      <p>{message.not_found_page.mistyped_address_or_page_moved}</p>
      <p>
        <Link href="/">{message.not_found_page.take_back_home_page}</Link>
      </p>
    </main>
  );
}
