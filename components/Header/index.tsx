import { ChildProps } from "@/types";
import styles from "./Header.module.scss";
import Link from "next/link";
import { chameleon } from "@/styles/fonts";

type MainLinkProps = {
  href: string;
};

type NavbarWrapperProps = {
  children: React.ReactNode;
};

export default function Header() {
  return (
    <HeaderWrapper>
      <MainLink href="/"></MainLink>
    </HeaderWrapper>
  );
}

export function HeaderWrapper({ children }: NavbarWrapperProps) {
  return (
    <nav className={`${styles.header} ${chameleon.className}`}>{children}</nav>
  );
}

export function MainLink({ href, children }: MainLinkProps & ChildProps) {
  return (
    <Link href={href} className={styles.mainLink}>
      <span>{children}</span>
    </Link>
  );
}
