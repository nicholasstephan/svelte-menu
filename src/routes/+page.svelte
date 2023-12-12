<script>
  import Controller, { open as openMenu, menu } from "$lib";

  import SimpleMenu from './menus/simple-menu.svelte';
  import ComplexMenu from './menus/complex-menu.svelte';
  import ClickOutComplexMenu from './menus/click-out-complex-menu.svelte';


  function openSimpleMenu(e) {
    openMenu({
      component: SimpleMenu,
      x: e.clientX,
      y: e.clientY
    });
  }

</script>

<article>
  <h1>Svelte Menu</h1>

  <hr/>

  <h2>Examples</h2>

  <h3>Drop Down Menu</h3>

  <button on:click|stopPropagation={openSimpleMenu}>Show me the MENU!</button>

  <code>{`
<script>
  import Controller, { open } from "$lib";
  import SimpleMenu from './menus/simple-menu.svelte';
  function openSimpleMenu(e) {
    open({
      component: SimpleMenu,
      x: e.clientX,
      y: e.clientY
    });
  }
</script>

<button on:click|stopPropagation={openSimpleMenu}>Show me the MENU!</button>

<Controller/>
  `}</code>

  <h3>A an Action</h3>
  
  <button use:menu={SimpleMenu}>Show me the MENU!</button>

  <code>{`<button use:menu={SimpleMenu}>Show me the MENU!</button>`}</code>

  <h3>Menu Above</h3>

  <button use:menu={{component:SimpleMenu, direction:'up'}}>Show me the MENU!</button>

  <code>{`<button use:menu={{component:SimpleMenu, direction:'up'}}>Show me the MENU!</button>`}</code>
  
  <h3>Menu Left</h3>

  <div class="centered">
    <button use:menu={{component:SimpleMenu, direction:'left'}}>Show me the MENU!</button>
  </div>

  <h3>Menu Right</h3>

  <div class="centered">
    <button use:menu={{component:SimpleMenu, direction:'right'}}>Show me the MENU!</button>
  </div>

  <h3>Triggers</h3>

  <button use:menu={{component:SimpleMenu, open:'click'}}>Open on `click`</button>
  <button use:menu={{component:SimpleMenu, open:'mouseenter', close:'mouseout'}}>Open on `mouseenter`</button>

  <h3>Close Triggers</h3>

  <button use:menu={{component:SimpleMenu, close:'clickout'}}>Close on `click` out</button>
  <button use:menu={{component:SimpleMenu, close:'mouseout'}}>Close on `mouseleave`</button>
  <button use:menu={{component:SimpleMenu, close:'none'}}>Never close</button>
  <button use:menu={{component:ClickOutComplexMenu, close:'none'}}>Nested in a never close</button>

  <h3>Submenus</h3>

  <button use:menu={ComplexMenu}>Show me the MENU!</button>



  <h3>Autocompletes</h3>


  <hr/>

  <h2>Installation</h2>

  <hr/>

  <h2>Usage</h2>

  <hr/>

  <h2>API</h2>
  <h3>open(<em>options</em>)</h3>
  <table>
    <tr>
      <th>Option</th><th>Description</th>
    </tr>
    <tr>
      <td>component</td><td>The svelte component to be rendered.</td>
    </tr>
    <tr>
      <td>x</td><td></td>
    </tr>
    <tr>
      <td>y</td><td></td>
    </tr>
  </table>
</article>


<Controller/>



<style>

  * {
    font-family:'Courier New', Courier, monospace;
  }

  table {
    background-color: #eee;
    border-radius: 4px;
  }

  th {
    padding: 8px 32px 8px 8px;
    border-bottom: 1px solid #ccc;
    text-align: left;
  }

  td {
    padding: 8px 32px 8px 8px;
    border-bottom: 1px solid #ccc;
  }

  article {
    padding: 16px;
  }

  code {
    display: block;
    padding: 16px;
    margin: 16px 0;
    background-color: #eee;
    white-space: pre;
    overflow: auto;
  }

  .centered {
    text-align: center;
  }
</style>