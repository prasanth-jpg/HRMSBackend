import Attendance from "../models/Attendance.js";

export const clockAction = async (req, res)=>{
  try{
    const { userId } = req.body;

    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digital",
      month: "short",
      year: "numeric"
    });

    const time = new Date().toLocaleTimeString("en-GB", { hour12: false });

    let att = await Attendance.findOne({ userId, date: today})

    if(!att){
      att= await Attendance.create({
        userId,
        date: today,
        records: [{ clockIn: time, clockOut: null}],
        totalWork: "0h 0m",
        status: "Present"
      });
      return res.json(att)
    }
    if(!att){
      return res.json({
        userId,
        date: today,
        records: [],
        totalWork: "0h 0m",
        status: "Absent"
      })
    }

    //Get Last Record
    const lastRecord = att.records[att.records.length - 1];

    if(lastRecord.clockOut === null){
      lastRecord.clockOut = time;
    } else {
      att.records.push({clockIn: time, clockOut: null})
    }

    const totalMinutes = att.records.reduce((sum, r)=>{
      if(!r.clockOut) return sum;
      const start = new Date(`${att.date} ${r.clockIn}`);
      const end = new Date(`${att.date} ${r.clockOut}`);

      return sum + (end - start) / 100 / 60;
    }, 0);

    const hours = Math.floor(totalMinutes / 60);
    const mint = Math.floor(totalMinutes % 60);

    att.totalWork = `${hours}h ${mins}m`;

    await att.save();

    res.json(att)
  }
  catch(err){
    res.status(500).json({error: err.message})
  }
}

export const getTodayAttendance = async (req, res) => {
  const { userId } = req.params;

  const today = new Date().toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric"
  });

  const att = await Attendance.findOne({
    userId, date: today
  })

  res.json(att || null)
}
