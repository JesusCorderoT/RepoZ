// 1. Staircase
// - Write a function that prints a staircase according to the specs bellow
// - Input: n Where 0 < n <= 100
// - Output: A staircase of any special symbol (#, @, *, &, !, etc) right aligned composed of height n and width n

// 4 
//      #
//     ##
//    ###
//   ####

function StairCase(n) {
    for (let i = 1; i <= n; i++) {
      let spaces = " ".repeat(n - i);
      let stairs = ".".repeat(i);
      console.log(spaces + stairs);
    }
  }


  StairCase(7);



// 2. Book
// - You are reading a book and want to get to a certain page number inside that book since you forgot where you left it, count how many page turns you have to do untill you reach the desired page.
//     - Take note that opening the book doesn't count as a page turn, and when opened, the right side of the page is always page 1.
//     - When flipped, page 2 and 3 are in view, so that's pageTurns = 1, when flipped again pages 4 and 5 are in view, so that's pageTurns = 2
//     - Every page, except first and last are always printed on both sides.
//     2. The book is n pages long and you want to turn to page p
//     3. Input: 
//         - n: number of pages in book
//         - p: page you want to get to
//         - Constraints: 1 <= n <= 10^5, 1 <= p <= n
//     4. Output: number of page turns

// Sample input 
// 6, 2

// Sample output
// 1

function pageCount(n, p) {
    let frontTurns = Math.floor(p / 2);
    let backTurns = Math.floor((n / 2) - (p / 2));
    return Math.min(frontTurns, backTurns);
  }

  console.log(pageCount(6, 2)); 



// 3. Birds in migration
// - You are watching birds migrate in the country, taking notes on the different types of birds you encounter by setting their ID on an array. If more than 1 type has been spotted that maximum amount, return the smallest of their IDs.
//     - Input: ```arr[4,4,2,2,3]``` 
//         - Constrints: 2 < arr <= 2x10^5, where ```n``` inside the array is 0 < n <= 5
//     - Output: Type: 2
//         - Type 9 and 2 have two ocurrences (the maximum in the array), but 2 is the smallest of their IDs, so return 'Type: 2'


// Sample input:
// [1,4,4,2,1,1,1]

// Sample output:
// Type: 1


function findMostCommonBird(arr) {
    let birdCounts = Array(6).fill(0);
    for (let i = 0; i < arr.length; i++) {
      birdCounts[arr[i]]++;
    }
    let maxCount = Math.max(...birdCounts);
    let mostCommonBird = birdCounts.indexOf(maxCount);
    return "Type: " + mostCommonBird;
  }

console.log(findMostCommonBird([1,4,4,2,1,1,1]));
