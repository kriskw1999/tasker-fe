import React, { PropsWithChildren } from "react";

type HoverProps = PropsWithChildren & {
  className?: string;
  setHover: (hover: boolean) => void;
};

const Hover: React.FC<HoverProps> = ({ className, children, setHover }) => {
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={className}
    >
      {children}
    </div>
  );
};

export default Hover;
