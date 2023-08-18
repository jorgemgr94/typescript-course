type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const paletteNoConst = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

//
const paletteWithConst = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} as const satisfies Record<Colors, string | Readonly<RGB>>;

paletteNoConst.red = [255, 0, 1]; // can be over written
// paletteWithConst.red = [255, 255, 0]; // shows an error since we cannot edit an property that is constant

export {};
