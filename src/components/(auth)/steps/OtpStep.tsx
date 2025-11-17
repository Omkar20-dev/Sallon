import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2, RefreshCcw } from "lucide-react";

interface OtpStepProps {
  handleClose: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: any;
  errors: any;
  isValid: boolean;
  isLoading: boolean;
  email: string;
  resendOtp: () => void;
  isResending: boolean;
}

export const OtpStep: React.FC<OtpStepProps> = ({
  handleClose,
  onSubmit,
  register,
  errors,
  isValid,
  isLoading,
  email,
  resendOtp,
  isResending,
}) => (
  <div className="p-8 relative">
    <button onClick={handleClose} className="absolute top-4 right-4">
      <X className="w-5 h-5 text-gray-500" />
    </button>

    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Verify OTP</h2>
    <p className="text-gray-600 mb-4 text-sm">
      Enter the 6-digit OTP sent to <span className="font-semibold">{email}</span>
    </p>

    <form onSubmit={onSubmit} className="space-y-4">
      <Input type="text" placeholder="Enter OTP" maxLength={6} {...register("otp")} />
      {errors.otp && <p className="text-red-500 text-sm">{errors.otp.message}</p>}

      <Button
        type="submit"
        disabled={!isValid || isLoading}
        className="w-full bg-black text-white"
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Verify OTP"}
      </Button>

      <Button
        type="button"
        onClick={resendOtp}
        disabled={isResending}
        variant="outline"
        className="w-full border-gray-300 mt-2"
      >
        {isResending ? (
          <Loader2 className="w-4 h-4 animate-spin mx-auto" />
        ) : (
          <>
            <RefreshCcw className="w-4 h-4 mr-2" /> Resend OTP
          </>
        )}
      </Button>
    </form>
  </div>
);
