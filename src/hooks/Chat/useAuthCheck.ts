import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useAuthStore";

const useAuthCheck = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) {
      navigate("/error", { replace: true });
    }
  }, [isLogin, navigate]);

  return isLogin;
};

export default useAuthCheck;
