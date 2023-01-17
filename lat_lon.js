const router=require('express').Router();
const axios=require('axios')

router.get('/getLatLon/:pinCode/:city/:district/:state/:country',async(req,res)=>{
    const {pinCode,city,district,state,country}=req.params;
    try {
        const url=`https://nominatim.openstreetmap.org/?q=${pinCode}+${city}+${district}+${state}+${country}&format=jsonv2&limit=1&addressdetails=1`
        const result=await axios.get(url);
        const address=result.data;
        if(!address)
        return res.json({status:"Wrong Input"})

        res.json({status:"Location Address",address});

    } catch (error) {
        console.log(error);
        res.send("Internal Server Error");
    }
})


module.exports=router;