import { Patch1Logos } from "./1-patch-logos";

class PatchRunner {
	async run() {
		await new Patch1Logos().apply();
	}
}

new PatchRunner().run();
