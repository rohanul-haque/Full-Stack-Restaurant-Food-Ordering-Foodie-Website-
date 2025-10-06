import { service_data } from "@/assets/assets";

const Category = () => {
  return (
    <section className="mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {service_data.map((service, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow rounded-2xl text-center p-6 hover:shadow-md transition-shadow bg-white"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-14 h-14 mx-auto object-cover mb-4"
            />

            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Category;
