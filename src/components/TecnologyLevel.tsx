const LEVEL_STYLES = {
  Basic: "bg-green-400",
  Intermidiate: "bg-yellow-400",
  Advanced: "bg-red-500",
};

export default function TecnologyLevel({
  children,
  level,
}: {
  children: React.ReactNode;
  level: "Basic" | "Intermidiate" | "Advanced";
}) {
  return (
    <div className="relative">
      {children}
      <div
        className={`absolute size-2  rounded-full bottom-0 right-0 ${LEVEL_STYLES[level]}`}
      ></div>
    </div>
  );
}
