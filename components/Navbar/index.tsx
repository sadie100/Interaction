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
    </NavbarWrapper>
  );
}

export function NavbarWrapper({ children }: ChildProps) {
  return <nav className={styles.nav}>{children}</nav>;
}

export function NavLink({ href, children }: NavLinkProps & ChildProps) {
  return (
    <Link href={href} className={styles.navLink}>
      {children}
    </Link>
  );
}
