<script lang="ts">
  import CatalogItem from './CatalogItem.svelte';
  import type { IRestaurant } from './restaraunt.interface';

  let restaurants: IRestaurant[] = [
    {
      name: 'Asian kitchen',
      destination: 1,
      slug: 'asian-kitchen',
      rating: 13,
      priceRating: '$$$',
      img: '',
      kitchens: ['Italian', 'Japanese'],
    },
    {
      name: 'Vegan Cafe',
      destination: 3,
      slug: 'vegan-cafe',
      rating: 2.3,
      priceRating: '$$',
      img: '',
      kitchens: ['Vegan'],
    },
    {
      name: 'Russian Cafe',
      destination: 3,
      slug: 'vegan-cafe',
      rating: 2.3,
      priceRating: '$$$$',
      img: '',
      kitchens: ['Russian'],
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
