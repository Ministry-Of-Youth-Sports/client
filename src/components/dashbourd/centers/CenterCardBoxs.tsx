"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CenterType } from "@/app/dashboard-admin/centers/page";
import Image from "next/image";
import { Building2, MapPin } from "lucide-react";

const CenterCardBoxs = ({ data }: { data: CenterType }) => {
  // const { token } = useAuth();
  // const { refresh } = useRouter();

  const { name, LocationArea, address, phone, image } = data;

  return (
    <Card
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      dir="rtl"
    >
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold text-right leading-7 line-clamp-2">
          <div className="flex items-center gap-2">
            <Building2 />
            <p>مركز : {name}</p>
          </div>
        </CardTitle>
        <CardDescription className="text-sm flex items-center gap-2">
          <MapPin size={16} />
          {LocationArea}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-3">
        {/* Center Image */}
        {image?.url && (
          <div className="relative h-48 w-full">
            <Image
              src={image.url}
              alt={name}
              fill
              className="object-cover rounded-xl"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        <p>العنوان : {address}</p>
        <p>الرقم : {phone}</p>
      </CardContent>

      <CardFooter className="flex items-center gap-3 pt-4"></CardFooter>
    </Card>
  );
};

export default CenterCardBoxs;
