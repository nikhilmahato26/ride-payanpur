export interface Vehicle {
  id: string;
  name: string;
  category: 'Scooter' | 'Motorcycle';
  image: string;
  engine: string;
  transmission: string;
  mileageEstimate: string;
  startingType: string;
  fuelCapacity: string;
  idealFor: string;
  highlight: string;
  description: string;
  features: string[];
}

export const vehicles: Vehicle[] = [
  {
    id: "tvs-jupiter",
    name: "TVS Jupiter",
    category: "Scooter",
    image: "/vehicles/tvs-jupiter.jpg",
    engine: "110 cc",
    transmission: "Automatic (CVT)",
    mileageEstimate: "Economy Friendly",
    startingType: "Electric & Kick Start",
    fuelCapacity: "6 Liters",
    idealFor: "City Commute & Casual Rides",
    highlight: "Smooth Comfort & Generous Legroom",
    description: "Reliable and ultra-comfortable commuter scooter featuring plush seating, telescopic suspension, and easy handling through Payyanur town and coastal stretches.",
    features: ["All-Day Riding Comfort", "Front & Under-Seat Storage", "External Fuel Fill", "Telescopic Suspension"]
  },
  {
    id: "tvs-ntorq-125",
    name: "TVS NTorq 125",
    category: "Scooter",
    image: "/vehicles/tvs-ntorq-125.jpg",
    engine: "125 cc (3-Valve)",
    transmission: "Automatic (CVT)",
    mileageEstimate: "Performance Tuned",
    startingType: "Electric Start",
    fuelCapacity: "5.8 Liters",
    idealFor: "Youthful Riders & Dynamic Coastal Tours",
    highlight: "Sporty Acceleration & Striking Decals",
    description: "Aerodynamic sports scooter with a punchy 125cc engine, razor-sharp styling, race-tuned dynamics, and front disc brake for riders who crave an energetic experience.",
    features: ["Punchy 125cc Acceleration", "Front Disc Brake", "Sporty Digital Console", "Aggressive Street Design"]
  },
  {
    id: "honda-activa",
    name: "Honda Activa",
    category: "Scooter",
    image: "/vehicles/honda-activa.jpg",
    engine: "110 cc HET",
    transmission: "Automatic (CVT)",
    mileageEstimate: "High Mileage",
    startingType: "Electric & Kick Start",
    fuelCapacity: "5.3 Liters",
    idealFor: "Solo Riders, Couples & Daily Errands",
    highlight: "India's Most Trusted Scooter",
    description: "Durable all-metal body and legendary Honda reliability. Easy to maneuver, exceptionally fuel-efficient, and ideal for stress-free exploration of Payyanur.",
    features: ["All-Metal Body Durability", "Silent ACG Starter", "Combi-Brake System (CBS)", "Spacious Footboard"]
  },
  {
    id: "yamaha-fascino",
    name: "Yamaha Fascino",
    category: "Scooter",
    image: "/vehicles/yamaha-fascino.jpg",
    engine: "125 cc Fi Hybrid",
    transmission: "Automatic (CVT)",
    mileageEstimate: "Ultra Light & Efficient",
    startingType: "Electric & Kick Start",
    fuelCapacity: "5.2 Liters",
    idealFor: "Scenic Photography & Leisure Trips",
    highlight: "Retro-Modern European Elegance",
    description: "Classy vintage-inspired design complemented by lightweight agile handling and refined fuel-injected performance. Perfect for cruising to Kavvayi backwaters.",
    features: ["Lightweight Curb Weight", "Retro Chrome Styling", "Smooth Blue Core Engine", "Ergonomic Stepped Seat"]
  },
  {
    id: "bajaj-pulsar",
    name: "Bajaj Pulsar",
    category: "Motorcycle",
    image: "/vehicles/bajaj-pulsar.jpg",
    engine: "150 cc DTS-i",
    transmission: "5-Speed Manual",
    mileageEstimate: "High Performance Touring",
    startingType: "Electric Start",
    fuelCapacity: "15 Liters",
    idealFor: "Highway Cruising & Hill Ascents",
    highlight: "Muscular Street Power & Long-Range Tank",
    description: "A muscular street motorcycle engineered for riders seeking highway stability, responsive power delivery, and effortless overtaking on Malabar coastal roads.",
    features: ["150cc DTS-i Performance", "Twin Disc Brakes", "Nitrox Rear Suspension", "15L Long Range Fuel Tank"]
  },
  {
    id: "royal-enfield-350",
    name: "Royal Enfield 350",
    category: "Motorcycle",
    image: "/vehicles/royal-enfield-350.jpg",
    engine: "349 cc J-Series",
    transmission: "5-Speed Manual",
    mileageEstimate: "Thumping Cruiser",
    startingType: "Electric Start",
    fuelCapacity: "13 Liters",
    idealFor: "Coastal Road Trips & Long Leisure Tours",
    highlight: "Timeless Heritage Thump & Road Presence",
    description: "The iconic cruiser with effortless low-end torque, classic vintage styling, wide touring saddle, and unmatched road presence for unforgettable journeys along the Arabian coast.",
    features: ["Signature Single-Cylinder Thump", "Dual-Channel ABS", "Plush Touring Ergonomics", "Heavy-Metal Road Stability"]
  },
  {
    id: "suzuki-access-125",
    name: "Suzuki Access 125",
    category: "Scooter",
    image: "/vehicles/suzuki-access-125.jpg",
    engine: "125 cc SEP",
    transmission: "Automatic (CVT)",
    mileageEstimate: "Best-in-Class Balance",
    startingType: "Electric & Kick Start",
    fuelCapacity: "5 Liters",
    idealFor: "City Riding & Medium-Range Excursions",
    highlight: "Class-Leading Power-to-Weight Ratio",
    description: "Premium Japanese engineering delivering responsive power, a wide comfortable seat, retro chrome LED headlamp, and superior fuel economy.",
    features: ["125cc SEP Engine Technology", "Chrome LED Headlight", "Extra-Long Seat", "Easy Multi-Function Key"]
  }
];

