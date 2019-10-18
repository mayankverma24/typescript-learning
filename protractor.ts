//to be placed in config file
by.addLocator("label", (label: string, parentElement?: Element) => {
	const scope = parentElement || document;
	const matches = scope.querySelectorAll(`[for="${label}"]`);
	if (matches.length === 0) {
		return null;
	} else if (matches.length === 1) {
		return matches[0];
	}
	return matches;
});


//by_label.d.ts - declaration file
import { Locator } from "protractor/built/locators";
declare module "protractor/built/locators" {
	export interface ProtractorBy {
		label(label: string, parentElement?: Node): Locator;
	}
}