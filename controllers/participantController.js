const Host = require('../models/host');
const Slot = require('../models/slot');
const SlotRequest = require('../models/slot_request');


module.exports.getAvailableSlots = async (req,res) => {
    try {

        let hostId = req.body.hostId;

        let host = await Host.findOne({_id:hostId});

        if(!host) {
            return res.status(400);
        }

        let slots = await Slot.find({host:host._id, status:"AVAILABLE"});

        console.log("slots ",slots, hostId, host);

        return res.status(200).json(slots);

    } catch(err) {
        console.log("Error in getting available slots", err);
        return res.status(500);
    }
}



module.exports.requestForSlot = async (req,res) => {
    try {

        let hostId = req.body.hostId;

        let host = await Host.findOne({_id:hostId});

        console.log("host ", host);

        if(!host) {
            return res.status(400);
        }


        let participantId = req.body.participantId;

        let participant = await Host.findOne({_id:participantId});

        if(!participant) {
            return res.status(400);
        }

        console.log("participant ", participant);


        let slotId = req.body.slotId;

        let slot = await Slot.findOne({_id:slotId, status:"AVAILABLE"});

        console.log("slot ", slot);

        if(!slot) {
            let message=`Incorrect info or slot unvailable`;
            return res.status(400).json(message);
        }


        slot = await Slot.updateOne({_id: slot._id}, {$set:{status: "BOOKED"}});

        console.log("slot updated", slot);


        let slotRequest = await SlotRequest.create({
           host:hostId,
           participant:participantId,
           slot:slotId,
           status:"PENDING"
        });

        console.log("slot request created",slotRequest);

        return res.status(200).json(slot);

    } catch(err) {
        console.log("Error in getting available slots", err);
        return res.status(500);
    }
}





module.exports.addHost = async (req,res) => {
    try {

        let name = req.body.name;

        let host = await Host.create({name});

        if(!host) {
            return res.status(400);
        }

        return res.status(200).json(host);

    } catch(err) {
        console.log("Error in getting available slots", err);
        return res.status(500);
    }
}



module.exports.addSlot = async (req,res) => {
    try {

        let hostId = req.body.hostId;

        let host = await Host.findOne({_id:hostId});

        if(!host) {
            return res.status(400);
        }

        let slot = await Slot.create({
            host:host._id.toString(),
            timeStart:req.body.start,
            timeEnd:req.body.end,
            status:"AVAILABLE"
        })

        return res.status(200).json(slot);

    } catch(err) {
        console.log("Error in getting available slots", err);
        return res.status(500);
    }
}