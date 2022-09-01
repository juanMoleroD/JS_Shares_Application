use sharesApp;

db.dropDatabase();

db.portfolio.insertMany([
    {
        shareName: "GOOG",
        sharePurchasePrice: 110,
        heldAmount: 2
    },
    {
        shareName: "AAPL",
        sharePurchasePrice: 120,
        heldAmount: 1
    },
    {
        shareName: "TSLA",
        sharePurchasePrice: 150,
        heldAmount: 3
    }
]);