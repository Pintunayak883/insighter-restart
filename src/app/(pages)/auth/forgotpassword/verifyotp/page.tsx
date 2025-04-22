"use client";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabaseClient";
import { FormControl, InputLabel, OutlinedInput } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState, Suspense, useEffect } from "react";
import { toast } from "sonner";
import ClipLoader from "react-spinners/ClipLoader";

const VerifyOTPContent = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0); // Timer state
  const router = useRouter();
  const email = useSearchParams().get("email") as string;

  useEffect(() => {
    if (email) {
      setTimer(60);
    }
  }, [email]);

  const handleNavigation = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email not found");
      return;
    }

    setLoading(true); // Spinner start

    try {
      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: "recovery",
      });

      if (error) {
        toast.error("Invalid OTP", {
          description: error.message || "OTP is incorrect or expired",
        });
      } else {
        toast.success("Verified", {
          description: "Your OTP has been successfully verified!",
        });

        router.push(
          `/auth/forgotpassword/changepassword?email=${encodeURIComponent(
            email
          )}`
        );
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "OTP verification failed";
      toast.error("Something went wrong", {
        description: errorMessage,
      });
    }

    setLoading(false); // Spinner end
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    if (timer > 0) {
      toast.error(
        "Please wait for the timer to finish before requesting a new OTP"
      );
      return;
    }

    setLoading(true);
    setTimer(60); // Start the timer after sending OTP

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

  // Timer effect: Decrease every second and initialize when the page loads
  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev <= 1) {
            clearInterval(interval); // yahi par clean kar diya bhai
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval); // cleanup jab component unmount ho
  }, [timer]);

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
            <h1 className="text-white text-4xl font-bold">Verify OTP</h1>
            <p className="text-slate-300 text-base pt-2">
              Please enter the OTP sent to your email.
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
              <button
                className="text-[#01e37f] hover:underline"
                type="button"
                onClick={handleSendOTP}
                disabled={timer > 0} // Disable button if timer is active
              >
                {timer > 0 ? `Resend in ${timer}s` : "Resend"}
              </button>
            </div>

            <div className="text-center w-full mt-6 text-sm">
              <Link
                href="/auth/login"
                className="text-[#01e37f] hover:underline"
              >
                Back to login
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
const VerifyOTP = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#080a09] min-h-screen flex items-center justify-center w-full">
          <ClipLoader size={50} color="#01e37f" />
        </div>
      }
    >
      <VerifyOTPContent />
    </Suspense>
  );
};

export default VerifyOTP;
