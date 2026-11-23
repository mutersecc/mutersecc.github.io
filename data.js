window.PORTFOLIO_DATA = {
  maintenance: {
    enabled: true, // Bakım modunu açmak için true, kapatmak için false yapın
    previewHash: "8b5ac1c77ed3b2f7c69aef18cd21c675e216bd044cd454afc20e4bb7a5ba8a62"
  },
  links: {
    github: "https://github.com/Mutersec",
    githubHandle: "Mutersec",
    linkedin: "https://www.linkedin.com/in/emirhan-polat-bbbb3a361/",
    email: "emirrhanpolatt@gmail.com",
    customsEmail: "support@customsiq.org",
    customsLive: "https://customsiq.org",
    traceforgeRepo: "https://github.com/Mutersec/traceforge",
    traceforgeLive: "https://mutersec.github.io/traceforge/"
  },
  toolbox: [
    { label: "Python", color: "#3b82f6" },
    { label: "TS", color: "#60a5fa" },
    { label: "FastAPI", color: "#14b8a6" },
    { label: "Godot", color: "#38bdf8" },
    { label: "SQL", color: "#a78bfa" },
    { label: "Docker", color: "#2563eb" },
    { label: "Rust", color: "#f97316" },
    { label: "SAP", color: "#ec4899" },
    { label: "Git", color: "#ef4444" }
  ],
  i18n: {
    tr: {
      pageTitle: "Emirhan Polat — Gümrük İşletme, YBS & Oyun Geliştirme",
      navTabs: [
        { key: "all", label: "Tümü" },
        { key: "about", label: "Hakkımda" },
        { key: "projects", label: "Projeler" },
        { key: "games", label: "Oyunlar" },
        { key: "certificates", label: "Sertifikalar" }
      ],
      hero: {
        location: "Türkiye / Mersin",
        personaTrade: "Gümrük & YBS Modu ↻",
        personaGame: "Oyun Geliştirici Modu ↻",
        greeting: "Merhaba, ben",
        bio: "Tarsus Üniversitesi Gümrük İşletme ve İstanbul Üniversitesi (AUZEF) Yönetim Bilişim Sistemleri öğrencisiyim. Dış ticaret otomasyonu, yerel güvenlik araçları ve Godot 4 oyunları geliştiriyorum.",
        cvBtn: "Sertifikalar & Özgeçmiş",
        domainNote: "emirhanpolat.me · Gümrük, YBS & Oyun"
      },
      customsiq: {
        id: "customsiq",
        eyebrow: "Gümrük & Yapay Zekâ",
        title: "CustomsIQ",
        desc: "Türkiye ↔ Cezayir ihracat/ithalat dosyaları, EX 1 / IM 4 taslakları, GTİP sınıflandırma, vergi hesabı ve OFAC/AB/BM yaptırım taraması sunan AI gümrük masası.",
        liveLabel: "customsiq.org ↗",
        tabs: [
          { key: "visual", label: "Görsel" },
          { key: "flow", label: "Akış" }
        ],
        flowSteps: [
          { title: "EX 1 / IM 4 & Vergi Hesabı", meta: "1,459 test", note: "Gümrük vergisi & akreditif kontrolü" },
          { title: "Yaptırım Taraması", meta: "OFAC / AB", note: "BM, BK ve AB yaptırım listeleri" },
          { title: "GTİP Sınıflandırma", meta: "13,753 kod", note: "AB CN 2026 üç dilli tarife (EN/DE/FR)" }
        ],
        image: "assets/images/customsiq-hero.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/customsiq-hero.jpg", label: "Genel Bakış" },
          { src: "assets/images/customsiq-assistant.jpg", label: "AI Asistan" },
          { src: "assets/images/customsiq-engine.jpg", label: "Tarife & Yaptırım" },
          { src: "assets/images/customsiq-arch.jpg", label: "Mimari" }
        ],
        stack: ["Python", "FastAPI", "Tauri / Rust", "PostgreSQL", "SQLite", "Docker"],
        visibilityBadge: "Özel Repo · Canlı Demo Aktif",
        highlights: [
          "16.650+ AB CN 2026 & TR GTİP kodu ve 8.226+ gümrük vergisi / tercihli tarife oranı.",
          "64.689 küresel yaptırım kaydı (OFAC, AB, BM, İngiltere) üzerinde toleranslı tarama.",
          "Proformadan EX 1 / IM 4 beyanname taslağı, Ek-14 ön kontrol ve BİLGE aktarım dosyası.",
          "Web, Tauri masaüstü (Rust) ve mobil arayüz; 420+ test ve %98 kod kapsamı."
        ]
      },
      traceforge: {
        id: "traceforge",
        eyebrow: "Güvenlik · CLI & MCP",
        title: "TraceForge",
        desc: "Çalıştırmadan yerel ikili dosyaları (ELF, Mach-O, PE, WASM) inceleyen, salt-okunur ve içerik adresli deterministik HTML kanıt raporu üreten analiz aracı.",
        liveLabel: "Canlı Site ↗",
        repoLabel: "GitHub ↗",
        tabs: [
          { key: "visual", label: "Görsel" },
          { key: "table", label: "Tablo" },
          { key: "evidence", label: "Kanıt" }
        ],
        tableHead: ["Dilim", "Biçim", "Kapsam"],
        tableRows: [
          { id: "slice_0", fmt: "Mach-O arm64", pct: 92 },
          { id: "slice_1", fmt: "ELF x86_64", pct: 78 },
          { id: "slice_2", fmt: "PE / WASM", pct: 64 }
        ],
        evidenceCard: {
          title: "Deterministik Kanıt",
          subtitle: "Çalıştırma yok · Ağ erişimi yok",
          items: [
            "evidence_id doğrulama & imzalama",
            "Tek dosya çevrimdışı HTML rapor",
            "Türkçe sade okuma rehberi dahil"
          ]
        },
        image: "assets/images/traceforge-hero.png",
        wide: true,
        gallery: [
          { src: "assets/images/traceforge-hero.png", label: "Genel Bakış" },
          { src: "assets/images/traceforge-architecture.png", label: "Mimari" },
          { src: "assets/images/traceforge-signing.png", label: "Ed25519 İmza" },
          { src: "assets/images/traceforge-mcp.png", label: "MCP Ajan" }
        ],
        stack: ["TypeScript", "Node.js", "MCP", "Ed25519", "ELF / Mach-O / PE / WASM"],
        visibilityBadge: "Açık Kaynak (MIT)",
        highlights: [
          "Hedef ikili dosyayı çalıştırmadan ve ağa çıkmadan yerel inceler (0 harici runtime bağımlılığı).",
          "İçerik adresli SHA-256 evidence_id üretir; Ed25519 imzalama ile 1-byte değişikliği bile yakalar.",
          "Ajanlar için 6 araçlı MCP stdio sunucusu ve tek dosyada çevrimdışı HTML kanıt raporu sunar."
        ]
      },
      sky: {
        city: "Mersin, TR",
        caption: "Yerel Saat · Türkiye (UTC+3)"
      },
      connect: {
        eyebrow: "İLETİŞİM",
        title: "Bana Ulaş",
        copyLabel: "Kopyala",
        copiedLabel: "Kopyalandı ✓",
        linkedinLabel: "LinkedIn · Profil",
        githubLabel: "GitHub · Mutersec",
        status: "Staj & işbirliğine açık"
      },
      toolbox: {
        title: "Araç Kutusu",
        sub: "Sürükle"
      },
      fener: {
        id: "fener",
        eyebrow: "Godot 4 · Roguelite Savunma",
        title: "Fenerin Son Işığı",
        desc: "Dönen deniz feneri ışığıyla karanlık denizden gelen dalgalara karşı kuleyi savunduğun roguelite oyun.",
        image: "assets/images/fener-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/fener-cover.jpg", label: "Kapak Sanatı" },
          { src: "assets/images/fener-showcase.jpg", label: "Oyun Vitrini" },
          { src: "assets/images/fener-shaders.jpg", label: "Hava & Shader" },
          { src: "assets/images/fener-gameplay.jpg", label: "Oynanış & UI" }
        ],
        stack: ["Godot 4", "GDScript", "GLSL Shaders", "Procedural Audio"],
        visibilityBadge: "Özel Proje (Vitrin)",
        highlights: [
          "4 katmanlı gerçekçi GLSL atmosfer shader paketi ve 8 dinamik gece hava durumu (sis, kasırga, kanlı ay, buzul, girdap).",
          "Harici görsel/ses dosyası olmadan tamamen prosedürel vektör sanat ve 16-bit WAV ses sentezi.",
          "Yönlendirilebilir fener hüzmesi, 11 düşman türü, Korsan Lordu boss savaşları, roguelite kart seçimi ve kalıcı dükkân."
        ]
      },
      kelime: {
        id: "kelime",
        eyebrow: "Godot 4 · Gemini AI",
        title: "Kelime Kart",
        desc: "Leitner SRS, Yalancı Dost çeldiricileri ve 4 mikro-oyun moduyla bilişsel İngilizce kelime atölyesi.",
        image: "assets/images/kelime-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/kelime-cover.jpg", label: "Kapak Sanatı" },
          { src: "assets/images/kelime-showcase.jpg", label: "Ana Sunum" },
          { src: "assets/images/kelime-modes.jpg", label: "Modlar & Sözlük" },
          { src: "assets/images/kelime-devices.jpg", label: "Çoklu Cihaz" }
        ],
        stack: ["Godot 4", "GDScript", "GDShader", "Leitner SRS", "Gemini AI"],
        visibilityBadge: "Özel Proje (Vitrin)",
        highlights: [
          "4 farklı mikro-oyun modu: Hece Ocağı (Forge), Nüans (Nuance), Dinle & Bul (Listen), Yankı (Echo).",
          "Türkçe konuşanlara özel Yalancı Dost (False Friend) çeldiricileri ve Hafıza Köprüleri.",
          "A1–C1 arası 60 yerleşik kelime, adaptif CEFR seviye testi ve Gemini API desteği."
        ]
      },
      deck: {
        title: "Vitrin Destesi",
        sub: "Proje ve oyun vitrinleri arasında gez · Tıkla detay gör"
      },
      edu: {
        title: "Eğitim & Diller",
        rows: [
          {
            period: "2024 — Devam",
            school: "Tarsus Üniversitesi",
            program: "Gümrük İşletme",
            tags: ["Gümrük Mevzuatı", "Dış Ticaret", "Lojistik"]
          },
          {
            period: "2026 — Devam",
            school: "İstanbul Üniversitesi (AUZEF)",
            program: "Yönetim Bilişim Sistemleri (YBS)",
            tags: ["YBS / ERP", "Veritabanı", "Yazılım"]
          }
        ],
        langs: [
          { code: "TR", label: "Türkçe · Anadil" },
          { code: "EN", label: "İngilizce · B2" },
          { code: "DE", label: "Almanca · B1" }
        ]
      },
      cert: {
        title: "Sertifikalar",
        filters: [
          { key: "all", label: "Tümü" },
          { key: "academic", label: "Üniversite" },
          { key: "security", label: "Siber" },
          { key: "cs", label: "CS / edX" }
        ],
        rows: [
          { title: "Dijital Üniversite Sertifikası", org: "Dijital Üniversite", year: "2026", cats: ["academic"], tag: "Akademik" },
          { title: "Siber Vatan Eğitim Programı", org: "Siber Vatan", year: "Siber Güvenlik", cats: ["security"], tag: "Güvenlik" },
          { title: "CS50's Introduction to Cybersecurity", org: "HarvardX · edX", year: "CS50CS", cats: ["security", "cs"], tag: "Siber / CS" },
          { title: "CS50's Web Programming with Python and JavaScript", org: "HarvardX · edX", year: "CS50W", cats: ["cs"], tag: "Web / CS" },
          { title: "CS50's Introduction to Databases with SQL", org: "HarvardX · edX", year: "CS50SQL", cats: ["cs"], tag: "SQL / CS" },
          { title: "CS50's Introduction to Programming with Python", org: "HarvardX · edX", year: "CS50P", cats: ["cs"], tag: "Python / CS" }
        ]
      },
      footer: {
        left: "© 2026 Emirhan Polat · Mersin, Türkiye · ⌘K ile keşfet",
        email: "E-posta",
        customsMail: "CustomsIQ Destek"
      },
      modal: {
        stackLabel: "Teknolojiler",
        highlightsLabel: "Öne Çıkanlar",
        openLive: "Canlı Siteyi Aç ↗",
        openRepo: "GitHub Deposunu Aç ↗",
        privateNote: "Kaynak kod özel (vitrin)"
      },
      cmdk: {
        placeholder: "Bölüm, proje, dil veya tema ara...",
        groups: { nav: "Gezin", items: "Projeler & Oyunlar", lang: "Dil", theme: "Görünüm", links: "Bağlantılar", fun: "Etkileşim" },
        actions: {
          themeLight: "Açık Tema (Eric Wu Pastel)",
          themeDark: "Koyu Tema (Gece Mavisi)",
          flipPersona: "Profil Rozetini Çevir (Gümrük/YBS ↔ Oyun)"
        }
      }
    },

    en: {
      pageTitle: "Emirhan Polat — Customs Management, MIS & Game Dev",
      navTabs: [
        { key: "all", label: "All" },
        { key: "about", label: "About" },
        { key: "projects", label: "Projects" },
        { key: "games", label: "Games" },
        { key: "certificates", label: "Certificates" }
      ],
      hero: {
        location: "Mersin, Turkey",
        personaTrade: "Customs & MIS Mode ↻",
        personaGame: "Game Dev Mode ↻",
        greeting: "Hey, I'm",
        bio: "Customs Management student at Tarsus University and MIS student at Istanbul University (AUZEF). Building international trade tools, local security utilities, and Godot 4 indie games.",
        cvBtn: "Certificates & Summary",
        domainNote: "emirhanpolat.me · Customs, MIS & Games"
      },
      customsiq: {
        id: "customsiq",
        eyebrow: "Customs & AI",
        title: "CustomsIQ",
        desc: "AI-assisted customs desk for Türkiye ↔ Algeria export/import files, EX 1 / IM 4 drafts, GTİP classification, duty calculations, and OFAC/EU/UN sanctions screening.",
        liveLabel: "customsiq.org ↗",
        tabs: [
          { key: "visual", label: "Visual" },
          { key: "flow", label: "Workflow" }
        ],
        flowSteps: [
          { title: "EX 1 / IM 4 & Duties", meta: "1,459 tests", note: "Customs duty & L/C compliance" },
          { title: "Sanctions Screening", meta: "OFAC / EU", note: "UN, UK & EU restricted lists" },
          { title: "HS / GTİP Lookup", meta: "13,753 codes", note: "EU CN 2026 trilingual (EN/DE/FR)" }
        ],
        image: "assets/images/customsiq-hero.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/customsiq-hero.jpg", label: "Overview" },
          { src: "assets/images/customsiq-assistant.jpg", label: "AI Assistant" },
          { src: "assets/images/customsiq-engine.jpg", label: "Tariff & Sanctions" },
          { src: "assets/images/customsiq-arch.jpg", label: "Architecture" }
        ],
        stack: ["Python", "FastAPI", "Tauri / Rust", "PostgreSQL", "SQLite", "Docker"],
        visibilityBadge: "Private Repo · Live Site Available",
        highlights: [
          "16,650+ EU CN 2026 & TR HS tariff codes and 8,226+ customs duty / preferential rates.",
          "Fuzzy screening across 64,689 global sanctions records (OFAC, EU, UN, UK).",
          "Generates EX 1 / IM 4 declaration drafts, pre-filing checks, and BİLGE export files.",
          "Web, Tauri desktop (Rust), and mobile UI backed by 420+ tests and 98% coverage."
        ]
      },
      traceforge: {
        id: "traceforge",
        eyebrow: "Security · CLI & MCP",
        title: "TraceForge",
        desc: "Evidence-first binary inspection toolkit for ELF, Mach-O, PE, and WASM files. Local, deterministic, read-only, and generates verifiable single-file HTML reports.",
        liveLabel: "Live Site ↗",
        repoLabel: "GitHub ↗",
        tabs: [
          { key: "visual", label: "Visual" },
          { key: "table", label: "Table" },
          { key: "evidence", label: "Evidence" }
        ],
        tableHead: ["Slice", "Format", "Coverage"],
        tableRows: [
          { id: "slice_0", fmt: "Mach-O arm64", pct: 92 },
          { id: "slice_1", fmt: "ELF x86_64", pct: 78 },
          { id: "slice_2", fmt: "PE / WASM", pct: 64 }
        ],
        evidenceCard: {
          title: "Verifiable Evidence",
          subtitle: "Zero execution · Zero network",
          items: [
            "Content-addressed evidence_id signing",
            "Offline standalone HTML evidence report",
            "Includes plain-Turkish reader guide"
          ]
        },
        image: "assets/images/traceforge-hero.png",
        wide: true,
        gallery: [
          { src: "assets/images/traceforge-hero.png", label: "Overview" },
          { src: "assets/images/traceforge-architecture.png", label: "Architecture" },
          { src: "assets/images/traceforge-signing.png", label: "Ed25519 Signing" },
          { src: "assets/images/traceforge-mcp.png", label: "MCP Agent" }
        ],
        stack: ["TypeScript", "Node.js", "MCP", "Ed25519", "ELF / Mach-O / PE / WASM"],
        visibilityBadge: "Open Source (MIT)",
        highlights: [
          "Inspects native binaries and macOS .app bundles read-only with 0 runtime dependencies.",
          "Content-addressed SHA-256 evidence_id with detached Ed25519 signing and 1-byte tamper detection.",
          "Ships a 6-tool MCP stdio server for agents alongside standalone offline HTML evidence reports."
        ]
      },
      sky: {
        city: "Mersin, TR",
        caption: "Local Time · Turkey (UTC+3)"
      },
      connect: {
        eyebrow: "CONNECT",
        title: "Get in Touch",
        copyLabel: "Copy",
        copiedLabel: "Copied ✓",
        linkedinLabel: "LinkedIn · Profile",
        githubLabel: "GitHub · Mutersec",
        status: "Open to roles & collabs"
      },
      toolbox: {
        title: "Toolbox",
        sub: "Drag"
      },
      fener: {
        id: "fener",
        eyebrow: "Godot 4 · Roguelite Defense",
        title: "Beacon's Last Light",
        desc: "Roguelite lighthouse defense game where you sweep a beacon beam across stormy waters to repel abyssal threats.",
        image: "assets/images/fener-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/fener-cover.jpg", label: "Key Art" },
          { src: "assets/images/fener-showcase.jpg", label: "Showcase" },
          { src: "assets/images/fener-shaders.jpg", label: "Weather & Shaders" },
          { src: "assets/images/fener-gameplay.jpg", label: "Gameplay & UI" }
        ],
        stack: ["Godot 4", "GDScript", "GLSL Shaders", "Procedural Audio"],
        visibilityBadge: "Private Project (Showcase)",
        highlights: [
          "4-layer realistic GLSL atmosphere shader pipeline with 8 dynamic night weather modes (fog, hurricane, blood moon, glacier, vortex).",
          "100% procedural vector rendering and 16-bit WAV audio synthesis with zero external media assets.",
          "Directional lighthouse beam, 11 enemy types, Pirate Lord boss fights, roguelite card drafting, and permanent upgrade shop."
        ]
      },
      kelime: {
        id: "kelime",
        eyebrow: "Godot 4 · Gemini AI",
        title: "Kelime Kart",
        desc: "Cognitive English vocabulary workshop with Leitner SRS, False Friend traps, and 4 micro-games.",
        image: "assets/images/kelime-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/kelime-cover.jpg", label: "Cover Art" },
          { src: "assets/images/kelime-showcase.jpg", label: "Main Showcase" },
          { src: "assets/images/kelime-modes.jpg", label: "Modes & Lexicon" },
          { src: "assets/images/kelime-devices.jpg", label: "Multi-Device" }
        ],
        stack: ["Godot 4", "GDScript", "GDShader", "Leitner SRS", "Gemini AI"],
        visibilityBadge: "Private Project (Showcase)",
        highlights: [
          "4 micro-game modes: Forge (syllables), Nuance (false friends), Listen, and Echo.",
          "Memory mnemonics and distractor mechanics tailored for Turkish learners.",
          "60 offline A1–C1 entries, adaptive placement test, and Gemini API generation."
        ]
      },
      deck: {
        title: "Showcase Deck",
        sub: "Flip through project & game showcases · Click to inspect"
      },
      edu: {
        title: "Education & Languages",
        rows: [
          {
            period: "2024 — Present",
            school: "Tarsus University",
            program: "Customs Management",
            tags: ["Customs Law", "Foreign Trade", "Logistics"]
          },
          {
            period: "2026 — Present",
            school: "Istanbul University (AUZEF)",
            program: "Management Information Systems (MIS)",
            tags: ["MIS / ERP", "Databases", "Software"]
          }
        ],
        langs: [
          { code: "TR", label: "Turkish · Native" },
          { code: "EN", label: "English · B2" },
          { code: "DE", label: "German · B1" }
        ]
      },
      cert: {
        title: "Certificates",
        filters: [
          { key: "all", label: "All" },
          { key: "academic", label: "University" },
          { key: "security", label: "Cyber" },
          { key: "cs", label: "CS / edX" }
        ],
        rows: [
          { title: "Digital University Certificate", org: "Dijital Üniversite", year: "2026", cats: ["academic"], tag: "Academic" },
          { title: "Siber Vatan Cybersecurity Program", org: "Siber Vatan", year: "Cybersecurity", cats: ["security"], tag: "Security" },
          { title: "CS50's Introduction to Cybersecurity", org: "HarvardX · edX", year: "CS50CS", cats: ["security", "cs"], tag: "Cyber / CS" },
          { title: "CS50's Web Programming with Python and JavaScript", org: "HarvardX · edX", year: "CS50W", cats: ["cs"], tag: "Web / CS" },
          { title: "CS50's Introduction to Databases with SQL", org: "HarvardX · edX", year: "CS50SQL", cats: ["cs"], tag: "SQL / CS" },
          { title: "CS50's Introduction to Programming with Python", org: "HarvardX · edX", year: "CS50P", cats: ["cs"], tag: "Python / CS" }
        ]
      },
      footer: {
        left: "© 2026 Emirhan Polat · Mersin, Turkey · ⌘K to explore",
        email: "Email",
        customsMail: "CustomsIQ Support"
      },
      modal: {
        stackLabel: "Tech Stack",
        highlightsLabel: "Key Highlights",
        openLive: "Open Live Site ↗",
        openRepo: "View on GitHub ↗",
        privateNote: "Private source code (showcase)"
      },
      cmdk: {
        placeholder: "Search sections, projects, languages, or theme...",
        groups: { nav: "Navigate", items: "Projects & Games", lang: "Language", theme: "Appearance", links: "Links", fun: "Interactive" },
        actions: {
          themeLight: "Light Theme (Eric Wu Pastel)",
          themeDark: "Dark Theme (Midnight Navy)",
          flipPersona: "Flip Profile Badge (Trade/MIS ↔ Game Dev)"
        }
      }
    },

    de: {
      pageTitle: "Emirhan Polat — Zollbetriebswirtschaft, Wirtschaftsinformatik & Spiele",
      navTabs: [
        { key: "all", label: "Alle" },
        { key: "about", label: "Über mich" },
        { key: "projects", label: "Projekte" },
        { key: "games", label: "Spiele" },
        { key: "certificates", label: "Zertifikate" }
      ],
      hero: {
        location: "Mersin, Türkei",
        personaTrade: "Zoll & Informatik Modus ↻",
        personaGame: "Spieleentwickler Modus ↻",
        greeting: "Hallo, ich bin",
        bio: "Student der Zollbetriebswirtschaft (Universität Tarsus) und Wirtschaftsinformatik (Universität Istanbul AUZEF). Ich entwickle Außenhandels-Tools, lokale Sicherheitswerkzeuge und Godot-4-Spiele.",
        cvBtn: "Zertifikate & Überblick",
        domainNote: "emirhanpolat.me · Zoll, WI & Spiele"
      },
      customsiq: {
        id: "customsiq",
        eyebrow: "Zoll & KI",
        title: "CustomsIQ",
        desc: "KI-gestützter Zollschalter für Türkei ↔ Algerien Export-/Importakten, EX 1 / IM 4 Entwürfe, Zolltarifnummern, Abgabenberechnung und OFAC/EU/UN-Sanktionsprüfung.",
        liveLabel: "customsiq.org ↗",
        tabs: [
          { key: "visual", label: "Vorschau" },
          { key: "flow", label: "Ablauf" }
        ],
        flowSteps: [
          { title: "EX 1 / IM 4 & Abgaben", meta: "1.459 Tests", note: "Zollberechnung & Akkreditivprüfung" },
          { title: "Sanktionsprüfung", meta: "OFAC / EU", note: "UN-, UK- & EU-Sanktionslisten" },
          { title: "Zolltarif-Suche", meta: "13.753 Codes", note: "EU CN 2026 dreisprachig (EN/DE/FR)" }
        ],
        image: "assets/images/customsiq-hero.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/customsiq-hero.jpg", label: "Überblick" },
          { src: "assets/images/customsiq-assistant.jpg", label: "KI-Assistent" },
          { src: "assets/images/customsiq-engine.jpg", label: "Tarif & Sanktionen" },
          { src: "assets/images/customsiq-arch.jpg", label: "Architektur" }
        ],
        stack: ["Python", "FastAPI", "Tauri / Rust", "PostgreSQL", "SQLite", "Docker"],
        visibilityBadge: "Privates Repo · Live-Demo aktiv",
        highlights: [
          "16.650+ EU-KN-2026- & TR-Zolltarifcodes sowie 8.226+ Abgaben- und Präferenzsätze.",
          "Fehlertolerante Prüfung über 64.689 globale Sanktionseinträge (OFAC, EU, UN, UK).",
          "Erstellt EX 1 / IM 4 Entwürfe, Vorabprüfungen und BİLGE-Exportdateien.",
          "Web-, Tauri-Desktop- (Rust) & Mobil-Oberfläche mit 420+ Tests und 98 % Abdeckung."
        ]
      },
      traceforge: {
        id: "traceforge",
        eyebrow: "Sicherheit · CLI & MCP",
        title: "TraceForge",
        desc: "Lokales, deterministisches Werkzeug zur schreibgeschützten Analyse von ELF-, Mach-O-, PE- und WASM-Binärdateien mit verifizierbarem HTML-Nachweisbericht.",
        liveLabel: "Live-Seite ↗",
        repoLabel: "GitHub ↗",
        tabs: [
          { key: "visual", label: "Vorschau" },
          { key: "table", label: "Tabelle" },
          { key: "evidence", label: "Nachweis" }
        ],
        tableHead: ["Slice", "Format", "Abdeckung"],
        tableRows: [
          { id: "slice_0", fmt: "Mach-O arm64", pct: 92 },
          { id: "slice_1", fmt: "ELF x86_64", pct: 78 },
          { id: "slice_2", fmt: "PE / WASM", pct: 64 }
        ],
        evidenceCard: {
          title: "Verifizierbarer Nachweis",
          subtitle: "Keine Ausführung · Kein Netzwerk",
          items: [
            "Inhaltsadressierte evidence_id-Signatur",
            "Eigenständiger Offline-HTML-Bericht",
            "Inkl. verständlichem Leitfaden"
          ]
        },
        image: "assets/images/traceforge-hero.png",
        wide: true,
        gallery: [
          { src: "assets/images/traceforge-hero.png", label: "Überblick" },
          { src: "assets/images/traceforge-architecture.png", label: "Architektur" },
          { src: "assets/images/traceforge-signing.png", label: "Ed25519-Signatur" },
          { src: "assets/images/traceforge-mcp.png", label: "MCP-Agent" }
        ],
        stack: ["TypeScript", "Node.js", "MCP", "Ed25519", "ELF / Mach-O / PE / WASM"],
        visibilityBadge: "Open Source (MIT)",
        highlights: [
          "Analysiert native Binärdateien und macOS-.app-Pakete schreibgeschützt mit 0 Laufzeit-Abhängigkeiten.",
          "Inhaltsadressierte SHA-256-evidence_id mit Ed25519-Signatur und 1-Byte-Manipulationserkennung.",
          "Bietet einen 6-Tool-MCP-Stdio-Server für Agenten sowie eigenständige Offline-HTML-Berichte."
        ]
      },
      sky: {
        city: "Mersin, TR",
        caption: "Ortszeit · Türkei (UTC+3)"
      },
      connect: {
        eyebrow: "KONTAKT",
        title: "Schreib mir",
        copyLabel: "Kopieren",
        copiedLabel: "Kopiert ✓",
        linkedinLabel: "LinkedIn · Profil",
        githubLabel: "GitHub · Mutersec",
        status: "Offen für Projekte"
      },
      toolbox: {
        title: "Werkzeuge",
        sub: "Ziehen"
      },
      fener: {
        id: "fener",
        eyebrow: "Godot 4 · Roguelite-Defense",
        title: "Beacon's Last Light",
        desc: "Roguelite-Leuchtturm-Verteidigungsspiel: Lenke den Lichtstrahl über stürmische Wellen gegen Tiefsee-Gegner.",
        image: "assets/images/fener-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/fener-cover.jpg", label: "Key Art" },
          { src: "assets/images/fener-showcase.jpg", label: "Vitrine" },
          { src: "assets/images/fener-shaders.jpg", label: "Wetter & Shader" },
          { src: "assets/images/fener-gameplay.jpg", label: "Gameplay & UI" }
        ],
        stack: ["Godot 4", "GDScript", "GLSL Shaders", "Procedural Audio"],
        visibilityBadge: "Privates Projekt (Vitrine)",
        highlights: [
          "4-stufiges GLSL-Atmosphären-Shader-Paket mit 8 dynamischen Nachtwetter-Modi (Nebel, Hurrikan, Blutmond, Gletscher, Strudel).",
          "Vollständig prozedurale Vektorgrafiken und 16-Bit-WAV-Audiosynthese ganz ohne externe Mediendateien.",
          "Steuerbarer Leuchtturm-Strahl, 11 Gegnertypen, Piratenlord-Bosskämpfe, Roguelite-Karten und dauerhafter Upgrade-Shop."
        ]
      },
      kelime: {
        id: "kelime",
        eyebrow: "Godot 4 · Gemini KI",
        title: "Kelime Kart",
        desc: "Kognitiver Englisch-Vokabeltrainer mit Leitner-SRS, Falsche-Freunde-Fallen und 4 Mikro-Spielen.",
        image: "assets/images/kelime-cover.jpg",
        wide: true,
        gallery: [
          { src: "assets/images/kelime-cover.jpg", label: "Cover-Art" },
          { src: "assets/images/kelime-showcase.jpg", label: "Hauptansicht" },
          { src: "assets/images/kelime-modes.jpg", label: "Modi & Wörterbuch" },
          { src: "assets/images/kelime-devices.jpg", label: "Multi-Device" }
        ],
        stack: ["Godot 4", "GDScript", "GDShader", "Leitner SRS", "Gemini KI"],
        visibilityBadge: "Privates Projekt (Vitrine)",
        highlights: [
          "4 Spielmodi: Forge (Silben), Nuance (Falsche Freunde), Listen und Echo.",
          "Gedächtnisbrücken und Ablenker speziell für türkische Lernende.",
          "60 Offline-Vokabeln (A1–C1), adaptiver Einstufungstest und Gemini-API."
        ]
      },
      deck: {
        title: "Projekt-Stapel",
        sub: "Durch Projekt- & Spiele-Vitrinen blättern · Klicken für Details"
      },
      edu: {
        title: "Ausbildung & Sprachen",
        rows: [
          {
            period: "2024 — Laufend",
            school: "Universität Tarsus",
            program: "Zollbetriebswirtschaft",
            tags: ["Zollrecht", "Außenhandel", "Logistik"]
          },
          {
            period: "2026 — Laufend",
            school: "Universität Istanbul (AUZEF)",
            program: "Wirtschaftsinformatik (MIS)",
            tags: ["Wirtschaftsinformatik", "Datenbanken", "Software"]
          }
        ],
        langs: [
          { code: "TR", label: "Türkisch · Muttersprache" },
          { code: "EN", label: "Englisch · B2" },
          { code: "DE", label: "Deutsch · B1" }
        ]
      },
      cert: {
        title: "Zertifikate",
        filters: [
          { key: "all", label: "Alle" },
          { key: "academic", label: "Universität" },
          { key: "security", label: "Cyber" },
          { key: "cs", label: "Informatik" }
        ],
        rows: [
          { title: "Digital-Universität-Zertifikat", org: "Dijital Üniversite", year: "2026", cats: ["academic"], tag: "Akademisch" },
          { title: "Siber Vatan Cybersicherheitsprogramm", org: "Siber Vatan", year: "Cybersicherheit", cats: ["security"], tag: "Sicherheit" },
          { title: "CS50's Introduction to Cybersecurity", org: "HarvardX · edX", year: "CS50CS", cats: ["security", "cs"], tag: "Cyber / CS" },
          { title: "CS50's Web Programming with Python and JavaScript", org: "HarvardX · edX", year: "CS50W", cats: ["cs"], tag: "Web / CS" },
          { title: "CS50's Introduction to Databases with SQL", org: "HarvardX · edX", year: "CS50SQL", cats: ["cs"], tag: "SQL / CS" },
          { title: "CS50's Introduction to Programming with Python", org: "HarvardX · edX", year: "CS50P", cats: ["cs"], tag: "Python / CS" }
        ]
      },
      footer: {
        left: "© 2026 Emirhan Polat · Mersin, Türkei · ⌘K zum Entdecken",
        email: "E-Mail",
        customsMail: "CustomsIQ Support"
      },
      modal: {
        stackLabel: "Technologien",
        highlightsLabel: "Schwerpunkte",
        openLive: "Live-Seite öffnen ↗",
        openRepo: "GitHub-Repo öffnen ↗",
        privateNote: "Privater Quellcode (Vitrine)"
      },
      cmdk: {
        placeholder: "Bereiche, Projekte, Sprachen oder Thema suchen...",
        groups: { nav: "Navigation", items: "Projekte & Spiele", lang: "Sprache", theme: "Darstellung", links: "Links", fun: "Interaktiv" },
        actions: {
          themeLight: "Heller Modus (Eric Wu Pastell)",
          themeDark: "Dunkler Modus (Mitternachtsblau)",
          flipPersona: "Profil-Badge drehen (Zoll/WI ↔ Spiele)"
        }
      }
    }
  }
};
