function randomIdx(arr){
  if(arr.length <= 0){
    console.log("Array is empty")
  }
  const idx = Math.floor(Math.random() * arr.length);
  return idx;
}

export default randomIdx;