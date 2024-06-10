//created a server using Express.
import express from "express";
const app = express();
const port = 3000;

app.get("/",(req,res) => {
    res.send("Hello world");
});
app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

//netstat -ano | findstr "LISTENING"   // used for checking the ports which are in used.

// http keywords:

// Get-used to request resource from server.
//post-sending the resource to server.
//put-replace a complete resource.
//patch-patch up the resources means updating only small part of resource.
//delete-delete the resource.