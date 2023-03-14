export default function readFileAsDataUrl(
  file: File | null,
  handler: (val: string | ArrayBuffer | null) => void
) {
  const fr = new FileReader();
  file && fr.readAsDataURL(file);
  fr.addEventListener("load", () => {
    const url = fr.result;
    handler(url);
  });
}
