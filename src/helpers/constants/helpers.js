export const financial = (x) => Number.parseFloat(x).toFixed(8);
export const financialUsd = (x) => Number.parseFloat(x).toFixed(6);
export const percentage = (x) => Number.parseFloat(x).toFixed(2);
export const trade = (x) => Number.parseFloat(x).toFixed(18);
export const amount = (x) => Number.parseInt(x/100000000);
