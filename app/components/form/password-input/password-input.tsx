import { Eye, EyeClosed } from "lucide-react";
import { InputHTMLAttributes, useState } from "react";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

type PasswordInputProps = {
	id: string;
	label?: string;
	error?: string;
	containerClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function PasswordInput({
	label,
	containerClassName,
	error,
	...props
}: PasswordInputProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	return (
		<div className={containerClassName}>
			{label && (
				<Label
					htmlFor={props.id}
					className="block text-sm font-medium leading-6 text-gray-900"
				>
					{label}
				</Label>
			)}
			<div className="flex items-center gap-2 relative">
				<Input
					minLength={8}
					type={isPasswordVisible ? "text" : "password"}
					{...props}
				/>
				<Button
					type="button"
					variant="ghost"
					title={isPasswordVisible ? "Hide password" : "Show password"}
					className="absolute rounded-l-none right-0"
					onClick={() => setIsPasswordVisible((prev) => !prev)}
				>
					{isPasswordVisible ? <EyeClosed /> : <Eye />}
					<span className="sr-only">Toggle password visibility</span>
				</Button>
			</div>
			{error && <span className="text-red-500 text-sm">{error}</span>}
		</div>
	);
}
