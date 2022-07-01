import { deepcopy } from 'copy';

var _pj;

var Grid, elements, square_indx;

function _pj_snippets(container) {
  function in_es6(left, right) {
    if (right instanceof Array || typeof right === "string") {
      return right.indexOf(left) > -1;
    } else {
      if (right instanceof Map || right instanceof Set || right instanceof WeakMap || right instanceof WeakSet) {
        return right.has(left);
      } else {
        return left in right;
      }
    }
  }

  container["in_es6"] = in_es6;
  return container;
}

_pj = {};

_pj_snippets(_pj);

Grid = [[".", ".", "2", "3"], [".", ".", ".", "."], [".", ".", ".", "."], ["3", "4", ".", "."]];
elements = ["1", "2", "3", "4"];

function get_rows(new_Grid) {
  var row, rows;
  rows = [];

  for (var i = 0, _pj_a = 4; i < _pj_a; i += 1) {
    row = {};

    for (var y = 0, _pj_b = 4; y < _pj_b; y += 1) {
      row[[i, y]] = new_Grid[i][y];
    }

    rows.append(row);
  }

  return rows;
}

function get_cols(new_Grid) {
  var col, cols;
  cols = [];

  for (var i = 0, _pj_a = 4; i < _pj_a; i += 1) {
    col = {};

    for (var x = 0, _pj_b = 4; x < _pj_b; x += 1) {
      col[[x, i]] = new_Grid[x][i];
    }

    cols.append(col);
  }

  return cols;
}

square_indx = [[[0, 1], [0, 1]], [[0, 1], [2, 3]], [[2, 3], [0, 1]], [[2, 3], [2, 3]]];

function get_squares(new_Grid) {
  var square, squares;
  squares = [];

  for (var i = 0, _pj_a = 4; i < _pj_a; i += 1) {
    square = {};

    for (var x, _pj_d = 0, _pj_b = square_indx[i][0], _pj_c = _pj_b.length; _pj_d < _pj_c; _pj_d += 1) {
      x = _pj_b[_pj_d];

      for (var y, _pj_g = 0, _pj_e = square_indx[i][1], _pj_f = _pj_e.length; _pj_g < _pj_f; _pj_g += 1) {
        y = _pj_e[_pj_g];
        square[[x, y]] = new_Grid[x][y];
      }
    }

    squares.append(square);
  }

  return squares;
}

function get_all_related_cells(new_Grid) {
  var all_vec, cols, rows, squares;
  squares = get_squares(new_Grid);
  rows = get_rows(new_Grid);
  cols = get_cols(new_Grid);
  all_vec = squares + rows + cols;
  return all_vec;
}

function get_new_r_c(r, c) {
  var new_c, new_r;

  if (c === 3) {
    if (r === 3) {
      new_r = r;
      new_c = c;
    } else {
      new_c = 0;
      new_r = r + 1;
    }
  } else {
    new_r = r;
    new_c = c + 1;
  }

  return [new_r, new_c];
}

function get_legal_for_cell(cell_r, cell_c, new_Grid) {
  var all_vec, exist, map, rest;

  if (new_Grid[cell_r][cell_c] !== ".") {
    return [[null], [null], [null]];
  }

  map = {};
  all_vec = get_all_related_cells(new_Grid);

  for (var a, _pj_c = 0, _pj_a = all_vec, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    a = _pj_a[_pj_c];

    if (_pj.in_es6([cell_r, cell_c], a.keys())) {
      map.update(a);
    }
  }

  exist = [];

  for (var m, _pj_c = 0, _pj_a = map, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    m = _pj_a[_pj_c];

    if (!(map[m] === ".")) {
      exist.append(map[m]);
    }
  }

  rest = list(set(elements) - set(exist));
  return [rest, exist, map];
}

function is_complete(new_Grid) {
  var grid_complete;
  grid_complete = true;

  for (var r, _pj_c = 0, _pj_a = new_Grid, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    r = _pj_a[_pj_c];
    grid_complete = grid_complete && !_pj.in_es6(".", r);
  }

  return grid_complete;
}

function print_grid(new_Grid) {
  for (var item, _pj_c = 0, _pj_a = new_Grid, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    item = _pj_a[_pj_c];
    console.log(item);
  }

  console.log();
}

function solve_step_in_sudoko(last_Grid, r, c) {
  var _, legal_for_cell, new_Grid, new_c, new_r;

  if (is_complete(last_Grid)) {
    console.log("Complete:");
    print_grid(last_Grid);
    return 0;
  }

  [legal_for_cell, _, _] = get_legal_for_cell(r, c, last_Grid);

  for (var item, _pj_c = 0, _pj_a = legal_for_cell, _pj_b = _pj_a.length; _pj_c < _pj_b; _pj_c += 1) {
    item = _pj_a[_pj_c];
    new_Grid = deepcopy(last_Grid);

    if (last_Grid[r][c] === ".") {
      new_Grid[r][c] = item;
    }

    [new_r, new_c] = get_new_r_c(r, c);
    solve_step_in_sudoko(new_Grid, new_r, new_c);
  }
}

console.log("Incomplete:");
print_grid(Grid);
solve_step_in_sudoko(Grid, 0, 0);
