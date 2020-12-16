function randomIdFrom(num){
  if(num <= 0){
    console.log("Users do not exist")
  }
  const id = Math.floor(Math.random() * num);
  return id === 0 ? id + 1 : id;
}

export default randomIdFrom;