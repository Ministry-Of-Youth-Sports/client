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
import { Building2, MapPin, MapPinned, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const CenterCardBoxs = ({ data }: { data: CenterType }) => {
  // const { token } = useAuth();
  // const { refresh } = useRouter();

  const { name, LocationArea, address, phone, image, _id } = data;

  return (
    <Card
      className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 justify-between"
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

        <div className="flex items-center gap-2">
          <MapPinned />
          <p>العنوان : {address}</p>
        </div>
        <div className="flex items-center gap-2">
          <Phone size={16} />
          <p>الرقم : {phone}</p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center gap-3 pt-4">
        <Link
          href={`/dashboard-admin/centers/details`}
          className="text-sm text-blue-500"
        >
          <Button className="cursor-pointer">
            <span>تفاصيل المركز</span>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CenterCardBoxs;
