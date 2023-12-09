<script>
	import { getContext } from 'svelte';
	import { menu } from './';

  export let href = null;
	export let submenu = null;

  $: tag = href ? "a" : "button";

	let { depth } = getContext('menu') || { depth: 0 };
	let menuOptions = { 
    component: submenu, 
    depth: depth + 1, 
    direction: 'right',
    open: 'mouseover',
    close: 'mouseout'
  };

</script>

<svelte:element this={tag} {href} class="sm_button" on:click use:menu={menuOptions} role="button" tabindex="0">
  <slot />
</svelte:element>

<style>
</style>
