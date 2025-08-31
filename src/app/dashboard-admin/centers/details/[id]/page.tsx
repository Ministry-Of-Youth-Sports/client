const DetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  console.log(id);

  return (
    <div className="p-8">
      <h1 className="text-5xl"></h1>
    </div>
  );
};

export default DetailsPage;
