const compareBits=(b1,b2,b3,b4)=>{
    if(b1.toString().length!=b2.toString().length&&b1.toString().length!=b3.toString().length&&b1.toString().length!=b4.toString().length){
        console.log("b1 length didn't match one of them");
        return false;
    }
    else if(b2.toString().length!=b3.toString().length&&b2.toString().length!=b4.toString().length){
        console.log("b2 length didn't match one of them");
        return false;
    }
    else if(b3.toString().length!=b4.toString().length){
        console.log("b3 length didn't match b4");
        return false;
    }
    else 
        return true;
}
const getParityBits= async(req,res)=>{
    var b1= req.query.b1;
    var b2= req.query.b2;
    var b3= req.query.b3;
    var b4= req.query.b4;
    var parityBits="";
    if(!compareBits(b1,b2,b3,b4)){
        return res.status(404).json({
            success: false,
            error: "The length of one or more bits do not match the others "
        })
    }
    console.log(`${b1}, ${b2}, ${b3}, ${b4}`);
    var numOnes=0;
    for(var i = 0; i<b1.toString.length;i++){
        if(b1.toString().charAt(i)===1)
            numOnes++;
        else if(b2.toString().charAt(i)===1)
            numOnes++;
        else if(b3.toString().charAt(i)===1)
            numOnes++;
        else if(b4.toString().charAt(i)===1)
            numOnes++;
        if(numOnes%2==0)
            parityBits+="0";
        else
            parityBits+="1";
        numOnes=0;
    }
    return res.status(200).json({
        parityBits

        
    })
}

module.exports={
    getParityBits
}