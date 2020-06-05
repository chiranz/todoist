const colors = [
  "#FF00FF",
  "#808080",
  "#0000FF",
  "#008000",
  "#B22222",
  "#006400",
  "#008080",
  "#4B0082",
  "#DA70D6",
];

export const getProjectColor = (id) => colors[id + (1 % colors.length)];
