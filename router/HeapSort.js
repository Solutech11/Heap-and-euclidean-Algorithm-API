let router= require('express').Router()

router.post('/',(req,res)=>{
    let array = req.body.array;
    
    //list of arrays
    let newArr=[]

    //if err
    let err=false;

    //getting array from string
    array.split(',').map(i=>{
        isNaN(i)?err=true:null;

        newArr.push(Number(i))
    })


    //if error
    if(err)return res.status(500).json({Error:"String found"})
    
    res.json({Error:false, Result:heapSort(newArr).join('\n\n')})
})


function heapSort(arr) {
    let n = arr.length;
    let steps = [];
  
    // Helper function to heapify a subtree rooted with node i
    function heapify(arr, n, i) {
      let largest = i; // Initialize largest as root
      let left = 2 * i + 1; // left child
      let right = 2 * i + 2; // right child
  
      // If left child is larger than root
      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
  
      // If right child is larger than largest so far
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }
  
      // If largest is not root
      if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]]; // swap
        steps.push(`Heapify: Swapped elements ${arr[i]} and ${arr[largest]}, Result: [${arr.join(', ')}]`);
  
        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
      }
    }
  
    // Build heap (rearrange array)
    steps.push(`Start: [${arr.join(', ')}]`);
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
      steps.push(`Build Heap: After heapifying index ${i}, Result: [${arr.join(', ')}]`);
    }
  
    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
      // Move current root to end
      [arr[0], arr[i]] = [arr[i], arr[0]];
      steps.push(`Extract: Moved max element ${arr[i]} to end, Result: [${arr.join(', ')}]`);
  
      // Call max heapify on the reduced heap
      heapify(arr, i, 0);
      steps.push(`Heapify: After heapifying root, Result: [${arr.join(', ')}]`);
    }
  
    steps.push(`Sorted array: [${arr.join(', ')}]`);
    return steps;
  }
  
 

module.exports= router