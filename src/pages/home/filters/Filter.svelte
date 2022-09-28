<script lang="ts">
  import FilterItem from './FilterItem.svelte';

  let filters = [
    {
      name: 'Cafe',
      icon: './images/filters/hamburger.svg',
      color: '#EAF2FF',
    },
    {
      name: 'Cinema',
      icon: './images/filters/popcorn.svg',
      color: '#E4F6EA',
    },
    {
      name: 'Stand-up',
      icon: './images/filters/old-microphone.svg',
      color: '#FEEFEA',
    },
    {
      name: 'Ice cream',
      icon: './images/filters/ice-cream-cone.svg',
      color: '#FDF8E2',
    },
  ];

  let currentFilter = '';
</script>

<div class="filter">
  {#each filters as filter}
    <FilterItem {filter} />
  {/each}
</div>

<style lang="scss">
  .filter {
    @apply mt-5 flex items-center justify-between;
  }
</style>
