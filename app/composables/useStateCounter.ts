export const useStateCounter = () => {
  const count = useState("count", () => 0);

  const increment = () => {
    count.value++;
  };

  return { count, increment };
};
