import React from "react";
import { NavLink } from "react-router-dom";

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
    { id: 4, title: "New Streaming Service Launched" },
    { id: 5, title: "Exclusive: Interview with Director" },
    { id: 6, title: "Award Ceremony Highlights" },
    { id: 7, title: "VR Cinema Experience Opens" },
  ];

  return (
    <>
      {/* Extra CSS for hover, glow, scrollbar & animations */}
      <style>{sidebarCSS}</style>

      <aside style={styles.sidebar}>
        {/* Navigation Links */}
        <nav style={styles.nav}>
          {navItems.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end
              style={({ isActive }) =>
                isActive
                  ? { ...styles.link, ...styles.activeLink }
                  : styles.link
              }
              className="sidebar-link"
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Scrollable News Section */}
        <section style={styles.newsSection}>
          <h3 style={styles.newsTitle}>Latest News</h3>

          <div className="custom-scroll" style={styles.scrollContainer}>
            <ul style={styles.newsList}>
              {newsItems.map(({ id, title }) => (
                <li key={id} style={styles.newsItem} className="news-item">
                  <span style={styles.bulletPoint}>•</span> {title}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </aside>
    </>
  );
};

/* =====================================
   Extra Neon UI CSS (Hover + Scrollbar)
===================================== */
const sidebarCSS = `
  .sidebar-link:hover {
    padding-left: 28px !important;
    color: #00ffd5 !important;
    background-color: rgba(0,255,213,0.08) !important;
    border-left-color: #00ffd5 !important;
    box-shadow: 0 0 10px #00ffd540;
  }

  .news-item:hover {
    opacity: 1 !important;
    transform: translateX(4px);
    color: #00ffd5 !important;
  }

  /* Smooth transitions */
  .sidebar-link,
  .news-item {
    transition: all 0.25s ease;
  }

  /* Custom Neon Scrollbar */
  .custom-scroll::-webkit-scrollbar {
    width: 6px;
  }
  .custom-scroll::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.2);
    border-radius: 10px;
  }
  .custom-scroll::-webkit-scrollbar-thumb {
    background: #00ffd580;
    border-radius: 10px;
  }
  .custom-scroll::-webkit-scrollbar-thumb:hover {
    background: #00ffd5;
  }
`;

const colors = {
  bgGlass: "rgba(5, 11, 20, 0.85)",
  textDim: "#94a3b8",
  accentCyan: "#00ffd5",
  accentPink: "#ff2a6d",
  borderLight: "rgba(0, 255, 213, 0.1)",
  textPrimary: "#e2e8f0",
};

const styles = {
  sidebar: {
    width: 260,
    height: "calc(100vh - 70px)",
    backgroundColor: colors.bgGlass,
    backdropFilter: "blur(12px)",
    borderRight: `1px solid ${colors.borderLight}`,
    padding: "30px 20px",
    display: "flex",
    flexDirection: "column",
    position: "fixed",
    top: 70,
    left: 0,
    zIndex: 10,
    boxSizing: "border-box",
  },

  nav: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    marginBottom: 30,
  },

  link: {
    color: colors.textDim,
    fontSize: 16,
    fontWeight: "500",
    textDecoration: "none",
    padding: "12px 20px",
    borderRadius: "8px",
    transition: "all 0.3s ease",
    display: "block",
    borderLeft: "3px solid transparent",
  },

  activeLink: {
    backgroundColor: "rgba(0,255,213,0.09)",
    color: colors.accentCyan,
    fontWeight: "600",
    borderLeft: `3px solid ${colors.accentCyan}`,
    boxShadow: `0 0 12px -4px ${colors.accentCyan}80`,
  },

  newsSection: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "rgba(0,0,0,0.25)",
    borderRadius: 16,
    padding: "20px 15px",
    border: "1px solid rgba(255,255,255,0.04)",
    overflow: "hidden",
  },

  newsTitle: {
    color: colors.accentPink,
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: 12,
    fontWeight: "bold",
    marginBottom: 15,
    paddingLeft: 5,
  },

  scrollContainer: {
    overflowY: "auto",
    flexGrow: 1,
    paddingRight: 5,
  },

  newsList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
  },

  newsItem: {
    marginBottom: 15,
    color: colors.textPrimary,
    fontSize: 13,
    lineHeight: "1.4",
    cursor: "pointer",
    opacity: 0.75,
  },

  bulletPoint: {
    color: colors.accentCyan,
    marginRight: 6,
  },
};

export default Sidebar;
