// Add your functions here
function map(sourceArray, f)
{
    let array = [];

    sourceArray.forEach(element =>
    {
        array.push(f(element));
    });

    return array;
}

function reduce(sourceArray, f, startingPoint)
{
    let answer = !!startingPoint ? startingPoint : sourceArray[0];
    let i = !!startingPoint ? 0 : 1;

    for (; i < sourceArray.length; i++)
    {
        answer = f(sourceArray[i], answer);
    }

    return answer;
}