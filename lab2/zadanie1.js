function sumator(...args){
    console.log("Suma liczb: ", args, "to: ", args.reduce((partialSum, a) => partialSum + a, 0));
}

sumator(1,2,3)
