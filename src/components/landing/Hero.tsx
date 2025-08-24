const Hero = () => {
  return (
    <div className="hero" id="home">
      {/* layer div */}
      <div className="blacklayer"></div>

      {/* content div */}
      <div className="content">
        <h1>منصة وطنية موحدة للشباب والرياضة في القاهرة</h1>

        <p>
          مشروع وطني ضخم يربط كل الإدارات والمؤسسات الشبابية والرياضية على مستوى
          الجمهورية في مكان واحد. هدفنا هو تسهيل وصول الشباب إلى الخدمات، تعزيز
          الأنشطة، ودعم التنمية المجتمعية بشكل عصري وفعّال.
        </p>

        <button className="shadow-[4px_4px_10px_1px_rgba(0,0,0,0.5)] text-center cursor-pointer btn btn-primary mt-10 bg-[#F5F5F5] py-4 px-8 rounded-full text-2xl text-primary-text">
          حمل التطبيق
        </button>
      </div>
    </div>
  );
};

export default Hero;
