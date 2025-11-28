import React from "react";
import { NavLink } from "react-router-dom";

// --- MOCK DATA ---
const MOCK_DATA = {
  movies: [
    { id: 1, title: "Inception", rating: 8.8, color: "#ff2a6d" },
    { id: 2, title: "The Matrix", rating: 8.7, color: "#00ffd5" },
    { id: 3, title: "Interstellar", rating: 8.6, color: "#7928ca" },
  ],
  concerts: [
    { id: 1, title: "Coldplay Live", date: "Nov 12, 2025", color: "#f5d90a" },
    { id: 2, title: "Billie Eilish", date: "Dec 5, 2025", color: "#0070f3" },
  ],
  theaterShows: [
    { id: 1, title: "Hamilton", date: "Oct 20, 2025", color: "#ff0080" },
    { id: 2, title: "Phantom", date: "Nov 30, 2025", color: "#e00" },
  ],
  sportsEvents: [
    { id: 1, title: "Football Finals", date: "Dec 1, 2025", color: "#10b981" },
    { id: 2, title: "NBA Playoffs", date: "Jan 15, 2026", color: "#f97316" },
  ],
};

// THEME COLORS
const colors = {
  bgDark: "#050b14",
  bgLight: "#0a1225",
  textPrimary: "#e2e8f0",
  textDim: "#94a3b8",
  accentCyan: "#00ffd5",
  accentPink: "#ff2a6d",
  borderLight: "rgba(0, 255, 213, 0.1)",
};

// Main styling
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    background: `linear-gradient(135deg, ${colors.bgLight} 0%, ${colors.bgDark} 100%)`,
    color: colors.textPrimary,
    fontFamily: "'Inter', 'Segoe UI', Roboto, Helvetica, sans-serif",
  },
  main: {
    marginLeft: "260px", // Sidebar width
    marginTop: "70px", // Header height
    flexGrow: 1,
    padding: "40px",
    overflowX: "hidden",
  },
  glassPanel: {
    backgroundColor: "rgba(10, 18, 37, 0.6)",
    backdropFilter: "blur(16px)",
    border: `1px solid ${colors.borderLight}`,
    borderRadius: 24,
    boxShadow: `0 4px 24px -1px rgba(0,0,0,0.3)`,
  },
  sectionTitle: {
    fontSize: "24px",
    fontWeight: "700",
    color: colors.accentCyan,
    marginBottom: "20px",
    marginTop: "40px",
    textShadow: `0 0 10px ${colors.accentCyan}40`,
  },
};

