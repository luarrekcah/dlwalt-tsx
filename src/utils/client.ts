export const goBack = () => {
  window.history.back();
};

export const goTo = (path: string) => {
  window.location.href = path;
};
