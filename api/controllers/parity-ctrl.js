const getParityBits= async(req,res)=>{
    var b1= req.params.bits1;
    var b2= req.params.bits2;
    var b3= req.params.bits3;
    var b4= req.params.bits4;
    var parityBits;
    if(b1.length!=b2.length!=b3.length!=b4.length){
        return res.status(404).json({
            success: false,
            error: "The length of one or more bits do not match the others "
        })
    }
    
    return res.status(200).json({
        parityBits

        
    })
}

module.exports={
    getParityBits
}