//Distancia: metros a pies

export function distancia(a,b){
    if (b==0) {
        //kilometro
        return (a*0.3048);
    }else if (b==1) {
        return (a/0.3048);
    }else if (b==2) {
        return a*10*10*10;
    }else if (b==3) {
        return a/10/10/10;
    }else if (b==4) {
        return a/10/10;
    }else if (b==5) {
        return a*10*10;
    }else if (b==6) {
        return a*10
    }else if (b==7) {
        return a/10
    }
}