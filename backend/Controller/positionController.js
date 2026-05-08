const positionModel = require("../Models/position");

module.exports.showPositions=(async(req,res)=>{
    try {
        const { userId } = req.query;

        if (!userId) {
            return res.status(400).json({ message: "userId is required" });
        }

        const allPositions=await positionModel.find({ userId });
        res.json(allPositions);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch positions", error: error.message });
    }
});
