
/////////////////////////////////////LEET CODE 2418:SORT THE PEOPLE//////////////////////////////////////////

var sortPeople = function(names, heights) {
    let temp;
    let tempHeight;

    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                temp = names[i];
                names[i] = names[j];
                names[j] = temp;

                tempHeight = heights[i];
                heights[i] = heights[j];
                heights[j] = tempHeight;
            }
        }
    }

    return names;
};

console.log(sortPeople(["Mary","John","Emma"],[180,165,170]));
//Output: ["Mary","Emma","John"]
//Explanation: Mary is the tallest, followed by Emma and John.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////