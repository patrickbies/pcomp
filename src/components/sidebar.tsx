import { ChevronLeft } from "lucide-react";
import { useState } from "react";

const Sidebar = ({
  offsetHeight,
  ref,
}: {
  offsetHeight?: number;
  ref?: any;
}) => {
  const [open, setOpen] = useState(true);

  return (
    <div
      ref={ref}
      style={{ marginTop: offsetHeight + "px" }}
      className={`fixed inset-0 z-[100] bg-red-500 h-screen w-0 transition-all ${
        open && "w-[20vw]"
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className={`hover:bg-foreground/20 relative left-[100%] rounded-md p-0.5 ml-2 mt-2 transition-all duration-300 ${!open && "scale-x-[-1]"}`}
      >
        <ChevronLeft color="white" size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
