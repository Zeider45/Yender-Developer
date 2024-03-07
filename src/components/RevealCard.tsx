import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function RevealCard({
  children,
  styleType,
}: {
  children: JSX.Element;
  styleType: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);
  return (
    <div className="overflow-hidden px-4">
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, x: styleType == "left" ? -165 : 160 },
          visible: { opacity: 1, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {children}
      </motion.div>
    </div>
  );
}
