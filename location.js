const router=require('express').Router();
const axios=require('axios')

router.get('/getLocation/:lat/:lon',async(req,res)=>{
    const {lat,lon}=req.params;
    try {
        const url=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&zoom=18&addressdetails=1&lat=${lat}&lon=${lon}`
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


module.exports={router};