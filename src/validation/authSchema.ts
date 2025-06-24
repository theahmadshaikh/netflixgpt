import { z } from "zod";

export const SignInSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export const SignUpSchema = SignInSchema.extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
});

export type SignInData = z.infer<typeof SignInSchema>;
export type SignUpData = z.infer<typeof SignUpSchema>;
