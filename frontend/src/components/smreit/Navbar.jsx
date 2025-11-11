"use client";
import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Link } from "react-router-dom";

// Utility function for joining class names
const cn = (...classes) => classes.filter(Boolean).join(" ");

// 🌟 Main Navbar Container
const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  return (
    <motion.div
      ref={ref}
      className={cn("sticky inset-x-0 top-0 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

// 💻 Desktop Nav Body
const NavBody = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05)"
        : "0 1px 3px rgba(0, 0, 0, 0.1)",
      backgroundColor: visible
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(255, 255, 255, 1)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    className={cn(
      "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between px-8 py-4 lg:flex bg-white",
      className
    )}
  >
    {children}
  </motion.div>
);

// 🧭 Nav Items (Desktop)
const NavItems = ({ items, className }) => (
  <motion.div
    className={cn(
      "flex flex-1 flex-row items-center justify-center space-x-8 text-sm font-medium",
      className
    )}
  >
    {items.map((item, idx) => (
      <Link
        key={`link-${idx}`}
        to={item.link}
        className="relative px-3 py-2 text-gray-700 hover:text-blue-900 transition-colors"
      >
        {item.name}
      </Link>
    ))}
  </motion.div>
);

// 📱 Mobile Nav
const MobileNav = ({ children, className, visible }) => (
  <motion.div
    animate={{
      backdropFilter: visible ? "blur(10px)" : "none",
      boxShadow: visible
        ? "0 0 24px rgba(34, 42, 53, 0.06)"
        : "0 1px 3px rgba(0, 0, 0, 0.1)",
      backgroundColor: visible
        ? "rgba(255, 255, 255, 0.9)"
        : "rgba(255, 255, 255, 1)",
    }}
    transition={{ type: "spring", stiffness: 200, damping: 50 }}
    className={cn(
      "relative z-50 mx-auto flex w-full flex-col items-center justify-between bg-white px-4 py-4 lg:hidden",
      className
    )}
  >
    {children}
  </motion.div>
);

const MobileNavHeader = ({ children, className }) => (
  <div className={cn("flex w-full flex-row items-center justify-between", className)}>
    {children}
  </div>
);

const MobileNavMenu = ({ children, className, isOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0, height: 0 }}
        className={cn(
          "w-full flex flex-col items-start justify-start gap-4 pt-4",
          className
        )}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

const MobileNavToggle = ({ isOpen, onClick }) => (
  <button onClick={onClick} className="p-2">
    {isOpen ? (
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className="w-6 h-6 text-gray-700"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

// 🧱 Navbar Logo — BrickShare
const NavbarLogo = () => (
  <Link to="/reit" className="flex items-center space-x-2">
    <div className="w-7 h-7 bg-blue-900 rounded flex items-center justify-center">
      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 3h4v4H3V3zm6 0h4v4H9V3zm6 0h4v4h-4V3zM3 9h4v4H3V9zm6 0h4v4H9V9zm6 0h4v4h-4V9zM3 15h4v4H3v-4zm6 0h4v4H9v-4z" />
      </svg>
    </div>
    <span className="text-lg font-bold text-gray-900">BrickShare</span>
  </Link>
);

// 🔘 Button Component
const NavbarButton = ({ children, className, variant = "primary", ...props }) => {
  const baseStyles =
    "px-5 py-2 rounded text-sm font-semibold transition-all cursor-pointer";

  const variantStyles = {
    secondary: "text-gray-700 hover:text-blue-900",
    primary: "bg-blue-900 text-white hover:bg-blue-950 shadow-sm",
  };

  return (
    <button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
};

// 🚀 Main Navbar Component
export default function NavbarDemo() {
  const navItems = [
    { name: "Home", link: "/sm-reit#hero" },
    { name: "SM REIT Investments", link: "/sm-reit#properties" },
    { name: "How It Works", link: "/sm-reit#steps" },
    { name: "About Us", link: "/sm-reit#about" },
    { name: "Contact", link: "/sm-reit#footer" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Desktop Navbar */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <NavbarButton variant="secondary">Login</NavbarButton>
          <NavbarButton variant="primary">Get Started</NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navbar */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              to={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full text-gray-700 hover:text-blue-900 py-2 transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <div className="flex w-full flex-col gap-3 mt-4 border-t pt-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full"
            >
              Login
            </NavbarButton>
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="primary"
              className="w-full"
            >
              Get Started
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
