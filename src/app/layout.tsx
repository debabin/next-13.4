import "./global.css";

export const metadata = {
  title: "Pokemons",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="flex justify-center">
          {props.children}
          {props.modal}
        </div>
      </body>
    </html>
  );
}
