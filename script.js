function calculateEMI() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanTenure = parseInt(document.getElementById('loanTenure').value);

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTenure)) {
        alert('Please enter valid numbers');
        return;
    }

    const monthlyInterestRate = (interestRate / 100) / 12;
    const totalPayments = loanTenure;
    
    const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /
                (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);

    const emiRounded = Math.round(emi * 100) / 100;

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your EMI: €€{emiRounded.toFixed(2)} / month`;
}