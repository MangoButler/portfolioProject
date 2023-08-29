"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "../db";

export async function postEntry(formData: FormData) {
  "use server";

  const data = await prisma.guestbook.create({
    data: {
      message: formData.get("userMessage") as string,
      username: formData.get("userName") as string,
    },
  });

  revalidatePath("/guestbook");
}
