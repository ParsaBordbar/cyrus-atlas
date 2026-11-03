import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAtlasState } from "../app/useAtlasState";
import { LanguageToggle } from "./LanguageToggle";

export default function Header() {
  const { t, lang, setLang } = useAtlasState();

  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { label: t.header.navigation.home, href: "/" },
    { label: t.header.navigation.history, href: "/history" },
  ];

  return (
    <header className="fixed w-full z-50 border-b border-foxing bg-paper text-ink">

      <div className="mx-auto max-w-10/12">
        <div className="flex min-h-20 items-center justify-between gap-8">
          <a href="/" className="group flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center border border-gold text-rubric transition-transform duration-300 group-hover:rotate-[-5deg]">
              <img src="/icons/cyrus.svg" alt={t.header.logoAlt} />
            </div>

            <div>
              <h1 className="font-engraved-sc text-2xl tracking-wide">
                {t.header.brand}
              </h1>

              <p className="mt-1 font-engraved text-[10px] uppercase tracking-[0.25em] text-ink-soft">
                {t.header.tagline}
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative py-2 font-engraved text-[15px] text-ink-soft transition-colors duration-300 hover:text-rubric after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-rubric after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            ))}
            <LanguageToggle lang={lang} onChange={setLang} />
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen((previous) => !previous)}
            className="text-ink lg:hidden"
            aria-label={t.header.toggleNavigation}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <nav className="border-t border-foxing py-4 lg:hidden">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block first:border-b border-foxing/40 py-3 font-engraved text-base text-ink-soft transition-colors hover:text-rubric"
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
      <div className="h-[3px] bg-foxing" />
    </header>
  );
}