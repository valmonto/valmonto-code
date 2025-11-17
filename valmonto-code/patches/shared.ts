export interface Patch {
	apply: () => Promise<void>;
}
