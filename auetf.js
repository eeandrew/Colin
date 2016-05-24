var MarketVolume = [10,2,5,2];

var MarketPrice = [2,3,-1,-2];

var Trade = 10;

var hold = 0;

var earning = []; //纯利润 + 成本

var cost = [];

for(var indicator=0;indicator<MarketPrice.length;indicator++) {
	//加持的条件
	if(hold === 0 && MarketPrice[indicator] > 0) {
		hold = Trade;
		cost.push(Trade*MarketPrice[indicator]);
		continue;
	}
	//减持的条件
	if(hold	> 0 && MarketPrice[indicator] > 0) {
		earning.push(Math.min(hold,MarketVolume[indicator]) * MarketPrice[indicator]);
		hold = hold - Math.min(hold,MarketVolume[indicator]);
		continue;
	}
}

console.log(earning);
console.log(cost);
