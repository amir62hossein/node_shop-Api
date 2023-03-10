const users = [
  { username: "admin", email: "admin@company.org", role: "admin" },
  { username: "lmillin0", email: "ddrissell0@stanford.edu", role: "customer" },
  { username: "dlarkings1", email: "hgilks1@thetimes.co.uk", role: "customer" },
  { username: "cbillinge2", email: "enoorwood2@state.gov", role: "customer" },
  { username: "astandring3", email: "ltailby3@i2i.jp", role: "customer" },
  {
    username: "rgubbins4",
    email: "kpowlesland4@nydailynews.com",
    role: "customer",
  },
  { username: "skingsmill5", email: "rgiacomazzo5@ted.com", role: "customer" },
  { username: "aedlin6", email: "klangstrath6@nbcnews.com", role: "customer" },
  { username: "lrallin7", email: "rgiblin7@xrea.com", role: "customer" },
  { username: "kgillie8", email: "asoutham8@spiegel.de", role: "customer" },
  { username: "sarlet9", email: "ejancey9@pcworld.com", role: "customer" },
  { username: "ejessupa", email: "ggledhilla@ft.com", role: "customer" },
  { username: "rhatherillb", email: "ntregianb@g.co", role: "customer" },
  { username: "pbalaizotc", email: "fpenwellc@meetup.com", role: "customer" },
  { username: "garkwrightd", email: "mfargied@slate.com", role: "customer" },
  {
    username: "hjeffese",
    email: "smixworthye@canalblog.com",
    role: "customer",
  },
  { username: "yblasikf", email: "dpiertonf@army.mil", role: "customer" },
];

const products = [
  {
    name: "Autumn Pink Sweater",
    price: 3999,
    categories: ["sweaters"],
    images: [
      "https://images.unsplash.com/photo-1544955381-de702baa57fb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1544955380-68a72d66ad6b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Sophie – Dark Autumn Boots",
    price: 24999,
    categories: ["boots"],
    images: [
      "https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: true,
  },
  {
    name: "Cozy Brown Pants",
    price: 3999,
    categories: ["pants"],
    images: [
      "https://images.unsplash.com/photo-1543204561-e958f1dfd0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1543204638-6b453005484a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
    featured: true,
  },
  {
    name: "Dear Darlings Shirt",
    price: 3999,
    categories: ["tshirts"],
    images: [
      "https://images.unsplash.com/photo-1520859665512-9851c25e2f1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Cali Shirt",
    price: 2999,
    categories: ["tshirts"],
    images: [
      "https://images.unsplash.com/photo-1525811195752-b37798f34a75?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80",
    ],
    featured: true,
  },
  {
    name: "Just Lovin‘ the Red",
    price: 2499,
    categories: ["tshirts"],
    images: [
      "https://images.unsplash.com/photo-1524153087810-01ccea97db13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Simple Stripes",
    price: 2499,
    categories: ["tshirts"],
    images: [
      "https://images.unsplash.com/photo-1516313570236-85371711ee13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Autumn White Sweater",
    price: 3999,
    categories: ["sweaters"],
    images: [
      "https://images.unsplash.com/photo-1543204561-e958f1dfd0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1543204638-6b453005484a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Spring Blue Sweater",
    price: 4999,
    categories: ["sweaters"],
    images: [
      "https://images.unsplash.com/photo-1531299411897-f9adcfb1a333?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Bordeaux Jacket",
    price: 8999,
    categories: ["jackets"],
    images: [
      "https://images.unsplash.com/photo-1542834759-b5dcaccbcde7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Premium Soft Jacket",
    price: 14999,
    categories: ["jackets"],
    images: [
      "https://images.unsplash.com/photo-1542838686-d4856db9ef1e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Premiums Jeans",
    price: 12499,
    categories: ["pants"],
    images: [
      "https://images.unsplash.com/photo-1516313570236-85371711ee13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Zippy – Light Autumn Boots",
    price: 14999,
    categories: ["boots"],
    images: [
      "https://images.unsplash.com/photo-1479492591199-eb2492814e73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ],
    featured: false,
  },
  {
    name: "Lilly – Light Autumn Boots",
    price: 14999,
    categories: ["boots"],
    images: [
      "https://images.unsplash.com/photo-1520809445768-048b4dc23332?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "Soft White Sneakers",
    price: 6999,
    categories: ["sneakers"],
    images: [
      "https://images.unsplash.com/photo-1543204561-e958f1dfd0a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      "https://images.unsplash.com/photo-1543204638-6b453005484a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    ],
    featured: false,
  },
  {
    name: "White Running Shoes",
    price: 8999,
    categories: ["sneakers", "sporty"],
    images: [
      "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ],
    featured: false,
  },
  {
    name: "Pink&Blue",
    price: 9999,
    categories: ["sneakers", "sporty"],
    images: [
      "https://images.unsplash.com/photo-1496579538151-212636d0b01c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    ],
    featured: false,
  },
  {
    name: "Black Sports Bra",
    price: 2499,
    categories: ["sporty"],
    images: [
      "https://images.unsplash.com/photo-1434682881908-b43d0467b798?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
      "https://images.unsplash.com/photo-1434719079929-f61498a4828e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80",
    ],
    featured: false,
  },
];

module.exports = {
    users ,
    products
};
