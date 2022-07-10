const Driver = require("./driversModel");


const getAllDrivers = async (req, res, next) => {
    try {
        const data = await Driver.find();
        return res.status(200).json(data);

    } catch (error) {
        next(error)
    }

}

const getOne = async(req,res,next)=>{
    const driver_id= req.params;
    const data = await Driver.findById(driver_id);
    if (data instanceof Error) next(data);
    res.status(200).json(data);
}

module.exports = { getAllDrivers,getOne}