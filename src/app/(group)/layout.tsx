interface GroupLayoutProps {
  feed: React.ReactNode;
  analytics: React.ReactNode;
  children: React.ReactNode;
}

const GroupLayout = (props: GroupLayoutProps) => (
  <div className="flex justify-center items-center flex-col">
    <div className="p-10 border-2 rounded-md">
      <h1 className="text-lg font-bold">group router layout</h1>
      {props.children}
      {props.feed}
      {props.analytics}
    </div>
  </div>
);

export default GroupLayout;
