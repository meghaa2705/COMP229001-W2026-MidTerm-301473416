let CarModel = require('../models/cars');

// GET ONE CAR
module.exports.getCar = async function (req, res, next) {
    try {
        let car = await CarModel.findById(req.params.id);

        res.status(200).json({
            success: true,
            data: car
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// CREATE CAR
module.exports.create = async function (req, res, next) {
    try {
        let result = await CarModel.create(req.body);

        res.status(200).json({
            success: true,
            message: "Car created successfully.",
            data: result
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// GET ALL CARS
module.exports.getAll = async function (req, res, next) {
    try {
        let list = await CarModel.find({});

        res.status(200).json({
            success: true,
            message: "Car list retrieved successfully.",
            data: list
        });

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// UPDATE CAR
module.exports.update = async function (req, res, next) {
    try {
        let result = await CarModel.updateOne(
            { _id: req.params.id },
            req.body
        );

        if (result.modifiedCount > 0) {
            res.status(200).json({
                success: true,
                message: "Car updated successfully."
            });
        } else {
            throw new Error("Car not updated.");
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};

// DELETE CAR
module.exports.remove = async function (req, res, next) {
    try {
        let result = await CarModel.deleteOne({ _id: req.params.id });

        if (result.deletedCount > 0) {
            res.status(200).json({
                success: true,
                message: "Car deleted successfully."
            });
        } else {
            throw new Error("Car not deleted.");
        }

    } catch (error) {
        console.log(error);
        next(error);
    }
};