export const calculateEmi = (p, r, n) => {
    //  P × r × (1 + r)n/((1 + r)n - 1)
    const rate = r / 12 / 100; // loan rate per year / 100 = loan percentage
    const emi = ((p * rate * (1 + rate) ** n) / (((1 + rate) ** n) - 1));
    const total = emi * n; // total amount to be paid including interest
    const interest = total - p // interest = total amount - principle amount
    return { interest: Math.round(interest), emi: Math.round(emi), total: Math.round(total) };
}