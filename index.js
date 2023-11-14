const playingField = document.getElementById('playingField');

playingField.addEventListener('click', (e) => {
    removeGroup(e.target);
});
function removeGroup(clickedElement) {
    const playingField = document.getElementById('playingField');
    const cells = playingField.querySelectorAll('.cell');
    const clickedCell = Array.from(cells).findIndex(cell => cell === clickedElement);
    const CELLS_IN_ROW = 6;

    const clickedCellValue = clickedElement.innerHTML;

    if (clickedCell === -1) {
        return;
    }

    dfs(clickedCell);

    function dfs(cellIndex) {
        const cell = cells[cellIndex];

        // Check if the cell has the same value as the clicked one
        if (cell && cell.innerHTML === clickedCellValue) {
            cell.innerHTML = '';

            // Calculate the row and column based on the grid dimensions (6x7)
            const row = Math.floor(cellIndex / CELLS_IN_ROW);
            const col = cellIndex % CELLS_IN_ROW;

            // Recursively search in the adjacent cells (up, down, left, right)
            if (col > 0) dfs(cellIndex - 1); // Left
            if (col < CELLS_IN_ROW - 1) dfs(cellIndex + 1); // Right
            if (row > 0) dfs(cellIndex - CELLS_IN_ROW); // Up
            if (row < CELLS_IN_ROW) dfs(cellIndex + CELLS_IN_ROW); // Down
        }
    }
}