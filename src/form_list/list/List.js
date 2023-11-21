import React from "react";
import ListUI from "./ListUI";

const finProducts = [
    {id: 1, symbol: '2330.TW', amount: 10},
    {id: 2, symbol: '2317.TW', amount: 20},
    {id: 3, symbol: '1101.TW', amount: 30}
];

function List() {
    return <ListUI products={finProducts} />;
}

export default List;