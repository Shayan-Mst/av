interface ShipingCard {
  src: string;
  text: string;
}

const ShipingCard: React.FC<ShipingCard> = ({ src, text }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-2">
      <div className="size-[94px] p-1 flex justify-center items-center border rounded-lg border-wh-2">
        <div className="size-[72px] py-[18px] px-[5px] rounded-lg border bg-white-1 dark:bg-transparent  flex justify-center items-center">
          <img  src={src} alt={text} />
        </div>
      </div>
      <span className="text-purpel-3 dark:text-white-2 text-[18px] font-normal leading-[28px]">
        {text}
      </span>
    </div>
  );
};

export default ShipingCard;
