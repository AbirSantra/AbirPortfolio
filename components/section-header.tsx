interface Props {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-2xl font-bold sm:text-4xl">{title}</h1>
      <h2 className="gradient-text text-lg font-normal font-secondary sm:text-xl">
        {subtitle}
      </h2>
    </div>
  );
};
