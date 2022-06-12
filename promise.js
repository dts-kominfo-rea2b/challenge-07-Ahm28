const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (emosi) => {
  return Promise.all([promiseTheaterIXX(), promiseTheaterVGC()])
    .then((res) => {
      console.log(res);
      // const [ixx, vgc] = res;
      // return [...ixx, ...vgc].filter((item) => item.hasil === emosi).length;
    })
    .catch((err) => console.log(err));
};

module.exports = {
  promiseOutput,
};
