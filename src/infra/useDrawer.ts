import { ref } from 'vue';

const drawer = ref(true);

export function useDrawer() {
  const toggle = () => {
    drawer.value = !drawer.value;
  };

  return { drawer, toggle };
}
