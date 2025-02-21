import {
  BiBuildingHouse,
  BiBuildings,
  BiFullscreen,
  BiHomeAlt,
  BiMoney,
  BiShieldAlt2,
} from "react-icons/bi";
import {
  // FaBehance,
  // FaDribbble,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPaintRoller,
  // FaTwitter,
  // FaVimeo,
  FaYoutube,
} from "react-icons/fa";
import { FiHeadphones } from "react-icons/fi";


// export const property = [
//   {
//     id: 1,
//     name: "Villa on Washington Avenue",
//     location: "Mumbai, Bandra West, Plot 123",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A luxurious villa located in the heart of Bandra, offering stunning views and modern amenities. Perfect for families looking for a spacious and comfortable home in a prime location. Close to shopping, dining, and entertainment.",
//     image: "/images/property (7).jpg",
//   },
//   {
//     id: 2,
//     name: "Awesome Family Home",
//     location: "Navi Mumbai, Vashi, Sector 17",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A beautiful family home in the serene neighborhood of Vashi, offering a peaceful living environment. Features a spacious garden, well-maintained interiors, and easy access to schools and hospitals.",
//     image: "/images/property (3).jpg",
//   },
//   {
//     id: 3,
//     name: "Agile Real Estate Group",
//     location: "Mumbai, Andheri East, Chakala",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A modern apartment perfect for young professionals, located in the bustling area of Andheri East. Close to business hubs, restaurants, and transportation links. Enjoy a vibrant city life with all conveniences at your doorstep.",
//     image: "/images/property (8).jpg",
//   },
//   {
//     id: 4,
//     name: "Comfort Property Advisor",
//     location: "Navi Mumbai, Kharghar, Sector 35",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "An ideal property for investment in the rapidly developing area of Kharghar. Features excellent connectivity, green surroundings, and potential for high returns. A great choice for a secure future.",
//     image: "/images/property (9).jpg",
//   },
//   {
//     id: 5,
//     name: "Freedom Properties, LLC",
//     location: "Mumbai,Hiranandani Gardens",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A stylish apartment available for rent in the upscale neighborhood of Powai. Enjoy a luxurious lifestyle with access to premium amenities, scenic views, and a vibrant community. Perfect for those seeking comfort and convenience.",
//     image: "/images/property (10).jpg",
//   },
//   {
//     id: 6,
//     name: "Future Work Estate Agency",
//     location: "Navi Mumbai, Seawoods, Plot 131",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A well-designed home in the coastal suburb of Seawoods, offering a blend of modern living and natural beauty. Features proximity to the beach, shopping centers, and transportation hubs. Experience a relaxed and convenient lifestyle.",
//     image: "/images/property (11).jpg",
//   },
//   {
//     id: 7,
//     name: "Villa on Washington Avenue",
//     location: "Mumbai, Juhu, JVPD Scheme, Plot 145",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A prestigious villa for rent in the upscale area of Juhu, known for its celebrity residents and upscale lifestyle. Enjoy sea views, luxurious amenities, and proximity to high-end restaurants and entertainment.",
//     image: "/images/property (12).jpg",
//   },
//   {
//     id: 8,
//     name: "Villa on Washington Avenue",
//     location: "Navi Mumbai, Nerul, Sector 21, Plot 167",
//     price: "450,000",
//     distance: "1.2km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3000 sq ft",
//     description:
//       "A spacious villa in the well-planned area of Nerul, offering a comfortable and convenient living experience. Features wide roads, green spaces, and easy access to essential amenities. A perfect choice for a growing family.",
//     image: "/images/property (13).jpg",
//   },
//   {
//     id: 9,
//     name: "Luxury Apartment",
//     location: "Mumbai, Worli Sea Face",
//     price: "600,000",
//     distance: "0.8km",
//     purpose: "rent",
//     number_of_beds: 4,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "4000 sq ft",
//     description:
//       "A premium apartment available for rent in the prestigious Worli Sea Face area. Enjoy stunning sea views, high-end amenities, and a luxurious lifestyle in one of Mumbai's most sought-after locations.",
//     image: "/images/property (14).jpg",
//   },
//   {
//     id: 10,
//     name: "Cozy Bungalow",
//     location: "Navi Mumbai, Panvel, Sector 5",
//     price: "350,000",
//     distance: "2.5km",
//     purpose: "sale",
//     number_of_beds: 2,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "1800 sq ft",
//     description:
//       "A cozy bungalow in the peaceful surroundings of Panvel. Ideal for those seeking a quiet retreat away from the city's hustle. Features a private garden and proximity to nature.",
//     image: "/images/property (15).jpg",
//   },
//   {
//     id: 11,
//     name: "Spacious Flat",
//     location: "Mumbai, Dadar West, Shivaji Park",
//     price: "500,000",
//     distance: "1.5km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "2500 sq ft",
//     description:
//       "A spacious flat with a view of Shivaji Park in Dadar West. Enjoy the vibrant neighborhood with easy access to local markets, schools, and the beach. Perfect for a family looking for a comfortable urban lifestyle.",
//     image: "/images/property (21).jpg",
//   },
//   {
//     id: 12,
//     name: "Modern Villa",
//     location: "Navi Mumbai, Ulwe, Plot 88",
//     price: "700,000",
//     distance: "3.0km",
//     purpose: "sale",
//     number_of_beds: 4,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "3500 sq ft",
//     description:
//       "A modern villa in the rapidly developing area of Ulwe, offering a luxurious and contemporary living space. Features state-of-the-art amenities and a serene environment.",
//     image: "/images/property (26).jpg",
//   },
//   {
//     id: 13,
//     name: "Sea Facing Apartment",
//     location: "Mumbai, Bandra East, Apt 404",
//     price: "800,000",
//     distance: "0.5km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "3200 sq ft",
//     description:
//       "An exquisite sea-facing apartment in Bandra East, offering breathtaking views and a luxurious lifestyle. Enjoy top-notch amenities and proximity to the city's finest entertainment and dining options.",
//     image: "/images/property (23).jpg",
//   },
//   {
//     id: 14,
//     name: "Garden Villa",
//     location: "Navi Mumbai, Belapur, Sector 11",
//     price: "900,000",
//     distance: "1.8km",
//     purpose: "sale",
//     number_of_beds: 5,
//     number_of_bathrooms: 4,
//     contact: "+256 775 358738",
//     dimensions: "4500 sq ft",
//     description:
//       "A magnificent garden villa in Belapur, offering a harmonious blend of luxury and nature. Features a sprawling garden, elegant interiors, and a peaceful neighborhood.",
//     image: "/images/property (24).jpg",
//   },
//   {
//     id: 15,
//     name: "Penthouse Suite",
//     location: "Mumbai, Lower Parel, PH 501",
//     price: "1,200,000",
//     distance: "1.0km",
//     purpose: "rent",
//     number_of_beds: 4,
//     number_of_bathrooms: 4,
//     contact: "+256 775 358738",
//     dimensions: "5000 sq ft",
//     description:
//       "A luxurious penthouse suite in Lower Parel, offering panoramic city views and opulent amenities. Experience the pinnacle of urban living with world-class entertainment and dining at your doorstep.",
//     image: "/images/property (25).jpg",
//   },
//   {
//     id: 16,
//     name: "Hilltop Villa",
//     location: "Navi Mumbai, Khandeshwar, Sector 8, Plot 22",
//     price: "850,000",
//     distance: "3.5km",
//     purpose: "sale",
//     number_of_beds: 4,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "4200 sq ft",
//     description:
//       "A stunning hilltop villa in Khandeshwar, offering breathtaking views of the surrounding landscape. Features a private pool, lush gardens, and a tranquil atmosphere.",
//     image: "/images/property (40).jpg",
//   },
//   {
//     id: 17,
//     name: "Spacious Apartment",
//     location: "Mumbai, Diamond Garden",
//     price: "550,000",
//     distance: "2.0km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "2800 sq ft",
//     description:
//       "A spacious apartment in Chembur, close to Diamond Garden. Enjoy a family-friendly environment with easy access to schools, hospitals, and shopping centers.",
//     image: "/images/property (41).png",
//   },
//   {
//     id: 18,
//     name: "Luxury Farmhouse",
//     location: "Navi Mumbai, Karjat, Plot 14",
//     price: "1,500,000",
//     distance: "15km",
//     purpose: "sale",
//     number_of_beds: 6,
//     number_of_bathrooms: 5,
//     contact: "+256 775 358738",
//     dimensions: "8000 sq ft",
//     description:
//       "An expansive luxury farmhouse in Karjat, perfect for a weekend getaway or a permanent escape to nature. Features vast green spaces, a private swimming pool, and world-class amenities.",
//     image: "/images/property (27).jpg",
//   },
//   {
//     id: 19,
//     name: "Modern Studio Apartment",
//     location: "Mumbai, Andheri, Lokhandwala",
//     price: "300,000",
//     distance: "0.7km",
//     purpose: "rent",
//     number_of_beds: 1,
//     number_of_bathrooms: 1,
//     contact: "+256 775 358738",
//     dimensions: "1000 sq ft",
//     description:
//       "A stylish and modern studio apartment in the heart of Lokhandwala, Andheri West. Ideal for singles or young professionals seeking a convenient urban lifestyle close to entertainment and dining.",
//     image: "/images/property (28).jpg",
//   },
//   {
//     id: 20,
//     name: " Waterfront Residence",
//     location: "Navi Mumbai, Airoli, Plot 111",
//     price: "1,100,000",
//     distance: "2.2km",
//     purpose: "sale",
//     number_of_beds: 5,
//     number_of_bathrooms: 4,
//     contact: "+256 775 358738",
//     dimensions: "5500 sq ft",
//     description:
//       "A luxurious waterfront residence in Airoli, offering stunning views of the creek and a tranquil living experience. Features a private deck, modern interiors, and access to exclusive amenities.",
//     image: "/images/property (34).jpg",
//   },
//   {
//     id: 21,
//     name: "Independent House",
//     location: "Mumbai, Borivali West, IC Colony",
//     price: "750,000",
//     distance: "1.9km",
//     purpose: "rent",
//     number_of_beds: 3,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "3800 sq ft",
//     description:
//       "A charming independent house in Borivali West, offering a peaceful and family-friendly environment. Features a private garden, spacious rooms, and proximity to schools and markets.",
//     image: "/images/property (35).jpg",
//   },
//   {
//     id: 22,
//     name: "Executive Apartment",
//     location: "Navi Mumbai, CBD Belapur",
//     price: "650,000",
//     distance: "0.9km",
//     purpose: "sale",
//     number_of_beds: 3,
//     number_of_bathrooms: 2,
//     contact: "+256 775 358738",
//     dimensions: "3100 sq ft",
//     description:
//       "An executive apartment in CBD Belapur, offering a convenient location close to business hubs and transportation. Features modern amenities, a stylish interior, and panoramic city views.",
//     image: "/images/property (36).jpg",
//   },
//   {
//     id: 23,
//     name: "Studio Apartment",
//     location: "Mumbai, Juhu, Tara Road, Studio 202",
//     price: "320,000",
//     distance: "0.6km",
//     purpose: "rent",
//     number_of_beds: 1,
//     number_of_bathrooms: 1,
//     contact: "+256 775 358738",
//     dimensions: "1100 sq ft",
//     description:
//       "A compact and well-designed studio apartment on Tara Road in Juhu, offering proximity to the beach and a vibrant nightlife. Ideal for singles seeking a convenient and lively urban experience.",
//     image: "/images/property (40).jpg",
//   },
//   {
//     id: 24,
//     name: "Duplex House",
//     location: "Navi Mumbai, Kopar Khairane",
//     price: "950,000",
//     distance: "2.7km",
//     purpose: "sale",
//     number_of_beds: 4,
//     number_of_bathrooms: 3,
//     contact: "+256 775 358738",
//     dimensions: "4700 sq ft",
//     description:
//       "A stunning duplex house in Kopar Khairane, offering a luxurious and spacious living environment. Features modern design, high-end finishes, and proximity to essential amenities.",
//     image: "/images/property (30).jpg",
//   },
//   {
//     id: 25,
//     name: "Sea View Penthouse",
//     location: "Mumbai, Marine Drive, Penthouse 1",
//     price: "1,800,000",
//     distance: "0.3km",
//     purpose: "rent",
//     number_of_beds: 5,
//     number_of_bathrooms: 5,
//     contact: "+256 775 358738",
//     dimensions: "6000 sq ft",
//     description:
//       "An exceptional sea-view penthouse on Marine Drive, offering unparalleled luxury and breathtaking views of the Arabian Sea. Features a private terrace, state-of-the-art amenities, and proximity to Mumbai's iconic landmarks.",
//     image: "/images/property (20).jpg",
//   },
// ];


