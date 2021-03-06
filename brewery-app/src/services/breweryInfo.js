// Hello! This is Aylin. Don't mind this file too much, I want to see if I can cycle through this as a slideshow.
// I'll have to make a lot of revisions to this, most likely. The images are all the same for now. 


const breweryInfo = [
    {
      title: 'Microbrewery',
      type: 'micro',
      description: 'A brewery that produces less than 15,000 barrels of beer per year and sells 75 percent or more of its beer off-site. Microbreweries sell to the public by one or more of the following methods: the traditional three-tier system (brewer to wholesaler to retailer to consumer); and directly to the consumer through carry-outs and/or on-site taproom or restaurant sales.',
      description_source: 'https://www.brewersassociation.org/statistics-and-data/craft-beer-industry-market-segments/',
      pictureOne: 'https://www.innovation1030.com/wp-content/uploads/2020/06/A-Micro-Brewery-as-a-sustainable-solution-for-in-house-brewing-.jpeg',


      pictureOne_Source: 'https://www.innovation1030.com/post/a-micro-brewery-as-a-sustainable-solution-for-in-house-brewing/',

      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  },
  {
      title: 'Brewpub',
      type: 'brewpub',
      description: "A restaurant-brewery that sells 25 percent or more of its beer on-site and operates significant food services. The beer is brewed primarily for sale in the restaurant and bar, and is often dispensed directly from the brewery's storage tanks.",
      description_source: 'https://images.pexels.com/photos/3324442/pexels-photo-3324442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      pictureOne: 'https://wp-cpr.s3.amazonaws.com/uploads/2020/03/200306-DENVER-BEER-CO2-062.jpg?resize=1032,688',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  },
  {
      title: 'Taproom Brewery',
      type: 'taproom',
      description: "A professional brewery that sells 25 percent or more of its beer on-site and does not operate significant food services. The beer is brewed primarily for sale in the taproom, and is often dispensed directly from the brewery's storage tanks.",
      description_source: 'https://www.brewersassociation.org/statistics-and-data/craft-beer-industry-market-segments/',
      pictureOne: 'https://bloximages.newyork1.vip.townnews.com/journalnow.com/content/tncms/assets/v3/editorial/2/b1/2b119c4d-a528-5325-86ca-704bc4ed94ed/5d0918d7da0b7.image.jpg?crop=1483%2C1112%2C189%2C0&resize=1483%2C1112&order=crop%2Cresize',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  },
  {
      title: 'Regional Brewery',
      type: 'regional',
      description: 'A brewery with an annual beer production of between 15,000 and 6,000,000 barrels.',
      description_source: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg',
      pictureOne: 'https://img1.wsimg.com/isteam/ip/116547a6-91ec-420d-b1a6-c7a54b7c34d4/20210503_121759.jpg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:1280,h:960',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  },

  {
      title: 'Contract Brewing Company',
      type: 'contract',
      description: 'A business that hires another brewery to produce its beer. The contract brewing company handles marketing, sales, and distribution of its beer, while generally leaving the brewing and packaging to its producer-brewery (which is also sometimes referred to as a contract brewery).',
      description_source: 'https://www.brewersassociation.org/statistics-and-data/craft-beer-industry-market-segments/',
      pictureOne: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  }, 
  {
      
          title: 'Alternating Proprietor',
          type: 'alternating',
          description: 'A licensed tenant brewery that physically takes possession of a shared brewery while brewing. In contrast to contract brewers, alternating proprietors are the brewery of record for all of the obligations of a licensed brewery, including record keeping, tax payments, and label or formula approval.',
          description_source: 'https://www.brewersassociation.org/statistics-and-data/craft-beer-industry-market-segments/',
          pictureOne: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg'
  
  },
  {
      title: 'Planning Brewery',
      type: 'planning',
      description: 'Information currently unavaliable',
      description_source: 'https://www.brewersassociation.org/statistics-and-data/craft-beer-industry-market-segments/',
      pictureOne: 'https://cdn-ddian.nitrocdn.com/EsjHZfmtAUbTiXeHENILHlUqnmTcNOtP/assets/static/optimized/rev-4c85ab1/wp-content/uploads/2021/06/What-are-the-characteristics-of-craft-beer.jpg',
      pictureTwo: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg',
      pictureThree: 'https://cdn.craftbeer.com/wp-content/uploads/brewery-photo.jpg' 
  },
  {
      title: 'Other',
      type: 'other',
      description: 'other',
      description_source: 'none',
      pictureOne: 'https://images.unsplash.com/photo-1528823872057-9c018a7a7553?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJld2VyeXxlbnwwfHwwfHw%3D&w=1000&q=80',
      pictureTwo: '',
      pictureThree: '',
  },
  {
      title: 'anotherType',
      type: 'undefined',
      description: 'none',
      description_source: 'none',
      pictureOne: 'https://epicureandculture.com/wp-content/uploads/2015/06/Eco-friendly-breweries-cover-photo-e1435500655842.jpg'
  }
  
]

export default breweryInfo;