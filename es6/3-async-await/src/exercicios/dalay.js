// -- 1
export const dalay = () => new Promise((resolve) => setTimeout(resolve, 2000));
const umPorSegundo = async () => {
  await dalay(console.log("1s"));
  await dalay(console.log("2s"));
  await dalay(console.log("3s"));
};
umPorSegundo();
