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
      img: './images/restaurant/1.webp',
      kitchens: ['Italian', 'Japanese'],
    },
    {
      name: 'Vegan Cafe',
      destination: 3,
      slug: 'vegan-cafe',
      rating: 2.3,
      priceRating: '$$',
      img: './images/restaurant/2.webp',
      kitchens: ['Vegan'],
    },
    {
      name: 'Russian Cafe',
      destination: 3,
      slug: 'vegan-cafe',
      rating: 2.3,
      priceRating: '$$$$',
      img: './images/restaurant/3.webp',
      kitchens: ['Russian'],
    },
  ];

  let currentFilter = '';
</script>

<div class="catalog">
  {#each restaurants as restaurant}
    <CatalogItem {restaurant} />
  {/each}
</div>

<style lang="scss">
  .catalog {
    @apply mt-8;
  }
</style>