// dummyData.js


export const property = [
  {
    id: 1,
    name: "Villa on Washington Avenue",
    location: "Mumbai, Bandra West, Plot 123",
    price: 750000,
    distance: "1.2km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A luxurious villa located in the heart of Bandra, offering stunning views and modern amenities. Perfect for families looking for a spacious and comfortable home in a prime location. Close to shopping, dining, and entertainment.",
    image: "/images/property (7).jpg",
  },
  {
    id: 2,
    name: "Awesome Family Home",
    location: "Navi Mumbai, Vashi, Sector 17",
    price: 420000,
    distance: "1.2km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A beautiful family home in the serene neighborhood of Vashi, offering a peaceful living environment. Features a spacious garden, well-maintained interiors, and easy access to schools and hospitals.",
    image: "/images/property (3).jpg",
  },
  {
    id: 3,
    name: "Agile Real Estate Group",
    location: "Mumbai, Andheri East, Chakala",
    price: 380000,
    distance: "1.2km",
    purpose: "rent",
    number_of_beds: 4,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A modern apartment perfect for young professionals, located in the bustling area of Andheri East. Close to business hubs, restaurants, and transportation links. Enjoy a vibrant city life with all conveniences at your doorstep.",
    image: "/images/property (8).jpg",
  },
  {
    id: 4,
    name: "Comfort Property Advisor",
    location: "Navi Mumbai, Kharghar, Sector 35",
    price: 600000,
    distance: "1.2km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "An ideal property for investment in the rapidly developing area of Kharghar. Features excellent connectivity, green surroundings, and potential for high returns. A great choice for a secure future.",
    image: "/images/property (9).jpg",
  },
  {
    id: 5,
    name: "Freedom Properties, LLC",
    location: "Mumbai,Hiranandani Gardens",
    price: 510000,
    distance: "1.2km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A stylish apartment available for rent in the upscale neighborhood of Powai. Enjoy a luxurious lifestyle with access to premium amenities, scenic views, and a vibrant community. Perfect for those seeking comfort and convenience.",
    image: "/images/property (10).jpg",
  },
  {
    id: 6,
    name: "Future Work Estate Agency",
    location: "Navi Mumbai, Seawoods, Plot 131",
    price: 920000,
    distance: "1.2km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A well-designed home in the coastal suburb of Seawoods, offering a blend of modern living and natural beauty. Features proximity to the beach, shopping centers, and transportation hubs. Experience a relaxed and convenient lifestyle.",
    image: "/images/property (11).jpg",
  },
  {
    id: 7,
    name: "Villa on Washington Avenue",
    location: "Mumbai, Juhu, JVPD Scheme, Plot 145",
    price: 490000,
    distance: "1.2km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A prestigious villa for rent in the upscale area of Juhu, known for its celebrity residents and upscale lifestyle. Enjoy sea views, luxurious amenities, and proximity to high-end restaurants and entertainment.",
    image: "/images/property (12).jpg",
  },
  {
    id: 8,
    name: "Villa on Washington Avenue",
    location: "Navi Mumbai, Nerul, Sector 21, Plot 167",
    price: 780000,
    distance: "1.2km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3000 sq ft",
    description:
      "A spacious villa in the well-planned area of Nerul, offering a comfortable and convenient living experience. Features wide roads, green spaces, and easy access to essential amenities. A perfect choice for a growing family.",
    image: "/images/property (13).jpg",
  },
  {
    id: 9,
    name: "Luxury Apartment",
    location: "Mumbai, Worli Sea Face",
    price: 650000,
    distance: "0.8km",
    purpose: "rent",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "4000 sq ft",
    description:
      "A premium apartment available for rent in the prestigious Worli Sea Face area. Enjoy stunning sea views, high-end amenities, and a luxurious lifestyle in one of Mumbai's most sought-after locations.",
    image: "/images/property (14).jpg",
  },
  {
    id: 10,
    name: "Cozy Bungalow",
    location: "Navi Mumbai, Panvel, Sector 5",
    price: 550000,
    distance: "2.5km",
    purpose: "sale",
    number_of_beds: 2,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "1800 sq ft",
    description:
      "A cozy bungalow in the peaceful surroundings of Panvel. Ideal for those seeking a quiet retreat away from the city's hustle. Features a private garden and proximity to nature.",
    image: "/images/property (15).jpg",
  },
  {
    id: 11,
    name: "Spacious Flat",
    location: "Mumbai, Dadar West, Shivaji Park",
    price: 720000,
    distance: "1.5km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "2500 sq ft",
    description:
      "A spacious flat with a view of Shivaji Park in Dadar West. Enjoy the vibrant neighborhood with easy access to local markets, schools, and the beach. Perfect for a family looking for a comfortable urban lifestyle.",
    image: "/images/property (21).jpg",
  },
  {
    id: 12,
    name: "Modern Villa",
    location: "Navi Mumbai, Ulwe, Plot 88",
    price: 480000,
    distance: "3.0km",
    purpose: "sale",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "3500 sq ft",
    description:
      "A modern villa in the rapidly developing area of Ulwe, offering a luxurious and contemporary living space. Features state-of-the-art amenities and a serene environment.",
    image: "/images/property (26).jpg",
  },
  {
    id: 13,
    name: "Sea Facing Apartment",
    location: "Mumbai, Bandra East, Apt 404",
    price: 810000,
    distance: "0.5km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "3200 sq ft",
    description:
      "An exquisite sea-facing apartment in Bandra East, offering breathtaking views and a luxurious lifestyle. Enjoy top-notch amenities and proximity to the city's finest entertainment and dining options.",
    image: "/images/property (23).jpg",
  },
  {
    id: 14,
    name: "Garden Villa",
    location: "Navi Mumbai, Belapur, Sector 11",
    price: 980000,
    distance: "1.8km",
    purpose: "sale",
    number_of_beds: 5,
    number_of_bathrooms: 4,
    contact: "+256 775 358738",
    dimensions: "4500 sq ft",
    description:
      "A magnificent garden villa in Belapur, offering a harmonious blend of luxury and nature. Features a sprawling garden, elegant interiors, and a peaceful neighborhood.",
    image: "/images/property (24).jpg",
  },
  {
    id: 15,
    name: "Penthouse Suite",
    location: "Mumbai, Lower Parel, PH 501",
    price: 1200000,
    distance: "1.0km",
    purpose: "rent",
    number_of_beds: 4,
    number_of_bathrooms: 4,
    contact: "+256 775 358738",
    dimensions: "5000 sq ft",
    description:
      "A luxurious penthouse suite in Lower Parel, offering panoramic city views and opulent amenities. Experience the pinnacle of urban living with world-class entertainment and dining at your doorstep.",
    image: "/images/property (25).jpg",
  },
  {
    id: 16,
    name: "Hilltop Villa",
    location: "Navi Mumbai, Khandeshwar, Sector 8, Plot 22",
    price: 590000,
    distance: "3.5km",
    purpose: "sale",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "4200 sq ft",
    description:
      "A stunning hilltop villa in Khandeshwar, offering breathtaking views of the surrounding landscape. Features a private pool, lush gardens, and a tranquil atmosphere.",
    image: "/images/property (40).jpg",
  },
  {
    id: 17,
    name: "Spacious Apartment",
    location: "Mumbai, Diamond Garden",
    price: 680000,
    distance: "2.0km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "2800 sq ft",
    description:
      "A spacious apartment in Chembur, close to Diamond Garden. Enjoy a family-friendly environment with easy access to schools, hospitals, and shopping centers.",
    image: "/images/property (41).png",
  },
  {
    id: 18,
    name: "Luxury Farmhouse",
    location: "Navi Mumbai, Karjat, Plot 14",
    price: 1100000,
    distance: "15km",
    purpose: "sale",
    number_of_beds: 6,
    number_of_bathrooms: 5,
    contact: "+256 775 358738",
    dimensions: "8000 sq ft",
    description:
      "An expansive luxury farmhouse in Karjat, perfect for a weekend getaway or a permanent escape to nature. Features vast green spaces, a private swimming pool, and world-class amenities.",
    image: "/images/property (27).jpg",
  },
  {
    id: 19,
    name: "Modern Studio Apartment",
    location: "Mumbai, Andheri, Lokhandwala",
    price: 450000,
    distance: "0.7km",
    purpose: "rent",
    number_of_beds: 1,
    number_of_bathrooms: 1,
    contact: "+256 775 358738",
    dimensions: "1000 sq ft",
    description:
      "A stylish and modern studio apartment in the heart of Lokhandwala, Andheri West. Ideal for singles or young professionals seeking a convenient urban lifestyle close to entertainment and dining.",
    image: "/images/property (28).jpg",
  },
  {
    id: 20,
    name: " Waterfront Residence",
    location: "Navi Mumbai, Airoli, Plot 111",
    price: 790000,
    distance: "2.2km",
    purpose: "sale",
    number_of_beds: 5,
    number_of_bathrooms: 4,
    contact: "+256 775 358738",
    dimensions: "5500 sq ft",
    description:
      "A luxurious waterfront residence in Airoli, offering stunning views of the creek and a tranquil living experience. Features a private deck, modern interiors, and access to exclusive amenities.",
    image: "/images/property (34).jpg",
  },
  {
    id: 21,
    name: "Independent House",
    location: "Mumbai, Borivali West, IC Colony",
    price: 320000,
    distance: "1.9km",
    purpose: "rent",
    number_of_beds: 3,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "3800 sq ft",
    description:
      "A charming independent house in Borivali West, offering a peaceful and family-friendly environment. Features a private garden, spacious rooms, and proximity to schools and markets.",
    image: "/images/property (35).jpg",
  },
  {
    id: 22,
    name: "Executive Apartment",
    location: "Navi Mumbai, CBD Belapur",
    price: 620000,
    distance: "0.9km",
    purpose: "sale",
    number_of_beds: 3,
    number_of_bathrooms: 2,
    contact: "+256 775 358738",
    dimensions: "3100 sq ft",
    description:
      "An executive apartment in CBD Belapur, offering a convenient location close to business hubs and transportation. Features modern amenities, a stylish interior, and panoramic city views.",
    image: "/images/property (36).jpg",
  },
  {
    id: 23,
    name: "Studio Apartment",
    location: "Mumbai, Juhu, Tara Road, Studio 202",
    price: 410000,
    distance: "0.6km",
    purpose: "rent",
    number_of_beds: 1,
    number_of_bathrooms: 1,
    contact: "+256 775 358738",
    dimensions: "1100 sq ft",
    description:
      "A compact and well-designed studio apartment on Tara Road in Juhu, offering proximity to the beach and a vibrant nightlife. Ideal for singles seeking a convenient and lively urban experience.",
    image: "/images/property (40).jpg",
  },
  {
    id: 24,
    name: "Duplex House",
    location: "Navi Mumbai, Kopar Khairane",
    price: 1300000,
    distance: "2.7km",
    purpose: "sale",
    number_of_beds: 4,
    number_of_bathrooms: 3,
    contact: "+256 775 358738",
    dimensions: "4700 sq ft",
    description:
      "A stunning duplex house in Kopar Khairane, offering a luxurious and spacious living environment. Features modern design, high-end finishes, and proximity to essential amenities.",
    image: "/images/property (30).jpg",
  },
  {
    id: 25,
    name: "Sea View Penthouse",
    location: "Mumbai, Marine Drive, Penthouse 1",
    price: 950000,
    distance: "0.3km",
    purpose: "rent",
    number_of_beds: 5,
    number_of_bathrooms: 5,
    contact: "+256 775 358738",
    dimensions: "6000 sq ft",
    description:
      "An exceptional sea-view penthouse on Marine Drive, offering unparalleled luxury and breathtaking views of the Arabian Sea. Features a private terrace, state-of-the-art amenities, and proximity to Mumbai's iconic landmarks.",
    image: "/images/property (20).jpg",
  },
];






