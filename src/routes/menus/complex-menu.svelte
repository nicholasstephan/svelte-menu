<script>
  import { Button } from '$lib';
  import SimpleMenu from './simple-menu.svelte';
  
</script>

<Button>New</Button>
<Button>Save</Button>
<Button submenu={SimpleMenu}>Open...</Button>
<hr/>
<Button>Close Window</Button>