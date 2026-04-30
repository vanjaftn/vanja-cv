"""Generate monochrome placeholder browser-mockup screenshots for the two
passion projects on the CV. Run: python3 scripts/gen-mockups.py
"""
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public" / "projects"
OUT.mkdir(parents=True, exist_ok=True)

# Color palette — strictly grayscale.
BG = "#fafafa"
SURFACE = "#ffffff"
LINE = "#e5e5e5"
SOFT = "#f5f5f5"
MUTED = "#d4d4d4"
TEXT_MUTED = "#a3a3a3"
TEXT_DIM = "#737373"
TEXT = "#171717"

W, H = 1600, 1000


def chrome(url: str) -> str:
    """SVG markup for the outer browser frame, returning a fragment that
    expects content to be drawn inside the inner viewport (x: 80..1520,
    y: 108..940).
    """
    return f"""
  <rect width="{W}" height="{H}" fill="{BG}"/>
  <rect x="80" y="60" width="1440" height="880" rx="14" fill="{SURFACE}" stroke="{LINE}" stroke-width="2"/>
  <rect x="80" y="60" width="1440" height="48" fill="{SOFT}"/>
  <rect x="80" y="92" width="1440" height="16" fill="{SOFT}"/>
  <line x1="80" y1="108" x2="1520" y2="108" stroke="{LINE}" stroke-width="2"/>
  <circle cx="110" cy="84" r="7" fill="{MUTED}"/>
  <circle cx="132" cy="84" r="7" fill="{MUTED}"/>
  <circle cx="154" cy="84" r="7" fill="{MUTED}"/>
  <rect x="200" y="72" width="640" height="24" rx="12" fill="{BG}" stroke="{LINE}"/>
  <text x="220" y="89" font-size="13" fill="{TEXT_MUTED}" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">{url}</text>
"""


