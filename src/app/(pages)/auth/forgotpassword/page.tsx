"use client";

import { Button } from "@/components/ui/button";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "/auth/forgotpassword/verifyotp",
      });

      if (error) {
        toast.error("OTP not sent", { description: error.message });
      } else {
        toast.success("OTP Sent", {
          description: "Please check your email to reset your password.",
        });

        router.push(
          `/auth/forgotpassword/verifyotp?email=${encodeURIComponent(email)}`
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Something went wrong!";
      toast.error("Unexpected Error", {
        description: errorMessage,
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
            className="w-[60px] h-[60px] mb-6"
            alt="Logo"
            src="/images/landing/image1.png"
            width={60}
            height={60}
          />

          <header className="mb-6">
            <h1 className="text-white text-4xl font-bold">Forgot Password</h1>
            <p className="text-slate-300 text-base pt-2">
              Enter your email to receive a OTP for reset password.
            </p>
          </header>

          <form
            onSubmit={handleSendOTP}
            className="flex flex-col gap-4 w-full max-w-[400px]"
          >
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="email"
                sx={{
                  color: "white",
                  "&.Mui-focused": { color: "#01e37f" },
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

            <Button
              className="w-full bg-[#01e37f] text-black py-3 rounded-md hover:bg-[#01e37f]/90 text-base flex items-center justify-center gap-2"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <ClipLoader size={20} color="#000" />
                </>
              ) : (
                "Send OTP"
              )}
            </Button>

            <div className="text-center w-full mt-6 text-sm">
              <Link
                href="/auth/login"
                className="text-[#01e37f] hover:underline"
              >
                Back to Login
              </Link>
            </div>
          </form>
        </div>

        <div className="w-1/2 hidden lg:flex items-center justify-center">
          <Image
            src="/images/auth/Frame4.png"
            alt="Auth background"
            className="h-[95%] w-full object-contain mx-auto my-auto"
            width={720}
            height={684}
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
