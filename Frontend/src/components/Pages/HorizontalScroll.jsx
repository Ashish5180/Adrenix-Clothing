import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const HorizontalScroll = () => {
  return (
    <div className="bg-neutral-800">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-900">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      
    </div>
  );
};

export default HorizontalScroll;

const cards = [
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2023/11/358699458/DM/ET/FS/185472145/new-product-500x500.jpeg",
    id: 1,
  },
  {
    url: "https://uspoloassn.in/cdn/shop/files/7_b74321a0-705c-42ae-a7eb-cbfa90fb325e_3024x.jpg?v=1697018055",
    id: 2,
  },
  {
    url: "https://m.media-amazon.com/images/I/71NGO30g-pL._AC_UY1100_.jpg",
    id: 3,
  },
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2023/11/358676958/QW/FP/GP/185472145/new-product.jpeg",
    id: 4,
  },
  {
    url: "https://5.imimg.com/data5/SELLER/Default/2023/11/358699223/PC/SA/UD/185472145/new-product-500x500.jpeg",
    id: 5,
  },
  {
    url: "https://i.pinimg.com/236x/66/11/be/6611bee761dafa408b3d3ca4ad828e75.jpg",
    id: 6,
  },
  {
    url: "https://hamercop.com/cdn/shop/files/3011_3.jpg?v=1705658205",
    id: 7,
  },
];