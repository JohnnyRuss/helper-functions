function getFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  const output: Object = {};

  for (const [key, value] of formData) {
    output[key] = value;
  }

  return output;
}
