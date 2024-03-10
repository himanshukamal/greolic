import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import React from "react";

export default function CustomDropDown({ trigger, content }) {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className=" border-none active:border-none focus:border-none focus-visible:border-none ">
        {/* Trigger content */}
        {trigger}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="">{content}</DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
