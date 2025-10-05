import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import { useState } from "react";
import React from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[#0a0e17] text-white shadow-md px-4 py-3">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Left: Name */}
        <div className="text-lg font-semibold text-primary">
          Designed by Eldrin Johnson
        </div>

        {/* Right: Desktop social icons */}
        <div className="hidden md:flex gap-4">
          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github />
          </a>
          <a
            href="https://www.linkedin.com/in/eldrin-johnson"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin />
          </a>
          <a
            href="https://www.instagram.com/_e_ldrin/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram />
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            <Menu />
          </button>
        </div>
      </div>

      {/* Mobile social menu */}
      {open && (
        <div className="flex flex-col gap-2 mt-2 md:hidden px-4">
          <a
            href="https://github.com/ELDRIN23"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github /> GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin /> LinkedIn
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram /> Instagram
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
