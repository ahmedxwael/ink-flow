import { InputHTMLAttributes } from "react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";

export type TextInputProps = {
	id: string;
	label?: string;
	error?: string;
	containerClassName?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function TextInput({
	id,
	label,
	containerClassName,
	error,
	...props
}: TextInputProps) {
	return (
		<div className={containerClassName}>
			<Label
				htmlFor={id}
				className="block text-sm font-medium leading-6 text-gray-900"
			>
				{label}
			</Label>
			<Input id={id} {...props} />
			{error && <span className="text-red-500 text-sm">{error}</span>}
		</div>
	);
}
