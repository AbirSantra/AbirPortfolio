type Props = {
  title: string;
  subtitle: string;
};

export const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2">
      <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
      <h2 className="gradient-text text-lg font-normal sm:text-2xl">
        {subtitle}
      </h2>
    </div>
  );
};
