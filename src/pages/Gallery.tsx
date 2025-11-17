import { Card } from "@/components/ui/card";
import galleryImage from "@/assets/gallery-transformations.jpg";
import bridalImage from "@/assets/bridal-services.jpg";

const Gallery = () => {
  const galleryItems = [
    { image: galleryImage, title: "Bridal Transformations", category: "Bridal" },
    { image: bridalImage, title: "Makeup Artistry", category: "Makeup" },
    { image: galleryImage, title: "Hair Styling", category: "Hair" },
    { image: bridalImage, title: "Special Occasions", category: "Events" },
    { image: galleryImage, title: "Skincare Results", category: "Facial" },
    { image: bridalImage, title: "Complete Makeovers", category: "Makeover" },
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6 gradient-text">
            Our Gallery
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Witness the transformations and artistry of our expert beauty professionals
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <Card
                key={index}
                className="group overflow-hidden border-none shadow-soft hover:shadow-elegant transition-all duration-500 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <span className="text-xs font-semibold text-primary mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-display font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
              Before & After Transformations
            </h2>
            <p className="text-lg text-muted-foreground">
              See the stunning results our clients achieve
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="overflow-hidden border-none shadow-elegant animate-slide-up">
              <img
                src={galleryImage}
                alt="Transformation 1"
                className="w-full h-[400px] object-cover"
              />
            </Card>
            <Card className="overflow-hidden border-none shadow-elegant animate-slide-up" style={{ animationDelay: "100ms" }}>
              <img
                src={bridalImage}
                alt="Transformation 2"
                className="w-full h-[400px] object-cover"
              />
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
