import { ElementType } from "react";

type ItemProps = {
  icon: ElementType;
  text: string;
  danger?: boolean;
};

const Item = ({ icon: Icon, text, danger }: ItemProps) => {
  return (
    <div
      data-danger={danger}
      className="flex items-center gap-3 py-3 px-9 hover:cursor-pointer rounded-sm bg-colorSystem-lightPurple data-[danger=true]:bg-colorSystem-lightRed"
    >
      <Icon
        size={24}
        data-danger={danger}
        className="text-colorSystem-brandColor data-[danger=true]:text-colorSystem-support04"
      />
      <p
        data-danger={danger}
        className="text-lg text-colorSystem-brandColor data-[danger=true]:text-colorSystem-support04"
      >
        {text}
      </p>
    </div>
  );
};

export default Item;
