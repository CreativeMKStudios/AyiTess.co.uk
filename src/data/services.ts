export type Service = {
  slug: string;
  name: string;
  nav: string;
  eyebrow: string;
  summary: string;
  lead: string;
  jobs: string[];
  note: string;
  meta: string;
};

export const services: Service[] = [
  {
    slug: 'carpentry',
    name: 'Carpentry and joinery',
    nav: 'Carpentry',
    eyebrow: 'Woodwork',
    summary: 'Doors, skirting, shelves, and repairs to timber in the house.',
    lead: 'Most of the woodwork in a house is simple until it sticks, gaps, or was never fitted square. We hang doors, fit skirting and architrave, build shelves, and put right timber that has swollen, dropped, or split.',
    jobs: [
      'Hang internal doors and plane doors that stick',
      'Fit skirting, architrave, window boards, and pipe boxing',
      'Build shelves, alcove units, and simple fitted cupboards',
      'Repair loose floorboards, stair nosings, and broken timber',
      'Fit curtain poles, blinds, and wooden thresholds',
      'First-fix and second-fix help on small domestic jobs',
    ],
    note: 'If a repair needs a structural engineer, or the timber is in a listed building, we will say so before we cut anything.',
    meta: 'Carpentry and joinery in Barnsley and across Yorkshire. Doors, skirting, shelves, and timber repairs from AyiTess.',
  },
  {
    slug: 'handyman',
    name: 'Handyman and repairs',
    nav: 'Handyman',
    eyebrow: 'Odd jobs',
    summary: 'The list of small jobs that are awkward to book one by one.',
    lead: 'A handyman visit is for the jobs that sit on a list. Flat packs, brackets, minor leaks, loose fittings, and the things that never quite got finished after a move.',
    jobs: [
      'Build flat-pack furniture and kitchen units',
      'Hang TVs, mirrors, pictures, and curtain tracks',
      'Fix loose hinges, handles, catches, and toilet seats',
      'Silicone around baths, basins, and worktops',
      'Swap taps and traps that are not on a gas supply',
      'Snag a room after other work: filling, easing, and making good',
    ],
    note: 'We do not rewire houses, open fuse boards, or work on gas. Boilers and gas appliances need a Gas Safe engineer.',
    meta: 'Handyman in Barnsley. Flat packs, TV fitting, small repairs, and the jobs left after a move. AyiTess.',
  },
  {
    slug: 'decorating',
    name: 'Painting, plastering and decorating',
    nav: 'Decorating',
    eyebrow: 'Finishes',
    summary: 'Walls, ceilings, woodwork, and plaster repairs before the paint.',
    lead: 'Paint only looks right if the surface under it is sound. We fill, caulk, and patch plaster, then paint walls, ceilings, doors, and skirting. We also take on a single room when you do not want a whole-house crew.',
    jobs: [
      'Paint walls, ceilings, woodwork, and radiators',
      'Patch cracked plaster and blown skim',
      'Prepare new plaster so it is ready for paint',
      'Repaint doors, frames, and skirting after joinery',
      'Freshen a rental before new tenants move in',
    ],
    note: 'Tell us about damp stains before we paint. Paint will not hold if the wall is still wet.',
    meta: 'Painting, plastering and decorating in Yorkshire. Room refreshes and make-good from AyiTess in Barnsley.',
  },
  {
    slug: 'snagging',
    name: 'Snagging',
    nav: 'Snagging',
    eyebrow: 'New homes',
    summary: 'A clear list of faults on a new build, a rental, or a small commercial unit.',
    lead: 'New homes and freshly finished units often have a long list of small faults. Doors that catch, gaps in silicone, scuffed paint, missing seals. We walk the property with you, write down what we find, and put right the items you ask us to fix.',
    jobs: [
      'Snag a new house or flat, private or for a landlord',
      'Check a small shop or office after a fit-out',
      'Ease doors, adjust hinges, and fill nail holes',
      'Touch up paint and silicone',
      'Note items that belong to the developer, not to us',
    ],
    note: 'We will not sign off a warranty claim for a developer. We give you a plain list and a price for the work we can do.',
    meta: 'Snagging for new homes and small commercial units. AyiTess, based in Barnsley, lists the faults and fixes the ones you want done.',
  },
  {
    slug: 'jet-washing',
    name: 'Jet washing',
    nav: 'Jet washing',
    eyebrow: 'Outside',
    summary: 'Drives, patios, paths, and the outside of bins and garden furniture.',
    lead: 'A drive or patio picks up algae, moss, and tyre marks. We jet wash hard surfaces around the house so you can see the paving again. Tell us what the surface is. Soft sandstone needs a lighter touch than concrete.',
    jobs: [
      'Driveways, patios, paths, and steps',
      'Decking, if the boards can take the pressure',
      'Bin stores, garden walls, and plastic furniture',
      'A rinse-down after a clearance',
    ],
    note: 'We will not blast soft stone, old mortar, or a render coat that is already loose.',
    meta: 'Jet washing for drives, patios and paths. AyiTess comes out from Barnsley across Yorkshire.',
  },
  {
    slug: 'property-maintenance',
    name: 'Property maintenance',
    nav: 'Maintenance',
    eyebrow: 'Ongoing',
    summary: 'Repeat visits for landlords, shops, and small blocks.',
    lead: 'If you look after more than one building, the same small faults come back. We can take a list for a house, a shop, or a small block and work through it on an agreed day. You get one call, not a different trade for every item.',
    jobs: [
      'Landlord lists between tenants',
      'Shop and office minor repairs',
      'Door closers, signage, and making good after a knock',
      'A regular walk-round if you want one agreed in writing',
    ],
    note: 'We work for individuals, private firms, and public-sector sites when the job fits the crew we have that week.',
    meta: 'Property maintenance for landlords and small businesses. AyiTess Ltd, Barnsley.',
  },
  {
    slug: 'moving',
    name: 'House and office moves',
    nav: 'Moves',
    eyebrow: 'Removals',
    summary: 'Local moves, longer runs, man and van, packing, and student moves.',
    lead: 'AyiTess moves houses and offices. That includes a man and van for a few pieces, a full house move, student moves, and jobs that need packing at one end and unpacking at the other. Rose usually takes the first call and stays in touch until the day.',
    jobs: [
      'House moves and office moves',
      'Man and van, single items, and student moves',
      'Packing, unpacking, and furniture taken apart and rebuilt',
      'Moves further afield when the date is booked in',
    ],
    note: 'We need stairs, parking, and access agreed before the day. A photo of the awkward piece saves a wasted trip.',
    meta: 'House and office moves, man and van, and packing. AyiTess Ltd, based in Barnsley, also takes longer UK moves when booked ahead.',
  },
  {
    slug: 'clearance',
    name: 'Waste clearance',
    nav: 'Clearance',
    eyebrow: 'Clearance',
    summary: 'House, office, shop, and garden clearances. Non-hazardous waste only.',
    lead: 'We clear houses, offices, shops, schools, and gardens. That covers domestic rubbish, office furniture, and trade waste that is not hazardous. If you are ending a tenancy or a relative has left a full house, we can take it in one visit when access is clear.',
    jobs: [
      'House and garage clearances',
      'Office, shop, school, and college clearances',
      'Garden waste and broken furniture',
      'Collection of non-hazardous trade waste',
    ],
    note: 'We do not take asbestos, chemicals, paint tins in bulk, or other hazardous waste. If you are not sure, send a photo before we book the van.',
    meta: 'House, office and garden clearance in Yorkshire. AyiTess collects non-hazardous waste. No asbestos or chemicals.',
  },
  {
    slug: 'cleaning',
    name: 'Cleaning',
    nav: 'Cleaning',
    eyebrow: 'Cleaning',
    summary: 'Home cleans, end-of-tenancy cleans, and office cleans.',
    lead: 'We clean homes and workplaces. End-of-tenancy cleans, a one-off deep clean, and regular office cleaning are the jobs we are asked for most. Say which rooms, and whether an oven or a carpet is included, so the price matches the work.',
    jobs: [
      'Domestic cleans and one-off deep cleans',
      'End of tenancy and pre-tenancy cleans',
      'Office and commercial cleans',
      'After-build cleans on small sites',
    ],
    note: 'Biohazard cleaning is not a service we advertise as a specialism. Ask before you book if the job is more than dust, grease, and everyday dirt.',
    meta: 'Home, office and end-of-tenancy cleaning from AyiTess in Barnsley.',
  },
  {
    slug: 'scaffolding',
    name: 'Scaffolding and netting',
    nav: 'Scaffolding',
    eyebrow: 'Access',
    summary: 'Scaffold and debris netting for houses and small sites.',
    lead: 'We put up scaffolding and netting so other work can happen safely off the ground. Tell us the height, the pavement, and whether the public can walk under it. If the job needs a designed scaffold, we will say that rather than guess.',
    jobs: [
      'House scaffolds for roofing, painting, and gutters',
      'Debris netting',
      'Short-hire access for a clear scope of work',
    ],
    note: 'Pavement licences and party-wall issues stay with the building owner. We will tell you what we need before we turn up.',
    meta: 'Scaffolding and netting for houses and small sites. AyiTess, Barnsley.',
  },
  {
    slug: 'gardening',
    name: 'Gardening and landscaping',
    nav: 'Gardening',
    eyebrow: 'Outside',
    summary: 'Cuts, clearances, fencing, and grounds work for homes and commercial sites.',
    lead: 'We cut back overgrown gardens, clear green waste, and take on fencing and simple landscaping. We also look after grounds on commercial sites when you want a crew that will flag a problem before you have to.',
    jobs: [
      'Garden clearance and regular cuts',
      'Fencing and gates',
      'Decking and patio repairs in timber',
      'Commercial grounds maintenance',
    ],
    note: 'Large retaining walls and tree work that needs a climber are outside a normal visit. We will tell you.',
    meta: 'Gardening, fencing and landscaping from AyiTess. Homes and commercial grounds, based in Barnsley.',
  },
  {
    slug: 'it-recycling',
    name: 'IT recycling',
    nav: 'IT recycling',
    eyebrow: 'IT kit',
    summary: 'Collection of old computers, screens, and office electronics.',
    lead: 'Offices end up with towers, screens, phones, and cables nobody wants. We collect IT kit for recycling along with other office clearance. Wipe what you can before we arrive, and tell us if a drive must stay on site.',
    jobs: [
      'Collection of computers, screens, phones, and cables',
      'Office clearance that includes IT kit',
      'A single van load or a bigger clear-out',
    ],
    note: 'Do not leave passwords on sticky notes on the machines. We are collectors, not your IT department.',
    meta: 'IT recycling and office kit collection. AyiTess Ltd, Barnsley.',
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
