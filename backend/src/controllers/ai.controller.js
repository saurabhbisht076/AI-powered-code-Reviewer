const aiService = require('../services/ai.services');

module.exports.getReview = async (req, res)=>{
    const prompt = req.body.code;
    if(!prompt){
        return res.status(400).send("prompt is required");
    }
    const response = await aiService(prompt);
    res.send(response);
}