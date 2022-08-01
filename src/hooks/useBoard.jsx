import { useState, useCallback, useEffect, useMemo } from "react";
import { getLinePath, getCellState } from "../logic/Board";

export default function useBoard({
  showPoints,
  resolution,
  width,
  height,
  ref,
  color,
}) {
  const [board, setBoard] = useState([]);
  const [ctx, setCtx] = useState(null);

  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const pointWidth = useMemo(() => {
    return resolution * 0.3;
  }, [resolution]);

  const halfPointWidth = useMemo(() => {
    return pointWidth / 2;
  }, [pointWidth]);

  const halfWidth = useMemo(() => {
    return resolution * 0.5;
  }, [resolution]);

  const generateBoard = useCallback(() => {
    let newBoard = [];
    const cols = Math.ceil(width / resolution);
    const rows = Math.ceil(height / resolution);

    for (let i = 0; i < cols + 1; i++) {
      newBoard[i] = [];
      for (let j = 0; j < rows + 1; j++) {
        newBoard[i][j] = random(0, 1);
      }
    }
    setBoard(newBoard);
  }, [resolution, width, height]);

  const drawLine = useCallback(
    ([x1, y1], [x2, y2]) => {
      ctx.lineWidth = 2;
      ctx.strokeStyle = color.line;
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    },
    [ctx, color]
  );

  const drawBoard = useCallback(() => {
    const ctx = ref.current.getContext("2d");
    const { primary, secondary } = color;
    ctx.clearRect(0, 0, width, height);
    const cols = Math.ceil(width / resolution);
    const rows = Math.ceil(height / resolution);
    if (showPoints) {
      board.forEach((row, i) => {
        row.forEach((cell, j) => {
          ctx.fillStyle = cell ? secondary : primary;
          ctx.fillRect(
            i * resolution - halfPointWidth,
            j * resolution - halfPointWidth,
            pointWidth,
            pointWidth
          );
        });
      });
    }

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        let y = i * resolution;
        let x = j * resolution;

        let vectors = {
          a: [x + halfWidth, y],
          b: [x + resolution, y + halfWidth],
          c: [x + halfWidth, y + resolution],
          d: [x, y + halfWidth],
        };
        try {
          const cellState = getCellState(
            board[j][i],
            board[j + 1][i],
            board[j + 1][i + 1],
            board[j][i + 1]
          );
          getLinePath(cellState, vectors, drawLine);
        } catch (e) {
          continue;
        }
      }
    }
  }, [
    board,
    resolution,
    width,
    height,
    ref,
    drawLine,
    halfWidth,
    showPoints,
    pointWidth,
    color,
    halfPointWidth,
  ]);

  useEffect(() => {
    let board = ref.current;
    let ctx = board.getContext("2d");

    ctx.globalAlpha = 1;
    setCtx(ctx);
  }, [board, ref]);

  useEffect(() => {
    generateBoard();
  }, [resolution, width, height, generateBoard]);

  useEffect(() => {
    if (ctx && board) {
      drawBoard();
    }
  }, [board, drawBoard, ctx]);

  return { generateBoard };
}
