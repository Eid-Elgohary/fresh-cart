import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../contexts/AuthContext";

async function logInApi(value) {
  return axios.post(
    "https://ecommerce.routemisr.com/api/v1/auth/signin",
    value
  );
}

function useLogIn(callback) {
  const { setUserTKN } = useAuth();
  const {
    mutate: login,
    isPending,
    error,
  } = useMutation({
    mutationKey: ["user"],
    mutationFn: logInApi,
    onSuccess: (data) => {
      toast.success("welcome back");
      setUserTKN(data.data.token);
      localStorage.setItem("userTKN", data.data.token);
      callback()
    },
    onError: (err) => {
      // toast.error(err.response.data.message);
      toast.error('an error occured');
    },
  });
  return { login, isPending, error };
}

export default useLogIn;
