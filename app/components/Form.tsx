"use client";

import { useRef } from "react";
import { postEntry } from "../db-utils/action";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

export default function Form() {
  const formRef = useRef<HTMLFormElement>(null);
  const { pending } = useFormStatus();

  const formAction = async (formData: FormData) => {
    await postEntry(formData);
    formRef.current?.reset();
  };

  return (
    <form
      action={formAction}
      className="space-y-3 flex-col items-center text-sm mb-5"
      ref={formRef}
      style={{ opacity: pending ? 0.7 : 1 }}
    >
      <input
        type="text"
        placeholder="Your message..."
        name="userMessage"
        required
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <input
        type="text"
        placeholder="Your name..."
        name="userName"
        required
        disabled={pending}
        className="pl-4 pr-32 py-2 mt-1 focus:ring-teal-500 focus:border-teal-500 block w-full border-neutral-300 rounded-md bg-gray-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
      />
      <button
        type="submit"
        className="flex items-center justify-center mt-1 font-medium h-7 bg-teal-500/30 text-neutral-900 dark:text-neutral-100 rounded w-16"
        disabled={pending}
      >
        {pending ? "Submiting..." : "Send"}
      </button>
    </form>
  );
}
