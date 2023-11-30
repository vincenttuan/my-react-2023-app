import React from "react";

import { StockProvider } from "./StockProvider";
import StockTradingApp from "./StockTradingApp";
import ErrorBoundary from "./ErrorBoundry";

function FinApp() {
    return (
        <ErrorBoundary>
            <StockProvider>
                <StockTradingApp />
            </StockProvider>
        </ErrorBoundary>
    );
}

export default FinApp;