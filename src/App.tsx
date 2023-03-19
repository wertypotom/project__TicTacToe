import React, { useEffect, useState } from "react";
import FieldCell from "./components/FieldCell";
import { initCells, patterns } from "./const";
import "./index.css";
import { Cell } from "./types/cell";
import { Marks } from "./types/marks";

type Props = {};

const App = () => {
    const [field, setField] = useState<Cell[]>(initCells);
    const [currentSign, setCurrentSign] = useState<Marks>(Marks.CROSS);
    const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

    useEffect(() => {
        if (!!checkForWin()) {
            setIsGameFinished(true);
        }
    }, [currentSign]);

    const checkForWin = () => {
        for (let index = 0; index < patterns.length; index++) {
            const [a, b, c] = patterns[index];

            if (
                !!field[a].mark &&
                field[a].mark === field[b].mark &&
                field[a].mark === field[c].mark
            ) {
                const newFields = field.map((item) => {
                    if (item.id === a || item.id === b || item.id === c) {
                        return { ...item, coloured: true };
                    }

                    return item;
                });

                setField(newFields);
                return true;
            }
        }
    };

    const reset = () => {
        setField(initCells);
        setIsGameFinished(false);
        setCurrentSign(Marks.CROSS);
    };

    const setSign = (id: number) => {
        if (!!field[id].mark) return;

        const newFields = field.map((field) => {
            if (field.id === id) {
                return { ...field, mark: currentSign };
            }

            return field;
        });

        setField(newFields);

        setCurrentSign((prev) =>
            prev === Marks.CIRCLE ? Marks.CROSS : Marks.CIRCLE
        );
    };

    return (
        <div className="container">
            {field.map((item) => (
                <FieldCell
                    setSign={(id) => setSign(id)}
                    item={item}
                    key={item.id}
                    disabled={isGameFinished}
                />
            ))}

            {isGameFinished && (
                <div className="game-status_container" onClick={reset}>
                    Try Again !
                </div>
            )}
        </div>
    );
};

export default App;
