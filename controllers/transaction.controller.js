import Transaction from "../model/transaction.model.js";

export const TransactionIndex = async (req, res) => {
  try {
    const transactions = await Transaction.find();
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const TransactionCreate = async (req, res) => {
  console.log(req.body);

  //    validate your data
 
  try {
     const newtransaction = new Transaction({
       description: req.body.description,
       amount: req.body.amount,
     });
     await newtransaction.save();
    return res.status(200).json(newtransaction);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

export const TransactionDetail = async (req, res) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (transaction == null) {
      return res.status(404).json({ message: "Cannot find transaction" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const TransactionUpdate = async (req, res) => {
  try {
    const updatetransaction = await Transaction.findOneAndUpdate(
      { _id: req.params.id },

      {
        text: req.body.text,
        amount: req.body.amount,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updatetransaction);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const TransactionDelete = async (req, res) => {
  const transactionId= req.params.id;

  try {
    await Transaction.deleteOne({ _id: transactionId });
    res.json({ message: "Transaction deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
 
};
