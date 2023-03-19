import React from "react";
import { Cell } from "../types/cell";
import { Marks } from "../types/marks";

type Props = {
    item: Cell;
    setSign: (id: number) => void;
    disabled: boolean;
};

const FieldCell = ({ item, setSign, disabled }: Props) => {
    return (
        <button
            disabled={disabled}
            className="cell"
            onClick={() => setSign(item.id)}
            style={{ backgroundColor: item.coloured ? "red" : "" }}
        >
            {!!item.mark && (
                <div
                    className={`cell-sign ${
                        item.coloured ? "cell-winner" : ""
                    }`}
                >
                    {item.mark === Marks.CIRCLE ? "o" : "x"}
                </div>
            )}
        </button>
    );
};

export default FieldCell;
