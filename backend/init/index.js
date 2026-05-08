const mongoose=require("mongoose");
const init=require("./data.js")
const holdingModel = require("../Models/holding.js");
const positionModel = require("../Models/position.js");


async function main(params) {
    await mongoose.connect("mongodb://mrinmoyadhikary:ToxeOLYWn680hRJu@ac-cwm31lb-shard-00-00.6yswbcx.mongodb.net:27017,ac-cwm31lb-shard-00-01.6yswbcx.mongodb.net:27017,ac-cwm31lb-shard-00-02.6yswbcx.mongodb.net:27017/zerodha?ssl=true&replicaSet=atlas-7w2f09-shard-0&authSource=admin&appName=zerodha-clone-cluster");
}

const initDB = async () => {
    try {
        await holdingModel.deleteMany({});
        await positionModel.deleteMany({});

        const hd = init.holdings.map((obj) => ({ ...obj }));
        const pd = init.positions.map((obj) => ({ ...obj }));

        await holdingModel.insertMany(hd);
        await positionModel.insertMany(pd);

        console.log("Data inserted successfully");
    } catch (error) {
        console.error("Error inserting data:", error);
    }
};

main().then(() => {
    console.log("Connection success");
    initDB(); // Call initDB after successful connection
}).catch((error) => {
    console.error("Connection failed:", error);
});

