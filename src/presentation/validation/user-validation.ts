import { z } from "zod";
import { IMulterFile } from "./types";

export const userCreateScheme = z.object({
    email: z.string().email(),
    password: z.string(),
    name: z.string(),
    nik: z.string(),
});

export const userUpdateScheme = z.object({
    email: z.string().email(),
    password: z.any().transform((val) => <string | undefined>val),
    name: z.string(),
    nik: z.string(),
});

export const userDataTableScheme = z.object({
    page: z
        .preprocess((val) => Number(val), z.number())
        .nullish()
        .transform((value) => value ?? undefined),
    limit: z
        .preprocess((val) => Number(val), z.number())
        .nullish()
        .transform((value) => value ?? undefined),
    search: z
        .string()
        .nullish()
        .transform((value) => value ?? undefined),
});
export const mobileChangePasswordSchema = z
    .object({
        currentPassword: z.string(),
        newPassword: z.string(),
        confirmNewPassword: z.string(),
    })
    .superRefine(({ newPassword, confirmNewPassword }, ctx) => {
        if (newPassword !== confirmNewPassword) {
            ctx.addIssue({
                code: "custom",
                message: "The passwords did not match",
            });
        }
    });
