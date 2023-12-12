<script>
  import { Button } from '$lib';
  import SimpleMenu from './simple-menu.svelte';
  
</script>

<Button>New</Button>
<Button>Save</Button>
<Button submenu={{component:SimpleMenu, close:'clickout'}}>Open...</Button>
<Button submenu={{component:SimpleMenu, close:'clickout'}}>Open...</Button>
<Button submenu={{component:SimpleMenu, close:'clickout'}}>Open...</Button>
<hr/>
<Button>Close Window</Button>