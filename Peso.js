//Peso: kilogramos a libras
export function convPeso(a,b){
    if (b==0) {
        return a * 2.205;
    } else if (b==1) {
        return a / 2.205;
    }
}