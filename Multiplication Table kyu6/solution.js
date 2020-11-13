multiplicationTable = function(size) {
    const solution = [];
    for (let i=1; i<=size; i++) {
      const arrsToBePushed = Array(size).fill(1).map((el, index) => (el + index) * i);
      solution.push(arrsToBePushed);
    };
    return solution;
  };
  
  multiplicationTable(3);