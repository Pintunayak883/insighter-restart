"use client";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { User } from "@supabase/supabase-js"; // Import User type

const navItems = [
  { label: "About Us", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Documentation", href: "/documentation" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [user, setUser] = useState<User | null>(null); // Replaced any with User | null

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    fetchUser();

    // Auth state listener
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
      }
    );

    // Cleanup listener on unmount
    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []); // Empty dependency array

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
  };

  return (
    <nav className="my-10 text-white p-4 w-full z-10">
      <div className="flex items-center justify-between max-w-[1240px] mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/landing/image-1.png"
            alt="Insighter Logo"
            width={30}
            height={30}
            className="w-[30px] h-[30px]"
            priority
          />
          <span className="font-heading-4 font-[number:var(--heading-4-font-weight)] text-[length:var(--heading-4-font-size)] tracking-[var(--heading-4-letter-spacing)] leading-[var(--heading-4-line-height)]">
            Insighter
          </span>
        </Link>

        {/* Navigation Menu */}
        <div className="flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-white text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] hover:text-green-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Sign In / Logout Button */}
        {user ? (
          <Button
            variant="outline"
            onClick={handleLogout}
            className="rounded-[64px] border-2 border-[#01e37f] bg-transparent text-[#01e37f] px-6 py-2 hover:bg-[#01e37f] hover:text-white transition-colors font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] cursor-pointer"
          >
            Logout
          </Button>
        ) : (
          <Link href={"/auth/login"}>
            <Button
              variant="outline"
              className="rounded-[64px] border-2 border-[#01e37f] bg-transparent text-[#01e37f] px-6 py-2 hover:bg-[#01e37f] hover:text-white transition-colors font-lables-and-buttons font-[number:var(--lables-and-buttons-font-weight)] text-[length:var(--lables-and-buttons-font-size)] tracking-[var(--lables-and-buttons-letter-spacing)] leading-[var(--lables-and-buttons-line-height)] cursor-pointer"
            >
              Sign In
            </Button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
