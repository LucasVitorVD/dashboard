import HeaderItems from "../MobileHeader/HeaderItems";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl text-primary">Olá, Lucas</h1>
        <p className="text-lg text-muted-foreground">
          Aqui estão as informações sobre suas vendas.
        </p>
      </div>
      <HeaderItems className="hidden lg:flex lg:items-center lg:gap-6" />
    </div>
  );
};

export default Header;
