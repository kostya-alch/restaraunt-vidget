<script lang="ts">
  import { link } from 'svelte-spa-router';
  import type { IRestaurant } from './restaraunt.interface';
  import TiStarFullOutline from 'svelte-icons/ti/TiStarFullOutline.svelte';
  import IoMdWallet from 'svelte-icons/io/IoMdWallet.svelte';

  export let restaurant: IRestaurant;
  let { img, name, kitchens, rating, priceRating, destination, slug } = restaurant;
</script>

<div class="restaurant">
  <a use:link={`/company/${slug}`}>
    <img src={img} alt={name} />
  </a>
  <div>
    <div>
      <div class="heading">
        {name}
      </div>
      <div class="price">
        <div class="icon">
          <IoMdWallet />
        </div>
        <span>Average price {priceRating}</span>
      </div>
      <div class="kitchens">
        {#each kitchens as value}
          <span>{value}</span>
        {/each}
      </div>
    </div>
    <div>
      <div class="rating">
        <div class="star">
          <TiStarFullOutline />
        </div>
        <span>{rating}</span>
      </div>
      <div class="destination">
        {destination} km
      </div>
    </div>
  </div>
</div>

<style lang="scss">
</style>
