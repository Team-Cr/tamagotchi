export const getFormValues = (form: HTMLFormElement | null) => {
  let values = {};

  if (form) {
    const formData = new FormData(form);

    values = Object.fromEntries(formData);
  }

  return values;
};
