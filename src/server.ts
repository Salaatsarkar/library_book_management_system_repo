
import app from "./app";
import config from "./config";
import { pool } from "./db/db";

  

const startServer = async () =>{

 try {
     
   const time = await pool.query("SELECT NOW()");
   //console.log(time)
   console.log("database connected" ,time.rows[0].now)
  
    
    app.listen(config.port, () =>{
    console.log(`Server is running on port ${config.port}`)

})
 } catch (error) {
    console.error('Failed to Fetch Server',error)
    
 }


}

startServer();