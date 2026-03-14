const size = 5;

for (let i = 1; i <= 2 * size - 1; i++) 
{
    let iRow = '';
    let iDistance = i <= size ? size - i : i - size;
    let width = 2 * size - 1;

    for (let j = 0; j < width; j++) 
    {
        let leftStar = iDistance;
        let rightStar = width - iDistance - 1;
        if (j === leftStar || j === rightStar) 
        {
            iRow += '*';
        } 
        else 
        {
            iRow += ' ';
        }
    }

    console.log(iRow);

}
