import app from "./app";

  const port = process.env.PORT || 4000;

const startServer = () =>{

 try {
     
    
    app.listen(port, () =>{
    console.log(`Server is running on port ${port}`)

})
 } catch (error) {
    console.error('Failed to Fetch Server',error)
    
 }


}

startServer();