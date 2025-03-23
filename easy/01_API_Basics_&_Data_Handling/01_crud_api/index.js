express = require("express");
mongoose = require("mongoose");
app = express();
app.use(express.json());
const userSchema = new mongoose.Schema({
  name: String,
  rollno: Number,
});
const User = mongoose.model("User", userSchema);

app.get("/", async (req, res) => {
  try {
    const item = await User.find();
    res.status(200).json(item);
  } catch (error) {
    res.send("error");
  }
});
app.post("/create", async (req, res) => {
  try {
    var { name, rollno } = req.body;
    console.log(name, rollno);
    const user = new User({ name, rollno });
    await user.save();
    res.send("created").status(200);
  } catch (error) {
    res.status(500);
  }
});
app.patch("/update/:id", async (req, res) => {
  try {
    var updatedata = req.body;
    var id = req.params.id;
    var exist = await User.findByIdAndUpdate(id, updatedata, { new: true, upsert: true });
    if (!exist) {
      res.send("unsuccessful").status(200);
    }
    res.status(200).send(updatedata);
  } catch (error) {
    res.status(500);
  }
});

mongoose.connect("mongodb://localhost:27017/learn").then(console.log("Connected"));
app.listen(3000);
