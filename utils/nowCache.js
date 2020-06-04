export default function nowCache(res, length = 600) {
  // 10 minute cache by default

  res.setHeader("cache-control", "public, max-age=" + length);
}
