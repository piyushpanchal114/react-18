import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [status, setStatus] = useState(false);

  const toggler = () => {
    setStatus(!status);
    onClick();
  };

  if (status) return <AiFillHeart color="red" size={40} onClick={toggler} />;
  return <AiOutlineHeart size={40} onClick={toggler} />;
};

export default Like;
