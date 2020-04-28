/*
create a function that takes two parameters, an array of elements and an index, 
and logs every element, except those whose index is greater than the input index. 
*/

// 2 inputs - an array and an index
function useBreak(array, index) {
    // create a for loop which iterates over the input array
    for (var i = 0; i < array.length; i++){
     // if current index is greater than the input index
        if (i > index) {
            // use described statement to stop the loop completely 
            break;
        } // log the current array element to the console
        console.log(array[i]);
    }
}

//test the function by calling it

useBreak(['a', 'b', 'c', 'd', 'e'], 2);
/*
will log:
a
b
c
*/


useBreak([1, 2, 3, 4, 5, 6], 3);
/*
will log::
1
2
3
4
*/