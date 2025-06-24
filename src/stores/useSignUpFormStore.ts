
import { createFormStore } from "./createFormStore";
import { SignUpSchema } from "../validation/authSchema";

export const useSignUpFormStore = createFormStore(SignUpSchema);