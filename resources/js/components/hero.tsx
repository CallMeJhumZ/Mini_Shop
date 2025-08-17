import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import heroImage from "@/components/assets/hero-shoes.jpg";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center subtle-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-accent">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-medium">4.9/5 Customer Rating</span>
              </div>
              
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Step Into
                <span className="block text-accent">Your Style</span>
                </h1>

                <p className="text-lg text-muted-foreground max-w-lg">
                Discover our curated collection of premium footwear. From classic elegance to modern comfort, 
                find the perfect shoes for every occasion.
                </p>

            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Shop Collection
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="minimal" size="lg">
                View Lookbook
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Premium Styles</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Free</div>
                <div className="text-sm text-muted-foreground">Shipping</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-medium">
              <img 
                src={heroImage} 
                alt="Premium shoe collection featuring elegant sneakers and dress shoes"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-card p-4 rounded-xl shadow-medium">
              <div className="text-sm font-medium text-accent">Free Shipping</div>
              <div className="text-xs text-muted-foreground">On orders over $100</div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium">
              <div className="text-sm font-medium text-accent">30-Day Returns</div>
              <div className="text-xs text-muted-foreground">No questions asked</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};