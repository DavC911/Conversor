import {temperatura} from './Temp.js';
import {distancia} from './Dist.js';
import {convPeso} from './Peso.js';

let temp = document.getElementById('temp');
let temp1 = document.getElementById('temp1');
let temp2 = document.getElementById('temp2');

let dist = document.getElementById('dist');
let dist1 = document.getElementById('dist1'); 
let dist2 = document.getElementById('dist2');

let pesos = document.getElementById('peso');
let peso1 = document.getElementById('peso1');
let peso2 = document.getElementById('peso2');

temp1.addEventListener('keyup',()=>{
    if (temp1.value!=='') {
        let temper = temperatura(temp1.value,temp.value);
        temp2.value=temper;
    } else {
        temp2.value='';
    }
});
temp.addEventListener('change', ()=>{
    if (temp1.value!=='') {
        let temper = temperatura(temp1.value,temp.value);
        temp2.value=temper;
    } else {
        temp2.value='';
    }
})

dist1.addEventListener('keyup',()=>{
    if (dist1.value!=='') {
        let distan = distancia(dist1.value,dist.value);
        dist2.value=distan;
    } else {
        dist2.value='';
    }
})
dist.addEventListener('change',()=>{
    if (dist1.value!=='') {
        let distan = distancia(dist1.value,dist.value);
        dist2.value=distan;
    } else {
        dist2.value='';
    }
})

peso1.addEventListener('keyup',()=>{
    if (peso1.value !== '') {
        let p = convPeso(peso1.value,pesos.value);
        peso2.value=p;
    } else {
        peso2.value='';
    }
})
pesos.addEventListener('change',()=>{
    if (peso1.value !== '') {
        let p = convPeso(peso1.value,pesos.value);
        peso2.value=p;
    } else {
        peso2.value='';
    }
})