import React from "react";

const IconButton = ({
  icon,
  title,
  desc,
}: {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
}) => {
  return (
    <span className="flex flex-row h-full w-min p-2 rounded-lg gap-3 cursor-pointer hover:bg-foreground/5">
      <div className="aspect-square h-full rounded-lg bg-foreground/5 flex justify-center items-center">
        {icon}
      </div>
      <div className="text-nowrap items-center pr-2 text-sm">
        <h3 className="text-foreground">{title}</h3>
        <p className="text-foreground/60">{desc}</p>
      </div>
    </span>
  );
};

export default IconButton;
