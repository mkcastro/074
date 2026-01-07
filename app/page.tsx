import Image from "next/image";
import { Phone, Wallet } from "lucide-react";

const disposableProducts = [
  {
    name: "Spark Basic X 20K Puffs",
    price: 600,
    flavors: [
      "Watermelon",
      "Strawberry",
      "Blackcurrant",
      "Grapes",
      "Banana",
      "Mixed Berries",
      "Blueberry Yogurt",
      "Lychee",
      "Matcha",
      "Melon Ice Cream",
    ],
  },
  {
    name: "VI Bar 30K Puffs",
    price: 600,
    flavors: [
      "Red Blast (Watermelon Ice)",
      "Double Yellow (Double Mango)",
      "Very Baguio (Strawberry Ice)",
      "Green Tokyo (Matcha)",
      "Shirota (Yakult)",
      "Trouble Purple (Grape Ice)",
      "Mixed Garden (Mixed Berries)",
      "Crisp Green (Green Apple)",
      "Black Ice (Blackcurrant)",
      "Sour Neon (Gummy Bears)",
      "Ice Sparkle (Cola Ice)",
      "Purple Snow (Taro Ice Cream)",
      "Pink Snow (Strawberry Ice Cream)",
      "Cheesecake Supreme (Classic Cheesecake)",
      "Blueberry Cake (Blueberry Cheesecake)",
      "Purple Yum Swirl (Ube Swirl)",
      "Starbucks (Cappuccino Ice)",
      "Round Melo (Melon)",
    ],
  },
  {
    name: "Storm Dispo 15K Puffs",
    price: 550,
    flavors: ["Watermelon", "Strawberry Ice Cream", "Blueberry"],
  },
  {
    name: "Chillx Kleer 15K Puffs",
    price: 550,
    flavors: [
      "Watermelon Strawberry",
      "Watermelon Ice",
      "Avocado Cream",
      "Aloe Grape Bubblegum",
    ],
  },
  {
    name: "Poca Juliette 15K Puffs",
    price: 550,
    flavors: [
      "Red Shirota (Strawberry Yakult)",
      "Purple Haze (Taro Ice Cream)",
      "Mch (Matcha)",
    ],
  },
  {
    name: "Chillax Vista 15K Puffs",
    price: 550,
    flavors: ["Sea Salt Lemon"],
  },
];

const prefilledProducts = [
  {
    name: "Xblack Elite V2 Pods",
    price: 400,
    flavors: [
      "Fresh Menthol (Mint)",
      "Very Baguio (Strawberry)",
      "Very More (Mixed Berries)",
      "Blue Freeze (Blueberry)",
      "Blackwave (Blackcurrant)",
    ],
  },
  {
    name: "Blaze V2 15K Puffs (Compatible)",
    price: 400,
    flavors: [
      "Watermelon",
      "Strawberry Ice Cream",
      "Yakult",
      "Matcha",
      "Banana",
      "Rootbeer",
      "Grapes",
      "Mixed Berry",
      "Gummy Bear",
      "Mint",
    ],
  },
];

const juiceProducts = [
  {
    name: "Fire Pod Formula 30ML 3MG",
    price: 400,
    flavors: [
      "Eternal Flame (Strawberry Grape)",
      "Sizzling Spark (Strawberry Watermelon)",
      "Bonfire Bliss (Strawberry Kiwi)",
      "Flame Kissed (Strawberry Blackcurrant)",
    ],
  },
];

function ProductCard({
  product,
}: {
  product: { name: string; price: number; flavors: string[] };
}) {
  return (
    <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-foreground">{product.name}</h3>
        <span className="text-xl font-bold text-primary whitespace-nowrap ml-4">
          P{product.price}
        </span>
      </div>
      <div className="flex flex-wrap gap-2">
        {product.flavors.map((flavor) => (
          <span
            key={flavor}
            className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
          >
            {flavor}
          </span>
        ))}
      </div>
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <span className="text-xl font-bold text-foreground">074</span>
          <div className="flex gap-6 text-sm">
            <a href="#disposable" className="text-muted-foreground hover:text-foreground transition-colors">
              Disposable
            </a>
            <a href="#prefilled" className="text-muted-foreground hover:text-foreground transition-colors">
              Pre-filled
            </a>
            <a href="#juice" className="text-muted-foreground hover:text-foreground transition-colors">
              Juice
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 flex flex-col items-center justify-center">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Image
            src="/logo.jpg"
            alt="074 Vape Shop"
            width={300}
            height={300}
            className="mx-auto mb-8 rounded-2xl"
            priority
          />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your trusted source for quality disposable vapes, pre-filled pods, and e-juice
          </p>
        </div>
      </section>

      {/* Disposable Section */}
      <Section id="disposable" title="Disposable Vapes">
        <div className="grid gap-6 md:grid-cols-2">
          {disposableProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      {/* Pre-filled Section */}
      <Section id="prefilled" title="Pre-filled Pods">
        <div className="grid gap-6 md:grid-cols-2">
          {prefilledProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      {/* Juice Section */}
      <Section id="juice" title="E-Juice">
        <div className="grid gap-6 md:grid-cols-2">
          {juiceProducts.map((product) => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      {/* Policy Section */}
      <section className="py-12 bg-card border-y border-border">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Important Reminder</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              Disposable vapes and pre-filled pods are consumable items, sold in sealed packaging and are not covered by a warranty.
            </p>
            <p className="text-lg font-semibold text-destructive">
              NO RETURN / NO REFUND
            </p>
            <p className="font-medium">
              BUY AT YOUR OWN RISK
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Section id="contact" title="Contact Us">
        <div className="flex flex-col items-center gap-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <a
              href="tel:09626380759"
              className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-primary/50 transition-colors"
            >
              <Phone className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">Call / Text</p>
                <p className="text-lg font-semibold text-foreground">09626380759</p>
              </div>
            </a>
            <div className="flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4">
              <Wallet className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-muted-foreground">GCash</p>
                <p className="text-lg font-semibold text-foreground">09761129886</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} 074 Vape Shop. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
