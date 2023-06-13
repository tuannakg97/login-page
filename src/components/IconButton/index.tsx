import clsx from "clsx";
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import "./styles.scss";

interface IconButtonProps {
  src: string;
  isHighlight?: boolean;
  tooltip: string;
  onClick?: () => void;
}

const IconButton = ({ src, isHighlight = false, tooltip, onClick, ...other }: IconButtonProps) => {
  return (
    <Tippy content={tooltip} className="hello">
    <button
      className={clsx([
        "icon-button",
        isHighlight ? "icon-button_highlight" : "icon-button_normal",
      ])}
      onClick={onClick}
      {...other}
    >
      <img src={src} alt="google" />
    </button>
    </Tippy>
  );
};

export default IconButton;
