var x = document.querySelector(".outDiv")
console.log(x.parentNode)
console.log(x.childNodes)
for (let i=0; i<x.childNodes.length; i++) {
	if(x.childNodes[i].nodeType === 8 || (x.childNodes[i].nodeType === 3 && !/\S/.test(x.childNodes[i].nodeValue))) {
      x.removeChild(x.childNodes[i]);
      i--;
    }
}
console.log(x.childNodes)