function Total(qty, price) {
    return qty * price;
}
function Print(Name, Price, Qty, Rating) {
    if (Rating) {
        console.log("\n    Name : ".concat(Name, "\n\n    Price: ").concat(Price, "\n\n    Qty: ").concat(Qty, "\n\n    Total: ").concat(Total(Qty, Price), "\n\n    Rating: ").concat(Rating, "\n  "));
    }
    else {
        console.log("\n    Name : ".concat(Name, "\n\n    Price: ").concat(Price, "\n\n    Qty: ").concat(Qty, "\n\n    Total: ").concat(Total(Qty, Price), "\n  "));
    }
}
Print("Samsung TV", 45000.33, 2, 4.3);
