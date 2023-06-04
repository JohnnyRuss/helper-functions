function calcImageDimention() {
  // query all figure element with className of ".gallery-img" which containst img element
  const galleryImageFigures: HTMLElement[] | null = Array.from(
    document.querySelectorAll(".gallery-img")
  );

  // if there are any figure element
  // 1. loop each of them,
  // 2. extract the img from figure
  // 3. listen load event on img
  // 4. calc img dimention
  galleryImageFigures[0] &&
    galleryImageFigures.forEach((figure) => {
      // extract img from figure
      const imgNode = figure.querySelector("img");

      // because of imgNode width and height maybe represents
      // already manipulated(from css) img dimention for corresponding time
      // we have to create brand new img element from imgNode src, to get original img dimention.

      // 1. create img element
      const img: HTMLImageElement = document.createElement("img");
      // 2. set src to brand new img
      img.setAttribute("src", imgNode?.src || "");

      // listen to load event on image
      img.addEventListener("load", function (e) {
        if (!e.target) return;

        // extract img original width and height
        const { width, height } = e.target as HTMLImageElement;

        // calc dimention ratio
        if (height > width) figure.classList.add("gallery-img--portrate");
        else if (width / height < 1.7)
          figure.classList.add("gallery-img--landscape");
        else if (width / height > 1.7)
          figure.classList.add("gallery-img--landscapeLarge");
      });
    });
}

export default calcImageDimention;
