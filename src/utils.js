const vips = ["E", "F", "G", "H", "J"];
const deluxe = ["L"];
const selected = ["A"];
export const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L"];
const columns = [1, 2, 3, 5, 6, 7, 8, 9, 10];

const initData = () => {
  const chairs = [];
  rows.forEach((row, i) => {
    const items = [];
    let type = "";
    if (selected.indexOf(row) >= 0) {
      type = "selected";
    } else if (vips.indexOf(row) >= 0) {
      type = "vip";
    } else if (deluxe.indexOf(row) >= 0) {
      type = "deluxe";
    }
    columns.forEach((column, j) => {
      items.push({
        number: row + column,
        selecting: false,
        type,
        pos: [i, j]
      });
    });
    chairs.push(items);
  });
  return chairs;
};

export const chairs = initData();
