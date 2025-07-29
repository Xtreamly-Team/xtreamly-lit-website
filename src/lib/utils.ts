export type NonEmptyArray<T> = [T, ...Array<T>];

export type Callback = () => void
export type AsyncCallback = () => Promise<any>

export async function sleep(ms: number) {
	await new Promise(resolve => setTimeout(resolve, ms))
}

export function normalizeLabelForDisplay(label: string) {
	return label
		.split("_")
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(" ");
}
