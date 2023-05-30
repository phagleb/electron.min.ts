export function setupCounter(element: HTMLElement): void {
  let counter: number;
  const setCounter = (count: number) => {
    counter = count;
    element.innerText = `count is ${counter}`;
  };
  element.addEventListener("click", () => setCounter(++counter));
  setCounter(0);
}
