function getFormData(form: HTMLFormElement) {
  const formData = new FormData(form);
  const output: any = {};

  for (const [key, value] of formData) {
    output[key] = value;
  }

  return output;
}