export const businessInfo = {
  name: "RIDE PAYYANUR",
  category: "Bike & Scooter Rental",
  address: "Ajwa Tower, Pallihaji Road, Payyanur, Kerala – 670307",
  locationShort: "Payyanur, Kerala",
  primaryPhone: "+91 9447255915",
  primaryPhoneClean: "+919447255915",
  whatsappPhone: "+91 9745003733",
  whatsappClean: "919745003733",
  email: "ridepayyanur2026@gmail.com",
  gstin: "32BHEPK7961E1ZF",
  tagline: "Ride Easy, Ride Safe!",
  authorizations: [
    "Government Authorised",
    "Government of Kerala Authorized"
  ],
  workingHours: "8:00 AM – 8:30 PM (All 7 Days)",
  officialWebsite: "ride-payyanur.grexa.site"
};

export const createVehicleWhatsAppLink = (vehicleName: string): string => {
  const message = `Hello Ride Payyanur, I would like to enquire about renting the ${vehicleName}. Please share the rental price, availability, and booking requirements.`;
  return `https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent(message)}`;
};

export const createCustomBookingWhatsAppLink = (params: {
  vehicleName: string;
  duration: string;
  pickupDate: string;
  notes?: string;
}): string => {
  const message = `Hello Ride Payyanur, I am interested in renting a two-wheeler:
- Vehicle: ${params.vehicleName || 'Open to recommendations'}
- Pickup Date: ${params.pickupDate || 'Earliest available'}
- Duration: ${params.duration || '1 Day'}
${params.notes ? `- Note: ${params.notes}` : ''}

Please share rental rates, availability, and documents needed. Thank you!`;
  return `https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent(message)}`;
};
