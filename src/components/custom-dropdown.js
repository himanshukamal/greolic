import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";
import { useWindowSize } from "@react-hook/window-size";

export default function CustomDropDown({ trigger, content }) {
  const [width, height] = useWindowSize();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" border-none active:border-none focus:border-none focus-visible:border-none ">
        {/* Trigger content */}
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={` ${
            width < 321 ? `w-[300px]` : `w-[358px]`
          } max-h-[60vh] overflow-y-scroll`}
        >
          {content}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
