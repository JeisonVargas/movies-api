const moviesMock = [{
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c00000a"
  },
  "title": "18 Again!",
  "release_date": "2021-05-26",
  "overview": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "poster_path": "http://dummyimage.com/223x100.png/ff4444/ffffff",
  "backdrop_path": "http://dummyimage.com/200x100.png/cc0000/ffffff",
  "vote_average": 6.02,
  "genres": [
    "Drama|Romance",
    "Thriller",
    "Adventure|Children|Fantasy"
  ],
  "private": false,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c00000b"
  },
  "user_email_create": "bblaxill0@chicagotribune.com"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c00000c"
  },
  "title": "Inspector Gadget",
  "release_date": "2021-07-05",
  "overview": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.\n\nDuis bibendum. Morbi non quam nec dui luctus rutrum. Nulla tellus.",
  "poster_path": "http://dummyimage.com/100x100.png/dddddd/000000",
  "backdrop_path": "http://dummyimage.com/196x100.png/cc0000/ffffff",
  "vote_average": 3.12,
  "genres": [
    "Adventure|Children"
  ],
  "private": true,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c00000d"
  },
  "user_email_create": "lsouthwood1@wordpress.org"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c00000e"
  },
  "title": "Patema Inverted",
  "release_date": "2021-03-04",
  "overview": "Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "poster_path": "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
  "backdrop_path": "http://dummyimage.com/230x100.png/5fa2dd/ffffff",
  "vote_average": 9.89,
  "genres": [
    "Action|Comedy"
  ],
  "private": false,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c00000f"
  },
  "user_email_create": "zlawfull2@usgs.gov"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c000010"
  },
  "title": "Superheroes",
  "release_date": "2021-04-05",
  "overview": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
  "poster_path": "http://dummyimage.com/179x100.png/dddddd/000000",
  "backdrop_path": "http://dummyimage.com/156x100.png/ff4444/ffffff",
  "vote_average": 7.21,
  "genres": [
    "Horror|Thriller"
  ],
  "private": false,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c000011"
  },
  "user_email_create": "ascrowston3@google.ru"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c000012"
  },
  "title": "White Palms (Fehér tenyér)",
  "release_date": "2022-02-05",
  "overview": "Curabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.\n\nInteger tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.",
  "poster_path": "http://dummyimage.com/201x100.png/dddddd/000000",
  "backdrop_path": "http://dummyimage.com/216x100.png/5fa2dd/ffffff",
  "vote_average": 6.01,
  "genres": [
    "Comedy",
    "Drama|War",
    "Comedy",
    "Comedy|Drama"
  ],
  "private": true,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c000013"
  },
  "user_email_create": "rroll4@etsy.com"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c000014"
  },
  "title": "Muertos, Los",
  "release_date": "2021-09-28",
  "overview": "In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
  "poster_path": "http://dummyimage.com/144x100.png/cc0000/ffffff",
  "backdrop_path": "http://dummyimage.com/108x100.png/dddddd/000000",
  "vote_average": 1.9,
  "genres": [
    "Drama",
    "Comedy|Romance",
    "Action|Drama|Thriller"
  ],
  "private": true,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c000015"
  },
  "user_email_create": "sditchburn5@shutterfly.com"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c000016"
  },
  "title": "Wrong Turn 2: Dead End",
  "release_date": "2021-09-20",
  "overview": "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  "poster_path": "http://dummyimage.com/181x100.png/dddddd/000000",
  "backdrop_path": "http://dummyimage.com/126x100.png/ff4444/ffffff",
  "vote_average": 8.65,
  "genres": [
    "Action|Adventure|Children"
  ],
  "private": true,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c000017"
  },
  "user_email_create": "fmaryman6@bravesites.com"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c000018"
  },
  "title": "Crossworlds",
  "release_date": "2021-05-25",
  "overview": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  "poster_path": "http://dummyimage.com/138x100.png/ff4444/ffffff",
  "backdrop_path": "http://dummyimage.com/224x100.png/dddddd/000000",
  "vote_average": 8.67,
  "genres": [
    "Drama|Romance"
  ],
  "private": true,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c000019"
  },
  "user_email_create": "mmcentee7@prlog.org"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c00001a"
  },
  "title": "Rugrats Movie, The",
  "release_date": "2021-11-25",
  "overview": "Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.\n\nPhasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  "poster_path": "http://dummyimage.com/113x100.png/cc0000/ffffff",
  "backdrop_path": "http://dummyimage.com/215x100.png/5fa2dd/ffffff",
  "vote_average": 8.01,
  "genres": [
    "Comedy",
    "Drama"
  ],
  "private": false,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c00001b"
  },
  "user_email_create": "badamczyk8@sina.com.cn"
}, {
  "_id": {
    "$oid": "621b2e7bfc13ae7c1c00001c"
  },
  "title": "Ernest Scared Stupid",
  "release_date": "2021-12-10",
  "overview": "Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit.\n\nDonec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.",
  "poster_path": "http://dummyimage.com/236x100.png/ff4444/ffffff",
  "backdrop_path": "http://dummyimage.com/190x100.png/dddddd/000000",
  "vote_average": 7.98,
  "genres": [
    "Crime|Documentary"
  ],
  "private": false,
  "user_id_create": {
    "$oid": "621b2e7bfc13ae7c1c00001d"
  },
  "user_email_create": "gmunsey9@timesonline.co.uk"
}];

function filteredMoviesMock(tag) {
  return moviesMock.filter(movie => movie.tags.includes(tag));
}

class MoviesServiceMock {
  async getMovies() {
    return Promise.resolve(moviesMock);
  }

  async createMovie() {
    return Promise.resolve(moviesMock[0]);
  }
}

module.exports = {
  moviesMock,
  filteredMoviesMock,
  MoviesServiceMock
};
