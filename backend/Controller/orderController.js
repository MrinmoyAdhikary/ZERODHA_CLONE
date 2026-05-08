
const orderModel = require("../Models/order");
const holdingModel = require("../Models/holding");
const positionModel = require("../Models/position");

const getPercentText = (currentPrice, averagePrice) => {
    if (!averagePrice) {
        return "0.00%";
    }

    const change = ((currentPrice - averagePrice) / averagePrice) * 100;
    return `${change >= 0 ? "+" : ""}${change.toFixed(2)}%`;
};

const updateHolding = async ({ userId, name, qty, price, mode }) => {
    const holding = await holdingModel.findOne({ userId, name });

    if (mode === "BUY") {
        if (!holding) {
            return holdingModel.create({
                userId,
                name,
                qty,
                avg: price,
                price,
                net: "0.00%",
                day: "0.00%",
                isLoss: false,
            });
        }

        const totalQty = holding.qty + qty;
        const averagePrice = ((holding.qty * holding.avg) + (qty * price)) / totalQty;

        holding.qty = totalQty;
        holding.avg = averagePrice;
        holding.price = price;
        holding.net = getPercentText(price, averagePrice);
        holding.isLoss = price < averagePrice;

        return holding.save();
    }

    if (!holding) {
        throw new Error("You do not have this stock in holdings");
    }

    if (holding.qty < qty) {
        throw new Error("Sell quantity cannot be greater than holding quantity");
    }

    holding.qty -= qty;
    holding.price = price;
    holding.net = getPercentText(price, holding.avg);
    holding.isLoss = price < holding.avg;

    if (holding.qty === 0) {
        return holdingModel.deleteOne({ _id: holding._id });
    }

    return holding.save();
};

const updatePosition = async ({ userId, name, qty, price, mode }) => {
    const position = await positionModel.findOne({ userId, name });
    const signedQty = mode === "BUY" ? qty : -qty;

    if (!position) {
        return positionModel.create({
            userId,
            product: "CNC",
            name,
            qty: signedQty,
            avg: price,
            price,
            net: "0.00%",
            day: "0.00%",
            isLoss: false,
        });
    }

    const previousQty = position.qty;
    const newQty = previousQty + signedQty;

    if (mode === "BUY" && newQty > 0) {
        position.avg = ((previousQty * position.avg) + (qty * price)) / newQty;
    }

    position.qty = newQty;
    position.price = price;
    position.net = getPercentText(price, position.avg);
    position.isLoss = price < position.avg;

    return position.save();
};

module.exports.newOrder = async (req, res) => {
    try {
        const { userId, name, qty, price, mode } = req.body;
        const orderQty = Number(qty);
        const orderPrice = Number(price);
        const orderMode = mode?.toUpperCase();

        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        if (!name) {
            return res.status(400).json({ message: "Stock name is required" });
        }

        if (!Number.isInteger(orderQty) || orderQty <= 0) {
            return res.status(400).json({ message: "Quantity must be greater than 0" });
        }

        if (!Number.isFinite(orderPrice) || orderPrice <= 0) {
            return res.status(400).json({ message: "Price must be greater than 0" });
        }

        if (!["BUY", "SELL"].includes(orderMode)) {
            return res.status(400).json({ message: "Mode must be BUY or SELL" });
        }

        await updateHolding({ userId, name, qty: orderQty, price: orderPrice, mode: orderMode });
        await updatePosition({ userId, name, qty: orderQty, price: orderPrice, mode: orderMode });

        const newOrder = new orderModel({
            userId,
            name,
            qty: orderQty,
            price: orderPrice,
            mode: orderMode,
        });

        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (error) {
        const badOrderMessages = [
            "You do not have this stock in holdings",
            "Sell quantity cannot be greater than holding quantity",
        ];
        const statusCode = badOrderMessages.includes(error.message) ? 400 : 500;

        res.status(statusCode).json({ message: error.message || "Failed to create order" });
    }
};

module.exports.allOrders = async (req, res) => {
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        const allOrder = await orderModel.find({ userId });
        res.json(allOrder);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders", error: error.message });
    }
};
