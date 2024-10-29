import { IoClose } from "react-icons/io5";

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return (
    <button onClick={onClick}>
      <IoClose />
    </button>
  );
};

export default CloseIcon;
