"use client";

import { Button } from "@/components/ui/button";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { toast } from "sonner";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // Added Next.js Image import
import { ClipLoader } from "react-spinners";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [keepMeLoggedIn, setKeepMeLoggedIn] = useState<boolean>(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Supabase Login Request
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setLoading(false);
      toast.error("Login Failed: " + error.message);
      return;
    }
    const user = data?.user as { email: string }; // Type Assertion

    // If Login Successful
    if (user) {
      if (keepMeLoggedIn) {
        // Store user session data in localStorage if "Keep me logged in" is checked
        localStorage.setItem("user", JSON.stringify(user));
        toast.success("Login Successful 🎉", {
          description: "Welcome back, " + user.email,
        });
        router.push("/"); // Redirect to home page
      } else {
        // No storage if user wants to logout after session ends
        sessionStorage.setItem("user", JSON.stringify(user));
      }
    }

    setLoading(false);
  };

  const handleGoogleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) {
        toast.error("Login Failed", { description: error.message });
        return;
      }

      toast.success("Redirecting...", {
        description: "Logging in with Google",
      });
    } catch (error: unknown) {
      toast.error("Unexpected Error", {
        description: (error as Error).message,
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#080a09] min-h-screen flex items-center justify-center w-full">
      <div className="flex w-full max-w-[1440px]">
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-8 lg:p-12">
          <Image
            className="w-[72px] h-[72px] mb-6 object-contain"
            alt="Logo"
            src="/images/landing/image1.png"
            width={72}
            height={72}
          />

          <header className="mb-6">
            <h1 className="text-white text-4xl font-bold">Sign in</h1>
            <p className="text-slate-300 text-base pt-2">
              Please login to continue to your account.
            </p>
          </header>

          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-4 w-full max-w-[400px]"
          >
            {/* Email Input */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="email"
                sx={{
                  color: "white",
                  "&.Mui-focused": {
                    color: "#01e37f",
                  },
                }}
              >
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                autoComplete="email"
                sx={{
                  color: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderRadius: "8px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#01e37f",
                  },
                }}
              />
            </FormControl>

            {/* Password Input */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="password"
                sx={{
                  color: "white",
                  "&.Mui-focused": {
                    color: "#01e37f",
                  },
                }}
              >
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                autoComplete="current-password"
                endAdornment={
                  <InputAdornment position="end">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-white h-6 w-6"
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeIcon className="h-5 w-5" />
                      ) : (
                        <EyeOffIcon className="h-5 w-5" />
                      )}
                    </Button>
                  </InputAdornment>
                }
                sx={{
                  color: "white",
                  borderRadius: "8px",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "white",
                    borderRadius: "8px",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#ffffff",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#01e37f",
                  },
                }}
              />
            </FormControl>

            {/* Keep me logged in & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="text-white flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={keepMeLoggedIn}
                  onChange={(e) => setKeepMeLoggedIn(e.target.checked)}
                  className="accent-[#01e37f]"
                />
                Keep me logged in
              </label>
              <Link
                href="/auth/forgotpassword"
                className="text-[#01e37f] hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button
              className="w-full bg-[#01e37f] text-black py-3 rounded-md hover:bg-[#01e37f]/90 text-base"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={20} color="#fff" loading={loading} />
              ) : (
                "Sign in"
              )}
            </Button>

            {/* OR Separator */}
            <div className="flex items-center gap-2.5">
              <div className="flex-1 bg-gray-600 h-[1px]" />
              <span className="text-white text-sm">or</span>
              <div className="flex-1 bg-gray-600 h-[1px]" />
            </div>

            {/* Google Login */}
            <Button
              className="w-full flex items-center justify-center gap-3 bg-transparent border border-gray-600 py-3 rounded-md hover:bg-gray-800 text-white text-base"
              type="button"
              onClick={handleGoogleLogin}
            >
              <Image
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
                width={20}
                height={20}
              />
              <span>Sign in with Google</span>
            </Button>
          </form>

          <div className="text-center w-full mt-6 text-sm">
            <span className="text-white">Need an account? </span>
            <Link
              href="/auth/signup"
              className="text-[#01e37f] hover:underline"
            >
              Create one
            </Link>
          </div>
        </div>

        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <Image
            src="/images/auth/Frame4.png"
            alt="Auth background"
            className="h-[95%] w-full object-contain mx-auto my-auto"
            width={720} // Assuming a reasonable width for the layout
            height={684} // 95% of assumed height for consistency
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
