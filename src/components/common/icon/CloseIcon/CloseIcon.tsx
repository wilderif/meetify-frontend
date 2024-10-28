import { IoClose } from "react-icons/io5";

interface CloseIconProps {
  onClick: () => void;
}

const CloseIcon = ({ onClick }: CloseIconProps) => {
  return <IoClose onClick={onClick} />;
};

export default CloseIcon;
