"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, Suspense } from "react"; // Added Suspense
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

// Separate component to handle useSearchParams
const VerifyEmailContent = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false); // Added loading state
  const router = useRouter();
  const email = useSearchParams().get("email");

  const handleNavigation = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Email Missing 🕵️", {
        description: "Verification link mein email param nahi mila!",
      });
      return;
    }

    setLoading(true); // Start spinner
    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "email",
      });

      if (error) {
        toast.error("OTP Invalid 😬", {
          description: error.message || "Galat OTP ya expire ho gaya!",
        });
        return;
      }

      toast.success("Verified 🎉", {
        description: "Your email has been successfully verified!",
      });

      router.push("/");
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "OTP verification fail ho gaya.";
      toast.error("Something went wrong 😓", {
        description: errorMessage,
      });
    } finally {
      setLoading(false); // Stop spinner
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
            <h1 className="text-white text-4xl font-bold">
              Email Verification
            </h1>
            <p className="text-slate-300 text-base pt-2">
              Enter the code sent to your email.
            </p>
          </header>

          <form
            onSubmit={handleNavigation}
            className="flex flex-col gap-4 w-full max-w-[400px]"
          >
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="otp"
                sx={{
                  color: "white",
                  "&.Mui-focused": {
                    color: "#01e37f",
                  },
                }}
              >
                OTP
              </InputLabel>
              <OutlinedInput
                id="otp"
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                label="OTP"
                sx={{
                  color: "white",
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

            <Button
              className="w-full bg-[#01e37f] text-black py-3 rounded-md hover:bg-[#01e37f]/90 text-base"
              type="submit"
              disabled={loading}
            >
              {loading ? <ClipLoader size={20} color="#000" /> : "Verify OTP"}
            </Button>

            <div className="text-sm text-white text-center mt-4">
              Didn’t receive OTP?{" "}
              <button className="text-[#01e37f] hover:underline" type="button">
                Resend
              </button>
            </div>

            <div className="text-center w-full mt-6 text-sm">
              <Link
                href="/auth/signup"
                className="text-[#01e37f] hover:underline"
              >
                Back to Signup
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

// Main component with Suspense
const VerifyEmail = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#080a09] min-h-screen flex items-center justify-center w-full">
          <ClipLoader size={50} color="#01e37f" />
        </div>
      }
    >
      <VerifyEmailContent />
    </Suspense>
  );
};

export default VerifyEmail;
