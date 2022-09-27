import Home from './pages/home/Home.svelte';
import Restaurant from './pages/restaurant/Restaurant.svelte';
import NotFound from './pages/notfound/NotFound.svelte';

export const routes = {
  '/': Home,
  'company/:name/': Restaurant,
  '*': NotFound,
};
