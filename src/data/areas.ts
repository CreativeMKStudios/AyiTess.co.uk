export type AreaFaq = { q: string; a: string };

export type Area = {
  slug: string;
  name: string;
  county: string;
  drive: string;
  meta: string;
  intro: string[];
  homes: string;
  work: string;
  places: string[];
  faqs: AreaFaq[];
};

export const areas: Area[] = [
  {
    slug: 'barnsley',
    name: 'Barnsley',
    county: 'South Yorkshire',
    drive: 'This is home base.',
    meta: 'Carpenter and handyman in Barnsley. AyiTess hangs doors, fits flat packs, paints, jet washes, and clears houses.',
    intro: [
      'AyiTess is based in Barnsley. Most weeks the crew is in town or in the villages around it, so a morning call can often be a visit the same week.',
      'The housing mix is the usual South Yorkshire one. Brick terraces near the centre, ex-mining villages with solid walls, 1930s semis, and newer estates on the edge. Each one fails in a different way. Terrace doors drop. New-build snag lists are long. Village drives go green.',
    ],
    homes: 'We are in and out of Worsbrough, Hoyland, Darton, Cudworth, Royston, Goldthorpe, Penistone, and the streets closer to the town centre. If you are in a village just past those, still call. We would rather say yes or no than leave you guessing.',
    work: 'In Barnsley the regular list is sticking doors, skirting after a leak, flat packs in a new house, end-of-tenancy cleans, jet washing, and house clearances when someone is moving or a tenancy has ended.',
    places: ['Worsbrough', 'Hoyland', 'Darton', 'Cudworth', 'Royston', 'Goldthorpe', 'Penistone', 'Mapplewell'],
    faqs: [
      {
        q: 'How fast can you get to a job in Barnsley?',
        a: 'Same-week visits are common because we are based here. Same-day depends on what is already booked. Call and we will tell you the next open slot.',
      },
      {
        q: 'Do you cover the villages as well as the town?',
        a: 'Yes. Hoyland, Darton, Penistone, Goldthorpe, and the other villages around Barnsley are normal for us.',
      },
    ],
  },
  {
    slug: 'sheffield',
    name: 'Sheffield',
    county: 'South Yorkshire',
    drive: 'About 40 minutes from Barnsley, longer if we are crossing the city.',
    meta: 'Carpenter and handyman in Sheffield. Doors, flat packs, painting, moves, and clearances from AyiTess in Barnsley.',
    intro: [
      'Sheffield is a regular run, not a special trip. Hills, steps, and tight terraces change how a job is planned. A door on a sloping street, or a fridge that has to come up stone steps in Walkley, needs an honest look before we price it.',
      'Student streets turn over in early summer. If you are a landlord with three houses to freshen in the same week, send the list together. One visit plan is cheaper than three panicked calls.',
    ],
    homes: 'We work in Walkley, Hillsborough, Crookes, Heeley, Meersbrook, Ecclesall, and the inner suburbs. City-centre flats are fine when the lift and the loading bay are real, not a hope.',
    work: 'Typical Sheffield jobs are doors that have dropped, bannister and stair repairs, flat-pack kitchens in rentals, end-of-tenancy cleans, and moves in or out of terraces with no driveway.',
    places: ['Walkley', 'Hillsborough', 'Crookes', 'Heeley', 'Meersbrook', 'Ecclesall', 'Nether Edge'],
    faqs: [
      {
        q: 'Can you move furniture up Sheffield hills and steps?',
        a: 'Yes, if we know about the steps before the day. Send a photo of the access. We will say if the piece will fit.',
      },
      {
        q: 'Do you take student changeovers?',
        a: 'Yes. Book early for June and July. Cleans, small repairs, and clearance can be booked as one list.',
      },
    ],
  },
  {
    slug: 'rotherham',
    name: 'Rotherham',
    county: 'South Yorkshire',
    drive: 'Often under half an hour from Barnsley.',
    meta: 'Handyman and carpenter in Rotherham. Repairs, painting, clearance, and jet washing from AyiTess.',
    intro: [
      'Rotherham sits close enough that we treat it like a neighbour, not a day out. Terraces, post-war houses, and newer estates all show up on the job list.',
      'A lot of the calls are practical. A door that rubs, a garden that has gone over, a house that needs clearing before it can be let again.',
    ],
    homes: 'Rawmarsh, Wath-upon-Dearne, Swinton, Maltby, and the town itself are all within an easy run. If parking is on a busy road, tell us so we bring the smaller van.',
    work: 'Repairs between tenants, painting a single room, jet washing a drive, and full house clearances are the jobs we repeat here.',
    places: ['Rawmarsh', 'Wath-upon-Dearne', 'Swinton', 'Maltby', 'Wickersley', 'Thurcroft'],
    faqs: [
      {
        q: 'Is Rotherham close enough for a small job?',
        a: 'Yes. A small repair is worth the trip. We would rather batch two small jobs in town on the same day than charge you for a wasted journey.',
      },
      {
        q: 'Do you clear rented houses in Rotherham?',
        a: 'Yes, as long as the waste is not hazardous. Send photos of each room if the house is full.',
      },
    ],
  },
  {
    slug: 'doncaster',
    name: 'Doncaster',
    county: 'South Yorkshire',
    drive: 'About 30 to 40 minutes from Barnsley.',
    meta: 'Carpenter and handyman in Doncaster. AyiTess fits timber, paints, moves houses, and clears waste.',
    intro: [
      'Doncaster gives us a mix of town houses, newer estates, and villages that still feel separate from the centre. Access is usually easier than in Sheffield, which helps on move day.',
      'We also pick up commercial calls here. A shop that needs a counter adjusted, or an office that is leaving a floor of desks, fits the crew we already run for clearances.',
    ],
    homes: 'Bentley, Armthorpe, Conisbrough, Bessacarr, and the streets around the town centre are normal ground. Lakeside units come up when a business is moving out.',
    work: 'Joinery repairs, flat packs, jet washing, office clearance, and house moves are the steady work. Ask if you need packing as well as the van.',
    places: ['Bentley', 'Armthorpe', 'Conisbrough', 'Bessacarr', 'Sprotbrough', 'Tickhill'],
    faqs: [
      {
        q: 'Can you clear an office in Doncaster?',
        a: 'Yes. Desks, chairs, and IT kit can go in the same visit. Wipe computers before we collect them, and tell us about stairs or a lift booking.',
      },
      {
        q: 'Do you jet wash new estates as well as old drives?',
        a: 'Yes. Tell us if the surface is block paving, concrete, or a softer stone so we use the right pressure.',
      },
    ],
  },
  {
    slug: 'wakefield',
    name: 'Wakefield',
    county: 'West Yorkshire',
    drive: 'About 30 minutes from Barnsley.',
    meta: 'Handyman and carpenter in Wakefield. Doors, decorating, maintenance, and moves with AyiTess.',
    intro: [
      'Wakefield sits on the way toward Leeds, so it is an easy add to a day that starts in Barnsley. Victorian houses near the centre need more care than a new estate. Skirtings are deeper, doors are heavier, and paint has more layers.',
      'Small shops and offices in town also call for a maintenance list rather than a full refit. That suits how we work.',
    ],
    homes: 'Sandal, Horbury, Ossett, Outwood, and the town centre are the places we are in most. Pontefract and Knottingley are close enough to include when you call.',
    work: 'Door easing, woodwork paint, landlord repairs, and local moves make up most Wakefield visits.',
    places: ['Sandal', 'Horbury', 'Ossett', 'Outwood', 'Pontefract', 'Normanton'],
    faqs: [
      {
        q: 'Do you work on older Wakefield houses?',
        a: 'Yes. We repair and decorate. If the house is listed, or you want original joinery copied, say so at the start. Some of that work needs a specialist, and we will tell you.',
      },
      {
        q: 'Can one visit cover a shop and a flat above it?',
        a: 'Often, yes. Send both lists. We will say what fits in a day.',
      },
    ],
  },
  {
    slug: 'leeds',
    name: 'Leeds',
    county: 'West Yorkshire',
    drive: 'About 45 minutes from Barnsley, more in rush hour.',
    meta: 'Carpenter and handyman in Leeds. Flat packs, TV fitting, doors, painting, and moves from AyiTess.',
    intro: [
      'Leeds is busy enough that we book it properly rather than promise to be there in an hour. Flats in the centre need a loading bay and a lift that actually fits the sofa. Terraces in Headingley and Hyde Park need the opposite: a plan for street parking and a lot of stairs.',
      'Family houses further out, in Horsforth, Roundhay, Morley, and Rothwell, are closer to our usual domestic work. Doors, shelves, decorating, and a move in or out.',
    ],
    homes: 'We cover Headingley, Chapel Allerton, Horsforth, Roundhay, Morley, Rothwell, and city flats when access is confirmed. If the building needs a booking window, book it before we set off.',
    work: 'Flat-pack furniture, TV brackets into the right kind of wall, door repairs, end-of-tenancy work, and full moves are the Leeds list. We do not chase plasterboard with a heavy bracket and hope.',
    places: ['Headingley', 'Chapel Allerton', 'Horsforth', 'Roundhay', 'Morley', 'Rothwell'],
    faqs: [
      {
        q: 'Will you fit a TV in a Leeds flat?',
        a: 'Yes, if we know the wall. Dot-and-dab plasterboard is not the same as brick. We will check before we drill.',
      },
      {
        q: 'Do you move student houses in Headingley?',
        a: 'Yes. Book ahead for the end of June. Narrow stairs and street parking need to be in the quote.',
      },
    ],
  },
  {
    slug: 'huddersfield',
    name: 'Huddersfield',
    county: 'West Yorkshire',
    drive: 'About 40 minutes from Barnsley.',
    meta: 'Carpenter and handyman in Huddersfield. Stone houses, doors, jet washing, and repairs from AyiTess.',
    intro: [
      'Huddersfield and the valleys around it are stone, hills, and weather. Timber swells, sills stay damp, and a jet wash on soft stone can do harm if you treat it like concrete.',
      'We go out to Holmfirth, Honley, and the villages when the job is clear. A photo of the access lane helps. Some of them are not van-friendly.',
    ],
    homes: 'Lindley, Almondbury, Honley, Meltham, Holmfirth, and the town itself are on the list. Stone cottages are welcome. We will not cut into old fabric just to make a modern fitting look neat.',
    work: 'Easing doors, replacing rotten window boards, painting woodwork, jet washing hard standings, and garden clearances are the jobs that come up most.',
    places: ['Lindley', 'Almondbury', 'Honley', 'Holmfirth', 'Meltham', 'Slaithwaite'],
    faqs: [
      {
        q: 'Can you jet wash Yorkshire stone?',
        a: 'Sometimes, on a low pressure, after we have looked at it. If the face of the stone is already soft, we will not blast it.',
      },
      {
        q: 'Do you come out to Holmfirth for a small repair?',
        a: 'Yes if we can pair it with other work that side, or if the job is large enough on its own. Ask. We will not invent a call-out story.',
      },
    ],
  },
  {
    slug: 'york',
    name: 'York',
    county: 'North Yorkshire',
    drive: 'About an hour from Barnsley.',
    meta: 'Carpenter and handyman in York. Careful repairs, decorating, and moves with AyiTess from Barnsley.',
    intro: [
      'York is far enough that we book a day for it. The houses repay that. Older joinery, rented streets that turn over with the university, and family houses in Acomb, Fulford, and Bishopthorpe.',
      'Inside the walls, parking and access decide the day more than the tool list. Tell us about permits and one-way streets before we price a move.',
    ],
    homes: 'Acomb, Holgate, Fulford, Clifton, Bishopthorpe, and the suburbs are straightforward. For streets inside the walls, we need the access rules with the booking.',
    work: 'We ease doors, repair timber, paint, and move houses. We do not alter listed joinery on a guess. If the council has to approve it, that approval is yours to get. We can still do the ordinary repairs that do not touch protected fabric.',
    places: ['Acomb', 'Holgate', 'Fulford', 'Clifton', 'Bishopthorpe', 'Haxby'],
    faqs: [
      {
        q: 'Will you work on an old house in York?',
        a: 'Yes for ordinary repairs. If the building is listed, or the street is tightly controlled, tell us before we book. We will not cut out original work and replace it without you checking.',
      },
      {
        q: 'Do you take York moves?',
        a: 'Yes, when the date is booked and the parking is sorted. Inside the walls, that planning is part of the quote.',
      },
    ],
  },
];

export function getArea(slug: string) {
  return areas.find((area) => area.slug === slug);
}
