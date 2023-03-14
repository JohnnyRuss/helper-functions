export default function extractRootEndPointFromImg(src: string): string {
  const DEV_END_POINT_HOST = process.env.REACT_APP_DEV_END_POINT_HOST;
  const TEST_PROD_END_POINT_HOST =
    process.env.REACT_APP_TEST_PROD_END_POINT_HOST;

  const ENV_MODE = process.env.REACT_APP_ENV_MODE;

  const location = src ? src.split("/").slice(3).join("/") : "";

  return ENV_MODE === "DEV"
    ? DEV_END_POINT_HOST.concat(`/${location}`)
    : ENV_MODE === "TEST_PROD"
    ? TEST_PROD_END_POINT_HOST.concat(`/${location}`)
    : src;
}
