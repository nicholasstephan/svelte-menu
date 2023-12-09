<script>
	import { getContext } from 'svelte';
	import { menu } from './';

	export let submenu = null;
	let { depth } = getContext('menu') || { depth: 0 };
	let menuOptions = { 
    component: submenu, 
    depth: depth + 1, 
    direction: 'right',
    open: 'mouseover',
    close: 'mouseout'
  };

</script>

<button class="sm_button" use:menu={menuOptions}>
	<slot />
</button>

<style>
</style>
