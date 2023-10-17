import type { AppProps } from "next/app";
import { ChildProps } from "@/types";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import { chameleon } from "@/styles/fonts";

type NavLinkProps = {
  href: string;
};

type NavbarWrapperProps = {
  children: React.ReactNode;
};

export default function Navbar() {
  return (
    <NavbarWrapper>
      <NavLink href="/water">물</NavLink>
      <NavLink href="/card_game">카드 게임</NavLink>
    </NavbarWrapper>
  );
}

export function NavbarWrapper({ children }: NavbarWrapperProps) {
  return (
    <nav className={`${styles.nav} ${chameleon.className}`}>{children}</nav>
  );
}

export function NavLink({ href, children }: NavLinkProps & ChildProps) {
  return (
    <Link href={href} className={styles.navLink}>
      <span>{children}</span>
    </Link>
  );
}
