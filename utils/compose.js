export default function compose(hofs) {
  if (hofs.length == 1) return hofs[0];
  return hofs.reduce((a, b) => (...args) => a(b(...args)));
}
