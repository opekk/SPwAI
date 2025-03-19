const calc = (a,b,p) => {
    if(!(a||b||p)){
        return "Podaj wszystkie argumenty!"
    }
    
    switch (p){
        case '+':{
            return a+b
        }
        case '-':{
            return a-b
        }
        case '*':{
            return a*b
        }
        case '/':{
            if (b > 0){
                return a/b
            }
            else return "b nie moze byc rowne 0"
        }
    }
}
exports.calc = calc