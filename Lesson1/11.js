for (let a = 0, len = 20, suck = []; a < len; a++) {
  suck.push('#');
  console.log(suck.join(''));
}

for (let a = 0, len = 7, suck = ''; a < len; a++) {
  console.log(suck += '2');
}


const pyramidBase = 9;
const pyramidSlaveBuilderNiggga = (new Array(pyramidBase)).fill('_');
const pyramidHeight = Math.ceil(pyramidBase / 2);
const pyramidCenter = Math.floor(pyramidBase / 2);
const pyramidMagic = pyramidBase % 2;

let borderLeft  = pyramidCenter + pyramidMagic;
let borderRight = pyramidCenter - 1;

const THE_PYRAMID = [];

for(let a = 0; a < pyramidHeight; a++) {
  pyramidSlaveBuilderNiggga[--borderLeft]  = '#';
  pyramidSlaveBuilderNiggga[++borderRight] = '#';

  THE_PYRAMID.push(pyramidSlaveBuilderNiggga.join(''));
}

THE_PYRAMID.forEach(val => console.log(val));
console.log('');
THE_PYRAMID.reverse().forEach(val => console.log(val));
