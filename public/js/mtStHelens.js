const scale = 1
const radius = 2
const data = mtStHelensData[0].dataMatrix
const container3d = document.querySelector('.mt-st-helens')
console.log(container3d);
const mt = new Geometry3DnoGui(container3d,data,scale,radius)
