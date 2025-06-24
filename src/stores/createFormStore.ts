// stores/createFormStore.ts
import { z } from "zod";
import { create } from "zustand";

export function createFormStore<T extends z.ZodTypeAny>(schema: T) {
  type FormData = z.infer<T>;

  return create<{
    data: Partial<FormData>;
    errors: Record<string, string>;
    setField: <K extends keyof FormData>(key: K, value: FormData[K]) => void;
    validate: () => boolean;
    reset: () => void;
  }>((set, get) => ({
    data: {},
    errors: {},
    setField: (key, value) =>
      set((state) => ({
        data: { ...state.data, [key]: value },
        errors: { ...state.errors, [key]: undefined } as Record<string, string>,
      })),
    validate: () => {
  const result = schema.safeParse(get().data);

  if (!result.success) {
    const errorMap: Record<string, string> = {};

    for (const issue of result.error.errors) {
      const pathKey = issue.path.join(".");
      errorMap[pathKey] = issue.message;
    }

    set({ errors: errorMap });
    return false;
  }

  set({ errors: {} });
  return true;
},
    reset: () => set({ data: {}, errors: {} }),
  }));
}
