import { writable } from 'svelte/store';
import { browser } from '$app/env';

var storedProject = {};
if (browser) {
	storedProject = null;
}
export const project = writable(storedProject);
project.subscribe((value) => {
	if (browser) {
		localStorage.project = JSON.stringify(value);
	}
});
