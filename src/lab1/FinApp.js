import React from "react";

import { StockProvider } from "./StockProvider";
import StockTradingApp from "./StockTradingApp";

function FinApp() {
    return (
        <StockProvider>
            <StockTradingApp />
        </StockProvider>
    );
}

export default FinApp;