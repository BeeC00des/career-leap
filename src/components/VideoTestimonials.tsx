import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const VideoTestimonials = () => {
  const videos = [
    {
      name: "Alex Chen",
      role: "Software Engineer at SAP",
      university: "TU Berlin",
      thumbnail: "/placeholder.svg",
      duration: "2:45",
      quote: "CareerLeap helped me turn my thesis project into a portfolio that landed me interviews at top tech companies."
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Manager at Zalando",
      university: "University of Cologne",
      thumbnail: "/placeholder.svg",
      duration: "3:12",
      quote: "The 1:1 coaching sessions gave me the confidence to network effectively in the German market."
    },
    {
      name: "Raj Patel",
      role: "Data Analyst at BMW",
      university: "LMU Munich",
      thumbnail: "/placeholder.svg",
      duration: "2:58",
      quote: "Within 2 months of joining CareerLeap, I had multiple job offers. The program works!"
    }
  ];

  return (
    <section className="section-padding bg-muted/30" aria-labelledby="video-testimonials-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="video-testimonials-heading" className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Hear From Our Alumni
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch real success stories from international students who transformed their careers
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="group hover-lift cursor-pointer">
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" aria-hidden="true" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 right-4" variant="secondary">
                      {video.duration}
                    </Badge>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{video.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {video.role}
                    </p>
                    <p className="text-xs text-muted-foreground mb-3">
                      {video.university}
                    </p>
                    <p className="text-sm text-muted-foreground italic leading-relaxed">
                      "{video.quote}"
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonials;
