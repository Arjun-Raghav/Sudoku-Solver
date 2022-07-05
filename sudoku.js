 document.addEventListener("DOMContentLoaded", function(event) {     
   num=document.getElementById("num")

    // Board 9x9
    for (let r = 0; r <9; r++) {
        for (let c = 0; c < 9; c++) {
           
         
            var tile = document.createElement("input");
         
           tile.id = r.toString() + c.toString();
         
          //var nav= document.createElement("INPUT")
         
           tile.setAttribute("type","text");
          tile.setAttribute("align","centre");
          tile.setAttribute("inputmode","numeric");
          tile.setAttribute("autocomplete","off");
          tile.classList.add("tile");

            document.getElementById("board").append(tile);
        }
    }
    let board = [
  [ 8, 0, 0, 0, 0, 0, 0, 0, 0 ],
   [0, 0, 3, 6, 0, 0, 0, 0, 0 ],
   [ 0, 7, 0, 0, 9, 0, 2, 0, 0 ],
   [ 0, 5, 0, 0, 0, 7, 0, 0, 0 ],
   [ 0, 0, 0, 0, 4, 5, 7, 0, 0 ],
   [ 0, 0, 0, 1, 0, 0, 0, 3, 0 ],
   [ 0, 0, 1, 0, 0, 0, 0, 6, 8 ],
   [0, 0, 8, 5, 0, 0, 0, 1, 0 ],
   [0, 9, 0, 0, 0, 0, 4, 0, 0 ] 
];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
            if(board[u][v]!=0)
             document.getElementById(u.toString() +v.toString()).value=board[u][v];
          
        }
    }
});


function loader() {
  let board = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
              [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
              [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
              [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
              [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
              [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
              [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
             if(document.getElementById(u.toString() +v.toString()).value!=null)
             board[u][v]=document.getElementById(u.toString() +v.toString()).value;
             else
             	board[u][v]=0;
          
        }
    }
  let N = board.length;
  finalans(board,N);
}


function Sample1()
{reset();
	let board1 = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
              [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
              [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
              [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
              [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
              [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
              [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
          if(board1[u][v]!=0)
             document.getElementById(u.toString() +v.toString()).value=board1[u][v];
        }
    }
}
function Sample2()
{reset();
	let board2 = [ [ 0, 1,0 , 0,0 , 4, 0, 6, 0 ],
              [ 0, 8, 0, 5, 0, 0, 0, 4, 2 ],
              [ 0, 0, 0, 3, 8, 0, 1, 0, 0 ],
              [ 0, 0, 2, 0, 0, 5, 0, 0, 4 ],
              [ 0, 7, 0, 0, 3, 0, 0, 8, 0 ],
              [ 0, 3, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 9, 0, 6, 5, 0, 0, 7, 3 ],
              [ 7, 0, 0, 9, 0, 0, 0, 0, 0],
              [ 0, 0, 5, 0, 7, 8, 0, 0, 6 ] ];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
           if(board2[u][v]!=0)  
          document.getElementById(u.toString() +v.toString()).value=board2[u][v];
        }
    }
}
function Sample3()
{reset();
	let board3 = [ [ 0, 0, 0, 8, 0, 0, 0, 0, 5],
              [ 2, 0, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 6, 3, 0, 0, 1, 4, 0, 0 ],
              [ 9, 0, 0, 0, 0, 0, 7, 0, 0 ],
              [ 0, 7, 2, 1, 0, 0, 0, 8, 0 ],
              [ 4, 0, 0, 0, 0, 2, 0, 0, 0 ],
              [ 0, 1, 7, 0, 0, 3, 6, 0, 0 ],
              [ 0, 9, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 0, 0, 0, 6, 0, 0, 4, 0 ] ];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
          if(board3[u][v]!=0)
             document.getElementById(u.toString() +v.toString()).value=board3[u][v];
        }
    }
}
function reset()
{
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
         
             document.getElementById(u.toString() +v.toString()).value=null;
             
        }
    }
}

/* A Backtracking program in
Javascript to solve Sudoku problem */

function isSafe(board, row, col, num)
{
	
	// Row has the unique (row-clash)
	for(let d = 0; d < board.length; d++)
	{
		
		// Check if the number we are trying to
		// place is already present in
		// that row, return false;
		if (board[row][d] == num)
		{
			return false;
		}
	}

	// Column has the unique numbers (column-clash)
	for(let r = 0; r < board.length; r++)
	{
		
		// Check if the number
		// we are trying to
		// place is already present in
		// that column, return false;
		if (board[r][col] == num)
		{
			return false;
		}
	}

	// Corresponding square has
	// unique number (box-clash)
	let sqrt = Math.floor(Math.sqrt(board.length));
	let boxRowStart = row - row % sqrt;
	let boxColStart = col - col % sqrt;

	for(let r = boxRowStart;
			r < boxRowStart + sqrt; r++)
	{
		for(let d = boxColStart;
				d < boxColStart + sqrt; d++)
		{
			if (board[r][d] == num)
			{
				return false;
			}
		}
	}

	// If there is no clash, it's safe
	return true;
}

function solveSudoku(board, n)
{
	let row = -1;
	let col = -1;
	let isFilled = true;
	for(let i = 0; i < n; i++)
	{
		for(let j = 0; j < n; j++)
		{
			if (board[i][j] == 0)
			{
				row = i;
				col = j;

				// We still have some remaining
				// missing values in Sudoku
				isFilled = false;
				break;
			}
		}
		if (!isFilled)
		{
			break;
		}
	}

	// No empty space left
	if (isFilled)
	{
		return true;
	}

	// Else for each-row backtrack
	for(let num = 1; num <= n; num++)
	{
		if (isSafe(board, row, col, num))
		{
			board[row][col] = num;
			if (solveSudoku(board, n))
			{
				
				// print(board, n);
				return true;
			}
			else
			{
				
				// Replace it
				board[row][col] = 0;
			}
		}
	}
	return false;
}

function print(board, N)
{
	
	// We got the answer, just print it
	for(let r = 0; r < N; r++)
	{
		for(let d = 0; d < N; d++)
		{
			
      document.getElementById(r.toString() + d.toString()).value =board[r][d];
      
     
		}
		
	}
}

function finalans(board,N){
 
if (solveSudoku(board, N))
{  
	
	// Print solution
	print(board, N);
}
else
{
	alert("No solution");
}
}

function checkans(board)
{ 

     
  
    for (let u = 0; u <9; u++) {console.log(1)
        for (let v = 0; v < 9; v++) {console.log(2)
          if(board[u][v]!=0)
          {      var t =board[u][v];
          	      board[u][v]=0;
          	if(!isSafe(board,u,v,t))
          		{
          			console.log(4)
          		
          			document.getElementById(u.toString() + v.toString()).setAttribute("style","color:red")
          			console.log(5)

          		}
          	else
          	{
          		board[u][v]=t;
          	}	
          

             
        }
          }
    }

}
function check()
{    let board = [ [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
              [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
              [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
              [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
              [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
              [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
              [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
              [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
              [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] ];
  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
             if(document.getElementById(u.toString() +v.toString()).value!=null)
             board[u][v]=document.getElementById(u.toString() +v.toString()).value;
             else
             	board[u][v]=0;

          
        }
    }
   checkans(board)
}

function decheck()
{
	  for (let u = 0; u <9; u++) {
        for (let v = 0; v < 9; v++) {
             if(document.getElementById(u.toString() +v.toString()).value!=null)
             document.getElementById(u.toString() +v.toString()).setAttribute("style","color:black")
             

          
        }
    }
}

