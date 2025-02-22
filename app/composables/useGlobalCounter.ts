const count = ref(0);

export const useGlobalCounter = () => {
  const increment = () => count.value++;

  return { count, increment };
};
