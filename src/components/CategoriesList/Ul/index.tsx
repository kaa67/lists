import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Ul = (props: Props) => (
  <ul className="list-group">
    {props.children}
  </ul>
);

export default Ul;
