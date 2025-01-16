export function getIsValidString(value: string | undefined) {
	if (!value || !value.trim()) {
		return false;
	}

	return true;
}
