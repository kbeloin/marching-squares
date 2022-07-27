export function getLinePath(state, { a, b, c, d }, callback) {
  switch (state) {
    case 1:
      callback(c, d);
      break;
    case 2:
      callback(b, c);
      break;
    case 3:
      callback(b, d);
      break;
    case 4:
      callback(a, b);
      break;
    case 5:
      callback(a, d);
      callback(b, c);
      break;
    case 6:
      callback(a, c);
      break;
    case 7:
      callback(a, d);
      break;
    case 8:
      callback(a, d);
      break;
    case 9:
      callback(a, c);
      break;
    case 10:
      callback(a, b);
      callback(c, d);
      break;
    case 11:
      callback(a, b);
      break;
    case 12:
      callback(b, d);
      break;
    case 13:
      callback(b, c);
      break;
    case 14:
      callback(c, d);
      break;
    default:
      break;
  }
}

export function getCellState(a, b, c, d) {
  return a * 8 + b * 4 + c * 2 + d;
}
