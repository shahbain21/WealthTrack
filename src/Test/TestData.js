const testData = {
   "stocks": [
      {
         id: 'META',
         value: 527.18,
         purchasePrice: 200,
         assetType: "stocks",
         purchaseDate: "2020-01-01",
         notes: ""
      },

      {
         id: 'AMZN',
         value: 1282.15,
         assetType: "stocks"
      },

      {
         id: 'AAPL',
         value: 742.63,
         assetType: "stocks"
      },

      {
         id: 'NFLX',
         value: 974.28,
         assetType: "stocks"
      },

      {
         id: 'GOOGL',
         value: 1146.95,
         assetType: "stocks"
      },

   ],

   "crypto": [
      // {id: 'BTC', value: 1053.94},
      // {id: 'ETH', value: 258.73},
   ],

   "real_estate": [
      // {id: '1234 some Blvd, Los Angeles, CA, 56789', value: 25000},
   ],

   "precious_metals":
   [
      // {id: 'Gold', value: 1500},
      // {id: 'Silver', value: 250},
   ],

   "other": [
      {
         id: 'Cash',
         value: 4000,
         assetType: "other"
      },
      {
         id: 'Bonds',
         value: 200,
         assetType: "other"
      },
   ],

}

// "totals": [
//    {id: 'stocks', value: (527.18 + 1282.15 + 742.63 + 974.28 + 1146.95)},
//    {id: 'crypto', value: (1053.94 + 258.73)},
//    {id: 'Real Estate', value: 25000},
//    {id: 'Precious Metals', value: (1500 + 250)},
//    {id: 'Other', value: (4000 + 200)},
// ]

export default testData;