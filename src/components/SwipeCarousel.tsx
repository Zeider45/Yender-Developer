import { motion, useMotionValue } from "framer-motion";
import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

const DRAG_BUFFER = 50;
const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};
const AUTO_DELAY = 10000;

export default function SwipeCarousel({ images }: { images: string[] }) {
  const [imageIndex, setImageIndex] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);
  const [passImage, setPassImage] = useState<boolean>(false);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const x = dragX.get();
      if (x === 0 && dragging == false && passImage == false) {
        setImageIndex((pv) => {
          if (pv === images.length - 1) {
            return 0;
          } else {
            return pv + 1;
          }
        });
      }
    }, AUTO_DELAY);

    if (passImage) {
      setPassImage(false);
    }

    return () => clearInterval(interval);
  }, [dragging, passImage]);

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);

    const x = dragX.get();
    if (x <= -DRAG_BUFFER && imageIndex < images.length - 1) {
      setImageIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imageIndex > 0) {
      setImageIndex((pv) => pv - 1);
    }
  };

  const next = () => {
    setImageIndex((pv) => pv + 1);
    setPassImage(true);
  };

  const back = () => {
    setImageIndex((pv) => pv - 1);
    setPassImage(true);
  };

  return (
    <div className="relative min-h-max overflow-hidden py-2">
      {imageIndex != 0 && (
        <span
          className=" absolute top-[35%] md:top-[43%] left-4 md:left-8 z-20"
          onClick={back}
        >
          <ArrowLeft style="  rounded-full  bg-[--btn-slider-bg] text-[--text-card]  btn-slider-scale cursor-pointer hover:bg-[--main-text] size-10 md:size-12 p-1" />
        </span>
      )}
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imageIndex * 100}%`,
        }}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        transition={SPRING_OPTIONS}
        className="flex items-center cursor-grab active:cursor-grabbing "
      >
        <Images images={images} imageIndex={imageIndex} />
      </motion.div>
      <Dots
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
        images={images}
      />
      {imageIndex != images.length - 1 && (
        <span
          onClick={next}
          className=" absolute top-[35%] md:top-[43%] right-4 md:right-8  z-20"
        >
          <ArrowRight style=" rounded-full  bg-[--btn-slider-bg] text-[--text-card]  btn-slider-scale cursor-pointer hover:bg-[--main-text] size-10 md:size-12 p-1" />
        </span>
      )}
    </div>
  );
}

const Images = ({
  images,
  imageIndex,
}: {
  images: string[];
  imageIndex: number;
}) => {
  return (
    <>
      {images.map((img, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imageIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-full shrink-0 rounded-xl bg-neutral-800 object-cover "
          />
        );
      })}
    </>
  );
};

const Dots = ({
  imageIndex,
  setImageIndex,
  images,
}: {
  imageIndex: number;
  setImageIndex: Dispatch<SetStateAction<number>>;
  images: string[];
}) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2 ">
      {images.map((img, idx) => (
        <button
          key={idx}
          onClick={() => setImageIndex(idx)}
          className={`h-3 w-3 rounded-full  transition-colors ${
            idx === imageIndex
              ? "bg-[--card-text] scale-[1.4]"
              : "bg-[--card-semi-text]"
          } `}
        />
      ))}
    </div>
  );
};
