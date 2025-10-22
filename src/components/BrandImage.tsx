import Image, { ImageProps } from "next/image";

type Props = ImageProps & { rounded?: boolean };

export default function BrandImage({ rounded = true, className = "", ...rest }: Props) {
  return (
    <Image
      {...rest}
      className={`${rounded ? "rounded-2xl" : ""} ${className}`}
      // add decoding/lazy defaults here if you want
      loading={rest.loading ?? "lazy"}
    />
  );
}
