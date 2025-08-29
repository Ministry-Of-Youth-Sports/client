import CreateNewForm from "@/components/dashbourd/news/CreateNewForm";
import React from "react";

const CreatePage = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-[calc(100vh-30px)]">
      <CreateNewForm />
    </div>
  );
};

export default CreatePage;
