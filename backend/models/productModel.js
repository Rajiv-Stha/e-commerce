const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    image: [],
    specs:[],
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("product", productSchema);


// const mongoose = require("mongoose");

// const productSchema = mongoose.Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     desc: {
//       type: String,
//       required: true,
//     },
//     image: [],
//     specs:[],
//     price: {
//       type: Number,
//       required: true,
//     },
//     quantity: {
//       type: Number,
//       required: true,
//     },
//     category: {
//       type: String,
//       required: true,
//     }
//   },
//   { timestamps: true }
// );

// module.exports = mongoose.model("product", productSchema);



// I want to make a find product category whose price is more than or equal to min  and less than or equal to max and whose 