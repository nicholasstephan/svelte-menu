<script>
	import { close as closeMenu } from './';
	import { afterUpdate, setContext } from 'svelte';

	export let id;
	export let x;
	export let y;
	export let direction = 'down';
	export let depth = 0;
	export let close = null;

	export let component = null;
	export let props = {};

	let top = 'auto';
	let left = 'auto';
	let bottom = 'auto';
	let right = 'auto';

	let container;

	setContext('menu', { 
		depth,
		close: () => closeMenu(id),
	});

	// Make sure menu is visible.

	let dx = 0;
	let dy = 0;
	afterUpdate(() => {
		let cw = container?.parentNode?.clientWidth || 0;
		let ch = container?.parentNode?.clientHeight || 0;
		let mw = container?.clientWidth || 0;
		let mh = container?.clientHeight || 0;
		dx = Math.min(Math.max(x, 16), cw - mw - 16);
		dy = Math.min(Math.max(y, 16), ch - mh - 16);

		if (direction == 'down') {
			top = `${dy}px`;
			left = `${dx}px`;
			bottom = 'auto';
			right = 'auto';
		} else if (direction == 'up') {
			top = 'auto';
			left = `${dx}px`;
			bottom = `${ch - dy}px`;
			right = 'auto';
		} else if (direction == 'left') {
			top = `${dy}px`;
			left = 'auto';
			bottom = 'auto';
			right = `${cw - dx}px`;
		} else if (direction == 'right') {
			top = `${dy}px`;
			left = `${dx}px`;
			bottom = 'auto';
			right = 'auto';
		}
	});

	// Close menu on mouse out.

	function mouseLeave(e) {
    if(close == 'mouseout') {
		  closeMenu(id);
    }
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="sm_menu sm_menu--depth-{depth}"
	bind:this={container}
	style="left:{left}; top:{top}; bottom:{bottom}; right:{right}; max-height:{container?.parentNode
		?.clientHeight - 32}px;"
	on:mouseleave={mouseLeave}
	on:click|stopPropagation
>
	<div class="sm_menu__body">
		{#if component}
			<svelte:component this={component} {...props} />
		{/if}
	</div>
</div>

<style>
	.sm_menu {
		position: absolute;
		height: auto;
		display: flex;
		overflow: hidden;
		pointer-events: all;
	}

	.sm_menu__body {
		flex: 1;
		overflow-x: hidden;
		overflow-y: scroll;
	}
</style>