export const testimonials = [
  {
    id: 1,
    name: "Vikram Reddy",
    role: "Architect",
    image: "/images/avatar-4.jpg",
    reviewText:
      "This website is the best resource for navigating the complex real estate market in Hyderabad. The accurate information, transparent processes, and dedicated support team gave me the confidence to make a sound investment.",
  },
  {
    id: 2,
    name: "Suresh Menon",
    role: "Backend engineer",
    image: "/images/avatar-8.jpg",
    reviewText:
      "The in-depth market analysis reports and investment insights were invaluable in helping me make an informed decision. I highly recommend this website to anyone looking to buy, sell, or invest in property in India.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Home Designer",
    image: "/images/avatar-11.jpg",
    reviewText:
      "I was so impressed with the wide selection of properties! This website made finding the perfect apartment in Mumbai incredibly easy. The detailed listings and responsive agents were a lifesaver for a first-time buyer like me.",
  },
];

export const feeds = [
  {
    id: 1,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 2, 2024",
    image: "/images/blog/blog (1).jpg",
    category: "architecture",
    description:
      "Architecture is the art and technique of designing and constructing buildings and other physical structures, serving both practical and expressive requirements. It encompasses a wide range of activities, from the macro-level of urban design to the micro-level of construction details. Historically, architecture has evolved alongside human civilization, reflecting cultural values and societal changes. The earliest known architectural theories date back to the Roman architect Vitruvius, who emphasized durability, utility, and beauty as essential qualities of a good building. Over time, movements such as modernism and postmodernism have influenced architectural styles, emphasizing different aspects of form and function. Today, architecture continues to adapt to contemporary needs, integrating sustainability and technology into its practice.",
    author: {
      name: "Priya Sharma",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 2,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "september 29, 2024",
    image: "/images/blog/blog (2).jpg",
    category: "architecture",
    description:
      "Architecture is the art and technique of designing and constructing buildings and other physical structures, serving both practical and expressive requirements. It encompasses a wide range of activities, from the macro-level of urban design to the micro-level of construction details. Historically, architecture has evolved alongside human civilization, reflecting cultural values and societal changes. The earliest known architectural theories date back to the Roman architect Vitruvius, who emphasized durability, utility, and beauty as essential qualities of a good building. Over time, movements such as modernism and postmodernism have influenced architectural styles, emphasizing different aspects of form and function. Today, architecture continues to adapt to contemporary needs, integrating sustainability and technology into its practice.",
    author: {
      name: "Suresh Menon",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 3,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "October 13, 2024",
    image: "/images/blog/blog (3).jpg",
    category: "interior",
    description:
      "Architecture is the art and technique of designing and constructing buildings and other physical structures, serving both practical and expressive requirements. It encompasses a wide range of activities, from the macro-level of urban design to the micro-level of construction details. Historically, architecture has evolved alongside human civilization, reflecting cultural values and societal changes. The earliest known architectural theories date back to the Roman architect Vitruvius, who emphasized durability, utility, and beauty as essential qualities of a good building. Over time, movements such as modernism and postmodernism have influenced architectural styles, emphasizing different aspects of form and function. Today, architecture continues to adapt to contemporary needs, integrating sustainability and technology into its practice.",
    author: {
      name: "Vikram Reddy",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 4,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "November 29, 2024",
    image: "/images/blog/blog (4).jpg",
    category: "architecture",
    description:
      "Architecture is the art and technique of designing and constructing buildings and other physical structures, serving both practical and expressive requirements. It encompasses a wide range of activities, from the macro-level of urban design to the micro-level of construction details. Historically, architecture has evolved alongside human civilization, reflecting cultural values and societal changes. The earliest known architectural theories date back to the Roman architect Vitruvius, who emphasized durability, utility, and beauty as essential qualities of a good building. Over time, movements such as modernism and postmodernism have influenced architectural styles, emphasizing different aspects of form and function. Today, architecture continues to adapt to contemporary needs, integrating sustainability and technology into its practice.",
    author: {
      name: "Priya Sharma",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 5,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "December 15, 2024",
    image: "/images/blog/blog (5).jpg",
    category: "interior",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Priya Sharma",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 6,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "December 20, 2024",
    image: "/images/blog/blog (6).jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Suresh Menon",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 7,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 4, 2025",
    image: "/images/blog/blog (7).jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Suresh Menon",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 8,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 10, 2025",
    image: "/images/blog/blog (8).jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Suresh Menon",
      avatar: "/images/avatar.png",
    },
  },
  {
    id: 9,
    title: "Agency Is the capacity of an actor to act in a given..",
    date_posted: "january 25, 2025",
    image: "/images/blog/blog (9).jpg",
    category: "architecture",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero beatae sit voluptas dolorum vel eligendi consectetur alias in veniam nostrum reiciendis cum labore fugiat ut ipsum quidem earum eaque voluptatem enim possimus, est, saepe explicabo. Reiciendis veritatis maiores dolore quidem doloremque obcaecati quis commodi dolorum. Corporis ad provident officia aut iusto ea, voluptatibus architecto debitis pariatur qui! Nisi esse voluptas veniam, quia provident rerum iure quis quasi, odio quos dolores obcaecati nam nostrum nesciunt ipsum similique recusandae? Neque, animi? Voluptates facere rerum labore eos nulla! Ut, nesciunt facere fugit optio quaerat neque id fuga necessitatibus, pariatur eius tenetur? Esse ipsa numquam distinctio vero reprehenderit, libero architecto itaque, optio quibusdam cupiditate cum, deleniti ad. Sapiente, placeat voluptates a recusandae voluptatum cupiditate nulla vel ut. Eveniet eum obcaecati illo saepe, recusandae natus incidunt quas molestias maxime vel? Possimus perspiciatis, repellat maxime molestias quos perferendis! Impedit consectetur natus alias laudantium sunt ipsam nostrum! Eius quasi officiis, labore sunt itaque porro laudantium, suscipit ipsa dicta magni quibusdam totam? Exercitationem doloribus, debitis, eligendi facere odio a nesciunt nam suscipit quia ullam sequi, illum repudiandae! Hic nobis inventore maxime. Explicabo quod inventore excepturi adipisci provident quidem ab doloremque amet nostrum, ullam fugiat debitis eius aspernatur atque.",
    author: {
      name: "Suresh Menon",
      avatar: "/images/avatar.png",
    },
  },
];

export const teamMembers = [
  {
    id: 1,
    name: "Ravi Chauhan",
    role: "Architect",
    image: "/images/avatar-4.jpg",
  },
  {
    id: 2,
    name: "Eden Shah",
    role: "Process engineer",
    image: "/images/avatar-6.jpg",
  },
  {
    id: 3,
    name: "Revati Sheety",
    role: "Senior Designer",
    image: "/images/avatar-11.jpg",
  },
  {
    id: 4,
    name: "Rohan Mishra",
    role: "Client Manager",
    image: "/images/avatar-5.jpg",
  },
  {
    id: 5,
    name: "Prabhu Desai",
    role: "Bank Co-ordinator",
    image: "/images/avatar-7.jpg",
  },
  {
    id: 6,
    name: "Alim Khan",
    role: "Visitor Inspector",
    image: "/images/avatar-10.jpg",
  },
  {
    id: 7,
    name: "Ruslun Shaikh",
    role: "Contractor",
    image: "/images/avatar-9.jpg",
  },
  {
    id: 8,
    name: "Nitin Bhanushali",
    role: "Occupency Inspector",
    image: "/images/avatar-8.jpg",
  },
];

export const services = [
  {
    id: 1,
    name: "luxury apartment",
    icon: <BiBuildingHouse />,
    text: "Elevate your lifestyle with exquisite design and premium amenities. Experience unparalleled living.",
  },
  {
    id: 2,
    name: "architectural design",
    icon: <BiFullscreen />,
    text: "Innovative architectural designs blending form and function seamlessly. Creating spaces that inspires.",
  },
  {
    id: 3,
    name: "extra security",
    icon: <BiShieldAlt2 />,
    text: "Protect your peace of mind with advanced security solutions. Providing reliable & secure protection.",
  },
  {
    id: 4,
    name: "Home remodelling",
    icon: <BiHomeAlt />,
    text: "Transform your house by Enhancing your space for comfort, style, and lasting value to your dream home.",
  },
  {
    id: 5,
    name: "office renovation",
    icon: <FaPaintRoller />,
    text: "Upgrade your workspace for enhanced productivity and aesthetics with positive environments.",
  },
  {
    id: 6,
    name: "24/7 support",
    icon: <FiHeadphones />,
    text: "Reliable support is available whenever you need it, day or night. We are committed to provide assistance",
  },
];

export const projects = [
  {
    id: 1,
    name: "Apartment",
    number: 20,
    image: "/images/property (17).jpg",
  },
  {
    id: 2,
    name: "Office",
    number: 23,
    image: "/images/property (1).jpeg",
  },
  {
    id: 3,
    name: "Townhouse",
    number: 36,
    image: "/images/property (21).jpg",
  },
  {
    id: 4,
    name: "living room",
    number: 12,
    image: "/images/property (1).jpg",
  },
  {
    id: 5,
    name: "Real estate",
    number: 36,
    image: "/images/property (20).jpg",
  },
  {
    id: 6,
    name: "luxury apartment",
    number: 14,
    image: "/images/property (18).jpg",
  },
];

export const brands = [
  "/images/brands/airbnb.png",
  "/images/brands/cisco.png",
  "/images/brands/ebay.png",
  "/images/brands/microsoft.png",
  "/images/brands/uber.png",
];

export const focus = [
  {
    id: 1,
    name: "Buy a New Home",
    icon: <BiHomeAlt />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
  },
  {
    id: 2,
    name: "Sell a Home",
    icon: <BiMoney />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
  },
  {
    id: 4,
    name: "Rent a Home",
    icon: <BiBuildings />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod earum commodi provident est ex similique.",
  },
];

export const categories = [
  {
    id: 1,
    name: "Apartments",
    number: 20,
    image: "/images/property (17).jpg",
  },
  {
    id: 2,
    name: "Offices",
    number: 23,
    image: "/images/property (1).jpeg",
  },
  {
    id: 3,
    name: "Townhouse",
    number: 36,
    image: "/images/property (21).jpg",
  },
  {
    id: 4,
    name: "living room",
    number: 12,
    image: "/images/property (1).jpg",
  },
  {
    id: 5,
    name: "Real estates",
    number: 36,
    image: "/images/property (20).jpg",
  },
  {
    id: 6,
    name: "Condors",
    number: 14,
    image: "/images/property (18).jpg",
  },
];

export const propertyTypes = [
  {
    id: 1,
    name: "apartment",
    number: 3,
  },
  {
    id: 2,
    name: "house",
    number: 3,
  },
  {
    id: 3,
    name: "industrial",
    number: 1,
  },
  {
    id: 4,
    name: "office villa",
    number: 1,
  },
  {
    id: 5,
    name: "luxury home",
    number: 3,
  },
  {
    id: 6,
    name: "land",
    number: 1,
  },
  {
    id: 7,
    name: "rental",
    number: 3,
  },
  {
    id: 8,
    name: "studio",
    number: 2,
  },
];
export const priceRanges = [
  {
    id: 1,
    name: "low Budget",
    range: "₹100k - ₹300k",
  },
  {
    id: 2,
    name: "medium budget",
    range: "₹300k - ₹500k",
  },
  {
    id: 3,
    name: "high budget",
    range: "₹500k - ₹1M",
  },
];

// export const socials = [
//   <FaFacebook />,
//   <FaInstagram />,
//   <FaLinkedin />,
//   <FaYoutube />,
// ];

export const socials = [
  { icon: <FaFacebook />, link: "https://www.facebook.com/login" },
  { icon: <FaInstagram />, link: "https://www.instagram.com/accounts/login/" },
  { icon: <FaLinkedin />, link: "https://www.linkedin.com/login" },
  { icon: <FaYoutube />, link: "https://www.youtube.com/@wabwenibrian66" },
];


export const ratings = [
  {
    id: 1,
    image: "/images/property (9).jpg",
    rating: 4.3,
    name: "Comfort Property Advisor",
    price: 6,
  },
  {
    id: 2,
    rating: 4.3,
    name: " Waterfront Residence",
    image: "/images/property (34).jpg",
    price: 7.9,
  },
  {
    id: 3,
    rating: 4.3,
    name: "Luxury Farmhouse",
    price: 11,
    image: "/images/property (27).jpg",

  },
  {
    id: 4,
    rating: 4.3,
    name: "Garden Villa",
    price: 9.8,
    image: "/images/property (24).jpg",
  },
];

export const tags = [
  "Apartment",
  "Office Villa",
  "Studio",
  "Luxury Home",
  "House",
  "Land",
  "Rental",
  "Industrial",
];

export const faqs = [
  {
    id: 1,
    question: "How can we help?",
    response:
      "We're here to assist you with any questions or concerns you may have regarding our properties, services, or website. Please browse our FAQs or contact our support team for personalized assistance.",
  },
  {
    id: 2,
    question: "How can I make a refund request from your website?",
    response:
      "To request a refund, please visit your account dashboard and navigate to the 'Booking History' section. Locate the booking you wish to refund and follow the instructions for submitting a refund request. Please note that refund policies vary depending on the property.",
  },
  {
    id: 3,
    question: "Do you store any of my personal information?",
    response:
      "We take your privacy seriously. We store only the necessary information required to process your bookings and provide you with a personalized experience. All data is encrypted and protected in accordance with our privacy policy, which you can review on our website.",
  },
  {
    id: 4,
    question: "Should I talk to the bank before booking a home?",
    response:
      "It's generally a good idea to speak with your bank or financial advisor before making a significant financial commitment like booking a home. They can help you assess your budget, understand financing options, and ensure you're making an informed decision.",
  },
  {
    id: 5,
    question: "How do I make payments using my credit card?",
    response:
      "We accept all major credit cards. During the booking process, you'll be prompted to enter your credit card details on our secure payment gateway. Your information is encrypted to ensure a safe and hassle-free transaction.",
  },
  {
    id: 6,
    question: "How do I link multiple accounts with my phone number?",
    response:
      "Currently, our system only supports linking one account per phone number for security reasons. If you have multiple accounts, you'll need to use separate phone numbers or email addresses for each.",
  },
];

// export const faqs = [
//   {
//     id: 1,
//     question: "How can we help?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
//   {
//     id: 2,
//     question: "How can I make refund from your website?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
//   {
//     id: 3,
//     question: "Do you store any of my information?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
//   {
//     id: 4,
//     question: "Should I talk to the bank before booking a home?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
//   {
//     id: 5,
//     question: "How do i make payments using my credit card?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
//   {
//     id: 6,
//     question: "How do i link multiple accounts with my phone?",
//     response:
//       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto nisi, molestias ipsam dolorum laudantium corrupti optio cupiditate libero odit cum, labore ab sint officiis reiciendis quisquam perferendis, facilis facere iste inventore architecto blanditiis suscipit. Voluptatibus.",
//   },
// ];
