import { writable } from 'svelte/store';

export const currentFilter = writable('');
export const searchTerm = writable('');
