import {
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from  "@/components/ui/dropdown-menu"
import { Tag } from "lucide-react";
import { LABEL_OPTIONS } from "./constants";

 export default function SubLabelMenu({
  value,
  onValueChange,
}: {
  value: string; // Currently selected label
  onValueChange: (value: string) => void; // Callback for label change
}) {
  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>
        <Tag className="mr-2 h-4 w-4" /> {/* Tag icon */}
        <span>Label</span> {/* Label text */}
      </DropdownMenuSubTrigger>

      <DropdownMenuPortal>
        <DropdownMenuSubContent className="poppins">
          <DropdownMenuRadioGroup value={value} onValueChange={onValueChange}>
            {LABEL_OPTIONS.map((option) => (
              <DropdownMenuRadioItem
                key={option}
                value={option.toLowerCase()}
              >
                {option} {/* Render each label option */}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
}
