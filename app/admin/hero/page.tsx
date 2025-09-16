import HeroForm from "@/components/admin/hero-form";
import { SectionHeader } from "@/components/section-header";

const AdminHeroPage = () => {
  return (
    <div className="w-full flex flex-col h-dvh p-6 py-36 max-w-2xl gap-8 mx-auto">
      <SectionHeader title="Hero Section" subtitle="Manage your hero content" />
      <HeroForm />
    </div>
  );
};
export default AdminHeroPage;
