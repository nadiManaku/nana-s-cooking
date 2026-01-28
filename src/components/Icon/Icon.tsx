type IconProps = {
  name: string;
  className?: string;
  size?: number;
};

export function Icon({ name, size = 24, className }: IconProps) {
  return (
    <svg width={size} height={size} className={className} aria-hidden>
      <use href={`/icons/icons.svg#icon-${name}`} />
    </svg>
  );
}