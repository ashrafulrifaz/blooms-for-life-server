const FundingModel = require('../../models/Funding')

const totalFundingCount = async (req, res) => {
    try {
        const result = await FundingModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);
        res.send({ totalAmount: result.length > 0 ? result[0].totalAmount : 0 });
    } catch (error) {
        res.status(201).send({message: error.message})
    }
}

module.exports = totalFundingCount;