const calcValue = (searchTax, minutes, plan) => {
  let exceeded = 0;
  let totalValuePlan = 0.0;
  let totalValue = 0.0;
  let percent = 0;

  if (minutes > plan) {
    exceeded = minutes - plan;
    percent = ((exceeded * searchTax.value) / 100) * 10;
    totalValuePlan = exceeded * searchTax.value + percent;
  }
  totalValue = searchTax.value * minutes;

  return { totalValue, totalValuePlan };
};

export default calcValue;
