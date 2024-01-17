const product = require("../models/Productmodel");

const getallproducts = async (req, res) => {
    const { email, name, select, sort } = req.query;
    const queryObject = {};

    if (email) {
        queryObject.email = email;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }

    try {
        let mydataQuery = product.find(queryObject);

        if (sort) {
            let sortFix = sort.replace(",", " ");
            mydataQuery = mydataQuery.sort(sortFix);
        }

        if (select) {
            let selectFix = select.replace(",", " ");
            mydataQuery = mydataQuery.select(selectFix);
        }

        const mydata = await mydataQuery.exec();
        res.status(200).json({ mydata });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

const getallproductstesting = async (req, res) => {
    const mydata = await product.find(req.query).sort("-name");
    res.status(200).json({ mydata });
};

module.exports = { getallproducts, getallproductstesting };
