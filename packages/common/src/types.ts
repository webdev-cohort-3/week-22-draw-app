import { z } from "zod";

export const CreateUserSchema = z.object({
    username: z.string().min(3).max(20).trim(),
    password: z.string().min(8).trim(),
    name: z.string().trim()
});

export const SigninSchema = z.object({
    username: z.string().min(3).max(20).trim(),
    password: z.string().min(8).trim()
});

export const CreateRoomSchema = z.object({
    roomName: z.string().min(3).max(20).trim()
});