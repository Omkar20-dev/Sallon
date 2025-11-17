import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import reelsData from '@/data/reels.json';

interface ReelSectionProps {
  limit?: number;
  showViewAll?: boolean;
}

const ReelSection = ({ limit, showViewAll = true }: ReelSectionProps) => {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const reels = limit ? reelsData.slice(0, limit) : reelsData;

  const handlePlay = (id: number) => {
    setPlayingId(id);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-accent/10">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
            Our Reels
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch our latest transformations, tutorials, and behind-the-scenes moments
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {reels.map((reel, index) => (
            <Card
              key={reel.id}
              className="group relative overflow-hidden rounded-lg border-2 hover:border-primary transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[9/16] relative bg-muted">
                {playingId === reel.id ? (
                  <iframe
                    src={`${reel.url}?autoplay=1&mute=0`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="absolute inset-0 w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300 flex items-center justify-center">
                      <Button
                        size="lg"
                        className="rounded-full"
                        onClick={() => handlePlay(reel.id)}
                      >
                        <Play className="w-6 h-6" />
                      </Button>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                      <p className="text-white text-sm font-medium line-clamp-2">
                        {reel.title}
                      </p>
                    </div>
                  </>
                )}
              </div>
            </Card>
          ))}
        </div>
{/* 
        {showViewAll && (
          <div className="text-center">
            <Button asChild variant="luxury" size="lg">
              <Link to="/reels">See All Reels</Link>
            </Button>
          </div>
        )} */}
      </div>
    </section>
  );
};

export default ReelSection;
