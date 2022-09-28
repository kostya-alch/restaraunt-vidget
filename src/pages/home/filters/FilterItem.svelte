<script lang="ts">
  import type { IFilter } from './Filter.interface';

  export let filter: IFilter;
</script>

<div class="filter">
  <div class="icon" style="background-color: {filter.color}">
    <img src={filter.icon} alt="filter" width="34" />
  </div>
  <div class="name">
    {filter.name}
  </div>
</div>

<style lang="scss">
  .filter {
    @apply text-center bg-white shadow rounded-2xl p-2;
    .icon {
    }
    .name {
      @apply text-sm;
    }
  }
</style>