def wrap(content: str, label: str) -> str:
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" role="img" aria-label="{label}">
{content}
</svg>
"""


# ----- Project One: a dashboard-style web app ----------------------------------

def p1_slide1() -> str:
    # Sidebar + header + KPI cards + chart
    s = chrome("project-one.example.com / dashboard")
    # Sidebar
    s += f'<rect x="80" y="108" width="240" height="832" fill="{SOFT}"/>'
    s += f'<line x1="320" y1="108" x2="320" y2="940" stroke="{LINE}" stroke-width="2"/>'
    # Logo block
    s += f'<rect x="108" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="150" y="148" width="80" height="14" rx="3" fill="{TEXT}"/>'
    # Sidebar items
    for i, w in enumerate([110, 90, 120, 80, 100]):
        y = 220 + i * 44
        if i == 0:
            s += f'<rect x="100" y="{y - 10}" width="200" height="32" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<rect x="116" y="{y}" width="14" height="14" rx="3" fill="{TEXT_DIM if i else TEXT}"/>'
        s += f'<rect x="140" y="{y + 3}" width="{w}" height="9" rx="3" fill="{TEXT_DIM if i else TEXT}"/>'

    # Top bar
    s += f'<rect x="360" y="148" width="220" height="22" rx="4" fill="{TEXT}"/>'
    s += f'<rect x="360" y="180" width="380" height="11" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="1380" y="148" width="100" height="34" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="1402" y="161" width="56" height="8" rx="3" fill="{SURFACE}"/>'

    # KPI cards
    for i, val in enumerate(["12,480", "98.2%", "324"]):
        x = 360 + i * 380
        s += f'<rect x="{x}" y="232" width="340" height="140" rx="10" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<rect x="{x + 20}" y="252" width="80" height="9" rx="3" fill="{TEXT_MUTED}"/>'
        s += f'<text x="{x + 20}" y="320" font-size="40" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui">{val}</text>'
        s += f'<rect x="{x + 20}" y="340" width="120" height="8" rx="3" fill="{MUTED}"/>'

    # Chart card
    s += f'<rect x="360" y="396" width="1100" height="500" rx="10" fill="{SURFACE}" stroke="{LINE}"/>'
    s += f'<rect x="384" y="424" width="160" height="12" rx="3" fill="{TEXT}"/>'
    s += f'<rect x="384" y="446" width="240" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    # Grid lines
    for i in range(5):
        y = 520 + i * 70
        s += f'<line x1="384" y1="{y}" x2="1436" y2="{y}" stroke="{LINE}" stroke-width="1"/>'
    # Chart line (polyline)
    pts = [(384, 760), (484, 700), (584, 720), (684, 640), (784, 680), (884, 580), (984, 600), (1084, 520), (1184, 560), (1284, 480), (1384, 500), (1436, 460)]
    pts_str = " ".join(f"{x},{y}" for x, y in pts)
    s += f'<polyline points="{pts_str}" fill="none" stroke="{TEXT}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
    # Area under line
    area = pts_str + f" 1436,860 384,860"
    s += f'<polygon points="{area}" fill="{TEXT}" fill-opacity="0.06"/>'
    # Axis labels
    for i, lbl in enumerate(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]):
        x = 384 + i * 175
        s += f'<text x="{x}" y="888" font-size="12" fill="{TEXT_MUTED}" font-family="ui-sans-serif, system-ui">{lbl}</text>'
    return wrap(s, "Project One — Dashboard overview")


def p1_slide2() -> str:
    # Table / list view
    s = chrome("project-one.example.com / projects")
    s += f'<rect x="80" y="108" width="240" height="832" fill="{SOFT}"/>'
    s += f'<line x1="320" y1="108" x2="320" y2="940" stroke="{LINE}" stroke-width="2"/>'
    s += f'<rect x="108" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="150" y="148" width="80" height="14" rx="3" fill="{TEXT}"/>'
    for i, w in enumerate([110, 90, 120, 80, 100]):
        y = 220 + i * 44
        if i == 1:
            s += f'<rect x="100" y="{y - 10}" width="200" height="32" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<rect x="116" y="{y}" width="14" height="14" rx="3" fill="{TEXT if i == 1 else TEXT_DIM}"/>'
        s += f'<rect x="140" y="{y + 3}" width="{w}" height="9" rx="3" fill="{TEXT if i == 1 else TEXT_DIM}"/>'

    # Title
    s += f'<rect x="360" y="148" width="220" height="22" rx="4" fill="{TEXT}"/>'
    s += f'<rect x="360" y="180" width="380" height="11" rx="3" fill="{TEXT_MUTED}"/>'
    # Search and CTA
    s += f'<rect x="360" y="224" width="420" height="40" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
    s += f'<rect x="384" y="240" width="180" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="1380" y="224" width="100" height="40" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="1402" y="241" width="56" height="8" rx="3" fill="{SURFACE}"/>'

    # Table header
    s += f'<rect x="360" y="296" width="1100" height="44" rx="6" fill="{SOFT}" stroke="{LINE}"/>'
    headers = [(384, 60), (640, 80), (900, 70), (1140, 60), (1340, 50)]
    for x, w in headers:
        s += f'<rect x="{x}" y="316" width="{w}" height="9" rx="3" fill="{TEXT_DIM}"/>'

    # Rows
    for i in range(8):
        y = 354 + i * 64
        s += f'<rect x="360" y="{y}" width="1100" height="64" fill="{SURFACE}"/>'
        s += f'<line x1="360" y1="{y + 64}" x2="1460" y2="{y + 64}" stroke="{LINE}" stroke-width="1"/>'
        s += f'<circle cx="400" cy="{y + 32}" r="14" fill="{SOFT}" stroke="{LINE}"/>'
        s += f'<rect x="430" y="{y + 22}" width="180" height="11" rx="3" fill="{TEXT}"/>'
        s += f'<rect x="430" y="{y + 40}" width="120" height="9" rx="3" fill="{TEXT_MUTED}"/>'
        s += f'<rect x="640" y="{y + 28}" width="200" height="9" rx="3" fill="{TEXT_DIM}"/>'
        s += f'<rect x="900" y="{y + 28}" width="160" height="9" rx="3" fill="{TEXT_DIM}"/>'
        # Status pill
        s += f'<rect x="1140" y="{y + 22}" width="84" height="22" rx="11" fill="{SOFT}" stroke="{LINE}"/>'
        s += f'<rect x="1156" y="{y + 30}" width="52" height="6" rx="3" fill="{TEXT_DIM}"/>'
        s += f'<rect x="1340" y="{y + 28}" width="80" height="9" rx="3" fill="{TEXT_DIM}"/>'
    return wrap(s, "Project One — Projects list")


def p1_slide3() -> str:
    # Detail / settings panel
    s = chrome("project-one.example.com / settings")
    s += f'<rect x="80" y="108" width="240" height="832" fill="{SOFT}"/>'
    s += f'<line x1="320" y1="108" x2="320" y2="940" stroke="{LINE}" stroke-width="2"/>'
    s += f'<rect x="108" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="150" y="148" width="80" height="14" rx="3" fill="{TEXT}"/>'
    for i, w in enumerate([110, 90, 120, 80, 100]):
        y = 220 + i * 44
        if i == 4:
            s += f'<rect x="100" y="{y - 10}" width="200" height="32" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<rect x="116" y="{y}" width="14" height="14" rx="3" fill="{TEXT if i == 4 else TEXT_DIM}"/>'
        s += f'<rect x="140" y="{y + 3}" width="{w}" height="9" rx="3" fill="{TEXT if i == 4 else TEXT_DIM}"/>'

    s += f'<rect x="360" y="148" width="200" height="22" rx="4" fill="{TEXT}"/>'
    s += f'<rect x="360" y="180" width="380" height="11" rx="3" fill="{TEXT_MUTED}"/>'

    # Two-column layout: form left, preview right
    # Form card
    s += f'<rect x="360" y="232" width="660" height="660" rx="10" fill="{SURFACE}" stroke="{LINE}"/>'
    s += f'<rect x="384" y="260" width="160" height="12" rx="3" fill="{TEXT}"/>'
    s += f'<rect x="384" y="280" width="260" height="9" rx="3" fill="{TEXT_MUTED}"/>'

    fields = [
        ("Display name", 320),
        ("Email address", 400),
        ("Workspace URL", 480),
        ("Time zone", 560),
        ("Notifications", 640),
    ]
    for lbl, y in fields:
        s += f'<text x="384" y="{y - 8}" font-size="12" fill="{TEXT_DIM}" font-family="ui-sans-serif, system-ui">{lbl}</text>'
        s += f'<rect x="384" y="{y}" width="612" height="40" rx="6" fill="{BG}" stroke="{LINE}"/>'
        s += f'<rect x="404" y="{y + 16}" width="200" height="9" rx="3" fill="{TEXT_DIM}"/>'

    # Save button
    s += f'<rect x="824" y="820" width="172" height="44" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="868" y="838" width="84" height="9" rx="3" fill="{SURFACE}"/>'

    # Preview card
    s += f'<rect x="1060" y="232" width="400" height="660" rx="10" fill="{SURFACE}" stroke="{LINE}"/>'
    s += f'<rect x="1084" y="260" width="160" height="12" rx="3" fill="{TEXT}"/>'
    s += f'<circle cx="1260" cy="370" r="60" fill="{SOFT}" stroke="{LINE}"/>'
    s += f'<rect x="1140" y="450" width="240" height="11" rx="3" fill="{TEXT}"/>'
    s += f'<rect x="1170" y="470" width="180" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    for i in range(4):
        y = 520 + i * 60
        s += f'<rect x="1084" y="{y}" width="352" height="40" rx="6" fill="{BG}" stroke="{LINE}"/>'
        s += f'<rect x="1104" y="{y + 16}" width="120" height="9" rx="3" fill="{TEXT_DIM}"/>'
        s += f'<rect x="1380" y="{y + 16}" width="40" height="9" rx="3" fill="{MUTED}"/>'
    return wrap(s, "Project One — Settings panel")


# ----- Project Two: a marketing landing / app -----------------------------------

def p2_slide1() -> str:
    # Hero landing page
    s = chrome("project-two.example.com")
    # Top nav
    s += f'<rect x="80" y="108" width="1440" height="80" fill="{SURFACE}"/>'
    s += f'<line x1="80" y1="188" x2="1520" y2="188" stroke="{LINE}" stroke-width="1"/>'
    s += f'<rect x="120" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="162" y="148" width="90" height="14" rx="3" fill="{TEXT}"/>'
    for i, w in enumerate([60, 70, 50, 80]):
        x = 700 + i * 100
        s += f'<rect x="{x}" y="148" width="{w}" height="10" rx="3" fill="{TEXT_DIM}"/>'
    s += f'<rect x="1380" y="138" width="100" height="34" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="1402" y="151" width="56" height="8" rx="3" fill="{SURFACE}"/>'

    # Hero
    s += f'<text x="160" y="370" font-size="84" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui" letter-spacing="-3">Build the</text>'
    s += f'<text x="160" y="470" font-size="84" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui" letter-spacing="-3">thing you want.</text>'
    s += f'<rect x="160" y="510" width="640" height="11" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="160" y="532" width="540" height="11" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="160" y="554" width="480" height="11" rx="3" fill="{TEXT_MUTED}"/>'
    # CTA buttons
    s += f'<rect x="160" y="608" width="180" height="56" rx="8" fill="{TEXT}"/>'
    s += f'<rect x="200" y="630" width="100" height="11" rx="3" fill="{SURFACE}"/>'
    s += f'<rect x="356" y="608" width="180" height="56" rx="8" fill="{SURFACE}" stroke="{TEXT}" stroke-width="2"/>'
    s += f'<rect x="396" y="630" width="100" height="11" rx="3" fill="{TEXT}"/>'

    # Visual block on the right
    s += f'<rect x="900" y="240" width="540" height="480" rx="14" fill="{SOFT}" stroke="{LINE}"/>'
    s += f'<rect x="930" y="276" width="200" height="14" rx="3" fill="{TEXT}"/>'
    s += f'<rect x="930" y="304" width="320" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    for i in range(4):
        y = 350 + i * 64
        s += f'<rect x="930" y="{y}" width="480" height="48" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<circle cx="960" cy="{y + 24}" r="10" fill="{TEXT}"/>'
        s += f'<rect x="980" y="{y + 18}" width="180" height="9" rx="3" fill="{TEXT}"/>'
        s += f'<rect x="980" y="{y + 32}" width="120" height="7" rx="3" fill="{TEXT_MUTED}"/>'

    # Stats strip
    s += f'<line x1="160" y1="780" x2="1440" y2="780" stroke="{LINE}"/>'
    for i, (n, lbl) in enumerate([("12k", "users"), ("99.9%", "uptime"), ("4.9", "rating"), ("∞", "ideas")]):
        x = 160 + i * 320
        s += f'<text x="{x}" y="850" font-size="40" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui">{n}</text>'
        s += f'<rect x="{x}" y="870" width="80" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    return wrap(s, "Project Two — Landing page")


def p2_slide2() -> str:
    # Features grid
    s = chrome("project-two.example.com / features")
    # Top nav
    s += f'<rect x="80" y="108" width="1440" height="80" fill="{SURFACE}"/>'
    s += f'<line x1="80" y1="188" x2="1520" y2="188" stroke="{LINE}" stroke-width="1"/>'
    s += f'<rect x="120" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="162" y="148" width="90" height="14" rx="3" fill="{TEXT}"/>'
    for i, w in enumerate([60, 70, 50, 80]):
        x = 700 + i * 100
        s += f'<rect x="{x}" y="148" width="{w}" height="10" rx="3" fill="{TEXT_DIM if i else TEXT}"/>'
    s += f'<rect x="1380" y="138" width="100" height="34" rx="6" fill="{TEXT}"/>'

    # Section title
    s += f'<text x="800" y="280" text-anchor="middle" font-size="14" fill="{TEXT_MUTED}" font-family="ui-sans-serif, system-ui" letter-spacing="3">EVERYTHING YOU NEED</text>'
    s += f'<text x="800" y="356" text-anchor="middle" font-size="56" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui" letter-spacing="-2">A small set of sharp tools.</text>'

    # 3x2 feature grid
    titles = ["Fast by default", "Work offline", "Keyboard-first", "Open source", "Self-hostable", "API-friendly"]
    for i, t in enumerate(titles):
        col, row = i % 3, i // 3
        x = 160 + col * 440
        y = 440 + row * 220
        s += f'<rect x="{x}" y="{y}" width="400" height="200" rx="12" fill="{SURFACE}" stroke="{LINE}"/>'
        # icon
        s += f'<rect x="{x + 28}" y="{y + 28}" width="44" height="44" rx="10" fill="{TEXT}"/>'
        s += f'<rect x="{x + 40}" y="{y + 40}" width="20" height="20" rx="4" fill="{SURFACE}"/>'
        s += f'<text x="{x + 28}" y="{y + 110}" font-size="22" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui">{t}</text>'
        s += f'<rect x="{x + 28}" y="{y + 134}" width="280" height="9" rx="3" fill="{TEXT_MUTED}"/>'
        s += f'<rect x="{x + 28}" y="{y + 152}" width="240" height="9" rx="3" fill="{TEXT_MUTED}"/>'
        s += f'<rect x="{x + 28}" y="{y + 170}" width="180" height="9" rx="3" fill="{TEXT_MUTED}"/>'
    return wrap(s, "Project Two — Features grid")


def p2_slide3() -> str:
    # Code/usage view
    s = chrome("project-two.example.com / docs")
    s += f'<rect x="80" y="108" width="1440" height="80" fill="{SURFACE}"/>'
    s += f'<line x1="80" y1="188" x2="1520" y2="188" stroke="{LINE}" stroke-width="1"/>'
    s += f'<rect x="120" y="140" width="32" height="32" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="162" y="148" width="90" height="14" rx="3" fill="{TEXT}"/>'

    # Side TOC
    s += f'<rect x="80" y="188" width="280" height="752" fill="{SOFT}"/>'
    s += f'<line x1="360" y1="188" x2="360" y2="940" stroke="{LINE}"/>'
    for i, w in enumerate([90, 70, 110, 80, 100, 60, 90]):
        y = 240 + i * 44
        if i == 2:
            s += f'<rect x="100" y="{y - 12}" width="240" height="32" rx="6" fill="{SURFACE}" stroke="{LINE}"/>'
        s += f'<rect x="120" y="{y}" width="{w}" height="9" rx="3" fill="{TEXT if i == 2 else TEXT_DIM}"/>'

    # Article
    s += f'<rect x="400" y="232" width="120" height="10" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<text x="400" y="306" font-size="44" font-weight="600" fill="{TEXT}" font-family="ui-sans-serif, system-ui" letter-spacing="-1.5">Quickstart</text>'
    s += f'<rect x="400" y="346" width="640" height="10" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="400" y="368" width="540" height="10" rx="3" fill="{TEXT_MUTED}"/>'

    # Code block
    s += f'<rect x="400" y="412" width="1060" height="240" rx="10" fill="#0a0a0a"/>'
    s += f'<rect x="424" y="436" width="60" height="8" rx="2" fill="#525252"/>'
    code_lines = [
        ("npm install ", "{name}", " --save", 60),
        ("import ", "{ Project }", " from \"{name}\"", 100),
        ("", "", "", 140),
        ("const app = ", "new Project", "({ ... })", 180),
        ("await app.", "start", "()", 210),
    ]
    for a, b, c, y in code_lines:
        s += f'<text x="424" y="{460 + (y - 60)}" font-size="16" font-family="ui-monospace, SFMono-Regular, Menlo, monospace">'
        s += f'<tspan fill="#a3a3a3">{a}</tspan>'
        s += f'<tspan fill="#fafafa">{b}</tspan>'
        s += f'<tspan fill="#a3a3a3">{c}</tspan>'
        s += '</text>'

    # Body text below
    s += f'<rect x="400" y="700" width="1000" height="10" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="400" y="722" width="900" height="10" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="400" y="744" width="780" height="10" rx="3" fill="{TEXT_MUTED}"/>'
    s += f'<rect x="400" y="784" width="160" height="40" rx="6" fill="{TEXT}"/>'
    s += f'<rect x="424" y="800" width="100" height="9" rx="3" fill="{SURFACE}"/>'
    return wrap(s, "Project Two — Documentation")


slides = {
    "project-one-1.svg": p1_slide1(),
    "project-one-2.svg": p1_slide2(),
    "project-one-3.svg": p1_slide3(),
    "project-two-1.svg": p2_slide1(),
    "project-two-2.svg": p2_slide2(),
    "project-two-3.svg": p2_slide3(),
}

for name, content in slides.items():
    (OUT / name).write_text(content, encoding="utf-8")
    print("wrote", OUT / name)
