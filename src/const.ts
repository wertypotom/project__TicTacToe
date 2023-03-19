import { Cell } from "./types/cell";

export const patterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const initCells: Cell[] = [
    {
        id: 0,
        mark: null,
        coloured: false,
    },
    {
        id: 1,
        mark: null,
        coloured: false,
    },
    {
        id: 2,
        mark: null,
        coloured: false,
    },
    {
        id: 3,
        mark: null,
        coloured: false,
    },
    {
        id: 4,
        mark: null,
        coloured: false,
    },
    {
        id: 5,
        mark: null,
        coloured: false,
    },
    {
        id: 6,
        mark: null,
        coloured: false,
    },
    {
        id: 7,
        mark: null,
        coloured: false,
    },
    {
        id: 8,
        mark: null,
        coloured: false,
    },
];
