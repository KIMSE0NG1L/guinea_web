import Link from "next/link";
import { asset } from "@/lib/asset";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand">
          <img src={asset("app-icon-192.png")} alt="" width={36} height={36} className="brand__icon" />
          <span className="brand__name">기니 키우기</span>
        </Link>
        <nav className="site-nav" aria-label="사이트 메뉴">
          <Link href="/#story">이야기</Link>
          <Link href="/#companions">동료</Link>
          <Link href="/#bosses">보스</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__links">
          <Link href="/privacy-policy/">개인정보처리방침</Link>
          <span aria-hidden>·</span>
          <Link href="/terms-of-service/">이용약관</Link>
          <span aria-hidden>·</span>
          <a href="mailto:kimsungil322@gmail.com">문의하기</a>
        </div>
        <p className="site-footer__copy">© 2026 김성일 · 기니 키우기</p>
      </div>
    </footer>
  );
}
