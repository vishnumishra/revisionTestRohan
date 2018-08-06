var r = {};

r.fibonacci = function (position) {
    if(position < 1) return ;

    if(Math.floor(position) != position) return;

    if(position === 1){
        return 0;
    };
    if(position === 2){
        return 1 ;
    }

    return r.fibonacci(position-1) + r.fibonacci(position-2);
}

r.readBinary = (binaryNum)=>{
  
};


exports.r = r;

