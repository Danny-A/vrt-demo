export default function isset(fn) {
  let value;

  try {
    value = fn();
  } catch (e) {
    value = undefined;
  }

  return value !== undefined;
}
