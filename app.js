(function () {
  const DATA = window.PORTFOLIO_DATA;
  const LINKS = DATA.links;

  function readStore(key, fallback) {
    try {
      return localStorage.getItem(key) || fallback;
    } catch (_) {
      return fallback;
    }
  }

  function writeStore(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch (_) {}
  }

  const state = {
    lang: readStore("ep_lang", "tr"),
    theme: readStore("ep_theme", "dark"),
    filter: "all",
    customsTab: "visual",
    customsImgIdx: 0,
    traceTab: "visual",
    traceImgIdx: 0,
    certFilter: "all",
    deckIdx: 0,
    gameMode: false,
    activeDetailId: null,
    detailImgIdx: 0
  };

  if (!DATA.i18n[state.lang]) state.lang = "tr";
  document.documentElement.setAttribute("data-theme", state.theme === "light" ? "light" : "dark");

  function T() {
    return DATA.i18n[state.lang];
  }

  function isLight() {
    return document.documentElement.getAttribute("data-theme") === "light";
  }

  function setTheme(next) {
    state.theme = next === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", state.theme);
    writeStore("ep_theme", state.theme);
    renderThemeIcons();
    drawToolbox();
  }

  function toggleTheme() {
    setTheme(isLight() ? "dark" : "light");
  }

  function renderThemeIcons() {
    const light = isLight();
    document.getElementById("theme-icon-sun").classList.toggle("hidden", !light);
    document.getElementById("theme-icon-moon").classList.toggle("hidden", light);
  }

  function applyCardSpansAndFilter() {
    const f = state.filter;
    const spanRules = {
      all: {
        hero: "span-2 row-2",
        customsiq: "span-2",
        traceforge: "span-2",
        sky: "span-1",
        connect: "span-1",
        fener: "span-2",
        toolbox: "span-1",
        kelime: "span-1",
        deck: "span-2",
        education: "span-2",
        certificates: "span-2"
      },
      about: {
        hero: "span-2 row-2",
        sky: "span-1",
        connect: "span-1",
        education: "span-2",
        toolbox: "span-1",
        certificates: "span-3"
      },
      projects: {
        customsiq: "span-2",
        traceforge: "span-2",
        deck: "span-4"
      },
      games: {
        fener: "span-2",
        kelime: "span-2",
        deck: "span-4"
      },
      certificates: {
        certificates: "span-4"
      }
    };

    const currentRules = spanRules[f] || spanRules.all;
    document.querySelectorAll("[data-card-id]").forEach((card) => {
      const id = card.dataset.cardId;
      const groups = (card.dataset.groups || "").split(" ");
      const visible = f === "all" || groups.includes(f);
      card.classList.toggle("hidden", !visible);

      card.classList.remove("span-1", "span-2", "span-3", "span-4", "row-2");
      const cls = currentRules[id] || "span-1";
      cls.split(" ").forEach((c) => c && card.classList.add(c));
    });
  }

  function renderNav() {
    const t = T();
    document.getElementById("nav-tabs").innerHTML = t.navTabs
      .map((tab) => {
        const active = state.filter === tab.key ? "is-active" : "";
        return `<button type="button" class="nav-tab ${active}" data-nav-filter="${tab.key}">${tab.label}</button>`;
      })
      .join("");

    document.querySelectorAll(".lang-pill").forEach((btn) => {
      btn.classList.toggle("is-active", btn.dataset.lang === state.lang);
    });
  }

  function renderPersona() {
    const t = T();
    document.getElementById("persona-pill-btn").textContent = state.gameMode
      ? t.hero.personaGame
      : t.hero.personaTrade;
    document.getElementById("badge-icon-trade").classList.toggle("hidden", state.gameMode);
    document.getElementById("badge-icon-game").classList.toggle("hidden", !state.gameMode);
  }

  function renderCustomsWidget() {
    const c = T().customsiq;
    document.getElementById("customs-tabs").innerHTML = c.tabs
      .map((tab) => {
        const active = state.customsTab === tab.key ? "is-active" : "";
        return `<button type="button" class="seg-tab ${active}" data-customs-tab="${tab.key}">${tab.label}</button>`;
      })
      .join("");

    const panel = document.getElementById("customs-panel");
    if (state.customsTab === "visual") {
      const gallery = c.gallery && c.gallery.length ? c.gallery : [{ src: c.image, label: c.title }];
      const idx = state.customsImgIdx % gallery.length;
      const activeImg = gallery[idx];
      panel.innerHTML = `
        <div class="preview-gallery-wrap">
          <button type="button" class="preview-img-frame ${c.wide ? "is-wide" : ""}" data-detail-id="customsiq" data-detail-img-idx="${idx}" style="padding:0;cursor:pointer;width:100%;" aria-label="${c.title} — ${activeImg.label}">
            <img src="${activeImg.src}" alt="${c.title} — ${activeImg.label}" loading="eager" />
          </button>
          ${gallery.length > 1 ? `
            <div class="card-gallery-dots" role="group" aria-label="${c.title}">
              ${gallery.map((g, i) => `
                <button type="button" class="card-gallery-dot ${i === idx ? "is-active" : ""}" data-customs-img="${i}" title="${g.label}">${i + 1}</button>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `;
      return;
    }

    panel.innerHTML = `
      <div class="wf-panel">
        ${c.flowSteps
          .map(
            (s) => `
          <div class="wf-step">
            <div>
              <div style="font-weight:700;color:var(--fg)">${s.title}</div>
              <div style="color:var(--muted)">${s.note}</div>
            </div>
            <span class="mono" style="color:var(--primary);font-weight:700;flex-shrink:0">${s.meta}</span>
          </div>
        `
          )
          .join("")}
      </div>
    `;
  }

  function renderTraceWidget() {
    const tr = T().traceforge;
    document.getElementById("trace-tabs").innerHTML = tr.tabs
      .map((tab) => {
        const active = state.traceTab === tab.key ? "is-active" : "";
        return `<button type="button" class="seg-tab ${active}" data-trace-tab="${tab.key}">${tab.label}</button>`;
      })
      .join("");

    const panel = document.getElementById("trace-panel");
    if (state.traceTab === "visual") {
      const gallery = tr.gallery && tr.gallery.length ? tr.gallery : [{ src: tr.image, label: tr.title }];
      const idx = state.traceImgIdx % gallery.length;
      const activeImg = gallery[idx];
      panel.innerHTML = `
        <div class="preview-gallery-wrap">
          <button type="button" class="preview-img-frame ${tr.wide ? "is-wide" : ""}" data-detail-id="traceforge" data-detail-img-idx="${idx}" style="padding:0;cursor:pointer;width:100%;" aria-label="${tr.title} — ${activeImg.label}">
            <img src="${activeImg.src}" alt="${tr.title} — ${activeImg.label}" loading="eager" />
          </button>
          ${gallery.length > 1 ? `
            <div class="card-gallery-dots" role="group" aria-label="${tr.title}">
              ${gallery.map((g, i) => `
                <button type="button" class="card-gallery-dot ${i === idx ? "is-active" : ""}" data-trace-img="${i}" title="${g.label}">${i + 1}</button>
              `).join("")}
            </div>
          ` : ""}
        </div>
      `;
      return;
    }

    if (state.traceTab === "table") {
      panel.innerHTML = `
        <table class="mini-table">
          <thead>
            <tr>
              <th>${tr.tableHead[0]}</th>
              <th>${tr.tableHead[1]}</th>
              <th style="text-align:right">${tr.tableHead[2]}</th>
            </tr>
          </thead>
          <tbody>
            ${tr.tableRows
              .map(
                (r) => `
              <tr>
                <td class="mono" style="color:#2dd4bf">${r.id}</td>
                <td>${r.fmt}</td>
                <td style="text-align:right">
                  <span class="util-bar"><span class="util-fill" style="width:${r.pct}%;background:#2dd4bf"></span></span>
                  <span class="mono" style="margin-left:6px;color:var(--muted)">${r.pct}%</span>
                </td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      `;
      return;
    }

    const ev = tr.evidenceCard;
    panel.innerHTML = `
      <div class="wf-panel" style="background:var(--card)">
        <div>
          <div style="font-weight:700;font-size:13px;color:var(--fg)">${ev.title}</div>
          <div class="mono" style="font-size:12px;color:#2dd4bf">${ev.subtitle}</div>
        </div>
        <ul style="margin:0;padding-left:16px;font-size:12px;color:var(--muted);display:flex;flex-direction:column;gap:4px">
          ${ev.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </div>
    `;
  }

  function getDeckSlides() {
    const t = T();
    return [t.customsiq, t.traceforge, t.fener, t.kelime];
  }

  function renderDeck() {
    const slides = getDeckSlides();
    const item = slides[state.deckIdx % slides.length];
    const t = T();
    document.getElementById("deck-title").textContent = t.deck.title;
    document.getElementById("deck-sub").textContent = t.deck.sub;
    document.getElementById("deck-counter").textContent = `${state.deckIdx + 1} / ${slides.length}`;
    document.getElementById("deck-img").src = item.image;
    document.getElementById("deck-img").alt = item.title;
    document.getElementById("deck-card-title").textContent = item.title;
    document.getElementById("deck-card-eyebrow").textContent = item.eyebrow;
    document.getElementById("deck-front-btn").dataset.detailId = item.id;
  }

  function renderCertificates() {
    const cert = T().cert;
    document.getElementById("cert-title").textContent = cert.title;
    document.getElementById("cert-filters").innerHTML = cert.filters
      .map((f) => {
        const active = state.certFilter === f.key ? "is-active" : "";
        return `<button type="button" class="filter-chip ${active}" data-cert-filter="${f.key}">${f.label}</button>`;
      })
      .join("");

    const rows =
      state.certFilter === "all"
        ? cert.rows
        : cert.rows.filter((r) => (r.cats || [r.cat]).includes(state.certFilter));

    document.getElementById("cert-rows").innerHTML = rows
      .map(
        (r) => `
      <div class="cert-row">
        <div>
          <div class="cert-name">${r.title}</div>
          <div class="cert-org">${r.org}</div>
        </div>
        <div style="display:flex;align-items:center;gap:8px">
          <span class="tag-chip">${r.tag}</span>
          <span class="mono" style="font-size:12px;color:var(--muted)">${r.year}</span>
        </div>
      </div>
    `
      )
      .join("");
  }

  function renderAll() {
    const t = T();
    document.documentElement.lang = state.lang;
    document.title = t.pageTitle;

    renderNav();
    renderThemeIcons();

    // Hero
    document.getElementById("hero-location").textContent = t.hero.location;
    document.getElementById("hero-greeting").textContent = t.hero.greeting;
    document.getElementById("hero-bio").textContent = t.hero.bio;
    document.getElementById("hero-cv-btn").textContent = t.hero.cvBtn;
    document.getElementById("hero-domain-note").textContent = t.hero.domainNote;
    renderPersona();

    // CustomsIQ
    document.getElementById("customs-eyebrow").textContent = t.customsiq.eyebrow;
    document.getElementById("customs-title").textContent = t.customsiq.title;
    document.getElementById("customs-desc").textContent = t.customsiq.desc;
    document.getElementById("customs-live-link").textContent = t.customsiq.liveLabel;
    renderCustomsWidget();

    // TraceForge
    document.getElementById("trace-eyebrow").textContent = t.traceforge.eyebrow;
    document.getElementById("trace-title").textContent = t.traceforge.title;
    document.getElementById("trace-desc").textContent = t.traceforge.desc;
    document.getElementById("trace-live-link").textContent = t.traceforge.liveLabel;
    document.getElementById("trace-repo-link").textContent = t.traceforge.repoLabel;
    renderTraceWidget();

    // Sky & Connect & Toolbox
    document.getElementById("sky-city").textContent = t.sky.city;
    document.getElementById("sky-caption").textContent = t.sky.caption;
    document.getElementById("connect-eyebrow").textContent = t.connect.eyebrow;
    document.getElementById("connect-title").textContent = t.connect.title;
    document.getElementById("connect-status").textContent = t.connect.status;
    const copySvg = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
    document.getElementById("connect-rows").innerHTML = `
      <div class="connect-item">
        <a href="mailto:${LINKS.email}" class="connect-link" title="${LINKS.email}">${LINKS.email}</a>
        <button type="button" class="connect-copy-btn" data-copy-email="${LINKS.email}" title="${t.connect.copyLabel}" aria-label="${t.connect.copyLabel}">${copySvg}</button>
      </div>
      <div class="connect-item">
        <a href="mailto:${LINKS.customsEmail}" class="connect-link" title="${LINKS.customsEmail}">${LINKS.customsEmail}</a>
        <button type="button" class="connect-copy-btn" data-copy-email="${LINKS.customsEmail}" title="${t.connect.copyLabel}" aria-label="${t.connect.copyLabel}">${copySvg}</button>
      </div>
      <div class="connect-item">
        <a href="${LINKS.linkedin}" target="_blank" rel="noopener noreferrer" class="connect-link">${t.connect.linkedinLabel} ↗</a>
        <a href="${LINKS.github}" target="_blank" rel="noopener noreferrer" class="connect-copy-btn">GitHub ↗</a>
      </div>
    `;
    document.getElementById("toolbox-title").textContent = t.toolbox.title;
    document.getElementById("toolbox-sub").textContent = t.toolbox.sub;

    // Fenerin Son Isigi
    document.getElementById("fener-eyebrow").textContent = t.fener.eyebrow;
    document.getElementById("fener-title").textContent = t.fener.title;
    document.getElementById("fener-desc").textContent = t.fener.desc;
    document.getElementById("fener-tags").innerHTML = t.fener.stack
      .slice(0, 3)
      .map((s) => `<span class="tag-chip">${s}</span>`)
      .join("");
    document.getElementById("fener-img").alt = t.fener.title;

    // Kelime Kart
    document.getElementById("kelime-eyebrow").textContent = t.kelime.eyebrow;
    document.getElementById("kelime-title").textContent = t.kelime.title;
    document.getElementById("kelime-desc").textContent = t.kelime.desc;
    document.getElementById("kelime-img").alt = t.kelime.title;

    // Deck
    renderDeck();

    // Education & Languages
    document.getElementById("edu-title").textContent = t.edu.title;
    document.getElementById("edu-rows").innerHTML = t.edu.rows
      .map(
        (r) => `
      <div class="edu-row">
        <div class="edu-period">${r.period}</div>
        <div>
          <div class="edu-school">${r.school}</div>
          <div class="edu-program">${r.program}</div>
          <div class="pill-tags">
            ${r.tags.map((tag) => `<span class="tag-chip">${tag}</span>`).join("")}
          </div>
        </div>
      </div>
    `
      )
      .join("");

    document.getElementById("lang-strip").innerHTML = t.edu.langs
      .map(
        (l) => `
      <span class="lang-badge">
        <strong class="mono" style="color:var(--primary)">${l.code}</strong>
        <span style="color:var(--muted)">${l.label}</span>
      </span>
    `
      )
      .join("");

    // Certificates
    renderCertificates();

    // Footer
    document.getElementById("footer-left").textContent = t.footer.left;
    document.getElementById("footer-email").textContent = t.footer.email;
    document.getElementById("footer-customs-mail").textContent = t.footer.customsMail;

    // Command Palette Placeholder
    document.getElementById("cmdk-input").placeholder = t.cmdk.placeholder;

    applyCardSpansAndFilter();
    renderMaintenance();
    if (state.activeDetailId) openDetailModal(state.activeDetailId);
    renderCmdkList();
  }

  // Detail Modal for Projects & Games
  function getItemById(id) {
    const t = T();
    return {
      customsiq: { ...t.customsiq, liveUrl: LINKS.customsLive, repoUrl: null, email: LINKS.customsEmail },
      traceforge: { ...t.traceforge, liveUrl: LINKS.traceforgeLive, repoUrl: LINKS.traceforgeRepo, email: null },
      fener: { ...t.fener, liveUrl: null, repoUrl: null, email: null },
      kelime: { ...t.kelime, liveUrl: null, repoUrl: null, email: null }
    }[id];
  }

  function renderDetailGallery(item) {
    const mediaEl = document.querySelector(".detail-media");
    if (mediaEl) mediaEl.classList.toggle("is-wide", Boolean(item.wide));
    const galleryEl = document.getElementById("detail-gallery");
    const gallery = item.gallery && item.gallery.length > 1 ? item.gallery : null;
    if (!gallery) {
      galleryEl.classList.add("hidden");
      galleryEl.innerHTML = "";
      document.getElementById("detail-img").src = item.image;
      document.getElementById("detail-img").alt = item.title;
      return;
    }
    const idx = state.detailImgIdx % gallery.length;
    const active = gallery[idx];
    document.getElementById("detail-img").src = active.src;
    document.getElementById("detail-img").alt = `${item.title} — ${active.label}`;
    galleryEl.classList.remove("hidden");
    galleryEl.innerHTML = gallery
      .map(
        (g, i) => `
      <button type="button" class="detail-thumb ${i === idx ? "is-active" : ""}" data-detail-thumb="${i}">
        <img src="${g.src}" alt="${g.label}" style="${item.wide ? "aspect-ratio:16/9;object-fit:contain" : ""}" />
        <span>${g.label}</span>
      </button>
    `
      )
      .join("");
  }

  function openDetailModal(id, imgIdx = 0) {
    const item = getItemById(id);
    if (!item) return;
    state.activeDetailId = id;
    state.detailImgIdx = Number.isFinite(Number(imgIdx)) ? Number(imgIdx) : 0;
    const t = T();

    renderDetailGallery(item);
    document.getElementById("detail-eyebrow").textContent = item.eyebrow;
    document.getElementById("detail-visibility").textContent = item.visibilityBadge;
    document.getElementById("detail-title").textContent = item.title;
    document.getElementById("detail-desc").textContent = item.desc;
    document.getElementById("detail-stack").innerHTML = item.stack
      .map((s) => `<span class="tag-chip mono">${s}</span>`)
      .join("");
    document.getElementById("detail-highlights").innerHTML = item.highlights
      .map((h) => `<li>${h}</li>`)
      .join("");

    const actions = [];
    if (item.liveUrl) {
      actions.push(
        `<a href="${item.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary">${t.modal.openLive}</a>`
      );
    }
    if (item.repoUrl) {
      actions.push(
        `<a href="${item.repoUrl}" target="_blank" rel="noopener noreferrer" class="cta-pill" style="height:36px">${t.modal.openRepo}</a>`
      );
    }
    if (item.email) {
      actions.push(
        `<a href="mailto:${item.email}" class="cta-pill" style="height:36px">${item.email}</a>`
      );
    }
    if (!item.repoUrl) {
      actions.push(`<span class="tag-chip mono">${t.modal.privateNote}</span>`);
    }
    document.getElementById("detail-actions").innerHTML = actions.join("");
    document.getElementById("detail-backdrop").classList.remove("hidden");
  }

  function closeDetailModal() {
    state.activeDetailId = null;
    document.getElementById("detail-backdrop").classList.add("hidden");
  }

  // Command Palette (⌘K)
  function getCmdkItems() {
    const t = T();
    return [
      ...t.navTabs.map((n) => ({
        group: t.cmdk.groups.nav,
        label: n.label,
        run: () => {
          state.filter = n.key;
          renderAll();
        }
      })),
      { group: t.cmdk.groups.items, label: `${t.customsiq.title} — ${t.customsiq.eyebrow}`, run: () => openDetailModal("customsiq") },
      { group: t.cmdk.groups.items, label: `${t.traceforge.title} — ${t.traceforge.eyebrow}`, run: () => openDetailModal("traceforge") },
      { group: t.cmdk.groups.items, label: `${t.fener.title} — ${t.fener.eyebrow}`, run: () => openDetailModal("fener") },
      { group: t.cmdk.groups.items, label: `${t.kelime.title} — ${t.kelime.eyebrow}`, run: () => openDetailModal("kelime") },
      { group: t.cmdk.groups.lang, label: "Türkçe (TR)", run: () => { state.lang = "tr"; writeStore("ep_lang", "tr"); renderAll(); } },
      { group: t.cmdk.groups.lang, label: "English (EN)", run: () => { state.lang = "en"; writeStore("ep_lang", "en"); renderAll(); } },
      { group: t.cmdk.groups.lang, label: "Deutsch (DE)", run: () => { state.lang = "de"; writeStore("ep_lang", "de"); renderAll(); } },
      { group: t.cmdk.groups.theme, label: t.cmdk.actions.themeLight, run: () => setTheme("light") },
      { group: t.cmdk.groups.theme, label: t.cmdk.actions.themeDark, run: () => setTheme("dark") },
      { group: t.cmdk.groups.links, label: `GitHub (${LINKS.githubHandle})`, run: () => window.open(LINKS.github, "_blank", "noopener,noreferrer") },
      { group: t.cmdk.groups.links, label: "LinkedIn", run: () => window.open(LINKS.linkedin, "_blank", "noopener,noreferrer") },
      { group: t.cmdk.groups.fun, label: t.cmdk.actions.flipPersona, run: () => { state.gameMode = !state.gameMode; renderPersona(); } }
    ];
  }

  function renderCmdkList() {
    const input = document.getElementById("cmdk-input");
    const q = (input.value || "").trim().toLowerCase();
    const items = getCmdkItems().filter(
      (item) => !q || item.label.toLowerCase().includes(q) || item.group.toLowerCase().includes(q)
    );
    const list = document.getElementById("cmdk-list");
    list._items = items;
    list.innerHTML =
      items
        .map(
          (item, idx) => `
      <button type="button" class="cmdk-item" data-cmd-idx="${idx}">
        <span style="font-weight:600">${item.label}</span>
        <span class="mono" style="font-size:12px;color:var(--muted)">${item.group}</span>
      </button>
    `
        )
        .join("") || `<div style="padding:18px;text-align:center;font-size:13px;color:var(--muted)">—</div>`;
  }

  function openCmdk() {
    document.getElementById("cmdk-backdrop").classList.remove("hidden");
    const input = document.getElementById("cmdk-input");
    input.value = "";
    renderCmdkList();
    setTimeout(() => input.focus(), 20);
  }

  function closeCmdk() {
    document.getElementById("cmdk-backdrop").classList.add("hidden");
  }

  // Live Clock (Turkey UTC+3)
  function updateSkyClock() {
    try {
      const text = new Intl.DateTimeFormat("tr-TR", {
        timeZone: "Europe/Istanbul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      }).format(new Date());
      document.getElementById("sky-clock").textContent = text;
    } catch (_) {
      const d = new Date();
      document.getElementById("sky-clock").textContent =
        `${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
    }
  }

  function rotateVec(v, rx, ry) {
    const cosY = Math.cos(ry), sinY = Math.sin(ry);
    const x1 = v.x * cosY - v.z * sinY;
    const z1 = v.x * sinY + v.z * cosY;
    const cosX = Math.cos(rx), sinX = Math.sin(rx);
    return { x: x1, y: v.y * cosX - z1 * sinX, z: v.y * sinX + z1 * cosX };
  }

  function sizeHiDpiCanvas(canvas, cssW, cssH) {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    if (canvas.width !== cssW * dpr || canvas.height !== cssH * dpr) {
      canvas.width = cssW * dpr;
      canvas.height = cssH * dpr;
    }
    const ctx = canvas.getContext("2d");
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return ctx;
  }

  // 3D Spherical Toolbox Canvas
  const boxState = { rotY: 0.45, rotX: 0.34, dragging: false, lastX: 0, lastY: 0, nodes: [] };
  (function initToolbox() {
    const items = DATA.toolbox;
    const golden = Math.PI * (3 - Math.sqrt(5));
    boxState.nodes = items.map((item, i) => {
      const y = 0.85 - (i / (items.length - 1)) * 1.7;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = golden * i;
      return { ...item, x: Math.cos(theta) * r, y, z: Math.sin(theta) * r };
    });
  })();

  function drawToolbox() {
    const canvas = document.getElementById("toolbox-canvas");
    if (!canvas) return;
    const w = 230, h = 180;
    const ctx = sizeHiDpiCanvas(canvas, w, h);
    ctx.clearRect(0, 0, w, h);

    const cx = w / 2, cy = h / 2, rx = 78, ry = 66;
    const light = isLight();

    const projected = boxState.nodes
      .map((n) => {
        const rp = rotateVec(n, boxState.rotX, boxState.rotY);
        return { ...n, rx: rp.x, ry: rp.y, rz: rp.z };
      })
      .sort((a, b) => a.rz - b.rz);

    for (const n of projected) {
      const scale = 0.66 + (n.rz + 1) * 0.22;
      const bw = Math.max(32, (n.label.length * 6.5 + 14) * scale);
      const bh = 23 * scale;
      const x = cx + n.rx * rx - bw / 2;
      const y = cy - n.ry * ry - bh / 2;
      const alpha = n.rz < 0 ? 0.14 + (n.rz + 1) * 0.15 : 0.48 + n.rz * 0.52;

      ctx.save();
      ctx.globalAlpha = Math.min(1, Math.max(0.14, alpha));
      ctx.fillStyle = light ? "#ffffff" : "#182235";
      ctx.strokeStyle = light ? "rgba(15, 23, 42, 0.15)" : "rgba(148, 163, 184, 0.26)";
      ctx.lineWidth = 1.1;
      ctx.beginPath();
      ctx.roundRect(x, y, bw, bh, 7);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = n.color;
      ctx.font = `700 ${Math.max(10, Math.round(10.5 * scale))}px ui-monospace, SFMono-Regular, Menlo, monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(n.label, x + bw / 2, y + bh / 2);
      ctx.restore();
    }
  }

  function bindCanvasDrag(canvasId, targetState, drawFn) {
    const el = document.getElementById(canvasId);
    if (!el) return;
    el.addEventListener("pointerdown", (e) => {
      targetState.dragging = true;
      targetState.lastX = e.clientX;
      targetState.lastY = e.clientY;
      el.setPointerCapture(e.pointerId);
    });
    el.addEventListener("pointermove", (e) => {
      if (!targetState.dragging) return;
      const dx = e.clientX - targetState.lastX;
      const dy = e.clientY - targetState.lastY;
      targetState.lastX = e.clientX;
      targetState.lastY = e.clientY;
      targetState.rotY += dx * 0.012;
      targetState.rotX += dy * 0.012;
      drawFn();
    });
    const stop = () => { targetState.dragging = false; };
    el.addEventListener("pointerup", stop);
    el.addEventListener("pointercancel", stop);
  }

  // Global Event Delegation
  document.addEventListener("click", (e) => {
    const navBtn = e.target.closest("[data-nav-filter]");
    if (navBtn) {
      state.filter = navBtn.dataset.navFilter;
      renderAll();
      return;
    }

    const langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      state.lang = langBtn.dataset.lang;
      writeStore("ep_lang", state.lang);
      renderAll();
      return;
    }

    const cTab = e.target.closest("[data-customs-tab]");
    if (cTab) {
      state.customsTab = cTab.dataset.customsTab;
      renderCustomsWidget();
      return;
    }

    const cImg = e.target.closest("[data-customs-img]");
    if (cImg) {
      state.customsImgIdx = Number(cImg.dataset.customsImg) || 0;
      renderCustomsWidget();
      return;
    }

    const tTab = e.target.closest("[data-trace-tab]");
    if (tTab) {
      state.traceTab = tTab.dataset.traceTab;
      renderTraceWidget();
      return;
    }

    const tImg = e.target.closest("[data-trace-img]");
    if (tImg) {
      state.traceImgIdx = Number(tImg.dataset.traceImg) || 0;
      renderTraceWidget();
      return;
    }

    const certBtn = e.target.closest("[data-cert-filter]");
    if (certBtn) {
      state.certFilter = certBtn.dataset.certFilter;
      renderCertificates();
      return;
    }

    const dThumb = e.target.closest("[data-detail-thumb]");
    if (dThumb && state.activeDetailId) {
      state.detailImgIdx = Number(dThumb.dataset.detailThumb) || 0;
      const item = getItemById(state.activeDetailId);
      if (item) renderDetailGallery(item);
      return;
    }

    const copyBtn = e.target.closest("[data-copy-email]");
    if (copyBtn) {
      const email = copyBtn.dataset.copyEmail;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).catch(() => {});
      }
      const prevHtml = copyBtn.innerHTML;
      copyBtn.textContent = "✓";
      copyBtn.style.color = "var(--success)";
      setTimeout(() => {
        copyBtn.innerHTML = prevHtml;
        copyBtn.style.color = "";
      }, 1600);
      return;
    }

    const detailBtn = e.target.closest("[data-detail-id]");
    if (detailBtn) {
      openDetailModal(detailBtn.dataset.detailId, detailBtn.dataset.detailImgIdx || 0);
      return;
    }

    const cmdBtn = e.target.closest("[data-cmd-idx]");
    if (cmdBtn) {
      const list = document.getElementById("cmdk-list");
      const entry = list._items && list._items[Number(cmdBtn.dataset.cmdIdx)];
      closeCmdk();
      if (entry) entry.run();
      return;
    }
  });

  document.getElementById("avatar-flip-btn").addEventListener("click", () => {
    state.gameMode = !state.gameMode;
    renderPersona();
  });
  document.getElementById("persona-pill-btn").addEventListener("click", () => {
    state.gameMode = !state.gameMode;
    renderPersona();
  });

  document.getElementById("hero-cv-btn").addEventListener("click", () => {
    state.filter = "certificates";
    renderAll();
  });

  document.getElementById("deck-prev").addEventListener("click", () => {
    const len = getDeckSlides().length;
    state.deckIdx = (state.deckIdx - 1 + len) % len;
    renderDeck();
  });
  document.getElementById("deck-next").addEventListener("click", () => {
    const len = getDeckSlides().length;
    state.deckIdx = (state.deckIdx + 1) % len;
    renderDeck();
  });

  document.getElementById("theme-toggle-nav").addEventListener("click", toggleTheme);
  document.getElementById("theme-toggle-sky").addEventListener("click", toggleTheme);
  document.getElementById("cmdk-trigger").addEventListener("click", openCmdk);
  document.getElementById("cmdk-close").addEventListener("click", closeCmdk);
  document.getElementById("cmdk-input").addEventListener("input", renderCmdkList);
  document.getElementById("cmdk-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "cmdk-backdrop") closeCmdk();
  });

  document.getElementById("detail-close").addEventListener("click", closeDetailModal);
  document.getElementById("detail-backdrop").addEventListener("click", (e) => {
    if (e.target.id === "detail-backdrop") closeDetailModal();
  });

  document.getElementById("footer-lang-cycle").addEventListener("click", () => {
    const order = ["tr", "en", "de"];
    state.lang = order[(order.indexOf(state.lang) + 1) % order.length];
    writeStore("ep_lang", state.lang);
    renderAll();
  });

  document.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
      e.preventDefault();
      openCmdk();
    } else if (e.key === "Escape") {
      closeCmdk();
      closeDetailModal();
    }
  });

  document.addEventListener("pointermove", (e) => {
    const spot = document.getElementById("spotlight");
    if (!spot) return;
    spot.style.setProperty("--spot-x", `${e.clientX}px`);
    spot.style.setProperty("--spot-y", `${e.clientY}px`);
  });

  bindCanvasDrag("toolbox-canvas", boxState, drawToolbox);

  function animate() {
    if (!boxState.dragging) {
      boxState.rotY += 0.0052;
      drawToolbox();
    }
    requestAnimationFrame(animate);
  }

  async function sha256Hex(text) {
    if (!window.crypto || !window.crypto.subtle) return "";
    const buf = new TextEncoder().encode(text);
    const digest = await window.crypto.subtle.digest("SHA-256", buf);
    return Array.from(new Uint8Array(digest))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function isMaintenanceShown() {
    const params = new URLSearchParams(window.location.search);
    if (params.get("bakim") === "1") return true;
    const cfg = DATA.maintenance;
    if (!cfg || !cfg.enabled) return false;
    try {
      return sessionStorage.getItem("ep_maint_bypass") !== "1";
    } catch (_) {
      return true;
    }
  }

  function renderMaintenance() {
    const showMaint = isMaintenanceShown();
    const screen = document.getElementById("maintenance-screen");
    const header = document.querySelector(".nav-header");
    const main = document.querySelector("main.page-shell");

    if (screen) screen.classList.toggle("hidden", !showMaint);
    if (header) header.classList.toggle("hidden", showMaint);
    if (main) main.classList.toggle("hidden", showMaint);

    if (!showMaint) return;
    const titleEl = document.getElementById("maint-title");
    if (titleEl) titleEl.textContent = "Bakımda";
  }

  async function initSite() {
    const params = new URLSearchParams(window.location.search);
    const secret = params.get("gizli");
    if (secret && DATA.maintenance && DATA.maintenance.previewHash) {
      const hash = await sha256Hex(secret);
      if (hash === DATA.maintenance.previewHash) {
        try {
          sessionStorage.setItem("ep_maint_bypass", "1");
        } catch (_) {}
        params.delete("gizli");
        const cleanQuery = params.toString();
        const cleanUrl = window.location.pathname + (cleanQuery ? `?${cleanQuery}` : "") + window.location.hash;
        window.history.replaceState({}, "", cleanUrl);
      }
    }

    renderAll();
    renderMaintenance();
    updateSkyClock();
    setInterval(updateSkyClock, 15000);
    requestAnimationFrame(animate);
  }

  initSite();
})();
