const getCircularReplacer = (other: any) => {
	const seen = new WeakSet();
	return (key: string, value: any) => {
		if (typeof value === "bigint") value = value.toString();
		if (typeof value === "object" && value !== null) {
			if (seen.has(value)) {
				return;
			}
			seen.add(value);
		}

		if (other && typeof other === "function") return other(value);
		return value;
	};
};

const stringify = JSON.stringify;

JSON.stringify = function (
	value: any,
	replacer?: ((this: any, key: string, value: any) => any) | (number | string)[] | null,
	space?: string | number
): string {
	return stringify(value, getCircularReplacer(replacer), space);
};
