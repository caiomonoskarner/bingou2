function generateBingoCard() {
    const bingoCard = document.getElementById('bingoCard');
    bingoCard.innerHTML = '';

    const headerRow = document.createElement('tr');
    const headers = ['B', 'I', 'N', 'G', 'O'];
    headers.forEach(header => {
        const th = document.createElement('th');
        th.textContent = header;
        headerRow.appendChild(th);
    });
    bingoCard.appendChild(headerRow);

    const cardNumbers = {
        B: generateRandomNumbers(1, 15, 5),
        I: generateRandomNumbers(16, 30, 5),
        N: generateRandomNumbers(31, 45, 5),
        G: generateRandomNumbers(46, 60, 5),
        O: generateRandomNumbers(61, 75, 5)
    };

    for (let i = 0; i < 5; i++) {
        const row = document.createElement('tr');
        headers.forEach((header, index) => {
            const td = document.createElement('td');
            if (header === 'N' && i === 2) {
                td.textContent = 'Free';
                td.style.backgroundColor = '#d3d3d3';
            } else {
                td.textContent = cardNumbers[header][i];
            }
            row.appendChild(td);
        });
        bingoCard.appendChild(row);
    }
}

function generateRandomNumbers(min, max, count) {
    const numbers = [];
    while (numbers.length < count) {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    return numbers;
}
