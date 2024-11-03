import { useState } from "react";
import useAuthStore from "../store/useAuthStore";

const useModal = () => {
  const isLogin = useAuthStore((state) => state.isLogin);
  const showProfileProposal = useAuthStore(
    (state) => state.showProfileProposal
  );
  const setShowProfileProposal = useAuthStore(
    (state) => state.setShowProfileProposal
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoginView, setIsLoginView] = useState(true);

  const handleClick = () => {
    setIsLoginView(true); // 항상 로그인 모달이 뜨도록 설정
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const toggleModalView = () => {
    setIsLoginView(!isLoginView);
  };

  const handleLoginSuccess = () => {
    setIsModalOpen(false);
  };

  const handleCloseProfileProposal = () => {
    setShowProfileProposal(false);
  };

  return {
    isLogin,
    isModalOpen,
    isLoginView,
    showProfileProposal,
    handleClick,
    handleCloseModal,
    toggleModalView,
    handleLoginSuccess,
    handleCloseProfileProposal,
  };
};

export default useModal;
