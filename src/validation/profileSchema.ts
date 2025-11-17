// src/validation/profileSchema.ts
import { z } from "zod";

export const profileSchema = z.object({
  address: z.string().min(3, "Address must be at least 3 characters").optional().or(z.literal("")),
  city: z.string().min(2, "City must be at least 2 characters").optional().or(z.literal("")),
  state: z.string().min(2, "State must be at least 2 characters").optional().or(z.literal("")),
  zipCode: z
    .string()
    .regex(/^\d{5,6}$/, "Zip code must be 5 or 6 digits")
    .optional()
    .or(z.literal("")),
});

export type ProfileFormValues = z.infer<typeof profileSchema>;
