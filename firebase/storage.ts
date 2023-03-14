import { uploadFile } from "./config";

function fileUploader(file: File, type: "image" | "video") {
  function progresSetter(percentage: number) {
    if (type === "video") setVideoProcessPercentage(percentage);
    else if (type === "image") setImageProcessPercentage(percentage);
  }

  function urlSetter(url: string) {
    if (type === "video") setVideoUrl(url);
    else if (type === "image") setImageUrl(url);
  }

  uploadFile({ file, progresSetter, urlSetter });
}
