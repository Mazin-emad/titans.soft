"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Arrow } from "@/components/ui/arrow";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/section";
import type { Dictionary } from "@/dictionaries/en";
import type { SiteLocale } from "@/lib/site";
import { cn } from "@/lib/utils";

export interface NavService {
  slug: string;
  title: string;
  description: string;
}

export function Header({ locale, nav, services }: { locale: SiteLocale; nav: Dictionary["nav"]; services: NavService[] }) {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelId = useId();
  const lastY = useRef(0);
  const closeTimer = useRef<number | undefined>(undefined);

  // Hide on scroll down, reveal on scroll up — maximum reading space, nav always one flick away.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 160 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setPanelOpen(false);
      setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPanel = () => {
    window.clearTimeout(closeTimer.current);
    setPanelOpen(true);
  };
  const schedulePanelClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanelOpen(false), 160);
  };
  const closeAll = () => {
    setPanelOpen(false);
    setMobileOpen(false);
  };

  const links = [
    { href: `/${locale}/work`, label: nav.work },
    { href: `/${locale}/solutions`, label: nav.solutions },
    { href: `/${locale}/about`, label: nav.about },
    { href: `/${locale}/contact`, label: nav.contact },
  ];
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");
  const servicesHref = `/${locale}/services`;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-transform duration-500 ease-out-expo",
        hidden && !mobileOpen && !panelOpen && "-translate-y-full",
      )}
      style={{ viewTransitionName: "site-header" }}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-3 focus:z-[60] focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {nav.skip}
      </a>

      <div className="border-b border-rule bg-paper/92 backdrop-blur-md">
        <Container className="flex h-16 items-center justify-between gap-6">
          <Logo locale={locale} onClick={closeAll} />

          <nav aria-label="Primary" className="hidden h-full items-stretch lg:flex">
            <div className="flex" onPointerEnter={openPanel} onPointerLeave={schedulePanelClose}>
              <button
                type="button"
                aria-expanded={panelOpen}
                aria-controls={panelId}
                onClick={() => setPanelOpen((v) => !v)}
                className={cn(
                  "relative flex items-center gap-1.5 px-4 text-[15px] font-medium transition-colors",
                  panelOpen || isActive(servicesHref) ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {nav.services}
                <svg viewBox="0 0 12 12" className={cn("size-3 transition-transform duration-300", panelOpen && "rotate-180")} aria-hidden="true">
                  <path d="M2.5 4.5 6 8l3.5-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <ActiveBar on={isActive(servicesHref)} />
              </button>
            </div>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={isActive(l.href) ? "page" : undefined}
                className={cn(
                  "relative flex items-center px-4 text-[15px] font-medium transition-colors",
                  isActive(l.href) ? "text-ink" : "text-ink-soft hover:text-ink",
                )}
              >
                {l.label}
                <ActiveBar on={isActive(l.href)} />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <LanguageSwitcher locale={locale} label={nav.language} className="hidden sm:inline-flex" />
            <ThemeToggle label={nav.themeToggle} />
            <Button asChild size="sm" className="ms-2 hidden lg:inline-flex">
              <Link href={`/${locale}/contact`}>
                {nav.startProject}
                <Arrow />
              </Link>
            </Button>
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className="ms-1 inline-flex h-9 items-center gap-2 rounded-full px-3 text-[15px] font-medium hover:bg-ink/5 lg:hidden"
            >
              <span aria-hidden="true">{mobileOpen ? nav.closeShort : nav.menuShort}</span>
              <span className="relative block h-2.5 w-4" aria-hidden="true">
                <span className={cn("absolute inset-x-0 top-0 h-[1.5px] bg-current transition-transform duration-300", mobileOpen && "translate-y-[4.5px] rotate-45")} />
                <span className={cn("absolute inset-x-0 bottom-0 h-[1.5px] bg-current transition-transform duration-300", mobileOpen && "-translate-y-[4.5px] -rotate-45")} />
              </span>
              <span className="sr-only">{mobileOpen ? nav.close : nav.menu}</span>
            </button>
          </div>
        </Container>
      </div>

      {/* Services panel (desktop) */}
      <div
        id={panelId}
        onPointerEnter={openPanel}
        onPointerLeave={schedulePanelClose}
        className={cn(
          "absolute inset-x-0 top-full hidden border-b border-rule bg-paper transition-[opacity,transform] duration-300 ease-out-expo lg:block",
          panelOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        )}
      >
        <Container className="grid grid-cols-12 gap-8 py-10">
          <div className="col-span-4 flex flex-col justify-between">
            <div>
              <p className="label text-muted">{nav.services}</p>
              <p className="display-md mt-4 text-3xl">{nav.servicesMenuTitle}</p>
              <p className="mt-4 max-w-xs text-ink-soft">{nav.servicesMenuBody}</p>
            </div>
            <Link href={servicesHref} onClick={closeAll} className="link mt-8 inline-flex w-fit items-center gap-2 font-medium">
              {nav.allServices}
              <Arrow className="size-4" />
            </Link>
          </div>
          <ul className="col-span-8 grid grid-cols-2 gap-x-8 border-t border-rule">
            {services.map((s, i) => (
              <li key={s.slug} className="border-b border-rule">
                <Link href={`/${locale}/services/${s.slug}`} onClick={closeAll} className="group flex gap-5 py-5">
                  <span className="label pt-1 text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flex-1">
                    <span className="heading flex items-center justify-between gap-3 text-lg">
                      <span className="transition-[background-size] duration-500 [background:linear-gradient(var(--accent),var(--accent))_no-repeat_0_85%/0%_0.4em] group-hover:[background-size:100%_0.4em]">
                        {s.title}
                      </span>
                      <Arrow className="size-4 -translate-x-1 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100" />
                    </span>
                    <span className="mt-1 line-clamp-2 block text-sm text-muted">{s.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" hidden={!mobileOpen} className="fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-paper lg:hidden">
        <Container className="flex min-h-full flex-col pb-8 pt-4">
          <nav aria-label="Mobile">
            <ol>
              {[{ href: servicesHref, label: nav.services }, ...links].map((l, i) => (
                <li key={l.href} className="border-b border-rule">
                  <Link
                    href={l.href}
                    onClick={closeAll}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="label text-muted">{String(i + 1).padStart(2, "0")}</span>
                    <span className={cn("display-md text-[2rem]", isActive(l.href) && "mark")}>{l.label}</span>
                  </Link>
                </li>
              ))}
            </ol>
            <p className="label mt-8 text-muted">{nav.servicesMenuTitle}</p>
            <ul className="mt-3 grid grid-cols-1 gap-x-6 sm:grid-cols-2">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${locale}/services/${s.slug}`} onClick={closeAll} className="flex items-center justify-between py-2.5 text-[17px] font-medium">
                    {s.title}
                    <Arrow className="size-4 text-muted" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-auto flex items-center gap-3 pt-10">
            <Button asChild size="lg" className="flex-1">
              <Link href={`/${locale}/contact`} onClick={closeAll}>
                {nav.startProject}
                <Arrow />
              </Link>
            </Button>
            <LanguageSwitcher locale={locale} label={nav.language} className="h-14 border border-ink/80 px-5" />
          </div>
        </Container>
      </div>
    </header>
  );
}

function ActiveBar({ on }: { on: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "absolute inset-x-4 -bottom-px h-[3px] origin-left bg-accent transition-transform duration-500 ease-out-expo rtl:origin-right",
        on ? "scale-x-100" : "scale-x-0",
      )}
    />
  );
}
