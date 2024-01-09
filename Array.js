function sumOfEvens(arr) {

    // filter for events, push to new array, then sum
  
    let evenArr=arr.reduce((a,e) => a.concat(e) ,[])
    return evenArr.reduce((a,e) => {
      if (e%2===0){
        console.log(e)
       a+e;
      }
    },0) 
  }
  
  sumOfEvens([
    [1, 0, 2],
    [5, 5, 7],
    [9, 4, 3]
  ]) 