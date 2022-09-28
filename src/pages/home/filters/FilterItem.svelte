<script lang="ts">
  import type { IFilter } from './Filter.interface';

  export let filter: IFilter;
</script>

<button class="filter">
  <span class="icon" style="background-color: {filter.color}">
    <img src={filter.icon} alt="filter" width="30" />
  </span>
  <span class="name">
    {filter.name}
  </span>
</button>

<style lang="scss">
  .filter {
    @apply text-center bg-white rounded-3xl p-2 w-16;
    width: 4.5rem;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
    .icon {
      @apply rounded-3xl flex items-center justify-center p-3;
    }
    .name {
      @apply mt-1 block;
      font-size: 12px;
    }
  }
</style>
