import TextInput from "../text-input";
import { TextInputProps } from "../text-input/text-input";

type EmailInputProps = TextInputProps;

export default function EmailInput({ ...props }: EmailInputProps) {
	return <TextInput {...props} name="email" type="email" />;
}
