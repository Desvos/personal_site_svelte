import { writable } from 'svelte/store';

export var toast = writable({
    "title": "",
    "message": "",
    "type": "default",
    "sleepDuration": 5000,
    "show": false
});

