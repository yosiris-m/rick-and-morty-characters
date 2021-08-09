const getLocal = () => {
  const localSave = localStorage.getItem("result");

  return JSON.parse(localSave);
};

const setLocal = (value) => {
  localStorage.setItem("result", JSON.stringify(value));
};

const localExport = {
  getLocal: getLocal,
  setLocal: setLocal,
};

export default localExport;
