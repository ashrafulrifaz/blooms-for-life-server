const FundingModel = require('../../models/Funding')

const fundingCount = async (req, res) => {
    const donation_id = parseInt(req.params.donation_id);
  
    try {
      const result = await FundingModel.aggregate([
        {
          $match: {
            donation_id: donation_id,
          },
        },
        {
          $group: {
            _id: null,
            totalAmount: { $sum: '$amount' },
          },
        },
      ]);
  
      res.send({ totalAmount: result.length > 0 ? result[0].totalAmount : 0 });
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

module.exports = fundingCount