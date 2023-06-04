const randomNumber = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomByte = () => randomNumber(0, 255);

const randomPercent = (min: number, max: number) =>
  (randomNumber(min, max) * 0.01).toFixed(2);

type RandomRgbaT = (args: { opacityRange?: [number, number] }) => string;

const randomRgba: RandomRgbaT = ({ opacityRange }) =>
  `rgba(${[
    randomByte(),
    randomByte(),
    randomByte(),
    randomPercent(opacityRange?.[0] || 100, opacityRange?.[1] || 100),
  ].join(",")})`;

export default randomRgba;
