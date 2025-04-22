"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";

const Signup = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const inputStyles = {
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
  };

  const labelStyles = {
    color: "white",
    "&.Mui-focused": {
      color: "#01e37f",
    },
  };

  const router = useRouter();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name },
        },
      });

      if (error) {
        toast.error("Signup Failed", { description: error.message });
      } else {
        toast.success("Signup Successful 🎉", {
          description: "Check your email to confirm your account.",
        });
        router.push(
          `/auth/signup/emailverify?email=${encodeURIComponent(email)}`
        );
      }
    } catch {
      toast.error("Unexpected Error", {
        description: "Kuch toh gadbad hai... try again later!",
      });
    } finally {
      setLoading(false);
    }
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
        toast.error("Signup Failed", { description: error.message });
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
    <div className="bg-[#080a09] min-h-screen overflow-hidden flex items-center justify-center w-full">
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
            <h1 className="text-white text-4xl font-bold">Sign up</h1>
            <p className="text-slate-300 text-base pt-2">
              Sign up to Insighter.
            </p>
          </header>

          <form
            onSubmit={handleSignup}
            className="flex flex-col gap-4 w-full max-w-[400px]"
          >
            {/* Name Field */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="name" sx={labelStyles}>
                Name
              </InputLabel>
              <OutlinedInput
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                label="Name"
                sx={inputStyles}
              />
            </FormControl>

            {/* Email Field */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="email" sx={labelStyles}>
                Email
              </InputLabel>
              <OutlinedInput
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label="Email"
                autoComplete="email"
                sx={inputStyles}
              />
            </FormControl>

            {/* Password Field */}
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="password" sx={labelStyles}>
                Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                autoComplete="new-password"
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
                sx={inputStyles}
              />
            </FormControl>

            {/* Terms Checkbox */}
            <label className="text-white text-sm flex gap-2 items-start">
              <input type="checkbox" className="accent-[#01e37f] mt-1" />I agree
              to the
              <span className="text-[#01e37f] hover:underline cursor-pointer">
                Terms & Conditions
              </span>
            </label>

            {/* Sign Up Button */}
            <Button
              className="w-full bg-[#01e37f] text-black py-3 rounded-md hover:bg-[#01e37f]/90 text-base"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={24} color="#ffffff" loading={loading} />
              ) : (
                "Create account"
              )}
            </Button>

            {/* OR Separator */}
            <div className="flex items-center gap-2.5">
              <Separator className="flex-1 bg-gray-600 h-[1px]" />
              <span className="text-white text-sm">or</span>
              <Separator className="flex-1 bg-gray-600 h-[1px]" />
            </div>

            {/* Google Sign Up */}
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
              <span>Sign up with Google</span>
            </Button>
          </form>

          {/* Already have account */}
          <div className="text-center w-full mt-6 text-sm">
            <span className="text-white">Already have an account? </span>
            <Link href="/auth/login" className="text-[#01e37f] hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        {/* Right side image */}
        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <Image
            src="/images/auth/Frame4.png"
            alt="Auth background"
            className="h-[90%] w-full object-contain mx-auto my-auto"
            width={720}
            height={648}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
