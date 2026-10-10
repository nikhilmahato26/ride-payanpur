export interface Attraction {
  id: string;
  name: string;
  distance: string;
  rideTime: string;
  tag: string;
  description: string;
  recommendedVehicle: string;
}

export const attractions: Attraction[] = [
  {
    id: "kavvayi-backwaters",
    name: "Kavvayi Islands & Backwaters",
    distance: "3.5 km",
    rideTime: "10 mins ride",
    tag: "Scenic Backwaters",
    description: "The third largest backwaters in Kerala with scenic bridges, mangrove wetlands, island hopping, and calm waters perfect for sunset cruises.",
    recommendedVehicle: "Any Scooter or Motorcycle"
  },
  {
    id: "ezhimala-hills",
    name: "Ezhimala Hills & Lighthouse",
    distance: "11 km",
    rideTime: "20 mins ride",
    tag: "Historic & Coastal Heights",
    description: "A prominent historic hill towering over the Arabian Sea, featuring winding scenic roads, Mount Dilli lighthouse, and viewpoints adjacent to the Indian Naval Academy.",
    recommendedVehicle: "Royal Enfield 350 / Bajaj Pulsar"
  },
  {
    id: "valiyaparamba-beach",
    name: "Valiyaparamba Coastal Strip",
    distance: "14 km",
    rideTime: "25 mins ride",
    tag: "Untouched Beach & Palms",
    description: "A long pristine barrier spit sandwiched between tranquil backwaters and the roaring Arabian Sea, offering panoramic coastal motorable roads.",
    recommendedVehicle: "TVS NTorq / Honda Activa"
  },
  {
    id: "madayipara",
    name: "Madayipara Plateau & Kavu",
    distance: "16 km",
    rideTime: "25 mins ride",
    tag: "Botanical Plateau & Heritage",
    description: "A breathtaking laterite plateau famous for seasonal wildflower blooms, panoramic Western Ghats horizons, ancient shrines, and the historical Madayi Mosque.",
    recommendedVehicle: "Any Scooter or Motorcycle"
  },
  {
    id: "choottad-beach",
    name: "Choottad Coastal Park",
    distance: "13 km",
    rideTime: "22 mins ride",
    tag: "Pine Groves & Sea Breeze",
    description: "Serene beach nestled between casuarina pine tree groves and the sea, offering pedal boating, cool breeze, and relaxed afternoon picnics.",
    recommendedVehicle: "Yamaha Fascino / Suzuki Access 125"
  },
  {
    id: "bekal-fort",
    name: "Bekal Fort Coastal Cruise",
    distance: "38 km",
    rideTime: "50 mins ride",
    tag: "Historic Fort & Coastal Highway",
    description: "Take the scenic North Malabar highway cruise up to the massive keyhole-shaped Bekal Fort overlooking panoramic crashing ocean waves.",
    recommendedVehicle: "Royal Enfield 350 / Bajaj Pulsar"
  }
];

export const rentalSteps = [
  {
    step: "01",
    title: "Pick Your Vehicle",
    description: "Browse our reliable fleet of automatic scooters or geared motorcycles tailored to your trip."
  },
  {
    step: "02",
    title: "Verify Documents",
    description: "Present your original valid Driving License and government ID proof (Aadhaar/Passport)."
  },
  {
    step: "03",
    title: "Instant Key Handover",
    description: "Collect your sanitized vehicle with helmet right from our convenient location at Ajwa Tower, Payyanur."
  },
  {
    step: "04",
    title: "Ride Easy, Ride Safe",
    description: "Enjoy complete freedom exploring Kannur's coastal highways, temples, backwaters, and pristine beaches."
  }
];

export const rentalRequirements = [
  {
    title: "Valid Driving License",
    description: "Original two-wheeler driving license is required for verification at time of pickup."
  },
  {
    title: "Government ID Proof",
    description: "Aadhaar Card, Voter ID, or Passport required for identity confirmation."
  },
  {
    title: "Helmets Included",
    description: "Complimentary sanitized helmet provided with every rental for mandatory rider safety."
  },
  {
    title: "Government Authorized",
    description: "Ride with peace of mind knowing you rent from an officially authorized service in Payyanur."
  }
];
