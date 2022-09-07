use sharesApp;

db.dropDatabase();

db.portfolio.insertMany([
    {
        shareName: "GOOG",
        sharePurchasePrice: "50",
        heldAmount: "2"
    },
    {
        shareName: "AAPL",
        sharePurchasePrice: "47",
        heldAmount: "1"
    }
]);