// Handle Tax Planning Form Submission
document.getElementById('tax-planning-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const annualIncome = document.getElementById('annual-income').value;
    const taxRegime = document.getElementById('tax-regime').value;
    const pfContribution = document.getElementById('pf-contribution').value;
    const npsContribution = document.getElementById('nps-contribution').value;

    alert(`Annual Income: ₹${annualIncome}\nTax Regime: ${taxRegime}\nTotal PF Contribution: ₹${pfContribution}\nNPS Contribution: ₹${npsContribution}`);
    // Process other inputs similarly
});