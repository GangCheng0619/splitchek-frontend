//! import image
import adverProduct from "assets/images/home/banner16.png";
import productImage from "assets/images/home/image20.png";
import percentImage from "assets/images/home/banner18.png";
export const data = [
  {
    type: "product",
    isTop: true,
    src: productImage,
    comments: 56,
    price: "$22.95",
    soldBy: "Rekisa",
    shipsFrom: "Queensland- Australia",
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
  },
  {
    type: "product",
    isTop: false,
    src: productImage,
    comments: 56,
    price: "$22.95",
    soldBy: "Rekisa",
    shipsFrom: "Queensland- Australia",
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
  },
  {
    type: "carsouel",
    images: [
      {
        src: adverProduct,
      },
      {
        src: adverProduct,
      },
    ],
    comments: 56,
    price: "$22.95",
    soldBy: "Rekisa",
    shipsFrom: "Queensland- Australia",
    title: "INCREDIBLY CLEAR ACNE SPOT 14.7ML",
    description:
      "Do you want a clearer skin? Then you found the right product. The solution is salycylic acid, glycolic acid and white willow bark...",
  },
];
