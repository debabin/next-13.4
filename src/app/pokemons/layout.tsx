interface NewsLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  children: React.ReactNode;
}

const NewsLayout = (props: NewsLayoutProps) => (
  <div className="flex flex-col gap-10">
    {props.children}
    <div className="flex gap-5">
      {props.left}
      {props.right}
    </div>
  </div>
);

export default NewsLayout;
