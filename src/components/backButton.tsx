import { Link, LinkProps } from "expo-router";

type BackButtonProps = LinkProps<string> & {
  title: string;
};

export function BackButton({ title, ...rest }: BackButtonProps) {
  return (
    <Link className="text-slate-300 text-center text-base font-body" {...rest}>
      {title}
    </Link>
  );
}
