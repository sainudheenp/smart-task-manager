import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "@/components/ui/input";

export default function TaskTitle({ value, onChange }: { value: string, onChange: (val: string) => void }) {
    return (
        <div className="flex flex-col gap-2">
            <Label className="opacity-75 text-sm font-medium">
                Task Title
            </Label>
            <Input
                placeholder={value}
                value={value}
                onChange={(e) => onChange(e.target.value)}  
                className="h-11"
            />
            <p className="text-red-500 text-sm hidden">
                This is an error
            </p>
        </div>
    );
}
