<script>
	import {link} from 'svelte-spa-router'
</script>

<header class="">
  <div class="container">
    <span><a href="/" use:link>[ Home ]</a>
    </span>
    <span><a href="/about" use:link>[ about ]</a>
    </span>
    <span><a href="/task_project" use:link>[ TaskProject ]</a>
    </span>
    <span><a href="/todo" use:link>[ todo ]</a>
    </span>
  </div>
  <hr />
</header>
