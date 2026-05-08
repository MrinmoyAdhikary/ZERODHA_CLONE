const holdingModel = require("../Models/holding");

module.exports.showHoldings=(async(req,res)=>{
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        const allHoldings=await holdingModel.find({ userId });
        res.json(allHoldings);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch holdings", error: error.message });
    }
});
