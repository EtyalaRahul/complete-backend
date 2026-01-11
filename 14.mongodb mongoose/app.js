
const mongoose = require("mongoose");
require("dotenv").config()

mongoose
  .connect(
    process.env.MONGODB_URI
  )
  .then(() => console.log("data connected successfully"))
  .catch((err) => console.log(err));

const mongooseSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  isActive: Boolean,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

//create user model
const User = mongoose.model("User", mongooseSchema);

async function runQueryExamples() {
  try {
    // create a new document
    const newUser = await User.create({
      name: "updated user2",
      email: "updateduser2@gmail.com",
      age: 20,
      isActive: true,
      tags: ["Developer", "Designer", "Manager"],
    });

    // const newUser = new User({
    //   name: "Deleted user",
    //   email: "deleteUser@gmail.com",
    //   age: 20,
    //   isActive: false,
    //   tags: ["Developer", "Designer", "Manager"],
    // });

    // await newUser.save(newUser);
    console.log("Created new User", newUser);

    //get all the users

    // const allUsers = await User.find({});
    // console.log(allUsers);

    // const ActiveFalse = await User.find({ isActive: true });
    // console.log(ActiveFalse);

    // const ActiveFalse = await User.findOne({ isActive: true });
    // console.log(ActiveFalse);
    //get all the users

    // const allUsers = await User.findById('696379207bf0bd0978d0c271');
    // console.log(allUsers);

    //select particular fileds

    //- means not include

    // const selectedFields=await User.find().select('name email -_id')
    // console.log(selectedFields)

    // select two and skip first some
    // const limitedUsers=await User.find().select('name email -_id').limit(2).skip(2);
    // console.log("limited users" ,limitedUsers)

    //Sorted Users
    // const sortedUsers = await User.find()
    //   .select("name email  -_id")
    //   .sort({ name: -1, age: 1 });
    // console.log(sortedUsers);

    //count the documents where isactive is true

    // const countDocuments = await User.countDocuments({ isActive: false });
    // console.log(countDocuments);

    //delete user by id

    // const DeletedUser=await User.findByIdAndDelete('696382913ff36fd82ddcb3a4')
    // console.groupCollapsed(DeletedUser)

    //update user

    const updatedUser = await User.findByIdAndUpdate(
      newUser._id,
      {
        $set: { age: 100 },
        $push: { tags: "updated" },
      },
      { new: true }
    );
    console.groupCollapsed(updatedUser);
  } catch (err) {
    console.log(err);
  } finally {
    await mongoose.connection.close();
  }
}

runQueryExamples();
