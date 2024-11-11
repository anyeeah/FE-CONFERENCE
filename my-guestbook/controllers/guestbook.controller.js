import GuestBook from "../models/guestbook.model.js";

export const getAllEntries = async (req, res) => {
    try{
        const entries = await GuestBook.find(); 
        //res.status(200).json(entries);
        res.render("guestbook", {entries});
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생", error});
    }
};

export const getEntryById = async (req, res) => {
    const {id} = req.params;
    try{
        const entry = await GuestBook.findById(id);
        if(!entry){
            res.status(404).json({message:"해당하는 데이터가 없습니다"});
        }
        res.status(200).json({message:"특정 방명록 조회 성공"});
    }catch(error){
        res.status(500).json({message:"조회 과정에서 에러 발생", error});
    }
};

export const createEntry = async (req, res) => {
    const {author, message} = req.body;
    try{
        const newEntry = new GuestBook({author, message});
        await newEntry.save();
        res.redirect("/guestbook");
    }catch(error){
        res.status(500).json({message:"생성 과정에서 에러 발생", error});
    }
};

// 삭제 로직
export const deleteEntry = async (req, res) => {
    const { id } = req.params;
    try {
        const entry = await GuestBook.findByIdAndDelete(id);
        if (!entry) return res.status(404).json({ message: "해당하는 데이터가 없습니다." });
        res.status(200).json({ message: "삭제 완료" });
    } catch (error) {
        res.status(500).json({ message: "삭제 과정에서 에러 발생", error });
    }
};

// 수정 로직
export const updateEntry = async (req, res) => {
    const { id } = req.params;
    const { author, message } = req.body;
    try {
        const entry = await GuestBook.findByIdAndUpdate(id, { author, message }, { new: true });
        if (!entry) return res.status(404).json({ message: "해당하는 데이터가 없습니다." });
        res.status(200).json({ message: "수정 완료", entry });
    } catch (error) {
        res.status(500).json({ message: "수정 과정에서 에러 발생", error });
    }
};