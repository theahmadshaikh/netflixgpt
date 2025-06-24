import { createFormStore } from "./createFormStore";
import { SignInSchema } from "../validation/authSchema";

export const useSignInFormStore = createFormStore(SignInSchema);

