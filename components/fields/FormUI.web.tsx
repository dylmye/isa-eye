import type { PropsWithChildren } from "react";

const FormUI = ({ children }: PropsWithChildren) => (
  <form className="flex flex-col py-2">{children}</form>
);

export default FormUI;
