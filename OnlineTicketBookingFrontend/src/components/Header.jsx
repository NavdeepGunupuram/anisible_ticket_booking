import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const colors = {
  bgGlass: "rgba(10, 18, 37, 0.55)",
  border: "rgba(0, 255, 213, 0.15)",
  cyan: "#00ffd5",
  pink: "#ff2a6d",
  text: "#e2e8f0",
};

export default function Header() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const avatarRef = useRef(null);

  const rawUsername = localStorage.getItem("username") || "";
  const token = localStorage.getItem("token");

  const username =
    rawUsername.length > 0
      ? rawUsername.charAt(0).toUpperCase() + rawUsername.slice(1)
      : "User";

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  useEffect(() => {
    const handler = (e) => {
      if (
        menuOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        avatarRef.current &&
        !avatarRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  return (
    <>
      <style>{`
        .avatar:hover {
          box-shadow: 0 0 15px ${colors.cyan};
          transform: scale(1.06);
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <header
        style={{
          height: "70px",
          width: "100%",
          backdropFilter: "blur(16px)",
          background: colors.bgGlass,
          borderBottom: `1px solid ${colors.border}`,
          display: "flex",
          alignItems: "center", // ✔ PERFECT CENTERING
          justifyContent: "space-between",
          padding: "0 25px",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1000,
          boxShadow:
            "0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(0,255,213,0.15)",
        }}
      >
        {/* BRAND */}
        <div
          style={{
            display: "flex",
            alignItems: "center", // ✔ Keep brand centered
            gap: "12px",
          }}
        >
          <span
            style={{
              color: colors.cyan,
              fontSize: "26px",
              fontWeight: "900",
              letterSpacing: "1px",
              textShadow: `0 0 12px ${colors.cyan}80`,
              lineHeight: "normal",
            }}
          >
            MOVIETICKETS
          </span>
        </div>

        {/* RIGHT SIDE */}
        {!token ? (
          <div style={{ display: "flex", gap: "12px" }}>
            <button style={btnStyle} onClick={() => navigate("/login")}>
              Login
            </button>
            <button
              style={{
                ...btnStyle,
                background: "rgba(0,255,213,0.12)",
              }}
              onClick={() => navigate("/signup")}
            >
              Sign Up
            </button>
          </div>
        ) : (
          <div style={{ position: "relative", marginRight: "35px" }}>
            {/* AVATAR */}
            <div
              ref={avatarRef}
              onClick={toggleMenu}
              className="avatar"
              style={{
                background: `linear-gradient(135deg, ${colors.cyan}, #009f91)`,
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "20px",
                fontWeight: "700",
                color: "#000",
                border: "2px solid #fff",
                transition: "0.2s",

                // ⭐ FINAL FIX (exact pixel alignment)
                position: "relative",
                top: "2px",
              }}
            >
              {username.charAt(0)}
            </div>

            {menuOpen && (
              <div
                ref={menuRef}
                style={{
                  position: "absolute",
                  right: 0,
                  top: "55px",
                  width: "200px",
                  background: "rgba(10,15,25,0.9)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "14px",
                  border: `1px solid ${colors.border}`,
                  animation: "fadeIn 0.2s ease",
                  overflow: "hidden",
                  boxShadow: "0 8px 25px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  style={{
                    padding: "16px",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    fontWeight: 600,
                    background:
                      "linear-gradient(to right, rgba(0,255,213,0.08), transparent)",
                  }}
                >
                  USER: <br /> {username}
                </div>

                <button style={itemStyle} onClick={() => navigate("/profile")}>
                  Profile Configuration
                </button>

                <button style={itemStyle} onClick={logout}>
                  System Logout
                </button>
              </div>
            )}
          </div>
        )}
      </header>
    </>
  );
}

const btnStyle = {
  padding: "8px 20px",
  borderRadius: "6px",
  border: `1px solid ${colors.cyan}`,
  background: "transparent",
  fontWeight: "600",
  color: colors.cyan,
  letterSpacing: "1px",
  cursor: "pointer",
};

const itemStyle = {
  background: "transparent",
  border: "none",
  padding: "14px 20px",
  textAlign: "left",
  width: "100%",
  fontSize: "14px",
  color: "#a0aec0",
  cursor: "pointer",
};
