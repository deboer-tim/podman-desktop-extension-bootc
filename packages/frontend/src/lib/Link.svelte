<script lang="ts">
import { router } from 'tinro';
import { bootcClient } from '/@/api/client';
import { Link } from '@podman-desktop/ui-svelte';

interface Props {
  title?: string;
  internalRef?: string;
  externalRef?: string;
  folder?: string;
  ariaLabel?: string;
}
let { title, internalRef, externalRef, folder }: Props = $props();

async function click(): Promise<void> {
  if (internalRef) {
    router.goto(internalRef);
  } else if (externalRef) {
    await bootcClient.openLink(externalRef);
  } else if (folder) {
    await bootcClient.openFolder(folder);
  }
}
</script>

<Link title={title} aria-label={$$props['aria-label']} on:click={click}>
  <slot />
</Link>
