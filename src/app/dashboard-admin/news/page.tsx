export const dynamic = "force-dynamic";
export const revalidate = 0;

import NewsCardBoxs from "@/components/dashbourd/news/NewsCardBoxs";
import { fetchAllNews } from "@/utils/news/fetchAllNews";
import { toast } from "sonner";

type NewsData = {
  success: boolean;
  articles: articleType[];
};

export type articleType = {
  _id: string;
  title: string;
  content: string;
  formattedDate?: string;
  image: string;
  socialLink: string;
};

const NewsPage = async () => {
  const { success, articles }: NewsData = await fetchAllNews();

  if (!success) {
    toast.error("حدث خطأ أثناء تحميل الأخبار", {
      style: {
        backgroundColor: "#8B0000",
        color: "#fff",
        borderColor: "#8B0000",
      },
    });

    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-red-600 text-lg font-semibold mb-2">
          خطأ في تحميل المراكز
        </p>
        <p className="text-gray-600">يرجى المحاولة مرة أخرى لاحقاً</p>
      </div>
    );
  }

  if (!articles || articles.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] p-8">
        <p className="text-lg">لا توجد اؔخبار متاحة حالياً</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-5">
      {articles.map((article) => (
        <NewsCardBoxs key={article._id} data={article} />
      ))}
    </div>
  );
};

export default NewsPage;
