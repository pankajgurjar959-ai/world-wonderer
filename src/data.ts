import { Destination } from './types';

export const destinations: Destination[] = [
  {
    id: 'kyoto-japan',
    name: 'Kyoto',
    country: 'Japan',
    description: 'Experience the serene beauty of ancient temples, classical Buddhist gardens, and traditional wooden houses in Japan\'s cultural heart.',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop',
    tags: ['Culture', 'History', 'Nature']
  },
  {
    id: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    description: 'Famous for its stunning sunsets, white-washed buildings with blue domes, and breathtaking views of the Aegean Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=2070&auto=format&fit=crop',
    tags: ['Romance', 'Beaches', 'Views']
  },
  {
    id: 'machu-picchu-peru',
    name: 'Machu Picchu',
    country: 'Peru',
    description: 'An ancient Incan citadel set high in the Andes Mountains, offering a glimpse into a fascinating historical civilization.',
    imageUrl: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?q=80&w=2070&auto=format&fit=crop',
    tags: ['Adventure', 'History', 'Hiking']
  },
  {
    id: 'banff-canada',
    name: 'Banff National Park',
    country: 'Canada',
    description: 'Canada\'s oldest national park is renowned for its turquoise glacial lakes, majestic mountain peaks, and abundant wildlife.',
    imageUrl: 'https://images.unsplash.com/photo-1603565815387-32049e6f3d1d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Nature', 'Hiking', 'Wildlife']
  },
  {
    id: 'amalfi-italy',
    name: 'Amalfi Coast',
    country: 'Italy',
    description: 'A spectacular stretch of coastline featuring sheer cliffs, rugged shoreline, and pastel-colored fishing villages terraced into the hillsides.',
    imageUrl: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&w=2071&auto=format&fit=crop',
    tags: ['Views', 'Food', 'Culture']
  },
  {
    id: 'bora-bora-pf',
    name: 'Bora Bora',
    country: 'French Polynesia',
    description: 'A small South Pacific island northwest of Tahiti, surrounded by a sand-fringed motu and a turquoise lagoon protected by a coral reef.',
    imageUrl: 'https://images.unsplash.com/photo-1502085671122-2d218cd434e6?q=80&w=2126&auto=format&fit=crop',
    tags: ['Relaxation', 'Beaches', 'Luxury']
  },
  {
    id: 'versailles-france',
    name: 'Palace of Versailles',
    country: 'France',
    description: 'A former royal residence built by King Louis XIV, famous for its magnificent Hall of Mirrors and expansive, manicured gardens.',
    imageUrl: 'https://images.unsplash.com/photo-1600100412854-9403b22fc52b?q=80&w=2070&auto=format&fit=crop',
    tags: ['History', 'Architecture', 'Culture']
  },
  {
    id: 'alhambra-spain',
    name: 'Alhambra',
    country: 'Spain',
    description: 'A stunning palace and fortress complex in Granada, known for its exquisite Islamic architecture and beautiful courtyards.',
    imageUrl: 'https://images.unsplash.com/photo-1542104595-5db139e6a0a0?q=80&w=2070&auto=format&fit=crop',
    tags: ['History', 'Architecture', 'Culture']
  },
  {
    id: 'neuschwanstein-germany',
    name: 'Neuschwanstein Castle',
    country: 'Germany',
    description: 'A nineteenth-century Romanesque Revival palace on a rugged hill above the village of Hohenschwangau in southwest Bavaria.',
    imageUrl: 'https://images.unsplash.com/photo-1534301549488-812e9b0d2d3a?q=80&w=2071&auto=format&fit=crop',
    tags: ['Castles', 'Views', 'History']
  },
  {
    id: 'taj-mahal-india',
    name: 'Taj Mahal',
    country: 'India',
    description: 'An immense mausoleum of white marble, built in Agra between 1631 and 1648 by order of the Mughal emperor Shah Jahan.',
    imageUrl: 'https://images.unsplash.com/photo-1564507592208-013661129f10?q=80&w=2070&auto=format&fit=crop',
    tags: ['Wonder', 'History', 'Romance']
  },
  {
    id: 'petra-jordan',
    name: 'Petra',
    country: 'Jordan',
    description: 'A famous archaeological site in Jordan\'s southwestern desert, featuring temples and tombs carved directly into vibrant pink sandstone cliffs.',
    imageUrl: 'https://images.unsplash.com/photo-1501235300096-7ea54366914b?q=80&w=2097&auto=format&fit=crop',
    tags: ['Archaeology', 'History', 'Desert']
  },
  {
    id: 'colosseum-italy',
    name: 'Colosseum',
    country: 'Italy',
    description: 'An oval amphitheatre in the centre of the city of Rome, the largest ancient amphitheatre ever built, holding up to 80,000 spectators.',
    imageUrl: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop',
    tags: ['History', 'Architecture', 'City']
  },
  {
    id: 'grand-canyon-usa',
    name: 'Grand Canyon',
    country: 'United States',
    description: 'A steep-sided canyon carved by the Colorado River in Arizona, revealing millions of years of geological history.',
    imageUrl: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?q=80&w=2070&auto=format&fit=crop',
    tags: ['Nature', 'Views', 'Hiking']
  },
  {
    id: 'victoria-falls-zambia',
    name: 'Victoria Falls',
    country: 'Zambia / Zimbabwe',
    description: 'A spectacular waterfall on the Zambezi River in southern Africa, providing habitat for several unique species of plants and animals.',
    imageUrl: 'https://images.unsplash.com/photo-1601662528567-526cd06f6582?q=80&w=2026&auto=format&fit=crop',
    tags: ['Nature', 'Waterfalls', 'Adventure']
  },
  {
    id: 'serengeti-tanzania',
    name: 'Serengeti',
    country: 'Tanzania',
    description: 'A vast ecosystem in east-central Africa, best known for its annual migration of over 1.5 million white-bearded wildebeest.',
    imageUrl: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068&auto=format&fit=crop',
    tags: ['Wildlife', 'Safari', 'Nature']
  },
  {
    id: 'angkor-wat-cambodia',
    name: 'Angkor Wat',
    country: 'Cambodia',
    description: 'A temple complex in Cambodia and the largest religious monument in the world by land area, originally constructed as a Hindu temple.',
    imageUrl: 'https://images.unsplash.com/photo-1600295175653-529a1b0b533f?q=80&w=2070&auto=format&fit=crop',
    tags: ['Temples', 'History', 'Culture']
  },
  {
    id: 'giza-egypt',
    name: 'Pyramids of Giza',
    country: 'Egypt',
    description: 'The oldest of the Seven Wonders of the Ancient World, these magnificent pyramids remain largely intact and continue to awe visitors.',
    imageUrl: 'https://images.unsplash.com/photo-1539650116574-8efeb43e2b45?q=80&w=2070&auto=format&fit=crop',
    tags: ['Wonder', 'History', 'Desert']
  },
  {
    id: 'plitvice-croatia',
    name: 'Plitvice Lakes',
    country: 'Croatia',
    description: 'A forest reserve in central Croatia known for a chain of 16 terraced lakes, joined by waterfalls, that extend into a limestone canyon.',
    imageUrl: 'https://images.unsplash.com/photo-1522026330965-7033503254fc?q=80&w=2070&auto=format&fit=crop',
    tags: ['Nature', 'Lakes', 'Hiking']
  },
  {
    id: 'yosemite-usa',
    name: 'Yosemite',
    country: 'United States',
    description: 'A national park in California\'s Sierra Nevada mountains, recognized for its granite cliffs, waterfalls, clear streams, and giant sequoia groves.',
    imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?q=80&w=2070&auto=format&fit=crop',
    tags: ['Nature', 'Mountains', 'Adventure']
  },
  {
    id: 'halong-bay-vietnam',
    name: 'Halong Bay',
    country: 'Vietnam',
    description: 'Known for its emerald waters and thousands of towering limestone islands topped by rainforests, offering popular junk boat tours.',
    imageUrl: 'https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=2070&auto=format&fit=crop',
    tags: ['Views', 'Boating', 'Nature']
  },
  {
    id: 'pamukkale-turkey',
    name: 'Pamukkale',
    country: 'Turkey',
    description: 'Famous for its thermal waters flowing down white travertine terraces on a nearby hillside, creating stunning natural pools.',
    imageUrl: 'https://images.unsplash.com/photo-1524234599372-a56f8f5333f2?q=80&w=2070&auto=format&fit=crop',
    tags: ['Nature', 'Hot Springs', 'Views']
  },
  {
    id: 'salar-de-uyuni-bolivia',
    name: 'Salar de Uyuni',
    country: 'Bolivia',
    description: 'The world\'s largest salt flat, left behind by prehistoric lakes evaporated long ago, creating a striking mirror effect after rain.',
    imageUrl: 'https://images.unsplash.com/photo-1498668102432-84196d010620?q=80&w=2070&auto=format&fit=crop',
    tags: ['Desert', 'Views', 'Photography']
  },
  {
    id: 'mount-fuji-japan',
    name: 'Mount Fuji',
    country: 'Japan',
    description: 'An active volcano and Japan\'s tallest peak, an iconic symbol of the country and a popular site for climbing and sightseeing.',
    imageUrl: 'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?q=80&w=2070&auto=format&fit=crop',
    tags: ['Mountains', 'Nature', 'Iconic']
  },
  {
    id: 'galapagos-ecuador',
    name: 'Galápagos Islands',
    country: 'Ecuador',
    description: 'A volcanic archipelago in the Pacific Ocean, considered one of the world\'s foremost destinations for wildlife-viewing.',
    imageUrl: 'https://images.unsplash.com/photo-1623862215288-5c911fb6b251?q=80&w=2070&auto=format&fit=crop',
    tags: ['Wildlife', 'Islands', 'Nature']
  },
  {
    id: 'cinque-terre-italy',
    name: 'Cinque Terre',
    country: 'Italy',
    description: 'A string of centuries-old seaside villages on the rugged Italian Riviera coastline, known for colorful houses and terraced vineyards.',
    imageUrl: 'https://images.unsplash.com/photo-1498805983167-a523078d762c?q=80&w=2111&auto=format&fit=crop',
    tags: ['Coastal', 'Culture', 'Views']
  },
  {
    id: 'great-wall-china',
    name: 'Great Wall',
    country: 'China',
    description: 'An ancient series of walls and fortifications, totaling more than 13,000 miles in length, built to protect the Chinese Empire.',
    imageUrl: 'https://images.unsplash.com/photo-1508804052814-cd3ba865a116?q=80&w=2070&auto=format&fit=crop',
    tags: ['History', 'Wonder', 'Architecture']
  }
];
