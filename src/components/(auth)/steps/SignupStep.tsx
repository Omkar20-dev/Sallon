import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { X, Loader2 } from "lucide-react";

interface SignupStepProps {
  handleClose: () => void;
  onSubmit: (e?: React.BaseSyntheticEvent) => Promise<void>;
  register: any;
  errors: any;
  isValid: boolean;
  isLoading: boolean;
  switchToLogin: () => void;
}

export const SignupStep: React.FC<SignupStepProps> = ({
  handleClose,
  onSubmit,
  register,
  errors,
  isValid,
  isLoading,
  switchToLogin,
}) => (
  <div className="p-8 relative">
    <button onClick={handleClose} className="absolute top-4 right-4">
      <X className="w-5 h-5 text-gray-500" />
    </button>

    <h2 className="text-2xl font-semibold mb-6 text-gray-900">Sign Up</h2>

    <form onSubmit={onSubmit} className="space-y-4">
      <Input type="text" placeholder="Full Name" {...register("name")} />
      {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

      <Input type="email" placeholder="Email" {...register("email")} />
      {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

      <Input type="password" placeholder="Password" {...register("password")} />
      {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}

      <Button
        type="submit"
        disabled={!isValid || isLoading}
        className="w-full bg-black text-white"
      >
        {isLoading ? <Loader2 className="w-4 h-4 animate-spin mx-auto" /> : "Sign Up"}
      </Button>

      <p className="text-sm text-center text-gray-600">
        Already have an account?{" "}
        <button
          type="button"
          onClick={switchToLogin}
          className="font-semibold underline"
        >
          Login
        </button>
      </p>
    </form>
  </div>
);
