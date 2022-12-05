export const getFormValues = (form: HTMLFormElement | null) => {
  if (!form) {
    return {};
  }

  const formData = new FormData(form);
  return Object.fromEntries(formData);
};
