interface PokemonsLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
}

const PokemonsLayout = (props: PokemonsLayoutProps) => (
  <div className="flex flex-col gap-10">
    {props.children}
    <div className="flex gap-5">
      {props.left}
      {props.right}
    </div>
  </div>
);

export default PokemonsLayout;
