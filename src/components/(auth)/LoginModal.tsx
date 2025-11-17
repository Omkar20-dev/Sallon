// src/components/(auth)/LoginModal.tsx

"use client";

import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  loginApi,
  signupApi,
  verifyOtpApi,
  resendOtpApi,
  getProfileApi,
} from "@/lib/api/auth";

import { useAuth } from "@/context/AuthContext";

import { LoginStep } from "./steps/LoginStep";
import { SignupStep } from "./steps/SignupStep";
import { OtpStep } from "./steps/OtpStep";

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

const signupSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

const otpSchema = z.object({
  otp: z.string().length(6),
});

export const LoginModal = ({ isOpen, onClose }: any) => {
  const { login } = useAuth();

  const [step, setStep] = useState<"login" | "signup" | "otp">("login");
  const [emailForOtp, setEmailForOtp] = useState("");
  const [userIdForOtp, setUserIdForOtp] = useState("");

  const loginForm = useForm({ resolver: zodResolver(loginSchema), mode: "onChange" });
  const signupForm = useForm({ resolver: zodResolver(signupSchema), mode: "onChange" });
  const otpForm = useForm({ resolver: zodResolver(otpSchema), mode: "onChange" });

  const loginMutation = useMutation({
    mutationFn: loginApi,
    onSuccess: async (res: any) => {
      if (res.success) {
        localStorage.setItem("token", res.token);

        const profile = await getProfileApi();
        login(profile.user, res.token);

        toast.success("Login successful!");
        handleClose();
      }
    },
    onError: () => toast.error("Login failed"),
  });

  const signupMutation = useMutation({
    mutationFn: signupApi,
    onSuccess: (res: any) => {
      if (res.success) {
        setEmailForOtp(res.email);
        setUserIdForOtp(res.userId);
        setStep("otp");
        toast.success("OTP sent!");
      }
    },
  });

  const verifyOtpMutation = useMutation({
    mutationFn: verifyOtpApi,
    onSuccess: async (res: any) => {
      if (res.success) {
        const profile = await getProfileApi();
        login(profile.user, res.token);

        toast.success("OTP verified!");
        handleClose();
      }
    },
  });

  const handleClose = () => {
    onClose();
    setStep("login");
    loginForm.reset();
    signupForm.reset();
    otpForm.reset();
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" onClose={handleClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 flex justify-center items-center px-2">
          <Dialog.Panel className="bg-white rounded-xl shadow-xl w-full max-w-lg">
            {step === "login" && (
              <LoginStep
                handleClose={handleClose}
                register={loginForm.register}
                errors={loginForm.formState.errors}
                isValid={loginForm.formState.isValid}
                isLoading={loginMutation.isPending}
                onSubmit={loginForm.handleSubmit((data) => loginMutation.mutate(data))}
                switchToSignup={() => setStep("signup")}
              />
            )}

            {step === "signup" && (
              <SignupStep
                handleClose={handleClose}
                register={signupForm.register}
                errors={signupForm.formState.errors}
                isValid={signupForm.formState.isValid}
                isLoading={signupMutation.isPending}
                onSubmit={signupForm.handleSubmit((data) => signupMutation.mutate(data))}
                switchToLogin={() => setStep("login")}
              />
            )}

            {step === "otp" && (
              <OtpStep
                handleClose={handleClose}
                email={emailForOtp}
                register={otpForm.register}
                errors={otpForm.formState.errors}
                isValid={otpForm.formState.isValid}
                isLoading={verifyOtpMutation.isPending}
                onSubmit={otpForm.handleSubmit((d) =>
                  verifyOtpMutation.mutate({ userId: userIdForOtp, otp: d.otp })
                )}
                resendOtp={() => resendOtpMutation.mutate(emailForOtp)}
                isResending={false}
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
};
