"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState, Suspense } from "react"; // Added Suspense
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import { ClipLoader } from "react-spinners";

// Separate component to handle useSearchParams
const ChangePasswordContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const email = searchParams.get("email");

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Email not found");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast.error("Password change failed", {
          description: error.message,
        });
      } else {
        toast.success("Password changed successfully", {
          description: "You can now log in with your new password.",
        });
        router.push("/auth/login");
      }
    } catch (err: unknown) {
      const errorMessage =
        err instanceof Error ? err.message : "Password change failed";
      toast.error("Something went wrong", { description: errorMessage });
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
            <h1 className="text-white text-4xl font-bold">Change Password</h1>
            <p className="text-slate-300 text-base pt-2">
              Set a new password to continue.
            </p>
          </header>

          <form
            className="flex flex-col gap-4 w-full max-w-[400px]"
            onSubmit={handleChangePassword}
          >
            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="password"
                sx={{
                  color: "white",
                  "&.Mui-focused": { color: "#01e37f" },
                }}
              >
                New Password
              </InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="New Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword ? (
                        <EyeOff color="white" />
                      ) : (
                        <Eye color="white" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
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

            <FormControl variant="outlined" fullWidth>
              <InputLabel
                htmlFor="confirm-password"
                sx={{
                  color: "white",
                  "&.Mui-focused": { color: "#01e37f" },
                }}
              >
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirm-password"
                type={showConfirm ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                label="Confirm Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowConfirm((prev) => !prev)}
                      edge="end"
                    >
                      {showConfirm ? (
                        <EyeOff color="white" />
                      ) : (
                        <Eye color="white" />
                      )}
                    </IconButton>
                  </InputAdornment>
                }
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
              className="w-full bg-[#01e37f] text-black py-3 rounded-md hover:bg-[#01e37f]/90 text-base flex justify-center items-center"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <ClipLoader size={20} color="#000" />
              ) : (
                "Change Password"
              )}
            </Button>

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
const ChangePassword = () => {
  return (
    <Suspense
      fallback={
        <div className="bg-[#080a09] min-h-screen flex items-center justify-center w-full">
          <ClipLoader size={50} color="#01e37f" />
        </div>
      }
    >
      <ChangePasswordContent />
    </Suspense>
  );
};

export default ChangePassword;
