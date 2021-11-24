const displayPermissions= async(req,res)=>{
    var number= req.params.number;
    var pbits= number.toString().split('').map(Number);
    var ownerBit= pbits[0];
    var groupBit= pbits[1];
    var otherBit= pbits[2];
    var ownerPerm;
    var groupPerm;
    var otherPerm;
    if(ownerBit===0){
        ownerPerm="";
    }
    else if(ownerBit===1){
        ownerPerm="execute";
    }
    else if(ownerBit===2){
        ownerPerm="write";
    }
    else if(ownerBit===3){
        ownerPerm="write,execute";
    }
    else if(ownerBit===4){
        ownerPerm="read";
    }
    else if(ownerBit===5){
        ownerPerm="read,execute";
    }
    else if(ownerBit===6){
        ownerPerm="read,write";
    }
    else if(ownerBit===7){
        ownerPerm="read,write,execute";
    }

    if(groupBit===0){
        groupPerm="";
    }
    else if(groupBit===1){
        groupPerm="execute";
    }
    else if(groupBit===2){
        groupPerm="write";
    }
    else if(groupBit===3){
        groupPerm="write,execute";
    }
    else if(groupBit===4){
        groupPerm="read";
    }
    else if(groupBit===5){
        groupPerm="read,execute";
    }
    else if(groupBit===6){
        groupPerm="read,write";
    }
    else if(groupBit===7){
        groupPerm="read,write,execute";
    }
    if(otherBit===0){
        otherPerm="";
    }
    else if(otherBit===1){
        otherPerm="execute";
    }
    else if(otherBit===2){
        otherPerm="write";
    }
    else if(otherBit===3){
        otherPerm="write,execute";
    }
    else if(otherBit===4){
        otherPerm="read";
    }
    else if(otherBit===5){
        otherPerm="read,execute";
    }
    else if(otherBit===6){
        otherPerm="read,write";
    }
    else if(otherBit===7){
        otherPerm="read,write,execute";
    }
    return res.status(200).json({
        "owner":`[${ownerPerm}]`,
        "group":`[${groupPerm}]`,
        "other":`[${otherPerm}]`
    })
}