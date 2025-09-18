"use client";

import { FileDownIcon } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const DownloadCV = ({
  pdf,
}: {
  pdf: {
    asset: { _id: string; url: string };
    fileName?: string;
  };
}) => {
  return (
    <Button size="lg" asChild>
      <Link
        href={`${pdf.asset.url}?dl=${pdf.fileName || "Resume"}`}
        download
        className="gradient-bg text-white w-fit font-semibold hover:cursor-pointer"
      >
        <FileDownIcon className="size-5" />
        Download CV
      </Link>
    </Button>
  );
};
export default DownloadCV;
