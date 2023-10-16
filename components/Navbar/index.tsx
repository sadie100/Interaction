/* Navbar.tsx */

import { ChildProps } from "@/types";
import styles from "./Navbar.module.scss";
import Link from "next/link";

type NavLinkProps = {
  href: string;
};

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavLink href="/water">물</NavLink>
      <NavLink href="/card_game">카드 게임</NavLink>
    </NavbarWrapper>
  );
}

export function NavbarWrapper({ children }: ChildProps) {
  return <nav className={styles.nav}>{children}</nav>;
}

export function NavLink({ href, children }: NavLinkProps & ChildProps) {
  return (
    <Link href={href} className={styles.navLink}>
      <span>{children}</span>
    </Link>
  );
}
