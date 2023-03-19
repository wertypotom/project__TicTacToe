import { Marks } from "./marks";

export type Cell = {
    id: number;
    mark: Marks | null;
    coloured: boolean;
};
