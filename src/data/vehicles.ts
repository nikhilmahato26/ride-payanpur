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
  pricePerDay: number;
  modelYear: number;
  unitsAvailable: number;
  dailyKmLimit: number;
}

export const vehicles: Vehicle[] = [
  {
    id: "honda-dio",
    name: "Honda Dio",
    category: "Scooter",
    image: "/vehicles/honda-dio.jpg",
    engine: "110 cc PGM-FI",
    transmission: "Automatic (CVT)",
    mileageEstimate: "Zippy & Highly Economical",
    startingType: "Electric & Kick Start",
    fuelCapacity: "5.3 Liters",
    idealFor: "Quick Commutes, Beach Trips & Town Rides",
    highlight: "Sporty Moto-Scooter Styling & Agility",
    description: "Lightweight and stylish moto-scooter with Honda's trusted refined engine, combi-braking, LED headlamp, and swift handling around town and beach roads.",
    features: ["120 km/Day Included", "Brand New 2026 Model", "Combi-Brake System (CBS)", "Sporty Aerodynamic Body"],
    pricePerDay: 699,
    modelYear: 2026,
    unitsAvailable: 1,
    dailyKmLimit: 120
  },
  {
    id: "yamaha-fascino",
    name: "Yamaha Fascino 125",
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
    features: ["120 km/Day Included", "Brand New 2026 Fleet", "Lightweight Curb Weight", "Smooth Fi Hybrid Engine"],
    pricePerDay: 699,
    modelYear: 2026,
    unitsAvailable: 2,
    dailyKmLimit: 120
  },
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
    idealFor: "City Commute & Casual Coastal Rides",
    highlight: "Smooth Comfort & Generous Legroom",
    description: "Reliable and ultra-comfortable commuter scooter featuring plush seating, telescopic suspension, and easy handling through Payyanur town and coastal stretches.",
    features: ["120 km/Day Included", "Brand New 2026 Fleet", "Front & Under-Seat Storage", "Telescopic Suspension"],
    pricePerDay: 799,
    modelYear: 2026,
    unitsAvailable: 3,
    dailyKmLimit: 120
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
    features: ["120 km/Day Included", "Brand New 2026 Fleet", "Front Disc Brake", "Sporty Digital Console"],
    pricePerDay: 799,
    modelYear: 2026,
    unitsAvailable: 4,
    dailyKmLimit: 120
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
    highlight: "Class-Leading Power & Retro Chrome LED",
    description: "Premium Japanese engineering delivering responsive power, a wide comfortable seat, retro chrome LED headlamp, and superior fuel economy.",
    features: ["120 km/Day Included", "Brand New 2026 Fleet", "Chrome LED Headlight", "Extra-Long Seat"],
    pricePerDay: 899,
    modelYear: 2026,
    unitsAvailable: 3,
    dailyKmLimit: 120
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
    features: ["120 km/Day Included", "Brand New 2026 Model", "Dual-Channel ABS", "Signature Touring Saddle"],
    pricePerDay: 1499,
    modelYear: 2026,
    unitsAvailable: 1,
    dailyKmLimit: 120
  }
];

export const fleetSummary = {
  totalVehicles: vehicles.reduce((sum, v) => sum + v.unitsAvailable, 0), // 14
  startingPrice: Math.min(...vehicles.map(v => v.pricePerDay)), // 699
  dailyKmLimit: 120,
  fleetModelYear: 2026
};

export const businessInfo = {
  name: "RIDE PAYYANUR",
  category: "Bike & Scooter Rental",
  address: "Payyanur New Bus Stand (Parking Area), Opp. Kokkanisseri Road, Payyanur, Kerala – 670307",
  locationShort: "Payyanur New Bus Stand, Kerala",
  landmark: "Opposite Kokkanisseri Road, Payyanur New Bus Stand Parking Area",
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
  officialWebsite: "ride-payyanur.grexa.site",
  dailyKmLimit: 120
};

export const createVehicleWhatsAppLink = (vehicleName: string, pricePerDay?: number): string => {
  const targetVehicle = vehicles.find(v => v.name.toLowerCase() === vehicleName.toLowerCase());
  const price = pricePerDay || targetVehicle?.pricePerDay;
  const priceText = price ? ` at ₹${price}/day (120 km/day limit)` : ' (120 km/day limit)';
  const message = `Hello Ride Payyanur, I would like to book the ${vehicleName} (2026 Model)${priceText}. Please confirm availability and booking procedure.`;
  return `https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent(message)}`;
};

export const createCustomBookingWhatsAppLink = (params: {
  vehicleName: string;
  duration: string;
  pickupDate: string;
  notes?: string;
  pricePerDay?: number;
}): string => {
  const priceSnippet = params.pricePerDay ? ` (Rate: ₹${params.pricePerDay}/day)` : '';
  const message = `Hello Ride Payyanur, I would like to book a rental vehicle:
- Vehicle: ${params.vehicleName || 'Open to recommendations'}${priceSnippet}
- Pickup Date: ${params.pickupDate || 'Earliest available'}
- Duration: ${params.duration || '1 Day'}
- Daily Limit: 120 km/day
${params.notes ? `- Note: ${params.notes}` : ''}

Please confirm availability and pickup details. Thank you!`;
  return `https://wa.me/${businessInfo.whatsappClean}?text=${encodeURIComponent(message)}`;
};
