interface Props {
  title: string;
  subtitle: string;
}

export const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className="flex flex-col items-start justify-center">
      <h1 className="text-4xl font-black sm:text-4xl font-primary">{title}</h1>
      <h2 className="gradient-text text-lg font-medium font-primary">
        {subtitle}
      </h2>
    </div>
  );
};