//
// 1️⃣ SIDEBAR (fixed position, adjusted for header)
//
const Sidebar = () => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/profile", label: "Profile" },
    { to: "/favorites", label: "Favorites" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  const newsItems = [
    { id: 1, title: "Film Festival Coming Soon" },
    { id: 2, title: "Top 10 Movie Picks for 2025" },
    { id: 3, title: "Concert Tickets Sale" },
    { id: 4, title: "New Streaming Service" },
    { id: 5, title: "Exclusive Director Interview" },
    { id: 6, title: "VR Cinema Experience Opens" },
  ];

  return (
    <aside
      style={{
        width: 260,
        height: "calc(100vh - 70px)",
        backgroundColor: "rgba(5, 11, 20, 0.85)",
        backdropFilter: "blur(12px)",
        borderRight: `1px solid ${colors.borderLight}`,
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        position: "fixed",
        top: 70, // FIXED FOR HEADER
        left: 0,
        zIndex: 10,
      }}
    >
      {/* Navigation */}
      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 15,
          marginBottom: 30,
        }}
      >
        {navItems.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end
            style={({ isActive }) => ({
              color: isActive ? colors.accentCyan : colors.textDim,
              fontSize: 16,
              fontWeight: isActive ? "600" : "500",
              textDecoration: "none",
              padding: "12px 20px",
              borderRadius: "8px",
              backgroundColor: isActive
                ? "rgba(0,255,213,0.08)"
                : "transparent",
              borderLeft: isActive
                ? `3px solid ${colors.accentCyan}`
                : "3px solid transparent",
              transition: "all 0.25s ease",
            })}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Latest News */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          borderRadius: 16,
          padding: "20px 15px",
          border: "1px solid rgba(255,255,255,0.04)",
          overflow: "hidden",
        }}
      >
        <h3
          style={{
            color: colors.accentPink,
            fontSize: 12,
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: 15,
            letterSpacing: "1px",
          }}
        >
          Latest News
        </h3>

        <div style={{ overflowY: "auto", flexGrow: 1, paddingRight: 5 }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {newsItems.map(({ id, title }) => (
              <li
                key={id}
                style={{
                  display: "flex",
                  marginBottom: 15,
                  color: colors.textPrimary,
                }}
              >
                <span style={{ color: colors.accentCyan, marginRight: 6 }}>
                  •
                </span>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </aside>
  );
};

//
// 2️⃣ SECTION COMPONENT
//
const Section = ({ title, items, type }) => (
  <div>
    <h2 style={styles.sectionTitle}>{title}</h2>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "24px",
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            ...styles.glassPanel,
            padding: "16px",
            borderRadius: "18px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        >
          {/* Thumbnail */}
          <div
            style={{
              height: "140px",
              borderRadius: "12px",
              background: `linear-gradient(45deg, #1a2c42, ${item.color})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "30px",
            }}
          >
            {type === "movie"
              ? "🎬"
              : type === "concert"
              ? "🎵"
              : type === "theater"
              ? "🎭"
              : "🏆"}
          </div>

          <h3 style={{ margin: "0 0 5px", fontSize: "16px" }}>{item.title}</h3>

          <div style={{ color: colors.textDim, fontSize: "14px" }}>
            {item.rating && <span>★ {item.rating}</span>}
            {item.date && <span>{item.date}</span>}
          </div>

          <button
            style={{
              marginTop: "auto",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              background: "rgba(255,42,109,0.15)",
              color: colors.accentPink,
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Book Ticket
          </button>
        </div>
      ))}
    </div>
  </div>
);

//
// 3️⃣ RECOMMENDATIONS
//
const Recommendations = () => (
  <div
    style={{
      ...styles.glassPanel,
      padding: "30px",
      marginBottom: "40px",
      background:
        "linear-gradient(90deg, rgba(0,255,213,0.06), rgba(10,18,37,0.6))",
    }}
  >
    <h2 style={{ margin: 0 }}>Recommended For You</h2>
    <p style={{ color: colors.textDim }}>
      Based on your recent sci-fi marathon
    </p>
  </div>
);

//
// 4️⃣ ADS BANNER
//
const AdsBanner = () => (
  <div
    style={{
      margin: "40px 0",
      height: "110px",
      borderRadius: "16px",
      background: "#111",
      border: `1px dashed ${colors.textDim}`,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: colors.textDim,
      letterSpacing: "2px",
    }}
  >
    ADVERTISEMENT SPACE
  </div>
);

//
// 5️⃣ HOMEPAGE
//
export default function HomePage() {
  const currentDate = new Date();

  return (
    <div style={styles.container}>
      {/* Scrollbar */}
      <style>{`
        ::-webkit-scrollbar{width:8px;}
        ::-webkit-scrollbar-thumb{background:#1a2c42;border-radius:4px;}
        ::-webkit-scrollbar-thumb:hover{background:${colors.accentCyan}}
      `}</style>

      <Sidebar />

      <main style={styles.main}>
        {/* Info Bar */}
        <section
          style={{
            ...styles.glassPanel,
            padding: "20px",
            marginBottom: "50px",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          {[
            { label: "Location", val: "New York City" },
            {
              label: "Date",
              val: currentDate.toLocaleDateString(undefined, {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              }),
            },
            {
              label: "Time",
              val: currentDate.toLocaleTimeString(undefined, {
                hour: "2-digit",
                minute: "2-digit",
              }),
            },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <strong
                style={{ color: colors.accentCyan, letterSpacing: "2px" }}
              >
                {item.label}
              </strong>
              <div>{item.val}</div>
            </div>
          ))}
        </section>

        <Recommendations />

        <Section
          title="Now Showing - Movies"
          items={MOCK_DATA.movies}
          type="movie"
        />
        <AdsBanner />
        <Section
          title="Upcoming Concerts"
          items={MOCK_DATA.concerts}
          type="concert"
        />
        <Section
          title="Theater Shows"
          items={MOCK_DATA.theaterShows}
          type="theater"
        />
        <Section
          title="Sports Events"
          items={MOCK_DATA.sportsEvents}
          type="sports"
        />
      </main>
    </div>
  );
}
