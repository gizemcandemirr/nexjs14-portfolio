type CardProps = {
  title: string;
  description: string;
  bgColor: string;
  rotateAngle: string; // Rotation angle as a string, e.g., "-6" or "6"
};

const Card: React.FC<CardProps> = ({
  title,
  description,
  bgColor,
  rotateAngle,
}) => {
  return (
    <div
      className={`p-6 ${bgColor} rounded-lg transform h-[480px] w-[430px]`}
      style={{ transform: `rotate(${rotateAngle}deg)` }}
    >
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="mt-2 text-gray-700 text-xl">{description}</p>
    </div>
  );
};

export default Card;
