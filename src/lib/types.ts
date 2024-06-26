// TypeScript types generated from Prisma schema

interface Owner {
  id: string;
  clerkId: string;
  email: string;
  name: string;
  companyName: string;
  imageUrl: string;
  companySlug: string;
  companyIconUrl: string;
  role: "NOAGENCY" | "AGENCY";
  createdAt: Date;
  updatedAt: Date;
}

interface Client {
  id: string;
  ownerId: string;
  name: string;
  email: string;
  loom: string;
  password: string;
  clientCompany: string;
  companyName: string;
  pfpUrl: string;
  bannerUrl: string;
  files: string[];
  links: string[];
  createdAt: Date;
  updatedAt: Date;
}
