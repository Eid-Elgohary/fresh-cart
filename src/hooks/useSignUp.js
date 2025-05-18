import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

async function signUpApi(values) {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signup",
    values
  );
}
export function useSignUp(callback) {
  // const { setUserTKN } = useAuth();
  const {
    mutate: signUp,

    isPending,
    error,
    isError,
  } = useMutation({
    mutationKey: ["user"],
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success("Account successfully created!");

      callback();
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });
  return { signUp, isPending, error, isError };
}
