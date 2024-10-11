import prisma from "../utils/prisma.js";

export const createTransaction = async (req, res) => {
    try {
        // request body
        const { title, amount, type } = req.body;

        // validasi request
        if (!title || !amount || !type) {
            return res.status(400).json({ message: "Semua field harus diisi" });
        }

        // create transaction
        await prisma.transaction.create({
            data: { title, amount, type }
        });

        // response
        res.status(201).json({ message: "Transaksi berhasil dibuat" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getAllTransaction = async (req, res) => {
    try {
        // Ambil semua transaksi
        const transactions = await prisma.transaction.findMany();
        if (!transactions) {
            return res.status(404).json({ message: "Data tidak ditemukan" });
        }

        // Hitung balance
        const balance = transactions.reduce((acc, transaction) => {
            return transaction.type === 'INCOME'
                ? acc + transaction.amount
                : acc - transaction.amount;
        }, 0);

        // Kirim response dengan balance
        res.status(200).json({ transactions, balance });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateTransaction = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, amount, type } = req.body;

        // validasi request
        const transaction = await prisma.transaction.findUnique({ 
            where: { id } 
        });

        if (!transaction) {
            return res.status(404).json({ message: "Transaksi tidak ditemukan" });
        }

        // update transaction
        await prisma.transaction.update({
            where: { id }, data: { title, amount, type }
        });

        // response
        res.status(200).json({ message: "Transaksi berhasil diubah" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteTransaction = async (req, res) => {
    try {
        const { id } = req.body;

        const transaction = await prisma.transaction.findUnique({ 
            where: { id } 
        });

        if (!transaction) {
            return res.status(404).json({ 
                message: "Transaksi tidak ditemukan" 
            });
        }

        // proses delete
        await prisma.transaction.delete({ 
            where: { id } 
        });

        // response
        res.status(200).json({ message: "Transaksi berhasil dihapus" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
