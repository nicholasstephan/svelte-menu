<script context="module">
	import { writable } from 'svelte/store';

	let menus = writable([]);

	export function menu(element, options) {
		if (typeof options === 'function') {
			options = { component: options };
		}

		let handler = (e) => {
			e.stopPropagation();

			let rect = element.getBoundingClientRect();

			let x = rect.x;
			let y = rect.y;

			if (options.direction == 'up') {
			} else if (options.direction == 'left') {
			} else if (options.direction == 'right') {
				x += rect.width;
			} else {
				y += rect.height;
			}

			open({ x, y, ...options });
		};
		element.addEventListener(options.open || 'click', handler);
		return {
			update(newOptions) {
        if(newOptions.open != options.open) {
          element.removeEventListener(options.open || 'click', handler);
          element.addEventListener(newOptions.open || 'click', handler);
        }
				options = newOptions;
				update(options);
			},
			destroy() {
				element.removeEventListener(options.open || 'click', handler);
			}
		};
	}

	export function closeAll() {
		menus.update((m) => {
			for (let menu of m) {
				menu.onClose?.();
			}
			return [];
		});
	}

	export function close(id) {
		if (!id) {
			return;
		}
		menus.update((m) => {
			let i = m.findIndex((m) => m.id == id);
			if (i > -1) {
				m[i]?.onClose?.();
				m = m.slice(0, i);
			}
			return m;
		});
	}

	export function closeAtDepth(depth) {
		menus.update((m) => {
			m[depth]?.onClose?.();
			m = m.slice(0, depth);
			return m;
		});
	}

	export function toggle(options) {
		if(!options.component) {
      return;
    }

		let { id, depth, ...params } = options;

		id = id || depth || "menu";
		
		menus.update((m) => {
			let i = m.findIndex((m) => m.id == id);
			if (i > -1) {
				return m.filter(f => f.id != id);
			}
			if (depth !== undefined) {
				m = m.slice(0, depth);
			}
			return [...m, { id, ...params }];
		});

		return id;
	}

	export function update(options) {
		let { id, depth, ...params } = options;
		
    id = id || depth || "menu";

		menus.update((m) => {
			let i = m.findIndex((m) => m.id == id);
			if (i > -1) {
				m[i] = { id, ...params };
				return m;
			}
			return m;
		});

		return id;
	}

	export function open(options) {
    if(!options.component) {
      return;
    }

		let { id, depth, ...params } = options;
		
    id = id || depth || "menu";

		menus.update((m) => {
			let i = m.findIndex((m) => m.id == id);
			if (i > -1) {
				m[i] = { id, ...params };
				return m;
			}
			if (depth !== undefined) {
				m = m.slice(0, depth);
			}
			return [...m, { id, ...params }];
		});

		return id;
	}

</script>

<script>
	import Menu from '$lib/menu.svelte';
	import { onMount } from 'svelte';

	let container;

	onMount(() => {
		let handler = (e) => {
			console.log('clicked parent', $menus)
			for(let [depth, menu] of Object.entries($menus || [])) {
				if(!menu.close || menu.close == 'clickout') {
					closeAtDepth(depth);
					return;
				}
			}
		};
		container.parentNode.addEventListener('click', handler);
		return () => {
			container.parentNode.removeEventListener('click', handler);
		};
	});

</script>

<button bind:this={container} class="sm_overlay">
	{#each $menus as menu, depth (menu.id)}
		<Menu {...menu} {depth} />
	{/each}
</button>

<style>
	.sm_overlay {
		appearance: none;
		background: none;
		border: none;
		position: fixed;
		inset: 0 0 0 0;
		padding: 0;
		margin: 0;
		pointer-events: none;
		z-index: 10000;
	}
</style>
