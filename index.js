
if (document.getElementById('data')) {
    let element = document.getElementById('data');
    element.addEventListener('submit', function(event) {
        event.preventDefault();
        let stocks = parseFloat(document.getElementById('stocks').value);
        let income = parseFloat(document.getElementById('income').value);
        let house = parseFloat(document.getElementById('house').value);
        let savings = parseFloat(document.getElementById('savings').value);
        stocks *= (1 + 0.07)**10; 
        income *= (1 + 0.04)**10;
        house *= (1 + 0.03)**10;
        savings *= (1 + 0.0001)**10;
        localStorage.setItem('stocks', stocks);
        localStorage.setItem('income', income);
        localStorage.setItem('house', house);
        localStorage.setItem('savings', savings);
        window.location.href = 'next.html';
    });
}
if (window.location.pathname.endsWith('next.html')) {
    let stocks = localStorage.getItem('stocks');
    let income = localStorage.getItem('income');
    let house = localStorage.getItem('house');
    let savings = localStorage.getItem('savings');
    if (stocks && income && house && savings) {
        document.getElementById('stocks').textContent = 'Stocks: ' + stocks;
        document.getElementById('income').textContent = 'Income: ' + income;
        document.getElementById('house').textContent = 'House: ' + house;
        document.getElementById('savings').textContent = 'Savings: ' + savings;
    }
}
