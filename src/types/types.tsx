export type FunctionProps = {
  name: string;
  type: string;
  function: string;
  alternative: string | null;
  description: string;
  arguments: string;
  return: string;
  link: string | null;
};

export type DataProps = {
  data: FunctionProps[];
};

export type ViewProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
