// src/components/profile/ProfileForm.tsx
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema, ProfileFormValues } from "@/validation/profileSchema";
import { Button } from "@/components/ui/button";

interface Props {
  defaultValues: ProfileFormValues;
  loading?: boolean;
  onSubmit: (values: ProfileFormValues) => void;
}

export const ProfileForm: React.FC<Props> = ({ defaultValues, loading = false, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitting },
    reset,
  } = useForm<ProfileFormValues>({
    resolver: zodResolver(profileSchema),
    mode: "onSubmit",
    defaultValues,
  });

  // reset form when defaultValues change (e.g., when profile loads)
  React.useEffect(() => {
    reset(defaultValues);
  }, [defaultValues, reset]);

  return (
    <form
      onSubmit={handleSubmit((vals) => onSubmit(vals))}
      className="space-y-5"
      noValidate
    >
      {/* Address */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Address</label>
        <input
          {...register("address")}
          type="text"
          className={`w-full border rounded-lg p-3 outline-none focus:ring ${
            errors.address ? "border-red-400 ring-red-100" : "focus:ring-pink-200 focus:border-pink-400"
          }`}
          placeholder="Plot 25, Pune"
        />
        {errors.address && (
          <p className="text-sm text-red-500 mt-1">{errors.address.message}</p>
        )}
      </div>

      {/* City */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">City</label>
        <input
          {...register("city")}
          type="text"
          className={`w-full border rounded-lg p-3 outline-none focus:ring ${
            errors.city ? "border-red-400 ring-red-100" : "focus:ring-pink-200 focus:border-pink-400"
          }`}
          placeholder="Pune"
        />
        {errors.city && <p className="text-sm text-red-500 mt-1">{errors.city.message}</p>}
      </div>

      {/* State */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">State</label>
        <input
          {...register("state")}
          type="text"
          className={`w-full border rounded-lg p-3 outline-none focus:ring ${
            errors.state ? "border-red-400 ring-red-100" : "focus:ring-pink-200 focus:border-pink-400"
          }`}
          placeholder="Maharashtra"
        />
        {errors.state && <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>}
      </div>

      {/* Zip Code */}
      <div>
        <label className="block font-medium text-gray-700 mb-1">Zip Code</label>
        <input
          {...register("zipCode")}
          type="text"
          inputMode="numeric"
          className={`w-full border rounded-lg p-3 outline-none focus:ring ${
            errors.zipCode ? "border-red-400 ring-red-100" : "focus:ring-pink-200 focus:border-pink-400"
          }`}
          placeholder="411001"
        />
        {errors.zipCode && <p className="text-sm text-red-500 mt-1">{errors.zipCode.message}</p>}
      </div>

      <div>
        <Button
          type="submit"
          disabled={loading || isSubmitting || !isDirty}
          className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 text-lg rounded-lg"
        >
          {loading || isSubmitting ? "Saving..." : "Save Changes"}
        </Button>
      </div>
    </form>
  );
};
