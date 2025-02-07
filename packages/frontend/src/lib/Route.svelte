<script lang="ts">
import { createRouteObject } from 'tinro/dist/tinro_lib';
import type { TinroRouteMeta } from 'tinro';
import { saveRouterState } from '../api/client';
import type { Snippet } from 'svelte';

interface Props {
  path: string;
  fallback?: string;
  redirect?: string;
  firstmatch?: string;
  breadcrumb?: string;
  isAppMounted?: boolean;
  children: Snippet<[{ params: Record<string, string>; meta: TinroRouteMeta }]>;
}
let { path = '/*', fallback, redirect, firstmatch, breadcrumb, isAppMounted, children }: Props = $props();

let showContent = $state(false);
let params: Record<string, string> = $state({});
let meta: TinroRouteMeta = $state({} as TinroRouteMeta);

const route = createRouteObject({
  fallback,
  onShow() {
    showContent = true;
  },
  onHide() {
    showContent = false;
  },
  onMeta(newMeta: TinroRouteMeta) {
    meta = newMeta;
    params = meta.params;

    if (isAppMounted) {
      saveRouterState({ url: newMeta.url });
    }
  },
});

$effect(() => {
  route.update({
    path,
    redirect,
    firstmatch,
    breadcrumb,
  });
});
</script>

{#if showContent}
  {@render children({ params, meta })}
{/if}
