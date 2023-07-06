export function temperatura(a,b){ 
    if (b==0) {
        return (a*1.8)+32; // De C a F
    } else if (b==1){
        return ((a-32)/1.8); // De F a C
    } else if (b==2) {
        return (a-273.15); // De K a C
    } else if (b==3){
        return 273.15+Number(a); // De C a K
    } else if (b==4) {
        return (5/9*(a-32)+273.15); // De F a K
    } else if (b==5){
        return (1.8*(a-273.15)+32); // De K a F
    }
}
