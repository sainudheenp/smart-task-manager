import { LucideIcon } from "lucide-react";
import {
    DropdownMenuItem,
    DropdownMenuShortcut,
} from "@/components/ui/dropdown-menu"

export function MenuItem({
    Icon,         // Icon component
    label,              // Text label
    shortcut,           // Keyboard shortcut
    className,          // Optional className for styling
}: {
    Icon: LucideIcon;
    label: string;
    shortcut: string;
    className?: string;
}) {
    return (
        <DropdownMenuItem className={`mr-2 h-4 p-4  ${className}`}>
            {/* Render the icon */}
            <Icon className={`mr-2 h-4 w-4  ${className}`} />
            {/* Render the label */}
            <span className={`${className}`}>{label}</span>
            {/* Render the shortcut if it exists */}
            {shortcut && (
                <DropdownMenuShortcut className={`${className}`}>
                    {shortcut}
                </DropdownMenuShortcut>
            )}
        </DropdownMenuItem>
    );
}
