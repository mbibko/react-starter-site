export function forEach(arr, callback) {
  Array.prototype.forEach.call(arr, callback);
}

export const generateID = () => {
  return Math.random().toString(36).substring(2, 9);
};
