//Make data set that includes all the info needed for each star to be located on the map
//This data was brought in via datalookup.js
var completeStarDataModel = [{
    "fullName": "Bud Abbott",
    "category": ["Radio", "Motion pictures", "Television"],
    "address": ["6333 Hollywood Blvd.", "1611 Vine Street", "6740 Hollywood Blvd."],
    "lat": [34.10164, 34.0999941, 34.101222],
    "lng": [-118.3280376, -118.3266857, -118.337505]
}, {
    "fullName": "Paula Abdul",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Harry Ackerman",
    "category": ["Television"],
    "address": ["6661 Hollywood Blvd."],
    "lat": [34.101869],
    "lng": [-118.335295]
}, {
    "fullName": "Art Acord",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Roy Acuff",
    "category": ["Recording"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Bryan Adams",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Renée Adorée",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Lou Adler",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Stella Adler",
    "category": ["Live performance"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Antonio Aguilar",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Pepe Aguilar",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Philip Ahn",
    "category": ["Motion pictures"],
    "address": ["6211 Hollywood Blvd."],
    "lat": [34.1017937],
    "lng": [-118.3249769]
}, {
    "fullName": "Alabama (band)",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Licia Albanese",
    "category": ["Recording"],
    "address": ["6671 Hollywood Blvd."],
    "lat": [34.1015889],
    "lng": [-118.3354398]
}, {
    "fullName": "Eddie Albert",
    "category": ["Television"],
    "address": ["6441 Hollywood Blvd."],
    "lat": [34.1016198],
    "lng": [-118.3302861]
}, {
    "fullName": "Frank Albertson",
    "category": ["Motion pictures"],
    "address": ["6754 Hollywood Blvd."],
    "lat": [34.1015377],
    "lng": [-118.3376259]
}, {
    "fullName": "Jack Albertson",
    "category": ["Television"],
    "address": ["6253 Hollywood Blvd."],
    "lat": [34.1018089],
    "lng": [-118.3263653]
}, {
    "fullName": "Buzz Aldrin",
    "category": ["Television"],
    "address": ["Hollywood & Vine"],
    "lat": [34.0928092],
    "lng": [-118.3286614]
}, {
    "fullName": "Ben Alexander (actor)",
    "category": ["Television"],
    "address": ["6433 Hollywood Blvd."],
    "lat": [34.1020674],
    "lng": [-118.3305954]
}, {
    "fullName": "Muhammad Ali",
    "category": ["Live performance"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Debbie Allen",
    "category": ["Television"],
    "address": ["6908 Hollywood Blvd."],
    "lat": [34.1012376],
    "lng": [-118.3405676]
}, {
    "fullName": "Fred Allen",
    "category": ["Radio", "Television"],
    "address": ["6713 Hollywood Blvd.", "7001 Hollywood Blvd."],
    "lat": [34.1015833, 34.1020282],
    "lng": [-118.3365288, -118.3419771]
}, {
    "fullName": "Gracie Allen",
    "category": ["Television"],
    "address": ["6672 Hollywood Blvd."],
    "lat": [34.1012595],
    "lng": [-118.3358911]
}, {
    "fullName": "Rex Allen",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Steve Allen",
    "category": ["Television", "Radio"],
    "address": ["1720 Vine Street", "1537 Vine Street"],
    "lat": [34.1026219, 34.0989214],
    "lng": [-118.326225, -118.3272461]
}, {
    "fullName": "Tim Allen",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Kirstie Alley",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Fran Allison",
    "category": ["Television"],
    "address": ["6757 Hollywood Blvd."],
    "lat": [34.1018734],
    "lng": [-118.3377769]
}, {
    "fullName": "June Allyson",
    "category": ["Motion pictures"],
    "address": ["1537 Vine Street"],
    "lat": [34.0989214],
    "lng": [-118.3272461]
}, {
    "fullName": "Herb Alpert",
    "category": ["Recording"],
    "address": ["6929 Hollywood Blvd."],
    "lat": [34.1015651],
    "lng": [-118.3414294]
}, {
    "fullName": "Don Alvarado",
    "category": ["Motion pictures"],
    "address": ["6504 Hollywood Blvd."],
    "lat": [34.1013378],
    "lng": [-118.3312744]
}, {
    "fullName": "Don Ameche",
    "category": ["Television", "Radio"],
    "address": ["6101 Hollywood Blvd.", "6313 Hollywood Blvd."],
    "lat": [34.1016811, 34.1016463],
    "lng": [-118.322376, -118.3270932]
}, {
    "fullName": "America (band)",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Adrienne Ames",
    "category": ["Motion pictures", "Kim Amidon & Mark Wallengren"],
    "address": ["1612 Vine Street", "colspan=\"2\" | ''see [[#Wallengreen|Mark Wallengren & Kim Amidon]]"],
    "lat": [34.1000307, 99],
    "lng": [-118.3266479, 99]
}, {
    "fullName": "Morey Amsterdam",
    "category": ["Radio"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Broncho Billy Anderson",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["1651 Vine Street", "! Name !! Category !! Address"],
    "lat": [34.1007874, 34.0522342],
    "lng": [-118.3266861, -118.2436849]
}, {
    "fullName": "Leroy Anderson",
    "category": ["Recording"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "Mary Anderson (actress, born 1918)",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Marian Anderson",
    "category": ["Recording"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Julie Andrews",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "The Andrews Sisters",
    "category": ["Recording"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Heather Angel (actress)",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Jennifer Aniston",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Paul Anka",
    "category": ["Recording"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Ann-Margret",
    "category": ["Motion pictures"],
    "address": ["6501 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.331205]
}, {
    "fullName": "Michael Ansara",
    "category": ["Television"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Ray Anthony",
    "category": ["Recording"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Roscoe Arbuckle",
    "category": ["Motion pictures"],
    "address": ["6701 Hollywood Blvd."],
    "lat": [34.101925],
    "lng": [-118.3362594]
}, {
    "fullName": "Army Archerd",
    "category": ["Television"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Eve Arden",
    "category": ["Television", "Radio"],
    "address": ["6714 Hollywood Blvd.", "6329 Hollywood Blvd."],
    "lat": [34.101331, 34.1017144],
    "lng": [-118.3367158, -118.3278873]
}, {
    "fullName": "Samuel Z. Arkoff",
    "category": ["Motion pictures"],
    "address": ["7046 Hollywood Blvd."],
    "lat": [34.10124800000001],
    "lng": [-118.343129]
}, {
    "fullName": "Richard Arlen",
    "category": ["Motion pictures"],
    "address": ["6755 Hollywood Blvd."],
    "lat": [34.1019203],
    "lng": [-118.3376733]
}, {
    "fullName": "George Arliss",
    "category": ["Motion pictures"],
    "address": ["6652 Hollywood Blvd."],
    "lat": [34.1013663],
    "lng": [-118.3352527]
}, {
    "fullName": "Louis Armstrong",
    "category": ["Recording"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Neil Armstrong",
    "category": ["Television"],
    "address": ["Hollywood & Vine"],
    "lat": [34.0928092],
    "lng": [-118.3286614]
}, {
    "fullName": "Desi Arnaz",
    "category": ["Motion pictures", "Television"],
    "address": ["6301 Hollywood Blvd.", "6250 Hollywood Blvd."],
    "lat": [34.1019689, 34.1009778],
    "lng": [-118.327043, -118.3259236]
}, {
    "fullName": "James Arness",
    "category": ["Television"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Eddy Arnold",
    "category": ["Radio"],
    "address": ["6775 Hollywood Blvd."],
    "lat": [34.1015625],
    "lng": [-118.338351]
}, {
    "fullName": "Edward Arnold (actor)",
    "category": ["Motion pictures"],
    "address": ["6225 Hollywood Blvd."],
    "lat": [34.1017951],
    "lng": [-118.3254533]
}, {
    "fullName": "Cliff Arquette",
    "category": ["Radio"],
    "address": ["6720 Hollywood Blvd."],
    "lat": [34.1013586],
    "lng": [-118.3368433]
}, {
    "fullName": "Jean Arthur",
    "category": ["Motion pictures", "Robert Arthur & Ken Minyard"],
    "address": ["6333 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Minyard|Ken Minyard & Robert Arthur]]"],
    "lat": [34.10164, 99],
    "lng": [-118.3280376, 99]
}, {
    "fullName": "Dorothy Arzner",
    "category": ["Motion pictures"],
    "address": ["1500 N. Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Edward Asner",
    "category": ["Television"],
    "address": ["6363 Hollywood Blvd."],
    "lat": [34.1018942],
    "lng": [-118.328893]
}, {
    "fullName": "Nils Asther",
    "category": ["Motion pictures"],
    "address": ["6705 Hollywood Blvd."],
    "lat": [34.1018154],
    "lng": [-118.3364178]
}, {
    "fullName": "Fred Astaire",
    "category": ["Motion pictures"],
    "address": ["6756 Hollywood Blvd."],
    "lat": [34.1013382],
    "lng": [-118.3378074]
}, {
    "fullName": "Mary Astor",
    "category": ["Motion pictures"],
    "address": ["6701 Hollywood Blvd."],
    "lat": [34.101925],
    "lng": [-118.3362594]
}, {
    "fullName": "Gene Austin",
    "category": ["Recording"],
    "address": ["6332 Hollywood Blvd."],
    "lat": [34.1013785],
    "lng": [-118.3277461]
}, {
    "fullName": "Gene Autry",
    "category": ["Motion pictures", "Radio", "Recording", "Television", "Live performance"],
    "address": ["6644 Hollywood Blvd.", "6520 Hollywood Blvd.", "6384 Hollywood Blvd.", "6667 Hollywood Blvd.", "7000 Hollywood Blvd."],
    "lat": [34.1013045, 34.1013392, 34.1014332, 34.1018304, 34.1012777],
    "lng": [-118.3347464, -118.3318563, -118.3293279, -118.3354085, -118.3416128]
}, {
    "fullName": "Dan Avey",
    "category": ["Radio"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Agnes Ayres",
    "category": ["Motion pictures"],
    "address": ["6504 Hollywood Blvd."],
    "lat": [34.1013378],
    "lng": [-118.3312744]
}, {
    "fullName": "Lauren Bacall",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Backstreet Boys",
    "category": ["Recording"],
    "address": ["7072 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Jim Backus",
    "category": ["Television"],
    "address": ["1735 Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "James Bacon (author)",
    "category": ["Motion pictures"],
    "address": ["1637 Vine Street"],
    "lat": [34.1009204],
    "lng": [-118.3270635]
}, {
    "fullName": "Kevin Bacon",
    "category": ["Motion pictures"],
    "address": ["6356 Hollywood Blvd."],
    "lat": [34.101267],
    "lng": [-118.328501]
}, {
    "fullName": "Lloyd Bacon",
    "category": ["Motion pictures"],
    "address": ["7011 Hollywood Blvd."],
    "lat": [34.101561],
    "lng": [-118.3420841]
}, {
    "fullName": "King Baggot",
    "category": ["Motion pictures"],
    "address": ["6312 Hollywood Blvd."],
    "lat": [34.1016146],
    "lng": [-118.3271477]
}, {
    "fullName": "Jack Bailey (actor)",
    "category": ["Radio", "Television"],
    "address": ["1708 Vine Street", "6411 Hollywood Blvd."],
    "lat": [34.101897, 34.1018841],
    "lng": [-118.3265753, -118.3299932]
}, {
    "fullName": "Pearl Bailey",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Fay Bainter",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Anita Baker",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Art Baker (actor)",
    "category": ["Radio"],
    "address": ["6509 Hollywood Blvd."],
    "lat": [34.1018689],
    "lng": [-118.331392]
}, {
    "fullName": "Carroll Baker",
    "category": ["Motion pictures"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Kenny Baker (American singer and actor)",
    "category": ["Radio"],
    "address": ["6329 Hollywood Blvd."],
    "lat": [34.1017144],
    "lng": [-118.3278873]
}, {
    "fullName": "Phil Baker (comedian)",
    "category": ["Radio"],
    "address": ["6247 Hollywood Blvd."],
    "lat": [34.1019211],
    "lng": [-118.3259626]
}, {
    "fullName": "Rick Baker (makeup artist)",
    "category": ["Motion pictures"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Simon Baker",
    "category": ["Television"],
    "address": ["6352 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Alec Baldwin",
    "category": ["Television"],
    "address": ["6352 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Lucille Ball",
    "category": ["Motion pictures", "Television"],
    "address": ["6436 Hollywood Blvd.", "6100 Hollywood Blvd."],
    "lat": [99, 34.1016341],
    "lng": [99, -118.3223743]
}, {
    "fullName": "Anne Bancroft",
    "category": ["Television"],
    "address": ["6368 Hollywood Blvd."],
    "lat": [34.1013387],
    "lng": [-118.328997]
}, {
    "fullName": "Antonio Banderas",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Tallulah Bankhead",
    "category": ["Motion pictures"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Vilma Bánky",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Theda Bara",
    "category": ["Motion pictures"],
    "address": ["6307 Hollywood Blvd."],
    "lat": [34.1016487],
    "lng": [-118.3268912]
}, {
    "fullName": "Lynn Bari",
    "category": ["Motion pictures", "Television"],
    "address": ["6116 Hollywood Blvd.", "6323 Hollywood Blvd."],
    "lat": [34.101633, 34.1019548],
    "lng": [-118.3230552, -118.3275291]
}, {
    "fullName": "Javier Bardem",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Bob Barker",
    "category": ["Television", "Roger Barkley & Al Lohman"],
    "address": ["6714 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Lohman|Al Lohman & Roger Barkley]]''"],
    "lat": [34.101331, 99],
    "lng": [-118.3367158, 99]
}, {
    "fullName": "Binnie Barnes",
    "category": ["Motion pictures"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Pepe Barreto",
    "category": ["Television"],
    "address": ["6536 Hollywood Blvd."],
    "lat": [34.1014463],
    "lng": [-118.3321762]
}, {
    "fullName": "Mona Barrie",
    "category": ["Motion pictures"],
    "address": ["6140 Hollywood Blvd."],
    "lat": [34.101271],
    "lng": [-118.3235858]
}, {
    "fullName": "Wendy Barrie",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Bessie Barriscale",
    "category": ["Motion pictures"],
    "address": ["6652 Hollywood Blvd."],
    "lat": [34.1013663],
    "lng": [-118.3352527]
}, {
    "fullName": "Blue Barron",
    "category": ["Recording"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Gene Barry",
    "category": ["Live performance"],
    "address": ["6555 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Drew Barrymore",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Ethel Barrymore",
    "category": ["Motion pictures"],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "John Barrymore",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "John Drew Barrymore",
    "category": ["Television"],
    "address": ["7004 Hollywood Blvd."],
    "lat": [34.1015312],
    "lng": [-118.3416497]
}, {
    "fullName": "Lionel Barrymore",
    "category": ["Motion pictures", "Radio"],
    "address": ["1724 Vine Street", "1651 Vine Street"],
    "lat": [34.1028702, 34.1007874],
    "lng": [-118.3266716, -118.3266861]
}, {
    "fullName": "Richard Barthelmess",
    "category": ["Motion pictures"],
    "address": ["6755 Hollywood Blvd."],
    "lat": [34.1019203],
    "lng": [-118.3376733]
}, {
    "fullName": "Freddie Bartholomew",
    "category": ["Motion pictures"],
    "address": ["6663 Hollywood Blvd."],
    "lat": [34.101708],
    "lng": [-118.3351885]
}, {
    "fullName": "Billy Barty",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Richard Basehart",
    "category": ["Motion pictures"],
    "address": ["6276 Hollywood Blvd."],
    "lat": [34.101622],
    "lng": [-118.3260517]
}, {
    "fullName": "Count Basie",
    "category": ["Recording"],
    "address": ["6508 Hollywood Blvd."],
    "lat": [34.1013411],
    "lng": [-118.3314501]
}, {
    "fullName": "Kim Basinger",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Lina Basquette",
    "category": ["Motion pictures"],
    "address": ["1529 Vine Street"],
    "lat": [34.0985466],
    "lng": [-118.3266827]
}, {
    "fullName": "Angela Bassett",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Anne Baxter",
    "category": ["Motion pictures"],
    "address": ["6741 Hollywood Blvd."],
    "lat": [34.101885],
    "lng": [-118.337163]
}, {
    "fullName": "Frank C. Baxter",
    "category": ["Television"],
    "address": ["6717 Hollywood Blvd."],
    "lat": [34.101583],
    "lng": [-118.3365654]
}, {
    "fullName": "Les Baxter",
    "category": ["Recording"],
    "address": ["6314 Hollywood Blvd."],
    "lat": [34.1016142],
    "lng": [-118.3271753]
}, {
    "fullName": "Warner Baxter",
    "category": ["Motion pictures"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Beverly Bayne",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "The Beach Boys",
    "category": ["Recording"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "The Beatles",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "William Beaudine",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Bee Gees",
    "category": ["Recording"],
    "address": ["6845 Hollywood Blvd."],
    "lat": [34.1015596],
    "lng": [-118.3393489]
}, {
    "fullName": "Noah Beery, Jr.",
    "category": ["Television"],
    "address": ["7047 Hollywood Blvd."],
    "lat": [34.1015603],
    "lng": [-118.3432283]
}, {
    "fullName": "Wallace Beery",
    "category": ["Motion pictures"],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "Brian Beirne",
    "category": ["Radio"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Harry Belafonte",
    "category": ["Recording"],
    "address": ["6721 Hollywood Blvd."],
    "lat": [34.1018216],
    "lng": [-118.3366866]
}, {
    "fullName": "Madge Bellamy",
    "category": ["Motion pictures"],
    "address": ["6517 Hollywood Blvd."],
    "lat": [34.1018619],
    "lng": [-118.3316422]
}, {
    "fullName": "Ralph Bellamy",
    "category": ["Television"],
    "address": ["6542 Hollywood Blvd."],
    "lat": [34.1013163],
    "lng": [-118.332732]
}, {
    "fullName": "Donald P. Bellisario",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "John Belushi",
    "category": ["Television"],
    "address": ["6355 Hollywood Blvd."],
    "lat": [34.1016381],
    "lng": [-118.3286782]
}, {
    "fullName": "Bea Benaderet",
    "category": ["Television"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Robert Benchley",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "William Bendix",
    "category": ["Radio", "Television"],
    "address": ["1638 Vine Street", "6251 Hollywood Blvd."],
    "lat": [34.1003738, 34.101947],
    "lng": [-118.3265579, -118.326127]
}, {
    "fullName": "Tex Beneke",
    "category": ["Recording"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Annette Bening",
    "category": ["Motion pictures"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Belle Bennett",
    "category": ["Motion pictures"],
    "address": ["1511 Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Constance Bennett",
    "category": ["Motion pictures"],
    "address": ["6250 Hollywood Blvd."],
    "lat": [34.1009778],
    "lng": [-118.3259236]
}, {
    "fullName": "Joan Bennett",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Tony Bennett",
    "category": ["Recording"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Jack Benny",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6650 Hollywood Blvd.", "1505 Vine Street", "6370 Hollywood Blvd."],
    "lat": [34.1014057, 34.0984653, 34.1013278],
    "lng": [-118.3352513, -118.326771, -118.3290126]
}, {
    "fullName": "George Benson",
    "category": ["Recording"],
    "address": ["7055 Hollywood Blvd."],
    "lat": [34.1015606],
    "lng": [-118.3434694]
}, {
    "fullName": "John Beradino",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Edgar Bergen",
    "category": ["Television", "Motion pictures", "Radio"],
    "address": ["6425 Hollywood Blvd.", "6766 Hollywood Blvd.", "6801 Hollywood Blvd."],
    "lat": [34.1020383, 34.101206, 34.1026077],
    "lng": [-118.3306222, -118.338028, -118.3399805]
}, {
    "fullName": "Ingrid Bergman",
    "category": ["Motion pictures"],
    "address": ["6759 Hollywood Blvd."],
    "lat": [34.101697],
    "lng": [-118.3378324]
}, {
    "fullName": "Milton Berle",
    "category": ["Radio", "Television"],
    "address": ["6771 Hollywood Blvd.", "6263 Hollywood Blvd."],
    "lat": [34.1017356, 99],
    "lng": [-118.3382113, 99]
}, {
    "fullName": "Irving Berlin",
    "category": ["Recording"],
    "address": ["7095 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Chris Berman",
    "category": ["Television"],
    "address": ["6259 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Ernani Bernardi",
    "category": ["Recording"],
    "address": ["7072 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Sarah Bernhardt",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Ben Bernie",
    "category": ["Radio"],
    "address": ["6280 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Elmer Bernstein",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Leonard Bernstein",
    "category": ["Recording"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "Chuck Berry",
    "category": ["Recording"],
    "address": ["1777 N. Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Halle Berry",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Valerie Bertinelli",
    "category": ["Television"],
    "address": ["6912 Hollywood Blvd."],
    "lat": [34.101158],
    "lng": [-118.340454]
}, {
    "fullName": "Bernardo Bertolucci",
    "category": ["Motion picture"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Edna Best",
    "category": ["Motion pictures"],
    "address": ["6124 Hollywood Blvd."],
    "lat": [34.1013762],
    "lng": [-118.3231489]
}, {
    "fullName": "Charles Bickford",
    "category": ["Television", "Motion pictures"],
    "address": ["1620 Vine Street", "6780 Hollywood Blvd."],
    "lat": [34.1001604, 34.1013355],
    "lng": [-118.3266475, -118.3384643]
}, {
    "fullName": "Theodore Bikel",
    "category": ["Live performance"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Big Bird",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "E. Power Biggs",
    "category": ["Recording"],
    "address": ["6522 Hollywood Blvd."],
    "lat": [34.1013404],
    "lng": [-118.3319275]
}, {
    "fullName": "Rodney Bingenheimer",
    "category": ["Radio"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Constance Binney",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Clint Black",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Sidney Blackmer",
    "category": ["Motion pictures"],
    "address": ["1625 Vine Street"],
    "lat": [34.100471],
    "lng": [-118.3266855]
}, {
    "fullName": "Carlyle Blackwell",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6340 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1011809, 34.0522342],
    "lng": [-118.327933, -118.2436849]
}, {
    "fullName": "Mel Blanc",
    "category": ["Radio"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Cate Blanchett",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Joan Blondell",
    "category": ["Motion pictures"],
    "address": ["6311 Hollywood Blvd."],
    "lat": [34.1016471],
    "lng": [-118.3270259]
}, {
    "fullName": "Orlando Bloom",
    "category": ["Motion pictures"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Monte Blue",
    "category": ["Motion pictures"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Ann Blyth",
    "category": ["Motion pictures"],
    "address": ["6733 Hollywood Blvd."],
    "lat": [34.1018317],
    "lng": [-118.336981]
}, {
    "fullName": "Betty Blythe",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Eleanor Boardman",
    "category": ["Motion pictures"],
    "address": ["6928 Hollywood Blvd."],
    "lat": [34.1015286],
    "lng": [-118.3405176]
}, {
    "fullName": "Andrea Bocelli",
    "category": ["Live performance"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Humphrey Bogart",
    "category": ["Motion pictures"],
    "address": ["6322 Hollywood Blvd."],
    "lat": [34.1016106],
    "lng": [-118.3274733]
}, {
    "fullName": "Mary Boland",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "John Boles (actor)",
    "category": ["Motion pictures"],
    "address": ["6530 Hollywood Blvd."],
    "lat": [34.1013323],
    "lng": [-118.3321649]
}, {
    "fullName": "Richard Boleslavsky",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ray Bolger",
    "category": ["Motion pictures", "Television"],
    "address": ["6788 Hollywood Blvd.", "6834 Hollywood Blvd."],
    "lat": [34.1015316, 34.101323],
    "lng": [-118.3385758, -118.339741]
}, {
    "fullName": "Michael Bolton",
    "category": ["Recording"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Ford Bond",
    "category": ["Radio"],
    "address": ["6706 Hollywood Blvd."],
    "lat": [34.101553],
    "lng": [-118.3364349]
}, {
    "fullName": "Ward Bond",
    "category": ["Television"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Beulah Bondi",
    "category": ["Motion pictures"],
    "address": ["1718 Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Pat Boone",
    "category": ["Recording", "Television"],
    "address": ["1631 Vine Street", "6268 Hollywood Blvd."],
    "lat": [99, 99],
    "lng": [99, 99]
}, {
    "fullName": "Shirley Booth",
    "category": ["Motion pictures"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Olive Borden",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Ernest Borgnine",
    "category": ["Motion pictures"],
    "address": ["6324 Hollywood Blvd."],
    "lat": [34.101273],
    "lng": [-118.32763]
}, {
    "fullName": "Frank Borzage",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Hobart Bosworth",
    "category": ["Motion pictures"],
    "address": ["6522 Hollywood Blvd."],
    "lat": [34.1013404],
    "lng": [-118.3319275]
}, {
    "fullName": "Clara Bow",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "John Bowers (actor)",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Edward Bowes",
    "category": ["Radio"],
    "address": ["1513 Vine Street"],
    "lat": [34.098482],
    "lng": [-118.3270127]
}, {
    "fullName": "David Bowie",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Bill Boyd (musician)",
    "category": ["Radio"],
    "address": ["6101 Hollywood Blvd"],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Jimmy Boyd",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "William Boyd (actor)",
    "category": ["Motion pictures"],
    "address": ["1734 Vine Street"],
    "lat": [34.1028894],
    "lng": [-118.3266715]
}, {
    "fullName": "Charles Boyer",
    "category": ["Motion pictures", "Television"],
    "address": ["6300 Hollywood Blvd.", "6300 Hollywood Blvd."],
    "lat": [34.1014324, 34.1014324],
    "lng": [-118.3270755, -118.3270755]
}, {
    "fullName": "Boyz II Men",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Eddie Bracken",
    "category": ["Television", "Radio"],
    "address": ["6751 Hollywood Blvd.", "1651 Vine Street"],
    "lat": [34.1017702, 34.1007874],
    "lng": [-118.3376512, -118.3266861]
}, {
    "fullName": "Ray Bradbury",
    "category": ["Motion pictures"],
    "address": ["6644 Hollywood Blvd."],
    "lat": [34.1013045],
    "lng": [-118.3347464]
}, {
    "fullName": "Tom Bradley (American politician)",
    "category": ["Mayor"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Terry Bradshaw",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Alice Brady",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Eric Braeden",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Marlon Brando",
    "category": ["Motion pictures"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Tom Breneman",
    "category": ["Radio"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Walter Brennan",
    "category": ["Motion pictures"],
    "address": ["6501 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.331205]
}, {
    "fullName": "Evelyn Brent",
    "category": ["Motion pictures"],
    "address": ["6548 Hollywood Blvd."],
    "lat": [34.1013572],
    "lng": [-118.3327649]
}, {
    "fullName": "George Brent",
    "category": ["Motion pictures", "Television"],
    "address": ["1709 Vine Street", "1612 Vine Street"],
    "lat": [34.1019261, 34.1000307],
    "lng": [-118.3267039, -118.3266479]
}, {
    "fullName": "Teresa Brewer",
    "category": ["Recording"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "David Brian",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Mary Brian",
    "category": ["Motion pictures"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Fanny Brice",
    "category": ["Motion pictures", "Radio"],
    "address": ["6415 Hollywood Blvd.", "1500 Vine Street"],
    "lat": [34.1016203, 34.098332],
    "lng": [-118.3301904, -118.3262557]
}, {
    "fullName": "Beau Bridges",
    "category": ["Motion pictures"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Jeff Bridges",
    "category": ["Motion pictures"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Lloyd Bridges",
    "category": ["Television"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Ray Briem",
    "category": ["Radio"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "Bernie Brillstein",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Elton Britt",
    "category": ["Recording"],
    "address": ["6936 Hollywood Blvd."],
    "lat": [34.1015293],
    "lng": [-118.3406185]
}, {
    "fullName": "Barbara Britton",
    "category": ["Television"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Albert R. Broccoli",
    "category": ["Motion pictures"],
    "address": ["6910 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3404387]
}, {
    "fullName": "Matthew Broderick",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "James Brolin",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Charles Bronson",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Hillary Brooke",
    "category": ["Television"],
    "address": ["6311 Hollywood Blvd."],
    "lat": [34.1016471],
    "lng": [-118.3270259]
}, {
    "fullName": "Brooks & Dunn",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Garth Brooks",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Mel Brooks",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Richard Brooks",
    "category": ["Motion pictures"],
    "address": ["6422 Hollywood Blvd."],
    "lat": [34.101589],
    "lng": [-118.3302305]
}, {
    "fullName": "Pierce Brosnan",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd"],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Cecil Brown (journalist)",
    "category": ["Radio"],
    "address": ["6410 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.330122]
}, {
    "fullName": "Clarence Brown",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Harry Joe Brown",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "James Brown",
    "category": ["Recording"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Joe E. Brown",
    "category": ["Motion pictures"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Johnny Mack Brown",
    "category": ["Motion pictures"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Les Brown (bandleader)",
    "category": ["Recording"],
    "address": ["6505 Hollywood Blvd."],
    "lat": [34.1018647],
    "lng": [-118.3312654]
}, {
    "fullName": "Tom Brown (actor)",
    "category": ["Motion pictures"],
    "address": ["1648 Vine Street"],
    "lat": [34.1005289],
    "lng": [-118.3265582]
}, {
    "fullName": "Vanessa Brown",
    "category": ["Motion pictures", "Television"],
    "address": ["1621 Vine Street", "6528 Hollywood Blvd."],
    "lat": [34.10025100000001, 34.1015064],
    "lng": [-118.3266852, -118.3321158]
}, {
    "fullName": "Tod Browning",
    "category": ["Motion pictures"],
    "address": ["6225 Hollywood Blvd."],
    "lat": [34.1017951],
    "lng": [-118.3254533]
}, {
    "fullName": "Dave Brubeck",
    "category": ["Recording"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Jerry Bruckheimer",
    "category": ["Motion pictures"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Yul Brynner",
    "category": ["Motion pictures"],
    "address": ["6162 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Sandra Bullock",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Bugs Bunny",
    "category": ["Motion pictures"],
    "address": ["7007 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "John Bunny",
    "category": ["Motion pictures"],
    "address": ["1715 Vine Street"],
    "lat": [34.10212],
    "lng": [-118.3267111]
}, {
    "fullName": "Billie Burke",
    "category": ["Motion pictures"],
    "address": ["6617 Hollywood Blvd."],
    "lat": [34.1015985],
    "lng": [-118.3338664]
}, {
    "fullName": "Sonny Burke",
    "category": ["Recording"],
    "address": ["6920 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.3404842]
}, {
    "fullName": "Carol Burnett",
    "category": ["Television"],
    "address": ["6439 Hollywood Blvd."],
    "lat": [34.1016945],
    "lng": [-118.3308231]
}, {
    "fullName": "Mark Burnett",
    "category": ["Television"],
    "address": ["6664 Hollywood Blvd."],
    "lat": [34.1012733],
    "lng": [-118.3356135]
}, {
    "fullName": "Smiley Burnette",
    "category": ["Motion pictures"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "Bob Burns (comedian)",
    "category": ["Motion pictures", "Radio"],
    "address": ["1601 Vine Street", "6541 Hollywood Blvd."],
    "lat": [34.0999567, 34.1019042],
    "lng": [-118.327134, -118.3326262]
}, {
    "fullName": "George Burns",
    "category": ["Live performance", "Motion pictures", "Television"],
    "address": ["6672 Hollywood Blvd.", "1639 Vine Street", "6510 Hollywood Blvd."],
    "lat": [34.1012595, 34.1009837, 34.1013383],
    "lng": [-118.3358911, -118.3268649, -118.3316093]
}, {
    "fullName": "Raymond Burr",
    "category": ["Television"],
    "address": ["6656 Hollywood Blvd."],
    "lat": [34.10133709999999],
    "lng": [-118.3353984]
}, {
    "fullName": "Bill Burrud",
    "category": ["Television"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "LeVar Burton",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Richard Burton",
    "category": ["Motion pictures"],
    "address": ["6336 Hollywood Blvd."],
    "lat": [34.1013306],
    "lng": [-118.3278499]
}, {
    "fullName": "Mae Busch",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Francis X. Bushman",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Jerry Buss",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "David Butler (director)",
    "category": ["Motion pictures"],
    "address": ["6561 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Charles Butterworth (actor)",
    "category": ["Motion pictures"],
    "address": ["7036 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Red Buttons",
    "category": ["Television"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Pat Buttram",
    "category": ["Television"],
    "address": ["6382 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Spring Byington",
    "category": ["Motion pictures", "Television", "}\n{{col-end}}\n\n==C==\n{{col-begin}}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6507 Hollywood Blvd.", "6231 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1018498, 34.1018794, 34.0522342],
    "lng": [-118.331339, -118.3254546, -118.2436849]
}, {
    "fullName": "James Caan",
    "category": ["Motion pictures"],
    "address": ["6648 Hollywood Blvd."],
    "lat": [34.1013543],
    "lng": [-118.3349402]
}, {
    "fullName": "Sid Caesar",
    "category": ["Television"],
    "address": ["7014 Hollywood Blvd."],
    "lat": [34.10153010000001],
    "lng": [-118.3419952]
}, {
    "fullName": "Nicolas Cage",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "James Cagney",
    "category": ["Motion pictures"],
    "address": ["6504 Hollywood Blvd."],
    "lat": [34.1013378],
    "lng": [-118.3312744]
}, {
    "fullName": "Sammy Cahn",
    "category": ["Recording"],
    "address": ["6540 Hollywood Blvd."],
    "lat": [34.101461],
    "lng": [-118.3323845]
}, {
    "fullName": "Alice Calhoun",
    "category": ["Motion pictures"],
    "address": ["6815 Hollywood Blvd."],
    "lat": [34.1017791],
    "lng": [-118.3392454]
}, {
    "fullName": "Rory Calhoun",
    "category": ["Motion pictures", "Television"],
    "address": ["7007 Hollywood Blvd.", "1752 Vine Street"],
    "lat": [34.1015612, 34.1029238],
    "lng": [-118.3419572, -118.3266713]
}, {
    "fullName": "Maria Callas",
    "category": ["Recording"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "James Cameron",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Rod Cameron (actor)",
    "category": ["Television"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Glen Campbell",
    "category": ["Recording"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Stephen J. Cannell",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Dyan Cannon",
    "category": ["Motion pictures"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "Judy Canova",
    "category": ["Motion pictures", "Radio"],
    "address": ["6821 Hollywood Blvd.", "6777 Hollywood Blvd."],
    "lat": [34.1015594, 34.1018431],
    "lng": [-118.3392858, -118.3384573]
}, {
    "fullName": "Cantinflas",
    "category": ["Motion pictures"],
    "address": ["6438 Hollywood Blvd."],
    "lat": [34.1013004],
    "lng": [-118.3307561]
}, {
    "fullName": "Eddie Cantor",
    "category": ["Motion pictures", "Television", "Radio"],
    "address": ["6648 Hollywood Blvd.", "1770 Vine Street", "6765 Hollywood Blvd."],
    "lat": [34.1013543, 99, 34.1018894],
    "lng": [-118.3349402, 99, -118.3381229]
}, {
    "fullName": "Yakima Canutt",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Frank Capra",
    "category": ["Motion pictures"],
    "address": ["6614 Hollywood Blvd."],
    "lat": [34.101275],
    "lng": [-118.333729]
}, {
    "fullName": "Steve Carell",
    "category": ["Motion pictures"],
    "address": ["6708 Hollywood Blvd."],
    "lat": [34.1012412],
    "lng": [-118.3364774]
}, {
    "fullName": "Drew Carey",
    "category": ["Television"],
    "address": ["6664 Hollywood Blvd."],
    "lat": [34.1012733],
    "lng": [-118.3356135]
}, {
    "fullName": "Harry Carey (actor)",
    "category": ["Motion pictures"],
    "address": ["1521 Vine Street"],
    "lat": [34.0988267],
    "lng": [-118.3270184]
}, {
    "fullName": "Harry Carey, Jr.",
    "category": ["Television"],
    "address": ["6363 Vine Street"],
    "lat": [34.0969243],
    "lng": [-118.3266505]
}, {
    "fullName": "Macdonald Carey",
    "category": ["Television"],
    "address": ["6536 Hollywood Blvd."],
    "lat": [34.1014463],
    "lng": [-118.3321762]
}, {
    "fullName": "Mariah Carey",
    "category": ["Recording"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Frankie Carle",
    "category": ["Recording"],
    "address": ["1751 Hollywood Blvd."],
    "lat": [34.0961205],
    "lng": [-118.2903527]
}, {
    "fullName": "George Carlin",
    "category": ["Live performance"],
    "address": ["1555 Vine Street"],
    "lat": [34.0991421],
    "lng": [-118.3268859]
}, {
    "fullName": "Kitty Carlisle",
    "category": ["Motion pictures"],
    "address": ["6611 Hollywood Blvd."],
    "lat": [34.101872],
    "lng": [-118.333833]
}, {
    "fullName": "Mary Carlisle",
    "category": ["Motion pictures"],
    "address": ["6679 Hollywood Blvd."],
    "lat": [34.1018161],
    "lng": [-118.3357682]
}, {
    "fullName": "Richard Carlson (actor)",
    "category": ["Television"],
    "address": ["6333 Hollywood Blvd."],
    "lat": [34.10164],
    "lng": [-118.3280376]
}, {
    "fullName": "Hoagy Carmichael",
    "category": ["Television"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Art Carney",
    "category": ["Television"],
    "address": ["6627 Hollywood Blvd."],
    "lat": [34.101875],
    "lng": [-118.334498]
}, {
    "fullName": "Sue Carol",
    "category": ["Motion pictures"],
    "address": ["1639 N. Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Leslie Caron",
    "category": ["Motion pictures"],
    "address": ["6153 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Ken Carpenter (announcer)",
    "category": ["Radio"],
    "address": ["6706 Hollywood Blvd."],
    "lat": [34.101553],
    "lng": [-118.3364349]
}, {
    "fullName": "The Carpenters",
    "category": ["Recording"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Vikki Carr",
    "category": ["Recording"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "David Carradine",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "John Carradine",
    "category": ["Motion pictures"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "Keith Carradine",
    "category": ["Television"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Leo Carrillo",
    "category": ["Motion pictures", "Television"],
    "address": ["1635 Vine Street", "1517 Vine Street"],
    "lat": [34.1008794, 34.0986046],
    "lng": [-118.3270781, -118.3271778]
}, {
    "fullName": "Diahann Carroll",
    "category": ["Recording"],
    "address": ["7005 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.3418955]
}, {
    "fullName": "Madeleine Carroll",
    "category": ["Motion pictures"],
    "address": ["6707 Hollywood Blvd."],
    "lat": [34.101584],
    "lng": [-118.3364481]
}, {
    "fullName": "Nancy Carroll",
    "category": ["Motion pictures"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Jack Carson",
    "category": ["Radio", "Television"],
    "address": ["6361 Hollywood Blvd.", "1560 Vine Street"],
    "lat": [34.1016377, 34.0993898],
    "lng": [-118.328788, -118.3266473]
}, {
    "fullName": "Jeannie Carson",
    "category": ["Television"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Johnny Carson",
    "category": ["Television"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Benny Carter",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Enrico Caruso",
    "category": ["Recording"],
    "address": ["6625 Hollywood Blvd."],
    "lat": [34.1015964],
    "lng": [-118.3343821]
}, {
    "fullName": "Robert Casadesus",
    "category": ["Recording"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Johnny Cash",
    "category": ["Recording"],
    "address": ["6320 Hollywood Blvd."],
    "lat": [34.1012895],
    "lng": [-118.3274289]
}, {
    "fullName": "Syd Cassyd",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Peggie Castle",
    "category": ["Television"],
    "address": ["6266 Hollywood Blvd."],
    "lat": [34.1016232],
    "lng": [-118.3257544]
}, {
    "fullName": "Gilbert Cates",
    "category": ["Motion pictures"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Walter Catlett",
    "category": ["Motion pictures"],
    "address": ["1713 Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Joan Caulfield",
    "category": ["Television"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Carmen Cavallaro",
    "category": ["Recording"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Bennett Cerf",
    "category": ["Television"],
    "address": ["6407 Hollywood Blvd."],
    "lat": [34.1016219],
    "lng": [-118.3299001]
}, {
    "fullName": "Feodor Chaliapin",
    "category": ["Recording"],
    "address": ["6770 Hollywood Blvd."],
    "lat": [34.1015316],
    "lng": [-118.3379179]
}, {
    "fullName": "Richard Chamberlain",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "John Chambers (make-up artist)",
    "category": ["Motion pictures"],
    "address": ["7006 Hollywood Blvd."],
    "lat": [34.1015298],
    "lng": [-118.3417517]
}, {
    "fullName": "Stan Chambers",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Gower Champion",
    "category": ["Television"],
    "address": ["6162 Hollywood Blvd."],
    "lat": [34.1016279],
    "lng": [-118.3243602]
}, {
    "fullName": "Marge Champion",
    "category": ["Television"],
    "address": ["6282 Hollywood Blvd."],
    "lat": [34.1014522],
    "lng": [-118.3262591]
}, {
    "fullName": "Charles Champlin",
    "category": ["Television"],
    "address": ["6751 Hollywood Blvd."],
    "lat": [34.1017702],
    "lng": [-118.3376512]
}, {
    "fullName": "Jackie Chan",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Jeff Chandler (actor)",
    "category": ["Motion pictures"],
    "address": ["1770 Vine Street"],
    "lat": [34.1036096],
    "lng": [-118.326531]
}, {
    "fullName": "Lon Chaney",
    "category": ["Motion pictures"],
    "address": ["7046 Hollywood Blvd."],
    "lat": [34.10124800000001],
    "lng": [-118.343129]
}, {
    "fullName": "Carol Channing",
    "category": ["Television"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Charlie Chaplin",
    "category": ["Motion pictures"],
    "address": ["6751 Hollywood Blvd."],
    "lat": [34.1017702],
    "lng": [-118.3376512]
}, {
    "fullName": "Marguerite Chapman",
    "category": ["Television"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Cyd Charisse",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Ray Charles",
    "category": ["Recording"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Charley Chase",
    "category": ["Motion pictures"],
    "address": ["6630 Hollywood Blvd."],
    "lat": [34.1013917],
    "lng": [-118.3344238]
}, {
    "fullName": "Chevy Chase",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ilka Chase",
    "category": ["Motion pictures", "Television"],
    "address": ["6361 Hollywood Blvd.", "6751 Hollywood Blvd."],
    "lat": [34.1016377, 34.1017702],
    "lng": [-118.328788, -118.3376512]
}, {
    "fullName": "Ruth Chatterton",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Kristin Chenoweth",
    "category": ["Live performance"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Virginia Cherrill",
    "category": ["Motion pictures"],
    "address": ["1545 Vine Street"],
    "lat": [34.0989527],
    "lng": [-118.3270759]
}, {
    "fullName": "Maurice Chevalier",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Chicago (band)",
    "category": ["Recording"],
    "address": ["6438 Hollywood Blvd."],
    "lat": [34.1013004],
    "lng": [-118.3307561]
}, {
    "fullName": "Al Christie",
    "category": ["Motion pictures"],
    "address": ["6771 Hollywood Blvd."],
    "lat": [34.1017356],
    "lng": [-118.3382113]
}, {
    "fullName": "Charles Christie",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Ina Claire",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Buddy Clark",
    "category": ["Recording"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Dane Clark",
    "category": ["Television"],
    "address": ["6906 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.340605]
}, {
    "fullName": "Dick Clark",
    "category": ["Television"],
    "address": ["Sunset & Vine"],
    "lat": [46.5142503],
    "lng": [-86.0847446]
}, {
    "fullName": "Fred Clark",
    "category": ["Television"],
    "address": ["1711 Vine Street"],
    "lat": [34.1019907],
    "lng": [-118.3267063]
}, {
    "fullName": "Marguerite Clark",
    "category": ["Motion pictures"],
    "address": ["6300 Vine Street"],
    "lat": [34.0969243],
    "lng": [-118.3266505]
}, {
    "fullName": "Roy Clark",
    "category": ["Recording"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Ethel Clayton",
    "category": ["Motion pictures"],
    "address": ["6936 Hollywood Blvd."],
    "lat": [34.1015293],
    "lng": [-118.3406185]
}, {
    "fullName": "Jan Clayton",
    "category": ["Television"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "James Cleveland",
    "category": ["Recording"],
    "address": ["6742 Hollywood Blvd."],
    "lat": [34.1015432],
    "lng": [-118.3372913]
}, {
    "fullName": "Montgomery Clift",
    "category": ["Motion pictures"],
    "address": ["6104 Hollywood Blvd."],
    "lat": [34.101245],
    "lng": [-118.322947]
}, {
    "fullName": "Patsy Cline",
    "category": ["Recording"],
    "address": ["6160 Hollywood Blvd."],
    "lat": [34.101321],
    "lng": [-118.324357]
}, {
    "fullName": "Rosemary Clooney",
    "category": ["Recording"],
    "address": ["6325 Hollywood Blvd."],
    "lat": [34.102022],
    "lng": [-118.3275281]
}, {
    "fullName": "Glenn Close",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Andy Clyde",
    "category": ["Motion pictures"],
    "address": ["6758 Hollywood Blvd."],
    "lat": [34.1014058],
    "lng": [-118.337825]
}, {
    "fullName": "Charles Coburn",
    "category": ["Motion pictures"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "James Coburn",
    "category": ["Motion pictures"],
    "address": ["7055 Hollywood Blvd."],
    "lat": [34.1015606],
    "lng": [-118.3434694]
}, {
    "fullName": "Imogene Coca",
    "category": ["Television"],
    "address": ["6256 Hollywood Blvd."],
    "lat": [34.1016254],
    "lng": [-118.3254654]
}, {
    "fullName": "Steve Cochran",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["1750 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.0961205, 34.0522342],
    "lng": [-118.2903527, -118.2436849]
}, {
    "fullName": "Iron Eyes Cody",
    "category": ["Television"],
    "address": ["6655 Hollywood Blvd."],
    "lat": [34.10183749999999],
    "lng": [-118.3350137]
}, {
    "fullName": "Renán Almendárez Coello",
    "category": ["Radio"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "George M. Cohan",
    "category": ["Motion pictures"],
    "address": ["6734 Hollywood Blvd."],
    "lat": [34.1015444],
    "lng": [-118.3371608]
}, {
    "fullName": "Arthur Cohn",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Claudette Colbert",
    "category": ["Motion pictures"],
    "address": ["6812 Hollywood Blvd."],
    "lat": [34.1015306],
    "lng": [-118.3388232]
}, {
    "fullName": "Nat King Cole",
    "category": ["Recording", "Television"],
    "address": ["6659 Hollywood Blvd.", "6229 Hollywood Blvd."],
    "lat": [34.10159240000001, 34.1016565],
    "lng": [-118.335119, -118.3254544]
}, {
    "fullName": "Natalie Cole",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Dabney Coleman",
    "category": ["Television"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Constance Collier",
    "category": ["Motion pictures"],
    "address": ["6231 Hollywood Blvd."],
    "lat": [34.1018794],
    "lng": [-118.3254546]
}, {
    "fullName": "William Collier, Jr.",
    "category": ["Motion pictures"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Gary Collins (actor)",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Joan Collins",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Michael Collins (astronaut)",
    "category": ["Television"],
    "address": ["Hollywood & Vine"],
    "lat": [34.0928092],
    "lng": [-118.3286614]
}, {
    "fullName": "Phil Collins",
    "category": ["Recording"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Bud Collyer",
    "category": ["Radio"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Ronald Colman",
    "category": ["Television", "Motion pictures"],
    "address": ["1623 Vine Street", "6801 Hollywood Blvd."],
    "lat": [99, 34.1026077],
    "lng": [99, -118.3399805]
}, {
    "fullName": "Jerry Colonna (entertainer)",
    "category": ["Radio"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Sean Combs",
    "category": ["Recording"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Perry Como",
    "category": ["Radio", "Television", "Recording"],
    "address": ["1708 Vine Street", "6376 Hollywood Blvd.", "6600 Hollywood Blvd."],
    "lat": [34.101897, 34.1013374, 34.1012975],
    "lng": [-118.3265753, -118.3291693, -118.3333971]
}, {
    "fullName": "Betty Compson",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Chester Conklin",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Heinie Conklin",
    "category": ["Motion pictures"],
    "address": ["1776 Vine Street"],
    "lat": [34.1036411],
    "lng": [-118.3265447]
}, {
    "fullName": "Chuck Connors",
    "category": ["Television"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Hans Conried",
    "category": ["Television"],
    "address": ["6664 Hollywood Blvd."],
    "lat": [34.1012733],
    "lng": [-118.3356135]
}, {
    "fullName": "John Conte (actor)",
    "category": ["Television"],
    "address": ["6119 Hollywood Blvd."],
    "lat": [34.1016658],
    "lng": [-118.3229884]
}, {
    "fullName": "Bill Conti",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Jack Conway (filmmaker)",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Tim Conway",
    "category": ["Television"],
    "address": ["6740 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.337505]
}, {
    "fullName": "Tom Conway",
    "category": ["Television"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Jackie Coogan",
    "category": ["Motion pictures"],
    "address": ["1654 Vine Street"],
    "lat": [34.100684],
    "lng": [-118.3265584]
}, {
    "fullName": "Clyde Cook (actor)",
    "category": ["Motion pictures"],
    "address": ["6531 Hollywood Blvd."],
    "lat": [34.102011],
    "lng": [-118.332242]
}, {
    "fullName": "Donald Cook (actor)",
    "category": ["Motion pictures"],
    "address": ["1718 Vine Street"],
    "lat": [34.1022865],
    "lng": [-118.3263373]
}, {
    "fullName": "Alistair Cooke",
    "category": ["Television"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Sam Cooke",
    "category": ["Recording"],
    "address": ["7051 Hollywood Blvd."],
    "lat": [34.1019526],
    "lng": [-118.3435236]
}, {
    "fullName": "Spade Cooley",
    "category": ["Radio"],
    "address": ["6802 Hollywood Blvd."],
    "lat": [34.1014301],
    "lng": [-118.3389199]
}, {
    "fullName": "Alice Cooper",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Gary Cooper",
    "category": ["Motion pictures"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Jackie Cooper",
    "category": ["Motion pictures"],
    "address": ["1507 Vine Street"],
    "lat": [34.0984955],
    "lng": [-118.3266817]
}, {
    "fullName": "Jeanne Cooper",
    "category": ["Television"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Merian C. Cooper{{refn|group=note|Merian Cooper's star is misspelled as \"Meriam\".",
    "category": ["Motion pictures"],
    "address": ["6525 Hollywood Blvd."],
    "lat": [34.1017883],
    "lng": [-118.3319181]
}, {
    "fullName": "David Copperfield (illusionist)",
    "category": ["Live performance"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Wendell Corey",
    "category": ["Television"],
    "address": ["6328 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.327674]
}, {
    "fullName": "Roger Corman",
    "category": ["Motion pictures"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Don Cornelius",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Don Cornell",
    "category": ["Recording"],
    "address": ["6138 Hollywood Blvd."],
    "lat": [34.1016259],
    "lng": [-118.3235435]
}, {
    "fullName": "Charles Correll",
    "category": ["Radio"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Ricardo Cortez",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Bill Cosby",
    "category": ["Television"],
    "address": ["6930 Hollywood Blvd."],
    "lat": [34.101156],
    "lng": [-118.340964]
}, {
    "fullName": "Dolores Costello",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Helene Costello",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Lou Costello",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6438 Hollywood Blvd.", "6780 Hollywood Blvd.", "6276 Hollywood Blvd."],
    "lat": [34.1013004, 34.1013355, 34.101622],
    "lng": [-118.3307561, -118.3384643, -118.3260517]
}, {
    "fullName": "Maurice Costello",
    "category": ["Motion pictures"],
    "address": ["6515 Hollywood Blvd."],
    "lat": [34.1018352],
    "lng": [-118.3315723]
}, {
    "fullName": "Pierre Cossette",
    "category": ["Television"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Kevin Costner",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Joseph Cotten",
    "category": ["Motion pictures"],
    "address": ["6382 Hollywood Blvd."],
    "lat": [34.1013284],
    "lng": [-118.3293501]
}, {
    "fullName": "Jerome Cowan",
    "category": ["Television"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Wally Cox",
    "category": ["Television"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Buster Crabbe",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Bryan Cranston",
    "category": ["Television"],
    "address": ["1717 Vine Street"],
    "lat": [34.1023831],
    "lng": [-118.3271246]
}, {
    "fullName": "Broderick Crawford",
    "category": ["Motion pictures", "Television"],
    "address": ["6901 Hollywood Blvd.", "6736 Hollywood Blvd."],
    "lat": [34.1015575, 34.1015441],
    "lng": [-118.3401645, -118.3371935]
}, {
    "fullName": "Joan Crawford",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Laird Cregar",
    "category": ["Motion pictures"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Richard Crenna",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Laura Hope Crews",
    "category": ["Motion pictures"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Scatman Crothers",
    "category": ["Television"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Donald Crisp",
    "category": ["Motion pictures"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "John Cromwell (director)",
    "category": ["Motion pictures"],
    "address": ["6555 Hollywood Blvd."],
    "lat": [34.101855],
    "lng": [-118.3329708]
}, {
    "fullName": "Richard Cromwell (actor)",
    "category": ["Motion pictures"],
    "address": ["1627 Vine Street"],
    "lat": [34.1005819],
    "lng": [-118.3274647]
}, {
    "fullName": "Richard Crooks",
    "category": ["Recording"],
    "address": ["1648 Vine Street"],
    "lat": [34.1005289],
    "lng": [-118.3265582]
}, {
    "fullName": "Bing Crosby",
    "category": ["Motion pictures", "Radio", "Recording"],
    "address": ["1611 Vine Street", "6769 Hollywood Blvd.", "6751 Hollywood Blvd."],
    "lat": [34.0999941, 34.1017798, 34.1017702],
    "lng": [-118.3266857, -118.3381036, -118.3376512]
}, {
    "fullName": "Bob Crosby",
    "category": ["Television", "Radio"],
    "address": ["6252 Hollywood Blvd.", "6313 Hollywood Blvd."],
    "lat": [34.10162529999999, 34.1016463],
    "lng": [-118.3253554, -118.3270932]
}, {
    "fullName": "Norm Crosby",
    "category": ["Television"],
    "address": ["6560 Hollywood Blvd."],
    "lat": [34.1013472],
    "lng": [-118.3331011]
}, {
    "fullName": "Crosby, Stills, Nash & Young",
    "category": ["Recording"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Milton Cross",
    "category": ["Radio"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Andraé Crouch",
    "category": ["Recording"],
    "address": ["6520 Hollywood Blvd."],
    "lat": [34.1013392],
    "lng": [-118.3318563]
}, {
    "fullName": "Russell Crowe",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Tom Cruise",
    "category": ["Motion pictures"],
    "address": ["6912 Hollywood Blvd."],
    "lat": [34.101158],
    "lng": [-118.340454]
}, {
    "fullName": "Frank Crumit",
    "category": ["Radio"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Celia Cruz",
    "category": ["Recording"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "Penélope Cruz",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "James Cruze",
    "category": ["Motion pictures"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Jon Cryer",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Billy Crystal",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Xavier Cugat",
    "category": ["Television", "Recording"],
    "address": ["1500 Vine Street", "1601 Vine Street"],
    "lat": [34.098332, 34.0999567],
    "lng": [-118.3262557, -118.327134]
}, {
    "fullName": "George Cukor",
    "category": ["Motion pictures"],
    "address": ["6378 Hollywood Blvd."],
    "lat": [34.1014171],
    "lng": [-118.3291998]
}, {
    "fullName": "Constance Cummings",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Irving Cummings",
    "category": ["Motion pictures"],
    "address": ["6816 Hollywood Blvd."],
    "lat": [34.1012704],
    "lng": [-118.3392957]
}, {
    "fullName": "Robert Cummings",
    "category": ["Motion pictures", "Television"],
    "address": ["6816 Hollywood Blvd.", "1718 Vine Street"],
    "lat": [34.1012704, 34.1022865],
    "lng": [-118.3392957, -118.3263373]
}, {
    "fullName": "Bill Cunningham (talk show host)",
    "category": ["Radio"],
    "address": ["6315 Hollywood Blvd."],
    "lat": [34.101967],
    "lng": [-118.327337]
}, {
    "fullName": "Kaley Cuoco",
    "category": ["Television"],
    "address": ["6621 Hollywood Blvd."],
    "lat": [34.1018759],
    "lng": [-118.3341576]
}, {
    "fullName": "Mike Curb",
    "category": ["Recording"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Alan Curtis (American actor)",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Jamie Lee Curtis",
    "category": ["Motion pictures"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Tony Curtis",
    "category": ["Motion pictures"],
    "address": ["6817 Hollywood Blvd."],
    "lat": [34.1015602],
    "lng": [-118.3389381]
}, {
    "fullName": "Michael Curtiz",
    "category": ["Motion pictures"],
    "address": ["6640 Hollywood Blvd."],
    "lat": [34.10138],
    "lng": [-118.3347076]
}, {
    "fullName": "John Cusack",
    "category": ["Motion pictures", "}\n{{col-end}}\n\n==D==\n{{col-begin}}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6644 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1013045, 34.0522342],
    "lng": [-118.3347464, -118.2436849]
}, {
    "fullName": "Arlene Dahl",
    "category": ["Motion pictures"],
    "address": ["1624 Vine Street"],
    "lat": [34.1001992],
    "lng": [-118.3266476]
}, {
    "fullName": "Cass Daley",
    "category": ["Television", "Radio"],
    "address": ["6301 Hollywood Blvd.", "6710 Hollywood Blvd."],
    "lat": [34.1019689, 34.10155200000001],
    "lng": [-118.327043, -118.3365455]
}, {
    "fullName": "Dorothy Dalton",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "John Daly (radio and television personality)",
    "category": ["Television"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Tyne Daly",
    "category": ["Television"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Matt Damon",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Vic Damone",
    "category": ["Recording"],
    "address": ["1731 Vine Street"],
    "lat": [34.1025982],
    "lng": [-118.3267105]
}, {
    "fullName": "Viola Dana",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Dorothy Dandridge",
    "category": ["Motion pictures"],
    "address": ["6719 Hollywood Blvd."],
    "lat": [34.1016564],
    "lng": [-118.3366502]
}, {
    "fullName": "Karl Dane",
    "category": ["Motion pictures"],
    "address": ["6140 Hollywood Blvd."],
    "lat": [34.101271],
    "lng": [-118.3235858]
}, {
    "fullName": "Claire Danes",
    "category": ["Television"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Rodney Dangerfield",
    "category": ["Motion pictures"],
    "address": ["6366 Hollywood Blvd."],
    "lat": [34.1013313],
    "lng": [-118.3287303]
}, {
    "fullName": "Bebe Daniels",
    "category": ["Motion pictures"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Billy Daniels",
    "category": ["Recording"],
    "address": ["6819 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Ted Danson",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Tony Danza",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Bobby Darin",
    "category": ["Recording"],
    "address": ["1735 Vine Street"],
    "lat": [34.1027185],
    "lng": [-118.3271695]
}, {
    "fullName": "Linda Darnell",
    "category": ["Motion pictures"],
    "address": ["1631 Vine Street"],
    "lat": [34.1006154],
    "lng": [-118.3266858]
}, {
    "fullName": "Jane Darwell",
    "category": ["Motion pictures"],
    "address": ["6735 Hollywood Blvd."],
    "lat": [34.1018203],
    "lng": [-118.3370363]
}, {
    "fullName": "Delmer Daves",
    "category": ["Motion pictures"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "Hal David",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Marion Davies",
    "category": ["Motion pictures"],
    "address": ["6326 Hollywood Blvd."],
    "lat": [34.1013511],
    "lng": [-118.3276026]
}, {
    "fullName": "Ann B. Davis",
    "category": ["Television"],
    "address": ["7048 Hollywood Blvd."],
    "lat": [34.1015292],
    "lng": [-118.343292]
}, {
    "fullName": "Bette Davis",
    "category": ["Motion pictures", "Television"],
    "address": ["6225 Hollywood Blvd.", "6335 Hollywood Blvd."],
    "lat": [34.1017951, 34.10164],
    "lng": [-118.3254533, -118.3280581]
}, {
    "fullName": "Clive Davis",
    "category": ["Recording"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Gail Davis",
    "category": ["Television"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Jim Davis (actor)",
    "category": ["Television"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Joan Davis",
    "category": ["Motion pictures", "Radio"],
    "address": ["1521 Vine Street", "1716 Vine Street"],
    "lat": [34.0988267, 34.1021774],
    "lng": [-118.3270184, -118.3266752]
}, {
    "fullName": "Mac Davis",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Miles Davis",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Sammy Davis, Jr.",
    "category": ["Recording"],
    "address": ["6254 Hollywood Blvd."],
    "lat": [34.10162529999999],
    "lng": [-118.3254104]
}, {
    "fullName": "Dennis Day",
    "category": ["Radio", "Television"],
    "address": ["7048 Hollywood Blvd.", "6646 Hollywood Blvd"],
    "lat": [34.1015292, 34.1013645],
    "lng": [-118.343292, -118.3348774]
}, {
    "fullName": "Doris Day",
    "category": ["Recording", "Motion pictures"],
    "address": ["6278 Hollywood Blvd.", "6735 Hollywood Blvd."],
    "lat": [34.1016218, 34.1018203],
    "lng": [-118.3261151, -118.3370363]
}, {
    "fullName": "Laraine Day",
    "category": ["Motion pictures"],
    "address": ["6676 Hollywood Blvd."],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "Dead End Kids",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Rosemary DeCamp",
    "category": ["Television"],
    "address": ["1640 Vine Street"],
    "lat": [34.1004125],
    "lng": [-118.3266479]
}, {
    "fullName": "Yvonne De Carlo",
    "category": ["Motion pictures", "Television"],
    "address": ["6124 Hollywood Blvd.", "6715 Hollywood Blvd."],
    "lat": [34.1013762, 34.1017555],
    "lng": [-118.3231489, -118.3365706]
}, {
    "fullName": "Frances Dee",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Rick Dees",
    "category": ["Radio"],
    "address": ["1560 N. Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Don DeFore",
    "category": ["Television"],
    "address": ["6804 Hollywood Blvd."],
    "lat": [34.1015296],
    "lng": [-118.338902]
}, {
    "fullName": "Lee De Forest",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Ellen DeGeneres",
    "category": ["Television"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Carter DeHaven",
    "category": ["Motion pictures"],
    "address": ["1742 Vine Street"],
    "lat": [34.1029047],
    "lng": [-118.3266714]
}, {
    "fullName": "Gloria DeHaven",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Olivia de Havilland",
    "category": ["Motion pictures"],
    "address": ["6762 Hollywood Blvd."],
    "lat": [34.1013481],
    "lng": [-118.3379129]
}, {
    "fullName": "Albert Dekker",
    "category": ["Television"],
    "address": ["6620 Hollywood Blvd."],
    "lat": [34.1012572],
    "lng": [-118.3339676]
}, {
    "fullName": "Dolores del Río",
    "category": ["Motion pictures"],
    "address": ["1630 Vine Street"],
    "lat": [34.1002573],
    "lng": [-118.3266477]
}, {
    "fullName": "Roy Del Ruth",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Marguerite De La Motte",
    "category": ["Motion pictures"],
    "address": ["6902 Hollywood Blvd."],
    "lat": [34.1013333],
    "lng": [-118.3403926]
}, {
    "fullName": "Vaughn De Leath",
    "category": ["Radio"],
    "address": ["6634 Hollywood Blvd."],
    "lat": [34.1015649],
    "lng": [-118.3344932]
}, {
    "fullName": "Dom DeLuise",
    "category": ["Motion pictures"],
    "address": ["1765 N. Vine Street"],
    "lat": [99],
    "lng": [99]
}, {
    "fullName": "William Demarest",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Cecil B. DeMille",
    "category": ["Motion pictures", "Radio"],
    "address": ["1725 Vine Street", "6240 Vine Street"],
    "lat": [34.102418, 34.1091729],
    "lng": [-118.3267115, -118.3266247]
}, {
    "fullName": "Richard Denning",
    "category": ["Television"],
    "address": ["6932 Hollywood Blvd."],
    "lat": [34.1015289],
    "lng": [-118.3405681]
}, {
    "fullName": "Reginald Denny (actor)",
    "category": ["Motion pictures"],
    "address": ["6657 Hollywood Blvd."],
    "lat": [34.1015928],
    "lng": [-118.3350852]
}, {
    "fullName": "John Denver",
    "category": ["Recording"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Johnny Depp",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "John Derek",
    "category": ["Television"],
    "address": ["6531 Hollywood Blvd."],
    "lat": [34.102011],
    "lng": [-118.332242]
}, {
    "fullName": "Bruce Dern",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Laura Dern",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Destiny's Child",
    "category": ["Recording"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Buddy DeSylva",
    "category": ["Recording"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Andy Devine",
    "category": ["Radio", "Television", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6258 Hollywood Blvd.", "6366 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1016254, 34.1013313, 34.0522342],
    "lng": [-118.3255205, -118.3287303, -118.2436849]
}, {
    "fullName": "Danny DeVito",
    "category": ["Television"],
    "address": ["6906 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.340605]
}, {
    "fullName": "Elliott Dexter",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Vin Di Bona",
    "category": ["Television"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Neil Diamond",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Cameron Diaz",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Angie Dickinson",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Vin Diesel",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "William Dieterle",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Marlene Dietrich",
    "category": ["Motion pictures"],
    "address": ["6400 Hollywood Blvd."],
    "lat": [34.101368],
    "lng": [-118.32983]
}, {
    "fullName": "Phyllis Diller",
    "category": ["Television"],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "Celine Dion",
    "category": ["Recording"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Roy O. Disney",
    "category": ["Motion pictures"],
    "address": ["6833 Hollywood Blvd."],
    "lat": [34.1015598],
    "lng": [-118.3391724]
}, {
    "fullName": "Walt Disney",
    "category": ["Motion pictures", "Television"],
    "address": ["7021 Hollywood Blvd.", "6747 Hollywood Blvd."],
    "lat": [34.1023128, 34.1015741],
    "lng": [-118.3427565, -118.3373121]
}, {
    "fullName": "Disneyland",
    "category": ["50th Year"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Richard Dix (actor)",
    "category": ["Motion pictures"],
    "address": ["1608 Vine Street"],
    "lat": [34.0999572],
    "lng": [-118.3266483]
}, {
    "fullName": "Edward Dmytryk",
    "category": ["Motion pictures"],
    "address": ["6241 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3255481]
}, {
    "fullName": "Jimmie Dodd",
    "category": ["Television"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Ray Dolby",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Plácido Domingo",
    "category": ["Live performance"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Fats Domino",
    "category": ["Recording"],
    "address": ["6616 Hollywood Blvd."],
    "lat": [34.1012736],
    "lng": [-118.3338535]
}, {
    "fullName": "Peter Donald",
    "category": ["Television"],
    "address": ["6661 Hollywood Blvd."],
    "lat": [34.101869],
    "lng": [-118.335295]
}, {
    "fullName": "Robert Donat",
    "category": ["Motion pictures"],
    "address": ["6420 Hollywood Blvd."],
    "lat": [34.1013575],
    "lng": [-118.330543]
}, {
    "fullName": "Brian Donlevy",
    "category": ["Television"],
    "address": ["1551 Vine Street"],
    "lat": [34.0990667],
    "lng": [-118.3266844]
}, {
    "fullName": "Richard Donner",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Lauren Shuler Donner",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "James Doohan",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "The Doors",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd. "],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Marie Doro",
    "category": ["Motion pictures"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Jimmy Dorsey",
    "category": ["Recording"],
    "address": ["6505 Hollywood Blvd."],
    "lat": [34.1018647],
    "lng": [-118.3312654]
}, {
    "fullName": "Tommy Dorsey",
    "category": ["Recording"],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Jack Douglas (writer)",
    "category": ["Television"],
    "address": ["6740 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.337505]
}, {
    "fullName": "Kirk Douglas",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Melvyn Douglas",
    "category": ["Motion pictures", "Television"],
    "address": ["6423 Hollywood Blvd.", "6601 Hollywood Blvd."],
    "lat": [34.1017721, 34.101873],
    "lng": [-118.3303455, -118.333582]
}, {
    "fullName": "Mike Douglas",
    "category": ["Television"],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "Paul Douglas (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["1648 Hollywood Blvd.", "6821 Hollywood Blvd."],
    "lat": [34.0961205, 34.1015594],
    "lng": [-118.2903527, -118.3392858]
}, {
    "fullName": "Billie Dove",
    "category": ["Motion pictures"],
    "address": ["6351 Hollywood Blvd."],
    "lat": [34.1016385],
    "lng": [-118.328582]
}, {
    "fullName": "Morton Downey",
    "category": ["Radio"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Cathy Downs",
    "category": ["Television"],
    "address": ["6646 Hollywood Blvd."],
    "lat": [34.1013645],
    "lng": [-118.3348774]
}, {
    "fullName": "Carmen Dragon",
    "category": ["Radio"],
    "address": ["6104 Hollywood Blvd."],
    "lat": [34.101245],
    "lng": [-118.322947]
}, {
    "fullName": "Jessica Dragonette",
    "category": ["Radio"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Frances Drake",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Louise Dresser",
    "category": ["Motion pictures"],
    "address": ["6538 Hollywood Blvd."],
    "lat": [34.1013391],
    "lng": [-118.3323526]
}, {
    "fullName": "Marie Dressler",
    "category": ["Motion pictures"],
    "address": ["1731 Vine Street"],
    "lat": [34.1025982],
    "lng": [-118.3267105]
}, {
    "fullName": "Ellen Drew",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Mr. & Mrs. Sidney Drew",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Richard Dreyfuss",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Bobby Driscoll",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Joanne Dru",
    "category": ["Television"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "David Duchovny",
    "category": ["Television"],
    "address": ["6508 Hollywood Blvd."],
    "lat": [34.1013411],
    "lng": [-118.3314501]
}, {
    "fullName": "Donald Duck",
    "category": ["Motion pictures"],
    "address": ["6840 Hollywood Blvd"],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Howard Duff",
    "category": ["Television"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Olympia Dukakis",
    "category": ["Live performance"],
    "address": ["6298 Hollywood Blvd"],
    "lat": [34.1016202],
    "lng": [-118.3266595]
}, {
    "fullName": "Patty Duke",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Faye Dunaway",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "James Dunn (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["6555 Hollywood Blvd.", "7010 Hollywood Blvd."],
    "lat": [34.101855, 34.1015304],
    "lng": [-118.3329708, -118.3418654]
}, {
    "fullName": "Irene Dunne",
    "category": ["Motion pictures"],
    "address": ["6440 Hollywood Blvd."],
    "lat": [34.1014635],
    "lng": [-118.3309359]
}, {
    "fullName": "Philip Dunne (writer)",
    "category": ["Motion pictures"],
    "address": ["6725 Hollywood Blvd."],
    "lat": [34.1015791],
    "lng": [-118.336858]
}, {
    "fullName": "Mildred Dunnock",
    "category": ["Motion pictures"],
    "address": ["6613 Hollywood Blvd."],
    "lat": [34.1018479],
    "lng": [-118.333887]
}, {
    "fullName": "Jerry Dunphy",
    "category": ["Television"],
    "address": ["6669 Hollywood Blvd."],
    "lat": [34.10193599999999],
    "lng": [-118.335593]
}, {
    "fullName": "Duran Duran",
    "category": ["Recording"],
    "address": ["1770 Vine Street"],
    "lat": [34.1036096],
    "lng": [-118.326531]
}, {
    "fullName": "Jimmy Durante",
    "category": ["Motion pictures", "Radio"],
    "address": ["1600 Vine Street", "1648 Vine Street"],
    "lat": [34.1003574, 34.1005289],
    "lng": [-118.3259214, -118.3265582]
}, {
    "fullName": "Deanna Durbin",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Charles Durning",
    "category": ["Motion pictures"],
    "address": ["6504 Hollywood Blvd."],
    "lat": [34.1013378],
    "lng": [-118.3312744]
}, {
    "fullName": "Dan Duryea",
    "category": ["Television"],
    "address": ["6145 Hollywood Blvd."],
    "lat": [34.1016546],
    "lng": [-118.323803]
}, {
    "fullName": "Robert Duvall",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Ann Dvorak",
    "category": ["Motion pictures"],
    "address": ["6321 Hollywood Blvd."],
    "lat": [34.1020118],
    "lng": [-118.3274662]
}, {
    "fullName": "Earth, Wind & Fire",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "George Eastman",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Roger Ebert",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Buddy Ebsen",
    "category": ["Motion pictures"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Billy Eckstine",
    "category": ["Recording"],
    "address": ["6638 Hollywood Blvd."],
    "lat": [34.1012392],
    "lng": [-118.3345573]
}, {
    "fullName": "Thomas Edison",
    "category": ["Motion pictures"],
    "address": ["6700 Hollywood Blvd."],
    "lat": [34.1012348],
    "lng": [-118.336323]
}, {
    "fullName": "Nelson Eddy",
    "category": ["Motion pictures", "Radio", "Recording"],
    "address": ["6311 Hollywood Blvd.", "6512 Hollywood Blvd.", "1639 Vine Street"],
    "lat": [34.1016471, 34.10133709999999, 34.1009837],
    "lng": [-118.3270259, -118.3316809, -118.3268649]
}, {
    "fullName": "Barbara Eden",
    "category": ["Television"],
    "address": ["7003 Hollywood Blvd."],
    "lat": [34.1015615],
    "lng": [-118.3418581]
}, {
    "fullName": "Robert Edeson",
    "category": ["Motion pictures"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Babyface (musician)",
    "category": ["Recording"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Blake Edwards",
    "category": ["Motion pictures"],
    "address": ["6908 Hollywood Blvd."],
    "lat": [34.1012376],
    "lng": [-118.3405676]
}, {
    "fullName": "Ralph Edwards",
    "category": ["Radio", "Television"],
    "address": ["6116 Hollywood Blvd.", "6262 Hollywood Blvd."],
    "lat": [34.101633, 34.1016246],
    "lng": [-118.3230552, -118.325635]
}, {
    "fullName": "Steve Edwards (talk show host)",
    "category": ["Television"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Kenneth Ehrlich",
    "category": ["Television"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Michael Eisner",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Larry Elder",
    "category": ["Radio"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Duke Ellington",
    "category": ["Recording"],
    "address": ["6535 Hollywood Blvd."],
    "lat": [34.1016088],
    "lng": [-118.3323438]
}, {
    "fullName": "Mischa Elman",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["1560 Vine Street", "! Name !! Category !! Address"],
    "lat": [34.0993898, 34.0522342],
    "lng": [-118.3266473, -118.2436849]
}, {
    "fullName": "Faye Emerson",
    "category": ["Motion pictures", "Television"],
    "address": ["6529 Hollywood Blvd.", "6689 Hollywood Blvd."],
    "lat": [34.1017869, 34.1016612],
    "lng": [-118.331964, -118.3360642]
}, {
    "fullName": "Dick Enberg",
    "category": ["Television"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "John Ericson",
    "category": ["Television"],
    "address": ["1523 Vine Street"],
    "lat": [34.098721],
    "lng": [-118.3267737]
}, {
    "fullName": "Leon Errol",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Stuart Erwin",
    "category": ["Television"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Giancarlo Esposito",
    "category": ["Television"],
    "address": ["6351 Hollywood Blvd."],
    "lat": [34.1016385],
    "lng": [-118.328582]
}, {
    "fullName": "Emilio Estefan",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Gloria Estefan",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Erik Estrada",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd. "],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Melissa Etheridge",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Ruth Etting",
    "category": ["Motion pictures"],
    "address": ["6563 Hollywood Blvd."],
    "lat": [34.1016034],
    "lng": [-118.3331745]
}, {
    "fullName": "Bob Eubanks",
    "category": ["Television", "Evans & Livingston"],
    "address": ["6712 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Livingston|Livingston & Evans]]''"],
    "lat": [34.1014167, 99],
    "lng": [-118.3365429, 99]
}, {
    "fullName": "Dale Evans",
    "category": ["Radio", "Television"],
    "address": ["6638 Hollywood Blvd.", "1737 Vine Street"],
    "lat": [34.1012392, 34.1027365],
    "lng": [-118.3345573, -118.3267098]
}, {
    "fullName": "Linda Evans",
    "category": ["Television"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Madge Evans",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Robert Evans (producer)",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Chad Everett",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Fabian (entertainer)",
    "category": ["Live performance"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Nanette Fabray",
    "category": ["Television"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Max Factor, Sr.",
    "category": ["Motion pictures"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Clifton Fadiman",
    "category": ["Radio"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Douglas Fairbanks, Jr.",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6318 Hollywood Blvd.", "6710 Hollywood Blvd.", "6661 Hollywood Blvd."],
    "lat": [34.1016131, 34.10155200000001, 34.101869],
    "lng": [-118.3272696, -118.3365455, -118.335295]
}, {
    "fullName": "Douglas Fairbanks",
    "category": ["Motion pictures"],
    "address": ["7022 Hollywood Blvd."],
    "lat": [34.1013019],
    "lng": [-118.3421754]
}, {
    "fullName": "Jerry Fairbanks",
    "category": ["Motion pictures"],
    "address": ["6384 Hollywood Blvd."],
    "lat": [34.1014332],
    "lng": [-118.3293279]
}, {
    "fullName": "Percy Faith",
    "category": ["Recording"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Peter Falk",
    "category": ["Television"],
    "address": ["6654 Hollywood Blvd."],
    "lat": [34.1013666],
    "lng": [-118.3353076]
}, {
    "fullName": "Jinx Falkenburg",
    "category": ["Television"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Chris Farley",
    "category": ["Television"],
    "address": ["6366 Hollywood Blvd."],
    "lat": [34.1013313],
    "lng": [-118.3287303]
}, {
    "fullName": "Richard Farnsworth",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Dustin Farnum",
    "category": ["Motion pictures"],
    "address": ["6635 Hollywood Blvd."],
    "lat": [34.1015958],
    "lng": [-118.3345572]
}, {
    "fullName": "William Farnum",
    "category": ["Motion pictures"],
    "address": ["6322 Hollywood Blvd."],
    "lat": [34.1016106],
    "lng": [-118.3274733]
}, {
    "fullName": "Jamie Farr",
    "category": ["Television"],
    "address": ["1547 N. Vine Street"],
    "lat": [34.098991],
    "lng": [-118.3266842]
}, {
    "fullName": "Geraldine Farrar",
    "category": ["Motion pictures", "Recording"],
    "address": ["1620 Vine Street", "1709 Vine Street"],
    "lat": [34.1001604, 34.1019261],
    "lng": [-118.3266475, -118.3267039]
}, {
    "fullName": "Charles Farrell",
    "category": ["Motion pictures", "Television"],
    "address": ["7021 Hollywood Blvd.", "1617 Vine Street"],
    "lat": [34.1023128, 34.1001043],
    "lng": [-118.3427565, -118.326685]
}, {
    "fullName": "Glenda Farrell",
    "category": ["Motion pictures"],
    "address": ["6524 Hollywood Blvd."],
    "lat": [34.1013303],
    "lng": [-118.3320369]
}, {
    "fullName": "John Farrow",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "William Faversham",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Farrah Fawcett",
    "category": ["Television"],
    "address": ["7057 Hollywood Blvd."],
    "lat": [34.1015607],
    "lng": [-118.3435449]
}, {
    "fullName": "Frank Fay (American actor)",
    "category": ["Motion pictures", "Radio"],
    "address": ["6282 Hollywood Blvd.", "1752 Vine Street"],
    "lat": [34.1014522, 34.1029238],
    "lng": [-118.3262591, -118.3266713]
}, {
    "fullName": "Alice Faye",
    "category": ["Motion pictures"],
    "address": ["6930 Hollywood Blvd."],
    "lat": [34.101156],
    "lng": [-118.340964]
}, {
    "fullName": "Julia Faye",
    "category": ["Motion pictures"],
    "address": ["6501 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.331205]
}, {
    "fullName": "Frank Faylen",
    "category": ["Television"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Louise Fazenda",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Don Fedderson",
    "category": ["Television"],
    "address": ["1635 Vine Street"],
    "lat": [34.1008794],
    "lng": [-118.3270781]
}, {
    "fullName": "José Feliciano",
    "category": ["Recording"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Verna Felton",
    "category": ["Television"],
    "address": ["1717 Vine Street"],
    "lat": [34.1023831],
    "lng": [-118.3271246]
}, {
    "fullName": "Freddy Fender",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "George Fenneman",
    "category": ["Television"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Helen Ferguson",
    "category": ["Motion pictures"],
    "address": ["6153 Hollywood Blvd."],
    "lat": [34.1016554],
    "lng": [-118.3239034]
}, {
    "fullName": "Vicente Fernández",
    "category": ["Recording"],
    "address": ["6160 Hollywood Blvd."],
    "lat": [34.101321],
    "lng": [-118.324357]
}, {
    "fullName": "Alejandro Fernández",
    "category": ["Recording"],
    "address": ["6160 Hollywood Blvd."],
    "lat": [34.101321],
    "lng": [-118.324357]
}, {
    "fullName": "Will Ferrell",
    "category": ["Motion pictures"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "José Ferrer",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Mel Ferrer",
    "category": ["Motion pictures"],
    "address": ["6268 Hollywood Blvd."],
    "lat": [34.1016229],
    "lng": [-118.3258135]
}, {
    "fullName": "Jimmie Fidler",
    "category": ["Radio"],
    "address": ["6128 Hollywood Blvd."],
    "lat": [34.1016302],
    "lng": [-118.3231805]
}, {
    "fullName": "Arthur Fiedler",
    "category": ["Recording"],
    "address": ["1626 Vine Street"],
    "lat": [34.1002186],
    "lng": [-118.3266476]
}, {
    "fullName": "Sally Field",
    "category": ["Motion pictures"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "Virginia Field",
    "category": ["Television"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Gracie Fields",
    "category": ["Radio"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "W. C. Fields",
    "category": ["Motion pictures", "Radio"],
    "address": ["7004 Hollywood Blvd.", "6316 Hollywood Blvd."],
    "lat": [34.1015312, 34.1016139],
    "lng": [-118.3416497, -118.3272029]
}, {
    "fullName": "The 5th Dimension",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Flora Finch",
    "category": ["Motion pictures"],
    "address": ["6673 Hollywood Blvd."],
    "lat": [34.1015884],
    "lng": [-118.3354888]
}, {
    "fullName": "Colin Firth",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Eddie Fisher (singer)",
    "category": ["Recording", "Television"],
    "address": ["6241 Hollywood Blvd.", "1724 Vine Street"],
    "lat": [34.1016565, 34.1028702],
    "lng": [-118.3255481, -118.3266716]
}, {
    "fullName": "George Fisher (journalist)",
    "category": ["Radio"],
    "address": ["7072 Hollywood Blvd."],
    "lat": [34.1015291],
    "lng": [-118.3440879]
}, {
    "fullName": "Hal Fishman",
    "category": ["Television"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Ella Fitzgerald",
    "category": ["Recording"],
    "address": ["6738 Hollywood Blvd."],
    "lat": [34.1015438],
    "lng": [-118.3372261]
}, {
    "fullName": "Geraldine Fitzgerald",
    "category": ["Motion pictures"],
    "address": ["6353 Hollywood Blvd."],
    "lat": [34.1017591],
    "lng": [-118.3286422]
}, {
    "fullName": "George Fitzmaurice",
    "category": ["Motion pictures"],
    "address": ["6601 Hollywood Blvd."],
    "lat": [34.101873],
    "lng": [-118.333582]
}, {
    "fullName": "James A. Fitzpatrick",
    "category": ["Motion pictures"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Kirsten Flagstad",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6777 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1018431, 34.0522342],
    "lng": [-118.3384573, -118.2436849]
}, {
    "fullName": "Bobby Flay",
    "category": ["Television"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Fleetwood Mac",
    "category": ["Recording"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "Rhonda Fleming",
    "category": ["Motion pictures"],
    "address": ["6660 Hollywood Blvd."],
    "lat": [34.1014235],
    "lng": [-118.3354943]
}, {
    "fullName": "Victor Fleming",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Errol Flynn",
    "category": ["Motion pictures", "Television"],
    "address": ["6654 Hollywood Blvd.", "7008 Hollywood Blvd."],
    "lat": [34.1013666, 34.10153010000001],
    "lng": [-118.3353076, -118.3417918]
}, {
    "fullName": "Nina Foch",
    "category": ["Motion pictures", "Television"],
    "address": ["6322 Hollywood Blvd.", "7021 Hollywood Blvd."],
    "lat": [34.1016106, 34.1023128],
    "lng": [-118.3274733, -118.3427565]
}, {
    "fullName": "John Fogerty",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Red Foley",
    "category": ["Recording", "Television"],
    "address": ["6225 Hollywood Blvd.", "6300 Hollywood Blvd."],
    "lat": [34.1017951, 34.1014324],
    "lng": [-118.3254533, -118.3270755]
}, {
    "fullName": "Henry Fonda",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Peter Fonda",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Joan Fontaine",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Dick Foran",
    "category": ["Television"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "June Foray",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Scott Forbes",
    "category": ["Television"],
    "address": ["1650 Vine Street"],
    "lat": [34.1012293],
    "lng": [-118.3265118]
}, {
    "fullName": "Glenn Ford",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Harrison Ford (silent film actor)",
    "category": ["Motion pictures"],
    "address": ["6665 Hollywood Blvd"],
    "lat": [34.1018332],
    "lng": [-118.3352366]
}, {
    "fullName": "Harrison Ford",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "John Ford",
    "category": ["Motion pictures", "Mary Ford and Les Paul"],
    "address": ["1640 Vine Street", "colspan=\"2\" | ''see [[#Paul|Les Paul & Mary Ford]]''"],
    "lat": [34.1004125, 99],
    "lng": [-118.3266479, 99]
}, {
    "fullName": "Tennessee Ernie Ford",
    "category": ["Radio", "Recording", "Television"],
    "address": ["1600 Vine Street", "6922 Hollywood Blvd.", "6311 Hollywood Blvd."],
    "lat": [34.1003574, 34.1011682, 34.1016471],
    "lng": [-118.3259214, -118.3409985, -118.3270259]
}, {
    "fullName": "John Forsythe",
    "category": ["Television"],
    "address": ["6549 Hollywood Blvd."],
    "lat": [34.101912],
    "lng": [-118.332789]
}, {
    "fullName": "David Foster",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Preston Foster",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "The Four Step Brothers",
    "category": ["Live performance"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Four Tops",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Michael J. Fox",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "William Fox (producer)",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Jamie Foxx",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Eddie Foy, Sr.",
    "category": ["Motion pictures"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Peter Frampton",
    "category": ["Recording"],
    "address": ["6819 Hollywood Blvd."],
    "lat": [34.1015601],
    "lng": [-118.3389665]
}, {
    "fullName": "Zino Francescatti",
    "category": ["Recording"],
    "address": ["6704 Hollywood Blvd."],
    "lat": [34.101383],
    "lng": [-118.3363775]
}, {
    "fullName": "Anne Francis",
    "category": ["Television"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Arlene Francis",
    "category": ["Radio", "Television"],
    "address": ["6432 Hollywood Blvd.", "1734 Vine Street"],
    "lat": [34.1015888, 34.1028894],
    "lng": [-118.3302637, -118.3266715]
}, {
    "fullName": "Kay Francis",
    "category": ["Motion pictures"],
    "address": ["6766 Hollywood Blvd."],
    "lat": [34.101206],
    "lng": [-118.338028]
}, {
    "fullName": "Don Francisco (television host)",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "James Franco",
    "category": ["Motion pictures"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Aretha Franklin",
    "category": ["Recording"],
    "address": ["6920 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.3404842]
}, {
    "fullName": "Sidney Franklin (director)",
    "category": ["Motion pictures"],
    "address": ["6566 Hollywood Blvd."],
    "lat": [34.1013303],
    "lng": [-118.3332324]
}, {
    "fullName": "Dennis Franz",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "William Frawley",
    "category": ["Motion pictures"],
    "address": ["6322 Hollywood Blvd."],
    "lat": [34.1016106],
    "lng": [-118.3274733]
}, {
    "fullName": "Stan Freberg",
    "category": ["Recording"],
    "address": ["6145 Hollywood Blvd."],
    "lat": [34.1016546],
    "lng": [-118.323803]
}, {
    "fullName": "Pauline Frederick",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Alan Freed",
    "category": ["Radio"],
    "address": ["6381 Hollywood Blvd."],
    "lat": [34.1018927],
    "lng": [-118.3292542]
}, {
    "fullName": "Y. Frank Freeman",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Morgan Freeman",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Friz Freleng",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "William Friedkin",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Charles W. Fries",
    "category": ["Television"],
    "address": ["6819 Hollywood Blvd."],
    "lat": [34.1015601],
    "lng": [-118.3389665]
}, {
    "fullName": "Lefty Frizzell",
    "category": ["Recording"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Jane Froman",
    "category": ["Radio", "Recording", "Television"],
    "address": ["6321 Hollywood Blvd.", "6145 Hollywood Blvd.", "1645 Vine Street"],
    "lat": [34.1020118, 34.1016546, 34.101276],
    "lng": [-118.3274662, -118.323803, -118.327091]
}, {
    "fullName": "Robert Fuller (actor)",
    "category": ["Television"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "Simon Fuller",
    "category": ["Television"],
    "address": ["6268 Hollywood Blvd."],
    "lat": [34.1016229],
    "lng": [-118.3258135]
}, {
    "fullName": "Annette Funicello",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "The Funk Brothers",
    "category": ["Recording"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Kenny G",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd"],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Clark Gable",
    "category": ["Motion pictures"],
    "address": ["1608 Vine Street"],
    "lat": [34.0999572],
    "lng": [-118.3266483]
}, {
    "fullName": "Eva Gabor",
    "category": ["Television"],
    "address": ["6614 Hollywood Blvd."],
    "lat": [34.101275],
    "lng": [-118.333729]
}, {
    "fullName": "Zsa Zsa Gabor",
    "category": ["Television"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Juan Gabriel",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Helen Gahagan Douglas",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Amelita Galli-Curci",
    "category": ["Recording"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Greta Garbo",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Andy García",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Ava Gardner",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Ed Gardner",
    "category": ["Radio", "Television"],
    "address": ["6554 Hollywood Blvd.", "6676 Hollywood Blvd."],
    "lat": [34.1013366, 34.1015557],
    "lng": [-118.3329746, -118.3360532]
}, {
    "fullName": "John Garfield",
    "category": ["Motion pictures"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Beverly Garland",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Judy Garland",
    "category": ["Motion pictures", "Recording"],
    "address": ["1715 Vine Street", "6764 Hollywood Blvd."],
    "lat": [34.10212, 34.1012256],
    "lng": [-118.3267111, -118.3380301]
}, {
    "fullName": "Erroll Garner",
    "category": ["Recording"],
    "address": ["6363 Hollywood Blvd."],
    "lat": [34.1018942],
    "lng": [-118.328893]
}, {
    "fullName": "James Garner",
    "category": ["Television"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Peggy Ann Garner",
    "category": ["Motion pictures"],
    "address": ["6604 Hollywood Blvd."],
    "lat": [34.10157050000001],
    "lng": [-118.3334671]
}, {
    "fullName": "Tay Garnett",
    "category": ["Motion pictures"],
    "address": ["6556 Hollywood Blvd."],
    "lat": [34.1013226],
    "lng": [-118.3330319]
}, {
    "fullName": "Dave Garroway",
    "category": ["Radio", "Television"],
    "address": ["6355 Hollywood Blvd.", "6264 Hollywood Blvd."],
    "lat": [34.1016381, 34.1016238],
    "lng": [-118.3286782, -118.3256947]
}, {
    "fullName": "Betty Garrett",
    "category": ["Live performance"],
    "address": ["6706 Hollywood Blvd."],
    "lat": [34.101553],
    "lng": [-118.3364349]
}, {
    "fullName": "Greer Garson",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Lucho Gatica",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Marvin Gaye",
    "category": ["Recording"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Crystal Gayle",
    "category": ["Recording"],
    "address": ["1515 Vine Street"],
    "lat": [34.0985311],
    "lng": [-118.3266824]
}, {
    "fullName": "Janet Gaynor",
    "category": ["Motion pictures"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Mitzi Gaynor",
    "category": ["Motion pictures"],
    "address": ["6288 Hollywood Blvd."],
    "lat": [34.1015468],
    "lng": [-118.326328]
}, {
    "fullName": "Bill Geist",
    "category": ["Television"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "David Gerber",
    "category": ["Television"],
    "address": ["1637 Vine Street "],
    "lat": [34.1009204],
    "lng": [-118.3270635]
}, {
    "fullName": "George Gershwin",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Floyd Gibbons",
    "category": ["Radio"],
    "address": ["1631 Vine Street"],
    "lat": [34.1006154],
    "lng": [-118.3266858]
}, {
    "fullName": "Leeza Gibbons",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Georgia Gibbs",
    "category": ["Recording"],
    "address": ["6404 Hollywood Blvd."],
    "lat": [34.1015187],
    "lng": [-118.330068]
}, {
    "fullName": "Hoot Gibson",
    "category": ["Motion pictures"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Beniamino Gigli",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Billy Gilbert",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "John Gilbert (actor)",
    "category": ["Motion pictures"],
    "address": ["1755 Vine Street"],
    "lat": [34.103339],
    "lng": [-118.327158]
}, {
    "fullName": "Melissa Gilbert",
    "category": ["Television"],
    "address": ["6429 Hollywood Blvd."],
    "lat": [34.1017764],
    "lng": [-118.3305255]
}, {
    "fullName": "Paul Gilbert (actor)",
    "category": ["Television"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Vince Gill",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Dizzy Gillespie",
    "category": ["Recording"],
    "address": ["7057 Hollywood Blvd."],
    "lat": [34.1015607],
    "lng": [-118.3435449]
}, {
    "fullName": "Mickey Gilley",
    "category": ["Recording"],
    "address": ["6930 Hollywood Blvd."],
    "lat": [34.101156],
    "lng": [-118.340964]
}, {
    "fullName": "Dorothy Gish",
    "category": ["Motion pictures"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Lillian Gish",
    "category": ["Motion pictures"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Louise Glaum",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Jackie Gleason",
    "category": ["Recording", "Television"],
    "address": ["6231 Hollywood Blvd.", "6300 Hollywood Blvd."],
    "lat": [34.1018794, 34.1014324],
    "lng": [-118.3254546, -118.3270755]
}, {
    "fullName": "James Gleason",
    "category": ["Motion pictures"],
    "address": ["7038 Hollywood Blvd."],
    "lat": [34.1013572],
    "lng": [-118.3428884]
}, {
    "fullName": "George Gobel",
    "category": ["Television"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Paulette Goddard",
    "category": ["Motion pictures"],
    "address": ["1652 Vine Street"],
    "lat": [34.1006322],
    "lng": [-118.3266483]
}, {
    "fullName": "Arthur Godfrey",
    "category": ["Radio", "Recording", "Television"],
    "address": ["6233 Hollywood Blvd.", "6616 Hollywood Blvd.", "1559 Vine Street"],
    "lat": [34.102001, 34.1012736, 34.0991876],
    "lng": [-118.325867, -118.3338535, -118.3266845]
}, {
    "fullName": "Earl Godwin (radio newsman)",
    "category": ["Radio"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Godzilla",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6925 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.101765, 34.0522342],
    "lng": [-118.3408824, -118.2436849]
}, {
    "fullName": "The Go-Go's",
    "category": ["Recording"],
    "address": ["6652 Hollywood Blvd."],
    "lat": [34.1013663],
    "lng": [-118.3352527]
}, {
    "fullName": "Ernest Gold (composer)",
    "category": ["Recording"],
    "address": ["6434 Hollywood Blvd."],
    "lat": [34.1014695],
    "lng": [-118.3307661]
}, {
    "fullName": "Leonard Goldberg",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Whoopi Goldberg",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Leonard Goldenson",
    "category": ["Television"],
    "address": ["6834 Hollywood Blvd. "],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Edwin Franko Goldman",
    "category": ["Radio"],
    "address": ["6410 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.330122]
}, {
    "fullName": "Samuel Goldwyn",
    "category": ["Motion pictures"],
    "address": ["1631 Vine Street"],
    "lat": [34.1006154],
    "lng": [-118.3266858]
}, {
    "fullName": "Pedro Gonzalez-Gonzalez",
    "category": ["Motion pictures"],
    "address": ["1555 Vine Street"],
    "lat": [34.0991421],
    "lng": [-118.3268859]
}, {
    "fullName": "Cuba Gooding, Jr.",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Al Goodman",
    "category": ["Recording"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Benny Goodman",
    "category": ["Recording"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Mark Goodson",
    "category": ["Television"],
    "address": ["6374 Hollywood Blvd."],
    "lat": [34.101332],
    "lng": [-118.329136]
}, {
    "fullName": "Bill Goodwin",
    "category": ["Radio"],
    "address": ["6810 Hollywood Blvd."],
    "lat": [34.1013624],
    "lng": [-118.3392186]
}, {
    "fullName": "Gale Gordon",
    "category": ["Radio"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Berry Gordy",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Freeman Fisher Gosden",
    "category": ["Radio"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Louis Gossett, Jr.",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Jetta Goudal",
    "category": ["Motion pictures"],
    "address": ["6333 Hollywood Blvd."],
    "lat": [34.10164],
    "lng": [-118.3280376]
}, {
    "fullName": "Morton Gould",
    "category": ["Recording"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "Robert Goulet",
    "category": ["Recording"],
    "address": ["6368 Hollywood Blvd."],
    "lat": [34.1013387],
    "lng": [-118.328997]
}, {
    "fullName": "Betty Grable",
    "category": ["Motion pictures"],
    "address": ["6525 Hollywood Blvd."],
    "lat": [34.1017883],
    "lng": [-118.3319181]
}, {
    "fullName": "Billy Graham",
    "category": ["Radio"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Gloria Grahame",
    "category": ["Motion pictures"],
    "address": ["6522 Hollywood Blvd."],
    "lat": [34.1013404],
    "lng": [-118.3319275]
}, {
    "fullName": "Kelsey Grammer",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Farley Granger",
    "category": ["Television"],
    "address": ["1551 Vine Street"],
    "lat": [34.0990667],
    "lng": [-118.3266844]
}, {
    "fullName": "Amy Grant",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd. "],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Cary Grant",
    "category": ["Motion pictures"],
    "address": ["1610 Vine Street"],
    "lat": [34.099994],
    "lng": [-118.3266481]
}, {
    "fullName": "Johnny Grant (radio personality)",
    "category": ["Television"],
    "address": ["6915 Hollywood Blvd. "],
    "lat": [34.0522342],
    "lng": [-118.2436849]
}, {
    "fullName": "Bonita Granville",
    "category": ["Motion pictures"],
    "address": ["6607 Hollywood Blvd."],
    "lat": [34.1018357],
    "lng": [-118.3336334]
}, {
    "fullName": "Sid Grauman",
    "category": ["Motion pictures"],
    "address": ["6379 Hollywood Blvd."],
    "lat": [34.1017035],
    "lng": [-118.329069]
}, {
    "fullName": "Peter Graves",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Gilda Gray",
    "category": ["Motion pictures"],
    "address": ["6620 Hollywood Blvd."],
    "lat": [34.1012572],
    "lng": [-118.3339676]
}, {
    "fullName": "Glen Gray",
    "category": ["Recording"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Jim Gray (sportscaster)",
    "category": ["Radio"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Kathryn Grayson",
    "category": ["Motion pictures"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Brian Grazer",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd"],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Alfred E. Green",
    "category": ["Motion pictures"],
    "address": ["6529 Hollywood Blvd."],
    "lat": [34.1017869],
    "lng": [-118.331964]
}, {
    "fullName": "Jack N. Green",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Mitzi Green",
    "category": ["Motion pictures"],
    "address": ["6430 Hollywood Blvd."],
    "lat": [34.1013184],
    "lng": [-118.3306102]
}, {
    "fullName": "Harold Greene",
    "category": ["Television"],
    "address": ["6906 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.340605]
}, {
    "fullName": "Lorne Greene",
    "category": ["Television"],
    "address": ["1559 N. Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Charlotte Greenwood",
    "category": ["Radio"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Jane Greer",
    "category": ["Motion pictures"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "Dick Gregory",
    "category": ["Live performance"],
    "address": ["1650 Vine Street"],
    "lat": [34.1012293],
    "lng": [-118.3265118]
}, {
    "fullName": "Joel Grey",
    "category": ["Live performance"],
    "address": ["6753 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.337631]
}, {
    "fullName": "Merv Griffin",
    "category": ["Television"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Andy Griffith",
    "category": ["Television"],
    "address": ["6418 Hollywood Blvd."],
    "lat": [34.101282],
    "lng": [-118.330423]
}, {
    "fullName": "Corinne Griffith",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "D. W. Griffith",
    "category": ["Motion pictures"],
    "address": ["6535 Hollywood Blvd."],
    "lat": [34.1016088],
    "lng": [-118.3323438]
}, {
    "fullName": "Raymond Griffith",
    "category": ["Motion pictures"],
    "address": ["6124 Hollywood Blvd."],
    "lat": [34.1013762],
    "lng": [-118.3231489]
}, {
    "fullName": "Matt Groening",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Robert Guillaume",
    "category": ["Television"],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Texas Guinan",
    "category": ["Motion pictures"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Alec Guinness",
    "category": ["Motion pictures"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Steve Guttenberg",
    "category": ["Motion pictures"],
    "address": ["6411 Hollywood Blvd."],
    "lat": [34.1018841],
    "lng": [-118.3299932]
}, {
    "fullName": "Buddy Hackett",
    "category": ["Live performance"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Reed Hadley",
    "category": ["Television"],
    "address": ["6553 Hollywood Blvd."],
    "lat": [34.101857],
    "lng": [-118.332934]
}, {
    "fullName": "Jean Hagen",
    "category": ["Television"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Don Haggerty",
    "category": ["Television"],
    "address": ["6140 Hollywood Blvd."],
    "lat": [34.101271],
    "lng": [-118.3235858]
}, {
    "fullName": "Larry Hagman",
    "category": ["Television"],
    "address": ["1560 N. Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "William Haines",
    "category": ["Motion pictures"],
    "address": ["7012 Hollywood Blvd."],
    "lat": [34.1015302],
    "lng": [-118.3419191]
}, {
    "fullName": "Jester Hairston",
    "category": ["Television"],
    "address": ["6161 Hollywood Blvd."],
    "lat": [34.1016562],
    "lng": [-118.3240037]
}, {
    "fullName": "Alan Hale, Sr.",
    "category": ["Motion pictures"],
    "address": ["6532 Hollywood Blvd."],
    "lat": [34.1016097],
    "lng": [-118.3322764]
}, {
    "fullName": "Alan Hale, Jr.",
    "category": ["Television"],
    "address": ["6653 Hollywood Blvd."],
    "lat": [34.1015933],
    "lng": [-118.3350377]
}, {
    "fullName": "Barbara Hale",
    "category": ["Television"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Creighton Hale",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Monte Hale",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Bill Haley",
    "category": ["Recording"],
    "address": ["6350 Hollywood Blvd."],
    "lat": [34.101281],
    "lng": [-118.3283553]
}, {
    "fullName": "Jack Haley",
    "category": ["Radio"],
    "address": ["6435 Hollywood Blvd."],
    "lat": [34.1017716],
    "lng": [-118.3307458]
}, {
    "fullName": "Arsenio Hall",
    "category": ["Television"],
    "address": ["6776 Hollywood Blvd."],
    "lat": [34.1013275],
    "lng": [-118.3382261]
}, {
    "fullName": "Conrad Hall",
    "category": ["Motion pictures"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Jon Hall (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["1724 Vine Street", "6933 Hollywood Blvd."],
    "lat": [34.1028702, 34.1018332],
    "lng": [-118.3266716, -118.3415313]
}, {
    "fullName": "Monty Hall",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Stuart Hamblen",
    "category": ["Radio"],
    "address": ["6419 Hollywood Blvd."],
    "lat": [34.1016203],
    "lng": [-118.3302051]
}, {
    "fullName": "Rusty Hamer",
    "category": ["Television"],
    "address": ["6323 Hollywood Blvd."],
    "lat": [34.1019548],
    "lng": [-118.3275291]
}, {
    "fullName": "George Hamilton (actor)",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Lloyd Hamilton",
    "category": ["Motion pictures"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Neil Hamilton (actor)",
    "category": ["Motion pictures"],
    "address": ["6634 Hollywood Blvd."],
    "lat": [34.1015649],
    "lng": [-118.3344932]
}, {
    "fullName": "Lionel Hampton",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Herbie Hancock",
    "category": ["Recording"],
    "address": ["7057 Hollywood Blvd."],
    "lat": [34.1015607],
    "lng": [-118.3435449]
}, {
    "fullName": "Bill Handel",
    "category": ["Radio"],
    "address": ["6640 Hollywood Blvd."],
    "lat": [34.10138],
    "lng": [-118.3347076]
}, {
    "fullName": "Tom Hanks",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Hanna-Barbera",
    "category": ["Television"],
    "address": ["6753 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.337631]
}, {
    "fullName": "Ann Harding",
    "category": ["Motion pictures", "Television"],
    "address": ["6201 Hollywood Blvd.", "6850 Hollywood Blvd."],
    "lat": [34.1020578, 34.1015284],
    "lng": [-118.3247812, -118.339437]
}, {
    "fullName": "Cedric Hardwicke",
    "category": ["Motion pictures", "Television"],
    "address": ["6201 Hollywood Blvd.", "6660 Hollywood Blvd."],
    "lat": [34.1020578, 34.1014235],
    "lng": [-118.3247812, -118.3354943]
}, {
    "fullName": "Oliver Hardy",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Mariska Hargitay",
    "category": ["Television"],
    "address": ["6328 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.327674]
}, {
    "fullName": "Jean Harlow",
    "category": ["Motion pictures"],
    "address": ["6910 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3404387]
}, {
    "fullName": "Mark Harmon",
    "category": ["Television"],
    "address": ["6253 Hollywood Blvd."],
    "lat": [34.1018089],
    "lng": [-118.3263653]
}, {
    "fullName": "Arlene Harris",
    "category": ["Radio"],
    "address": ["6250 Hollywood Blvd."],
    "lat": [34.1009778],
    "lng": [-118.3259236]
}, {
    "fullName": "Ed Harris",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Jack H. Harris",
    "category": ["Motion pictures"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [34.1012256],
    "lng": [-118.3380301]
}, {
    "fullName": "Mildred Harris",
    "category": ["Motion pictures"],
    "address": ["6307 Hollywood Blvd."],
    "lat": [34.1016487],
    "lng": [-118.3268912]
}, {
    "fullName": "Neil Patrick Harris",
    "category": ["Television"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Phil Harris",
    "category": ["Radio", "Recording"],
    "address": ["6651 Hollywood Blvd.", "6508 Hollywood Blvd"],
    "lat": [34.1015937, 34.1013411],
    "lng": [-118.3349696, -118.3314501]
}, {
    "fullName": "George Harrison",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Rex Harrison",
    "category": ["Motion pictures", "Television"],
    "address": ["6904 Hollywood Blvd.", "6390 Hollywood Blvd."],
    "lat": [34.1013394, 34.1015942],
    "lng": [-118.3404753, -118.329419]
}, {
    "fullName": "Ray Harryhausen",
    "category": ["Motion pictures"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "John Hart (actor)",
    "category": ["Television"],
    "address": ["6432 Hollywood Blvd."],
    "lat": [34.1015888],
    "lng": [-118.3302637]
}, {
    "fullName": "Mary Hart",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "William S. Hart",
    "category": ["Motion pictures"],
    "address": ["6363 Hollywood Blvd."],
    "lat": [34.1018942],
    "lng": [-118.328893]
}, {
    "fullName": "Mariette Hartley",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Phil Hartman",
    "category": ["Television"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Steve Harvey",
    "category": ["Radio"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "David Hasselhoff",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Signe Hasso",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Henry Hathaway",
    "category": ["Motion pictures"],
    "address": ["1638 Vine Street"],
    "lat": [34.1003738],
    "lng": [-118.3265579]
}, {
    "fullName": "Raymond Hatton",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "June Haver",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "June Havoc",
    "category": ["Motion pictures", "Television"],
    "address": ["6618 Hollywood Blvd.", "6413 Hollywood Blvd."],
    "lat": [34.1013454, 34.101874],
    "lng": [-118.333863, -118.330185]
}, {
    "fullName": "Bob Hawk",
    "category": ["Television"],
    "address": ["6413 Hollywood Blvd."],
    "lat": [34.101874],
    "lng": [-118.330185]
}, {
    "fullName": "Howard Hawks",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Bill Hay (radio announcer)",
    "category": ["Radio"],
    "address": ["6826 Hollywood Blvd."],
    "lat": [34.1015289],
    "lng": [-118.3390841]
}, {
    "fullName": "Sessue Hayakawa",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "George \"Gabby\" Hayes",
    "category": ["Radio", "Television"],
    "address": ["6427 Hollywood Blvd.", "1724 Vine Street"],
    "lat": [34.1017716, 34.1028702],
    "lng": [-118.3304653, -118.3266716]
}, {
    "fullName": "Helen Hayes",
    "category": ["Motion pictures", "Radio"],
    "address": ["6258 Hollywood Blvd.", "6549 Hollywood Blvd."],
    "lat": [34.1016254, 34.101912],
    "lng": [-118.3255205, -118.332789]
}, {
    "fullName": "John Hayes (radio)",
    "category": ["Radio"],
    "address": ["6769 Hollywood Blvd."],
    "lat": [34.1017798],
    "lng": [-118.3381036]
}, {
    "fullName": "Richard Hayman",
    "category": ["Recording"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Dick Haymes",
    "category": ["Recording"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Dick Haynes",
    "category": ["Radio"],
    "address": ["6841 Hollywood Blvd."],
    "lat": [34.1015597],
    "lng": [-118.33929]
}, {
    "fullName": "Will H. Hays",
    "category": ["Motion pictures"],
    "address": ["6116 Hollywood Blvd."],
    "lat": [34.101633],
    "lng": [-118.3230552]
}, {
    "fullName": "Louis Hayward",
    "category": ["Motion pictures", "Television"],
    "address": ["1500 Vine Street", "1680 Vine Street"],
    "lat": [34.098332, 34.101281],
    "lng": [-118.3262557, -118.326315]
}, {
    "fullName": "Susan Hayward",
    "category": ["Motion pictures"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Rita Hayworth",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Edith Head",
    "category": ["Motion pictures"],
    "address": ["6504 Hollywood Blvd."],
    "lat": [34.1013378],
    "lng": [-118.3312744]
}, {
    "fullName": "Jim Healy",
    "category": ["Radio"],
    "address": ["6740 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.337505]
}, {
    "fullName": "Chick Hearn",
    "category": ["Radio"],
    "address": ["6755 Hollywood Blvd."],
    "lat": [34.1019203],
    "lng": [-118.3376733]
}, {
    "fullName": "Heart (band)",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Patricia Heaton",
    "category": ["Television"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "Eileen Heckart",
    "category": ["Motion pictures"],
    "address": ["6140 Hollywood Blvd."],
    "lat": [34.101271],
    "lng": [-118.3235858]
}, {
    "fullName": "Tippi Hedren",
    "category": ["Motion pictures"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Van Heflin",
    "category": ["Motion pictures", "Television"],
    "address": ["6311 Hollywood Blvd.", "6125 Hollywood Blvd."],
    "lat": [34.1016471, 34.1020151],
    "lng": [-118.3270259, -118.3232406]
}, {
    "fullName": "Hugh Hefner",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Horace Heidt",
    "category": ["Radio", "Television"],
    "address": ["1631 Vine Street", "6628 Hollywood Blvd."],
    "lat": [34.1006154, 34.101411],
    "lng": [-118.3266858, -118.3342929]
}, {
    "fullName": "Jascha Heifetz",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6777 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1018431, 34.0522342],
    "lng": [-118.3384573, -118.2436849]
}, {
    "fullName": "Marg Helgenberger",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Florence Henderson",
    "category": ["Television"],
    "address": ["7070 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3440192]
}, {
    "fullName": "Jimi Hendrix",
    "category": ["Recording"],
    "address": ["6627 Hollywood Blvd."],
    "lat": [34.101875],
    "lng": [-118.334498]
}, {
    "fullName": "Sonja Henie",
    "category": ["Motion pictures"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Paul Henreid",
    "category": ["Motion pictures", "Television"],
    "address": ["6366 Hollywood Blvd.", "1720 Vine Street"],
    "lat": [34.1013313, 34.1026219],
    "lng": [-118.3287303, -118.326225]
}, {
    "fullName": "Jim Henson",
    "category": ["Television"],
    "address": ["6631 Hollywood Blvd."],
    "lat": [34.1015861],
    "lng": [-118.3345231]
}, {
    "fullName": "Audrey Hepburn",
    "category": ["Motion pictures"],
    "address": ["1652 Vine Street"],
    "lat": [34.1006322],
    "lng": [-118.3266483]
}, {
    "fullName": "Katharine Hepburn",
    "category": ["Motion pictures"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Hugh Herbert",
    "category": ["Motion pictures"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Jerry Herman",
    "category": ["Live performance"],
    "address": ["7095 Hollywood Blvd."],
    "lat": [34.1019346],
    "lng": [-118.3449957]
}, {
    "fullName": "Paul Reubens",
    "category": ["Motion pictures"],
    "address": ["6562 Hollywood Blvd."],
    "lat": [34.1013672],
    "lng": [-118.333159]
}, {
    "fullName": "Woody Herman",
    "category": ["Recording"],
    "address": ["6805 Hollywood Blvd."],
    "lat": [34.1015621],
    "lng": [-118.3387906]
}, {
    "fullName": "Jean Hersholt",
    "category": ["Motion pictures", "Radio"],
    "address": ["6501 Hollywood Blvd.", "6701 Hollywood Blvd."],
    "lat": [34.101895, 34.101925],
    "lng": [-118.331205, -118.3362594]
}, {
    "fullName": "Irene Hervey",
    "category": ["Motion pictures"],
    "address": ["6336 Hollywood Blvd."],
    "lat": [34.1013306],
    "lng": [-118.3278499]
}, {
    "fullName": "Charlton Heston",
    "category": ["Motion pictures"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Eddie Heywood",
    "category": ["Recording"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Al Hibbler",
    "category": ["Recording"],
    "address": ["1650 Vine Street"],
    "lat": [34.1012293],
    "lng": [-118.3265118]
}, {
    "fullName": "George Hicks (broadcast journalist)",
    "category": ["Radio"],
    "address": ["6314 Hollywood Blvd."],
    "lat": [34.1016142],
    "lng": [-118.3271753]
}, {
    "fullName": "Hildegarde",
    "category": ["Radio"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Jim Hill (American football)",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Cheryl Hines",
    "category": ["Television"],
    "address": ["6621 Hollywood Blvd."],
    "lat": [34.1018759],
    "lng": [-118.3341576]
}, {
    "fullName": "Alfred Hitchcock",
    "category": ["Motion pictures", "Television"],
    "address": ["6506 Hollywood Blvd.", "7013 Hollywood Blvd."],
    "lat": [34.1012354, 34.1020027],
    "lng": [-118.3314769, -118.3420625]
}, {
    "fullName": "John Hodiak",
    "category": ["Radio"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Portland Hoffa",
    "category": ["Radio"],
    "address": ["1640 Vine Street"],
    "lat": [34.1004125],
    "lng": [-118.3266479]
}, {
    "fullName": "William Holden",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Billie Holiday",
    "category": ["Recording"],
    "address": ["1540 N. Vine Street"],
    "lat": [34.099364],
    "lng": [-118.325895]
}, {
    "fullName": "Holland–Dozier–Holland",
    "category": ["Recording"],
    "address": ["7070 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3440192]
}, {
    "fullName": "Judy Holliday",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Earl Holliman",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Gordon Hollingshead",
    "category": ["Motion pictures"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "Buddy Holly",
    "category": ["Recording"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Celeste Holm",
    "category": ["Motion pictures", "Television"],
    "address": ["1500 Vine Street", "6821 Hollywood Blvd."],
    "lat": [34.098332, 34.1015594],
    "lng": [-118.3262557, -118.3392858]
}, {
    "fullName": "Burton Holmes",
    "category": ["Motion pictures"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Phillips Holmes",
    "category": ["Motion pictures"],
    "address": ["6908 Hollywood Blvd."],
    "lat": [34.1012376],
    "lng": [-118.3405676]
}, {
    "fullName": "Taylor Holmes",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Jack Holt (actor)",
    "category": ["Motion pictures"],
    "address": ["6313½ Hollywood Blvd."],
    "lat": [34.0961205],
    "lng": [-118.2903527]
}, {
    "fullName": "John Lee Hooker",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd"],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Bob Hope",
    "category": ["Motion pictures", "Radio", "Live performance", "Television"],
    "address": ["6541 Hollywood Blvd.", "6141 Hollywood Blvd.", "7021 Hollywood Blvd.", "6758 Hollywood Blvd."],
    "lat": [34.1019042, 34.1016545, 34.0522342, 34.1014058],
    "lng": [-118.3326262, -118.3237571, -118.2436849, -118.337825]
}, {
    "fullName": "Dolores Hope ",
    "category": ["Live performance "],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Anthony Hopkins ",
    "category": ["Motion pictures "],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Linda Hopkins ",
    "category": ["Recording "],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Miriam Hopkins ",
    "category": ["Motion pictures ", "Television "],
    "address": ["1709 Vine Street ", "1716 Vine Street "],
    "lat": [34.1019261, 34.1021774],
    "lng": [-118.3267039, -118.3266752]
}, {
    "fullName": "Dennis Hopper ",
    "category": ["Motion pictures "],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Hedda Hopper ",
    "category": ["Motion pictures "],
    "address": ["6313 Hollywood Blvd."],
    "lat": [34.1016463],
    "lng": [-118.3270932]
}, {
    "fullName": "Lena Horne ",
    "category": ["Motion pictures ", "Recording "],
    "address": ["6282 Hollywood Blvd.", "6250 Hollywood Blvd."],
    "lat": [34.1014522, 34.1009778],
    "lng": [-118.3262591, -118.3259236]
}, {
    "fullName": "Vladimir Horowitz ",
    "category": ["Recording "],
    "address": ["1680 Vine Street "],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Edward Everett Horton ",
    "category": ["Motion pictures "],
    "address": ["6427 Hollywood Blvd "],
    "lat": [34.1017716],
    "lng": [-118.3304653]
}, {
    "fullName": "Harry Houdini ",
    "category": ["Motion pictures "],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "Eddy Howard ",
    "category": ["Recording "],
    "address": ["6724 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.33726]
}, {
    "fullName": "John Howard(American actor)",
    "category": ["Television "],
    "address": ["6515 Hollywood Blvd."],
    "lat": [34.1018352],
    "lng": [-118.3315723]
}, {
    "fullName": "Leslie Howard(actor)",
    "category": ["Motion pictures "],
    "address": ["6550 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.3327763]
}, {
    "fullName": "Ron Howard ",
    "category": ["Television ", "Motion pictures "],
    "address": ["6838 Hollywood Blvd.", "6931 Hollywood Blvd."],
    "lat": [34.10111, 34.1019335],
    "lng": [-118.339822, -118.3413562]
}, {
    "fullName": "William K.Howard ",
    "category": ["Motion pictures "],
    "address": ["1500 Vine Street "],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Jennifer Hudson ",
    "category": ["Recording "],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Rochelle Hudson ",
    "category": ["Motion pictures "],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "Rock Hudson ",
    "category": ["Motion pictures "],
    "address": ["6116 Hollywood Blvd."],
    "lat": [34.101633],
    "lng": [-118.3230552]
}, {
    "fullName": "Felicity Huffman ",
    "category": ["Television "],
    "address": ["7072 Hollywood Blvd."],
    "lat": [34.1015291],
    "lng": [-118.3440879]
}, {
    "fullName": "Josephine Hull ",
    "category": ["Motion pictures "],
    "address": ["6502 Hollywood Blvd."],
    "lat": [34.1015875],
    "lng": [-118.3311939]
}, {
    "fullName": "Warren Hull ",
    "category": ["Radio ", "Television "],
    "address": ["6270 Hollywood Blvd.", "6135 Hollywood Blvd."],
    "lat": [34.1016227, 34.10165690000001],
    "lng": [-118.3258727, -118.3235497]
}, {
    "fullName": "H.Bruce Humberstone ",
    "category": ["Motion pictures "],
    "address": ["1752 Vine Street "],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Engelbert Humperdinck(singer)",
    "category": ["Recording "],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Frazier Hunt ",
    "category": ["Radio "],
    "address": ["1708 Vine Street "],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Marsha Hunt(actress)",
    "category": ["Television "],
    "address": ["6658 Hollywood Blvd."],
    "lat": [34.101263],
    "lng": [-118.335453]
}, {
    "fullName": "Pee Wee Hunt ",
    "category": ["Recording "],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Holly Hunter ",
    "category": ["Motion pictures "],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Jeffrey Hunter ",
    "category": ["Television "],
    "address": ["6918 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.3404758]
}, {
    "fullName": "Kim Hunter ",
    "category": ["Motion pictures ", "Television "],
    "address": ["1617 Vine Street ", "1715 Vine Street "],
    "lat": [34.1001043, 34.10212],
    "lng": [-118.326685, -118.3267111]
}, {
    "fullName": "Tab Hunter ",
    "category": ["Recording "],
    "address": ["6320 Hollywood Blvd."],
    "lat": [34.1012895],
    "lng": [-118.3274289]
}, {
    "fullName": "Gale Anne Hurd ",
    "category": ["Motion pictures "],
    "address": ["6621 Hollywood Blvd."],
    "lat": [34.1018759],
    "lng": [-118.3341576]
}, {
    "fullName": "Marlin Hurt ",
    "category": ["Radio "],
    "address": ["6514 Hollywood Blvd."],
    "lat": [34.1015826],
    "lng": [-118.3316414]
}, {
    "fullName": "Ted Husing ",
    "category": ["Radio "],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Ferlin Husky ",
    "category": ["Recording "],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Ruth Hussey ",
    "category": ["Motion pictures "],
    "address": ["1551 Vine Street "],
    "lat": [34.0990667],
    "lng": [-118.3266844]
}, {
    "fullName": "Anjelica Huston ",
    "category": ["Motion pictures "],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "John Huston ",
    "category": ["Motion pictures "],
    "address": ["1765 Vine Street "],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Walter Huston ",
    "category": ["Motion pictures "],
    "address": ["6624 Hollywood Blvd."],
    "lat": [34.101492],
    "lng": [-118.3340618]
}, {
    "fullName": "Julio Iglesias ",
    "category": ["Recording "],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Thomas H.Ince ",
    "category": ["Motion pictures "],
    "address": ["6727 Hollywood Blvd."],
    "lat": [34.101886],
    "lng": [-118.336913]
}, {
    "fullName": "Pedro Infante ",
    "category": ["Recording "],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Rex Ingram(director)",
    "category": ["Motion pictures "],
    "address": ["1651 Hollywood Blvd."],
    "lat": [34.0961205],
    "lng": [-118.2903527]
}, {
    "fullName": "Jill Ireland ",
    "category": ["Motion pictures "],
    "address": ["6751 Hollywood Blvd."],
    "lat": [34.1017702],
    "lng": [-118.3376512]
}, {
    "fullName": "John Ireland(actor)",
    "category": ["Television "],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "L.L.Cool J ",
    "category": ["Recording "],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Hugh Jackman ",
    "category": ["Motion pictures "],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Alan Jackson ",
    "category": ["Recording "],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Janet Jackson ",
    "category": ["Recording "],
    "address": ["1500 Vine Street "],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Mahalia Jackson ",
    "category": ["Recording "],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Michael Jackson(radio commentator)",
    "category": ["Radio "],
    "address": ["1541 Vine Street "],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Michael Jackson ",
    "category": ["Recording "],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Peter Jackson ",
    "category": ["Motion pictures "],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Samuel L.Jackson ",
    "category": ["Motion pictures "],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Sherry Jackson ",
    "category": ["Television "],
    "address": ["6324 Hollywood Blvd."],
    "lat": [34.101273],
    "lng": [-118.32763]
}, {
    "fullName": "The Jackson 5 ",
    "category": ["Recording "],
    "address": ["1500 Vine Street "],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Dennis James ",
    "category": ["Television "],
    "address": ["6753 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.337631]
}, {
    "fullName": "Etta James ",
    "category": ["Recording "],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Harry James ",
    "category": ["Recording "],
    "address": ["6683 Hollywood Blvd."],
    "lat": [34.1016616],
    "lng": [-118.3359324]
}, {
    "fullName": "Joni James ",
    "category": ["Recording "],
    "address": ["6814 Hollywood Blvd."],
    "lat": [34.1014542],
    "lng": [-118.3392574]
}, {
    "fullName": "Sonny James ",
    "category": ["Recording "],
    "address": ["6630 Hollywood Blvd."],
    "lat": [34.1013917],
    "lng": [-118.3344238]
}, {
    "fullName": "Jane 's Addiction",
    "category": ["Recording"],
    "address": ["6436 Hollywood Blvd."],
    "lat": [34.101279],
    "lng": [-118.330853]
}, {
    "fullName": "Elsie Janis",
    "category": ["Motion pictures"],
    "address": ["6770 Hollywood Blvd."],
    "lat": [34.1015316],
    "lng": [-118.3379179]
}, {
    "fullName": "Emil Jannings",
    "category": ["Motion pictures"],
    "address": ["1630 Vine Street"],
    "lat": [34.1002573],
    "lng": [-118.3266477]
}, {
    "fullName": "David Janssen",
    "category": ["Television"],
    "address": ["7011 Hollywood Blvd."],
    "lat": [34.101561],
    "lng": [-118.3420841]
}, {
    "fullName": "Maurice Jarre",
    "category": ["Motion pictures"],
    "address": ["6505 Hollywood Blvd."],
    "lat": [34.1018647],
    "lng": [-118.3312654]
}, {
    "fullName": "Al Jarreau",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Jaime Jarrín",
    "category": ["Radio"],
    "address": ["6381 Hollywood Blvd."],
    "lat": [34.1018927],
    "lng": [-118.3292542]
}, {
    "fullName": "Anne Jeffreys",
    "category": ["Television"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Herb Jeffries",
    "category": ["Motion pictures"],
    "address": ["6672 Hollywood Blvd."],
    "lat": [34.1012595],
    "lng": [-118.3358911]
}, {
    "fullName": "Gordon Jenkins",
    "category": ["Recording"],
    "address": ["6626 Hollywood Blvd."],
    "lat": [34.1012877],
    "lng": [-118.3341183]
}, {
    "fullName": "Adele Jergens",
    "category": ["Television"],
    "address": ["7046 Hollywood Blvd."],
    "lat": [34.10124800000001],
    "lng": [-118.343129]
}, {
    "fullName": "George Jessel (actor)",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Isabel Jewell",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Norman Jewison",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Billy Joel",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style= \"font-size: 100%;\""],
    "address": ["6233 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.102001, 34.0522342],
    "lng": [-118.325867, -118.2436849]
}, {
    "fullName": "Scarlett Johansson",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Elton John",
    "category": ["Recording"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Ben Johnson (actor)",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Don Johnson",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Magic Johnson",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Nunnally Johnson",
    "category": ["Motion pictures"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "Van Johnson",
    "category": ["Motion pictures"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Al Jolson",
    "category": ["Motion pictures", "Radio", "Recording"],
    "address": ["6622 Hollywood Blvd.", "6750 Hollywood Blvd.", "1716 Vine Street"],
    "lat": [34.1012646, 34.1015234, 34.1021774],
    "lng": [-118.3340304, -118.3372778, -118.3266752]
}, {
    "fullName": "Allan Jones (actor)",
    "category": ["Recording"],
    "address": ["6100 Hollywood Blvd."],
    "lat": [34.1016341],
    "lng": [-118.3223743]
}, {
    "fullName": "Buck Jones",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Chuck Jones",
    "category": ["Motion pictures"],
    "address": ["7011 Hollywood Blvd."],
    "lat": [34.101561],
    "lng": [-118.3420841]
}, {
    "fullName": "Dick Jones (actor)",
    "category": ["Television"],
    "address": ["7042 Hollywood Blvd."],
    "lat": [34.101529],
    "lng": [-118.343012]
}, {
    "fullName": "Gordon Jones (actor)",
    "category": ["Television"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Jack Jones (singer)",
    "category": ["Recording"],
    "address": ["6104 Hollywood Blvd."],
    "lat": [34.101245],
    "lng": [-118.322947]
}, {
    "fullName": "Jennifer Jones",
    "category": ["Motion pictures"],
    "address": ["6429 Hollywood Blvd."],
    "lat": [34.1017764],
    "lng": [-118.3305255]
}, {
    "fullName": "Quincy Jones",
    "category": ["Recording"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Shirley Jones",
    "category": ["Motion pictures"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Spike Jones",
    "category": ["Radio", "Recording"],
    "address": ["6290 Hollywood Blvd.", "1500 Vine Street"],
    "lat": [34.1014448, 34.098332],
    "lng": [-118.326396, -118.3262557]
}, {
    "fullName": "Tom Jones (singer)",
    "category": ["Recording"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "Tommy Lee Jones",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Janis Joplin",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Victor Jory",
    "category": ["Motion pictures"],
    "address": ["6605 Hollywood Blvd."],
    "lat": [34.1017562],
    "lng": [-118.3335848]
}, {
    "fullName": "José José",
    "category": ["Recording"],
    "address": ["7036 Hollywood Blvd."],
    "lat": [34.101295],
    "lng": [-118.342883]
}, {
    "fullName": "Louis Jourdan",
    "category": ["Recording", "Television"],
    "address": ["6153 Hollywood Blvd.", "6445 Hollywood Blvd."],
    "lat": [34.1016554, 34.1016197],
    "lng": [-118.3239034, -118.3303009]
}, {
    "fullName": "Journey (band)",
    "category": ["Recording"],
    "address": ["6750 Hollywood Blvd."],
    "lat": [34.1015234],
    "lng": [-118.3372778]
}, {
    "fullName": "Leatrice Joy",
    "category": ["Motion pictures"],
    "address": ["6517 Hollywood Blvd."],
    "lat": [34.1018619],
    "lng": [-118.3316422]
}, {
    "fullName": "On Air with Ryan Seacrest",
    "category": ["Radio"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Kitty Kallen",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Herbert Kalmus",
    "category": ["Motion pictures"],
    "address": ["6157 Hollywood Blvd."],
    "lat": [34.1016558],
    "lng": [-118.3239536]
}, {
    "fullName": "Bob Kane",
    "category": ["Motion pictures"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [34.1012256],
    "lng": [-118.3380301]
}, {
    "fullName": "Boris Karloff",
    "category": ["Motion pictures", "Television"],
    "address": ["1737 Vine Street", "6664 Hollywood Blvd."],
    "lat": [34.1027365, 34.1012733],
    "lng": [-118.3267098, -118.3356135]
}, {
    "fullName": "Casey Kasem",
    "category": ["Radio"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Danny Kaye",
    "category": ["Motion pictures", "Recording", "Radio"],
    "address": ["6563 Hollywood Blvd.", "6125 Hollywood Blvd.", "6101 Hollywood Blvd."],
    "lat": [34.1016034, 34.1020151, 34.1016811],
    "lng": [-118.3331745, -118.3232406, -118.322376]
}, {
    "fullName": "Sammy Kaye",
    "category": ["Recording", "Television", "Radio"],
    "address": ["6767 Hollywood Blvd.", "6419 Hollywood Blvd.", "6821 Hollywood Blvd."],
    "lat": [34.1017297, 34.1016203, 34.1015594],
    "lng": [-118.338087, -118.3302051, -118.3392858]
}, {
    "fullName": "Elia Kazan",
    "category": ["Motion pictures"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Buster Keaton",
    "category": ["Motion pictures", "Television"],
    "address": ["6619 Hollywood Blvd.", "6321 Hollywood Blvd."],
    "lat": [34.10187, 34.1020118],
    "lng": [-118.334127, -118.3274662]
}, {
    "fullName": "Howard Keel",
    "category": ["Motion pictures"],
    "address": ["6253 Hollywood Blvd."],
    "lat": [34.1018089],
    "lng": [-118.3263653]
}, {
    "fullName": "Ruby Keeler",
    "category": ["Motion pictures"],
    "address": ["6730 Hollywood Blvd."],
    "lat": [34.1015451],
    "lng": [-118.3370956]
}, {
    "fullName": "Bill Keene",
    "category": ["Radio"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Bob Keeshan",
    "category": ["Television"],
    "address": ["Sunset & Vine"],
    "lat": [46.5142503],
    "lng": [-86.0847446]
}, {
    "fullName": "Brian Keith",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Annette Kellerman",
    "category": ["Motion pictures"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "DeForest Kelley",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Gene Kelly",
    "category": ["Motion pictures"],
    "address": ["6153 Hollywood Blvd."],
    "lat": [34.1016554],
    "lng": [-118.3239034]
}, {
    "fullName": "Grace Kelly",
    "category": ["Motion pictures"],
    "address": ["6329 Hollywood Blvd."],
    "lat": [34.1017144],
    "lng": [-118.3278873]
}, {
    "fullName": "Nancy Kelly",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Patsy Kelly",
    "category": ["Motion pictures"],
    "address": ["6669 Hollywood Blvd."],
    "lat": [34.10193599999999],
    "lng": [-118.335593]
}, {
    "fullName": "KFMB-FM",
    "category": ["Radio"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Arthur Kennedy (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["6681 Hollywood Blvd.", "1620 Vine Street"],
    "lat": [34.101849, 34.1001604],
    "lng": [-118.33589, -118.3266475]
}, {
    "fullName": "Edgar Kennedy",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "George Kennedy",
    "category": ["Motion pictures"],
    "address": ["6356 Hollywood Blvd."],
    "lat": [34.101267],
    "lng": [-118.328501]
}, {
    "fullName": "John B. Kennedy",
    "category": ["Radio"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Madge Kennedy",
    "category": ["Motion pictures"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Stan Kenton",
    "category": ["Recording"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Kermit the Frog",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Deborah Kerr",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "J. M. Kerrigan",
    "category": ["Motion pictures"],
    "address": ["6621 Hollywood Blvd."],
    "lat": [34.1018759],
    "lng": [-118.3341576]
}, {
    "fullName": "Norman Kerry",
    "category": ["Motion pictures"],
    "address": ["6724 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.33726]
}, {
    "fullName": "Chaka Khan",
    "category": ["Recording"],
    "address": ["6623 Hollywood Blvd."],
    "lat": [34.101869],
    "lng": [-118.334269]
}, {
    "fullName": "Nicole Kidman",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6801 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1026077, 34.0522342],
    "lng": [-118.3399805, -118.2436849]
}, {
    "fullName": "Dorothy Kilgallen",
    "category": ["Television"],
    "address": ["6780 Hollywood Blvd."],
    "lat": [34.1013355],
    "lng": [-118.3384643]
}, {
    "fullName": "Clara Kimball Young",
    "category": ["Motion pictures"],
    "address": ["6513 Hollywood Blvd."],
    "lat": [34.1019476],
    "lng": [-118.3313953]
}, {
    "fullName": "Jimmy Kimmel",
    "category": ["Television"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Andrea King",
    "category": ["Television"],
    "address": ["1547 Vine Street"],
    "lat": [34.098991],
    "lng": [-118.3266842]
}, {
    "fullName": "B.B. King",
    "category": ["Recording"],
    "address": ["6771 Hollywood Blvd."],
    "lat": [34.1017356],
    "lng": [-118.3382113]
}, {
    "fullName": "Carole King",
    "category": ["Recording"],
    "address": ["6906 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.340605]
}, {
    "fullName": "John Reed King",
    "category": ["Radio"],
    "address": ["6402 Hollywood Blvd."],
    "lat": [34.1013677],
    "lng": [-118.3299165]
}, {
    "fullName": "Henry King (director)",
    "category": ["Motion pictures"],
    "address": ["6327 Hollywood Blvd."],
    "lat": [34.1019719],
    "lng": [-118.3277089]
}, {
    "fullName": "Larry King",
    "category": ["Television"],
    "address": ["6616 Hollywood Blvd."],
    "lat": [34.1012736],
    "lng": [-118.3338535]
}, {
    "fullName": "Pee Wee King",
    "category": ["Recording"],
    "address": ["1715 Vine Street"],
    "lat": [34.10212],
    "lng": [-118.3267111]
}, {
    "fullName": "Peggy King",
    "category": ["Television"],
    "address": ["6563 Hollywood Blvd."],
    "lat": [34.1016034],
    "lng": [-118.3331745]
}, {
    "fullName": "Wayne King",
    "category": ["Radio"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Ben Kingsley",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Joe Kirkwood, Jr.",
    "category": ["Television"],
    "address": ["1632 Vine Street"],
    "lat": [34.1002767],
    "lng": [-118.3266477]
}, {
    "fullName": "Dorothy Kirsten",
    "category": ["Recording"],
    "address": ["6331 Hollywood Blvd."],
    "lat": [34.1019551],
    "lng": [-118.3280106]
}, {
    "fullName": "Kiss (band)",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Eartha Kitt",
    "category": ["Recording"],
    "address": ["6656 Hollywood Blvd."],
    "lat": [34.10133709999999],
    "lng": [-118.3353984]
}, {
    "fullName": "Kevin Kline",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Jack Klugman",
    "category": ["Television"],
    "address": ["6555 Hollywood Blvd."],
    "lat": [34.101855],
    "lng": [-118.3329708]
}, {
    "fullName": "Evelyn Knight",
    "category": ["Recording"],
    "address": ["6136 Hollywood Blvd."],
    "lat": [34.1016268],
    "lng": [-118.3234709]
}, {
    "fullName": "Gladys Knight",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "June Knight",
    "category": ["Motion pictures"],
    "address": ["6247 Hollywood Blvd."],
    "lat": [34.1019211],
    "lng": [-118.3259626]
}, {
    "fullName": "Raymond Knight (radio)",
    "category": ["Radio"],
    "address": ["6130 Hollywood Blvd."],
    "lat": [34.1016293],
    "lng": [-118.3232531]
}, {
    "fullName": "Ted Knight",
    "category": ["Television"],
    "address": ["6673 Hollywood Blvd."],
    "lat": [34.1015884],
    "lng": [-118.3354888]
}, {
    "fullName": "Don Knotts",
    "category": ["Television"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Patric Knowles",
    "category": ["Television"],
    "address": ["6542 Hollywood Blvd."],
    "lat": [34.1013163],
    "lng": [-118.332732]
}, {
    "fullName": "Peggy Knudsen",
    "category": ["Television"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Walter Koenig",
    "category": ["Television"],
    "address": ["6679 Hollywood Blvd."],
    "lat": [34.1018161],
    "lng": [-118.3357682]
}, {
    "fullName": "Kool & the Gang",
    "category": ["Recording"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Theodore Kosloff",
    "category": ["Motion pictures"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Andre Kostelanetz",
    "category": ["Recording"],
    "address": ["6542 Hollywood Blvd."],
    "lat": [34.1013163],
    "lng": [-118.332732]
}, {
    "fullName": "Henry Koster",
    "category": ["Motion pictures"],
    "address": ["6762 Hollywood Blvd."],
    "lat": [34.1013481],
    "lng": [-118.3379129]
}, {
    "fullName": "Ernie Kovacs",
    "category": ["Television"],
    "address": ["6307 Hollywood Blvd."],
    "lat": [34.1016487],
    "lng": [-118.3268912]
}, {
    "fullName": "Dave Koz",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Stanley Kramer",
    "category": ["Motion pictures"],
    "address": ["6100 Hollywood Blvd."],
    "lat": [34.1016341],
    "lng": [-118.3223743]
}, {
    "fullName": "Fritz Kreisler",
    "category": ["Recording"],
    "address": ["6655 Hollywood Blvd."],
    "lat": [34.10183749999999],
    "lng": [-118.3350137]
}, {
    "fullName": "Kurt Kreuger",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Otto Kruger",
    "category": ["Motion pictures", "Television"],
    "address": ["1734 Vine Street", "6331 Hollywood Blvd."],
    "lat": [34.1028894, 34.1019551],
    "lng": [-118.3266715, -118.3280106]
}, {
    "fullName": "Patti LaBelle",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Art Laboe",
    "category": ["Radio"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Gregory La Cava",
    "category": ["Motion pictures"],
    "address": ["6906 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.340605]
}, {
    "fullName": "Alan Ladd",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Alan Ladd, Jr.",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Diane Ladd",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Jim Ladd",
    "category": ["Radio"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Carl Laemmle",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Frankie Laine",
    "category": ["Recording", "Television"],
    "address": ["6385 Hollywood Blvd.", "1645 Vine Street"],
    "lat": [34.1019073, 34.101276],
    "lng": [-118.3293233, -118.327091]
}, {
    "fullName": "Alice Lake",
    "category": ["Motion pictures"],
    "address": ["1624 Vine Street"],
    "lat": [34.1001992],
    "lng": [-118.3266476]
}, {
    "fullName": "Arthur Lake (actor)",
    "category": ["Radio"],
    "address": ["6646 Hollywood Blvd."],
    "lat": [34.1013645],
    "lng": [-118.3348774]
}, {
    "fullName": "Veronica Lake",
    "category": ["Motion pictures"],
    "address": ["6918 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.3404758]
}, {
    "fullName": "Jack LaLanne",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Guy Laliberté",
    "category": ["Live performance"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Barbara La Marr",
    "category": ["Motion pictures"],
    "address": ["1621 Vine Street"],
    "lat": [34.10025100000001],
    "lng": [-118.3266852]
}, {
    "fullName": "Hedy Lamarr",
    "category": ["Motion pictures"],
    "address": ["6247 Hollywood Blvd."],
    "lat": [34.1019211],
    "lng": [-118.3259626]
}, {
    "fullName": "Dorothy Lamour",
    "category": ["Motion pictures", "Radio"],
    "address": ["6332 Hollywood Blvd.", "6240 Hollywood Blvd."],
    "lat": [34.1013785, 34.101317],
    "lng": [-118.3277461, -118.324973]
}, {
    "fullName": "Burt Lancaster",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Martin Landau",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Elissa Landi",
    "category": ["Motion pictures"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Carole Landis",
    "category": ["Motion pictures"],
    "address": ["1765 Vine Street"],
    "lat": [34.1030322],
    "lng": [-118.3267082]
}, {
    "fullName": "Michael Landon",
    "category": ["Television"],
    "address": ["1500 N. Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Klaus Landsberg",
    "category": ["Television"],
    "address": ["1500 N. Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Abbe Lane",
    "category": ["Television"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Dick Lane (TV announcer)",
    "category": ["Television"],
    "address": ["6317 Hollywood Blvd."],
    "lat": [34.1017964],
    "lng": [-118.3273378]
}, {
    "fullName": "Nathan Lane",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd. "],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Sidney Lanfield",
    "category": ["Motion pictures"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Fritz Lang",
    "category": ["Motion pictures"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Walter Lang",
    "category": ["Motion pictures"],
    "address": ["6520 Hollywood Blvd."],
    "lat": [34.1013392],
    "lng": [-118.3318563]
}, {
    "fullName": "Harry Langdon",
    "category": ["Motion pictures"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Frances Langford",
    "category": ["Motion pictures", "Radio"],
    "address": ["1500 Vine Street", "1525 Vine Street"],
    "lat": [34.098332, 34.098779],
    "lng": [-118.3262557, -118.3267738]
}, {
    "fullName": "John Langley",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Angela Lansbury",
    "category": ["Motion pictures", "Television"],
    "address": ["6623 Hollywood Blvd", "6259 Hollywood Blvd."],
    "lat": [34.101869, 34.1016537],
    "lng": [-118.334269, -118.3258915]
}, {
    "fullName": "Joi Lansing",
    "category": ["Television"],
    "address": ["6529 Hollywood Blvd"],
    "lat": [34.1017869],
    "lng": [-118.331964]
}, {
    "fullName": "Sherry Lansing",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Queen Latifah",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Walter Lantz",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Mario Lanza",
    "category": ["Recording", "Motion pictures"],
    "address": ["1751 Vine Street", "6821 Hollywood Blvd."],
    "lat": [34.1028631, 34.1015594],
    "lng": [-118.3267092, -118.3392858]
}, {
    "fullName": "Laura La Plante",
    "category": ["Motion pictures"],
    "address": ["6378 Hollywood Blvd."],
    "lat": [34.1014171],
    "lng": [-118.3291998]
}, {
    "fullName": "Rod La Rocque",
    "category": ["Motion pictures"],
    "address": ["1580 Vine Street"],
    "lat": [34.0994498],
    "lng": [-118.3266474]
}, {
    "fullName": "Julius La Rosa",
    "category": ["Television"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Milt Larsen",
    "category": ["Live performance"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Glen A. Larson",
    "category": ["Television"],
    "address": ["6673 Hollywood Blvd."],
    "lat": [34.1015884],
    "lng": [-118.3354888]
}, {
    "fullName": "Jesse L. Lasky",
    "category": ["Motion pictures"],
    "address": ["6433 Hollywood Blvd."],
    "lat": [34.1020674],
    "lng": [-118.3305954]
}, {
    "fullName": "John Lasseter",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Lassie",
    "category": ["Motion pictures"],
    "address": ["6368 Hollywood Blvd."],
    "lat": [34.1013387],
    "lng": [-118.328997]
}, {
    "fullName": "Charles Laughton",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Stan Laurel",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Peter Lawford",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Barbara Lawrence",
    "category": ["Television"],
    "address": ["1735 Vine Street"],
    "lat": [34.1027185],
    "lng": [-118.3271695]
}, {
    "fullName": "Cloris Leachman",
    "category": ["Television"],
    "address": ["6435 Hollywood Blvd."],
    "lat": [34.1017716],
    "lng": [-118.3307458]
}, {
    "fullName": "Norman Lear",
    "category": ["Television"],
    "address": ["6615 Hollywood Blvd."],
    "lat": [34.101871],
    "lng": [-118.333996]
}, {
    "fullName": "Francis Lederer",
    "category": ["Motion pictures"],
    "address": ["6902 Hollywood Blvd."],
    "lat": [34.1013333],
    "lng": [-118.3403926]
}, {
    "fullName": "Anna Lee",
    "category": ["Motion pictures"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Bruce Lee",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Gypsy Rose Lee",
    "category": ["Motion pictures"],
    "address": ["6351 Hollywood Blvd."],
    "lat": [34.1016385],
    "lng": [-118.328582]
}, {
    "fullName": "Lila Lee",
    "category": ["Motion pictures"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Michele Lee",
    "category": ["Television"],
    "address": ["6363 Hollywood Blvd."],
    "lat": [34.1018942],
    "lng": [-118.328893]
}, {
    "fullName": "Peggy Lee",
    "category": ["Recording"],
    "address": ["6319 Hollywood Blvd."],
    "lat": [34.101966],
    "lng": [-118.327514]
}, {
    "fullName": "Pinky Lee",
    "category": ["Television"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Rowland V. Lee",
    "category": ["Motion pictures"],
    "address": ["6313 Hollywood Blvd."],
    "lat": [34.1016463],
    "lng": [-118.3270932]
}, {
    "fullName": "Ruta Lee",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd. "],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Stan Lee",
    "category": ["Motion pictures"],
    "address": ["7072 Hollywood Blvd."],
    "lat": [34.1015291],
    "lng": [-118.3440879]
}, {
    "fullName": "Janet Leigh",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Vivien Leigh",
    "category": ["Motion pictures"],
    "address": ["6773 Hollywood Blvd."],
    "lat": [34.1016369],
    "lng": [-118.3383044]
}, {
    "fullName": "Mitchell Leisen",
    "category": ["Motion pictures"],
    "address": ["6241 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3255481]
}, {
    "fullName": "Jack Lemmon",
    "category": ["Motion pictures"],
    "address": ["6357 Hollywood Blvd."],
    "lat": [34.101638],
    "lng": [-118.3287148]
}, {
    "fullName": "John Lennon",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "The Lennon Sisters",
    "category": ["Television"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Jay Leno",
    "category": ["Television"],
    "address": ["6780 Hollywood Blvd."],
    "lat": [34.1013355],
    "lng": [-118.3384643]
}, {
    "fullName": "Robert Z. Leonard",
    "category": ["Motion pictures"],
    "address": ["6370 Hollywood Blvd."],
    "lat": [34.1013278],
    "lng": [-118.3290126]
}, {
    "fullName": "Mervyn LeRoy",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Jack Lescoulie",
    "category": ["Television"],
    "address": ["6500 Hollywood Blvd."],
    "lat": [34.1013467],
    "lng": [-118.3312743]
}, {
    "fullName": "Joan Leslie",
    "category": ["Television"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Sol Lesser",
    "category": ["Motion pictures"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "Earl Lestz",
    "category": ["Motion pictures"],
    "address": ["6807 Hollywood Blvd."],
    "lat": [34.1015618],
    "lng": [-118.3388152]
}, {
    "fullName": "Oscar Levant",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style= \"font-size: 100%\""],
    "address": ["6728 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1015454, 34.0522342],
    "lng": [-118.337063, -118.2436849]
}, {
    "fullName": "Fulton Lewis",
    "category": ["Radio"],
    "address": ["6258 Hollywood Blvd."],
    "lat": [34.1016254],
    "lng": [-118.3255205]
}, {
    "fullName": "Jerry Lewis",
    "category": ["Television", "Motion pictures"],
    "address": ["6150 Hollywood Blvd", "6821 Hollywood Blvd."],
    "lat": [34.101323, 34.1015594],
    "lng": [-118.324035, -118.3392858]
}, {
    "fullName": "Jerry Lee Lewis",
    "category": ["Recording"],
    "address": ["6631 Hollywood Blvd."],
    "lat": [34.1015861],
    "lng": [-118.3345231]
}, {
    "fullName": "Robert Q. Lewis",
    "category": ["Television"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Shari Lewis",
    "category": ["Television"],
    "address": ["6743 Hollywood Blvd."],
    "lat": [34.101884],
    "lng": [-118.337272]
}, {
    "fullName": "Bill Leyden",
    "category": ["Television"],
    "address": ["6136 Hollywood Blvd."],
    "lat": [34.1016268],
    "lng": [-118.3234709]
}, {
    "fullName": "Liberace",
    "category": ["Recording", "Television"],
    "address": ["6527 Hollywood Blvd.", "6739 Hollywood Blvd."],
    "lat": [34.1016066, 34.1017003],
    "lng": [-118.3325041, -118.3371117]
}, {
    "fullName": "Al Lichtman",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Beatrice Lillie",
    "category": ["Motion pictures"],
    "address": ["6404 Hollywood Blvd."],
    "lat": [34.1015187],
    "lng": [-118.330068]
}, {
    "fullName": "Elmo Lincoln",
    "category": ["Motion pictures"],
    "address": ["7042 Hollywood Blvd."],
    "lat": [34.101529],
    "lng": [-118.343012]
}, {
    "fullName": "Eric Linden",
    "category": ["Motion pictures"],
    "address": ["1648 Vine Street"],
    "lat": [34.1005289],
    "lng": [-118.3265582]
}, {
    "fullName": "Kate Linder",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Margaret Lindsay",
    "category": ["Motion pictures"],
    "address": ["6318 Hollywood Blvd."],
    "lat": [34.1016131],
    "lng": [-118.3272696]
}, {
    "fullName": "Art Linkletter",
    "category": ["Radio", "Television"],
    "address": ["6363 Hollywood Blvd.", "1560 Vine Street"],
    "lat": [34.1018942, 34.0993898],
    "lng": [-118.328893, -118.3266473]
}, {
    "fullName": "John Lithgow",
    "category": ["Television"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Cleavon Little",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Jack Little (songwriter)",
    "category": ["Radio"],
    "address": ["6618 Hollywood Blvd."],
    "lat": [34.1013454],
    "lng": [-118.333863]
}, {
    "fullName": "Rich Little",
    "category": ["Television"],
    "address": ["6372 Hollywood Blvd."],
    "lat": [34.1016048],
    "lng": [-118.3289138]
}, {
    "fullName": "Mary Livingstone",
    "category": ["Radio"],
    "address": ["6705 Hollywood Blvd."],
    "lat": [34.1018154],
    "lng": [-118.3364178]
}, {
    "fullName": "Frank Lloyd",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Harold Lloyd",
    "category": ["Motion pictures"],
    "address": ["1503 Vine Street"],
    "lat": [34.0984048],
    "lng": [-118.3269551]
}, {
    "fullName": "Andrew Lloyd Webber",
    "category": ["Live performance"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Gene Lockhart",
    "category": ["Motion pictures", "Television"],
    "address": ["6307 Hollywood Blvd.", "6681 Hollywood Blvd."],
    "lat": [34.1016487, 34.101849],
    "lng": [-118.3268912, -118.33589]
}, {
    "fullName": "June Lockhart",
    "category": ["Motion pictures", "Television"],
    "address": ["6323 Hollywood Blvd.", "6362 Hollywood Blvd."],
    "lat": [34.1019548, 34.1012648],
    "lng": [-118.3275291, -118.328692]
}, {
    "fullName": "Kathleen Lockhart",
    "category": ["Motion pictures"],
    "address": ["6241 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3255481]
}, {
    "fullName": "Marcus Loew",
    "category": ["Motion pictures"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Joshua Logan",
    "category": ["Motion pictures"],
    "address": ["6235 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3254922]
}, {
    "fullName": "Carole Lombard",
    "category": ["Motion pictures"],
    "address": ["6930 Hollywood Blvd."],
    "lat": [34.101156],
    "lng": [-118.340964]
}, {
    "fullName": "Guy Lombardo",
    "category": ["Radio", "Television", "Recording"],
    "address": ["6677 Hollywood Blvd.", "6363 Hollywood Blvd.", "6666 Hollywood Blvd."],
    "lat": [34.1015878, 34.1018942, 34.1012796],
    "lng": [-118.3357038, -118.328893, -118.3357419]
}, {
    "fullName": "Julie London",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Jennifer Lopez",
    "category": ["Recording"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "George Lopez",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Cachao López",
    "category": ["Recording"],
    "address": ["6554 Hollywood Blvd."],
    "lat": [34.1013366],
    "lng": [-118.3329746]
}, {
    "fullName": "Vincent Lopez",
    "category": ["Radio"],
    "address": ["6609 Hollywood Blvd."],
    "lat": [34.1017398],
    "lng": [-118.3336834]
}, {
    "fullName": "Marjorie Lord",
    "category": ["Television"],
    "address": ["6317 Hollywood Blvd."],
    "lat": [34.1017964],
    "lng": [-118.3273378]
}, {
    "fullName": "Phillips Lord",
    "category": ["Radio"],
    "address": ["6912 Hollywood Blvd."],
    "lat": [34.101158],
    "lng": [-118.340454]
}, {
    "fullName": "Sophia Loren",
    "category": ["Motion pictures"],
    "address": ["7050 Hollywood Blvd."],
    "lat": [34.1014552],
    "lng": [-118.3435168]
}, {
    "fullName": "Chuck Lorre",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Peter Lorre",
    "category": ["Motion pictures"],
    "address": ["6619 Hollywood Blvd."],
    "lat": [34.10187],
    "lng": [-118.334127]
}, {
    "fullName": "Los Angeles Dodgers",
    "category": ["Special"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Los Tigres del Norte",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Julia Louis-Dreyfus",
    "category": ["Television"],
    "address": ["6250 Hollywood Blvd."],
    "lat": [34.1009778],
    "lng": [-118.3259236]
}, {
    "fullName": "Anita Louise",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Bessie Love",
    "category": ["Motion pictures"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Frank Lovejoy",
    "category": ["Television"],
    "address": ["6325 Hollywood Blvd."],
    "lat": [34.102022],
    "lng": [-118.3275281]
}, {
    "fullName": "Edmund Lowe",
    "category": ["Motion pictures", "Television"],
    "address": ["6363 Hollywood Blvd.", "6601 Hollywood Blvd."],
    "lat": [34.1018942, 34.101873],
    "lng": [-118.328893, -118.333582]
}, {
    "fullName": "Jim Lowe",
    "category": ["Recording"],
    "address": ["6333 Hollywood Blvd."],
    "lat": [34.10164],
    "lng": [-118.3280376]
}, {
    "fullName": "Rob Lowe",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Myrna Loy",
    "category": ["Motion pictures"],
    "address": ["6685 Hollywood Blvd."],
    "lat": [34.1017984],
    "lng": [-118.3359762]
}, {
    "fullName": "Siegmund Lubin",
    "category": ["Motion pictures"],
    "address": ["6166 Hollywood Blvd."],
    "lat": [34.101628],
    "lng": [-118.3243736]
}, {
    "fullName": "Ernst Lubitsch",
    "category": ["Motion pictures"],
    "address": ["7042 Hollywood Blvd."],
    "lat": [34.101529],
    "lng": [-118.343012]
}, {
    "fullName": "Norman Luboff",
    "category": ["Recording"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "Susan Lucci",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Allen Ludden",
    "category": ["Television"],
    "address": ["6743 Hollywood Blvd."],
    "lat": [34.101884],
    "lng": [-118.337272]
}, {
    "fullName": "Bela Lugosi",
    "category": ["Motion pictures"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Paul Lukas",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Keye Luke",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Auguste and Louis Lumière|Auguste Lumière{{refn|group=note|Auguste Lumière star misspelled as \"August\".",
    "category": ["Motion pictures"],
    "address": ["6320 Hollywood Blvd."],
    "lat": [34.1012895],
    "lng": [-118.3274289]
}, {
    "fullName": "Auguste and Louis Lumière",
    "category": ["Motion pictures"],
    "address": ["1529 Vine Street"],
    "lat": [34.0985466],
    "lng": [-118.3266827]
}, {
    "fullName": "Humberto Luna",
    "category": ["Television"],
    "address": ["6776 Hollywood Blvd."],
    "lat": [34.1013275],
    "lng": [-118.3382261]
}, {
    "fullName": "Art Lund",
    "category": ["Recording"],
    "address": ["6126 Hollywood Blvd."],
    "lat": [34.1012695],
    "lng": [-118.3232478]
}, {
    "fullName": "Ida Lupino",
    "category": ["Television", "Motion pictures"],
    "address": ["1724 Vine Street", "6821 Hollywood Blvd."],
    "lat": [34.1028702, 34.1015594],
    "lng": [-118.3266716, -118.3392858]
}, {
    "fullName": "John Lupton",
    "category": ["Television"],
    "address": ["1713 Vine Street"],
    "lat": [34.1020553],
    "lng": [-118.3267087]
}, {
    "fullName": "Frank Luther",
    "category": ["Recording"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "A. C. Lyles",
    "category": ["Motion pictures"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Frankie Lymon",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Jane Lynch",
    "category": ["Television"],
    "address": ["6640 Hollywood Blvd."],
    "lat": [34.10138],
    "lng": [-118.3347076]
}, {
    "fullName": "Jeff Lynne",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Diana Lynn",
    "category": ["Motion pictures", "Television"],
    "address": ["1625 Vine Street", "6350 Hollywood Blvd."],
    "lat": [34.100471, 34.101281],
    "lng": [-118.3266855, -118.3283553]
}, {
    "fullName": "Loretta Lynn",
    "category": ["Recording"],
    "address": ["1515 Vine Street"],
    "lat": [34.0985311],
    "lng": [-118.3266824]
}, {
    "fullName": "Ben Lyon",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Jeanette MacDonald",
    "category": ["Motion pictures", "Recording"],
    "address": ["6157 Hollywood Blvd.", "1628 Vine Street"],
    "lat": [34.1016558, 34.1002379],
    "lng": [-118.3239536, -118.3266476]
}, {
    "fullName": "Katherine MacDonald",
    "category": ["Motion pictures"],
    "address": ["6759 Hollywood Blvd."],
    "lat": [34.101697],
    "lng": [-118.3378324]
}, {
    "fullName": "Gisele MacKenzie",
    "category": ["Television"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Helen Mack",
    "category": ["Motion pictures"],
    "address": ["6310 Hollywood Blvd."],
    "lat": [34.10161490000001],
    "lng": [-118.3271201]
}, {
    "fullName": "Ted Mack (radio-TV host)",
    "category": ["Television"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Shirley MacLaine",
    "category": ["Motion pictures"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Barton MacLane",
    "category": ["Television"],
    "address": ["6719 Hollywood Blvd."],
    "lat": [34.1016564],
    "lng": [-118.3366502]
}, {
    "fullName": "Fred MacMurray",
    "category": ["Motion pictures"],
    "address": ["6421 Hollywood Blvd."],
    "lat": [34.1016202],
    "lng": [-118.3302125]
}, {
    "fullName": "Jeanie MacPherson",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Gordon MacRae",
    "category": ["Radio"],
    "address": ["6325 Hollywood Blvd."],
    "lat": [34.102022],
    "lng": [-118.3275281]
}, {
    "fullName": "William H. Macy",
    "category": ["Motion pictures"],
    "address": ["7072 Hollywood Blvd."],
    "lat": [34.1015291],
    "lng": [-118.3440879]
}, {
    "fullName": "Johnny Maddox",
    "category": ["Recording"],
    "address": ["6401 Hollywood Blvd."],
    "lat": [34.101877],
    "lng": [-118.32977]
}, {
    "fullName": "Guy Madison",
    "category": ["Radio", "Television"],
    "address": ["6933 Hollywood Blvd.", "6333 Hollywood Blvd."],
    "lat": [34.1018332, 34.10164],
    "lng": [-118.3415313, -118.3280376]
}, {
    "fullName": "Anna Magnani",
    "category": ["Motion pictures"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Bill Maher",
    "category": ["Television"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "Lee Majors",
    "category": ["Television"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Mako Iwamatsu",
    "category": ["Motion pictures"],
    "address": ["7095 Hollywood Blvd."],
    "lat": [34.1019346],
    "lng": [-118.3449957]
}, {
    "fullName": "Karl Malden",
    "category": ["Motion pictures"],
    "address": ["6231 Hollywood Blvd."],
    "lat": [34.1018794],
    "lng": [-118.3254546]
}, {
    "fullName": "Dorothy Malone",
    "category": ["Motion pictures"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Ted Malone",
    "category": ["Radio"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Rouben Mamoulian",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Henry Mancini",
    "category": ["Recording"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Howie Mandel",
    "category": ["Television"],
    "address": ["6366 Hollywood Blvd."],
    "lat": [34.1013313],
    "lng": [-118.3287303]
}, {
    "fullName": "Barry Manilow",
    "category": ["Recording"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Joseph L. Mankiewicz",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Anthony Mann",
    "category": ["Motion pictures"],
    "address": ["6229 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3254544]
}, {
    "fullName": "Delbert Mann",
    "category": ["Motion pictures"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Hank Mann",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Jayne Mansfield",
    "category": ["Motion pictures"],
    "address": ["6328 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.327674]
}, {
    "fullName": "Joe Mantegna",
    "category": ["Live performance"],
    "address": ["6654 Hollywood Blvd."],
    "lat": [34.1013666],
    "lng": [-118.3353076]
}, {
    "fullName": "Mantovani",
    "category": ["Recording"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Fredric March",
    "category": ["Motion pictures"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "Hal March",
    "category": ["Radio", "Television"],
    "address": ["1560 Vine Street", "6536 Hollywood Blvd."],
    "lat": [34.0993898, 34.1014463],
    "lng": [-118.3266473, -118.3321762]
}, {
    "fullName": "Julianna Margulies",
    "category": ["Television"],
    "address": ["6621 Hollywood Blvd."],
    "lat": [34.1018759],
    "lng": [-118.3341576]
}, {
    "fullName": "Rose Marie",
    "category": ["Television"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "The Mark & Brian Show",
    "category": ["Radio"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "Bob Marley",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "J. Peverell Marley",
    "category": ["Motion pictures"],
    "address": ["6819 Hollywood Blvd."],
    "lat": [34.1015601],
    "lng": [-118.3389665]
}, {
    "fullName": "Jess Marlow",
    "category": ["Television"],
    "address": ["6420 Hollywood Blvd."],
    "lat": [34.1013575],
    "lng": [-118.330543]
}, {
    "fullName": "Mae Marsh",
    "category": ["Motion pictures"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Garry Marshall",
    "category": ["Television"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "George Marshall (director)",
    "category": ["Motion pictures"],
    "address": ["7048 Hollywood Blvd."],
    "lat": [34.1015292],
    "lng": [-118.343292]
}, {
    "fullName": "Herbert Marshall",
    "category": ["Motion pictures"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "Penny Marshall",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd"],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Dean Martin",
    "category": ["Motion pictures", "Recording", "Television", "Dick Martin and Dan Rowan"],
    "address": ["6519 Hollywood Blvd.", "1617 Vine Street", "6651 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Rowan|Dan Rowan and Dick Martin]]''"],
    "lat": [34.1017356, 34.1001043, 34.1015937, 99],
    "lng": [-118.3316851, -118.326685, -118.3349696, 99]
}, {
    "fullName": "Freddy Martin",
    "category": ["Recording"],
    "address": ["6532 Hollywood Blvd."],
    "lat": [34.1016097],
    "lng": [-118.3322764]
}, {
    "fullName": "Marion Martin",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Mary Martin",
    "category": ["Radio", "Recording"],
    "address": ["6609 Hollywood Blvd.", "1560 Vine Street"],
    "lat": [34.1017398, 34.0993898],
    "lng": [-118.3336834, -118.3266473]
}, {
    "fullName": "Quinn Martin",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Ricky Martin",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Tony Martin (entertainer)",
    "category": ["Motion pictures", "Radio", "Recording", "Television"],
    "address": ["6436 Hollywood Blvd.", "1760 Vine Street", "6331 Hollywood Blvd.", "1725 Vine Street"],
    "lat": [34.101279, 34.1029698, 34.1019551, 34.102418],
    "lng": [-118.330853, -118.3266711, -118.3280106, -118.3267115]
}, {
    "fullName": "Wink Martindale",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Groucho Marx",
    "category": ["Television", "Radio"],
    "address": ["1734 Vine Street", "6821 Hollywood Blvd."],
    "lat": [34.1028894, 34.1015594],
    "lng": [-118.3266715, -118.3392858]
}, {
    "fullName": "James Mason",
    "category": ["Television"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Ilona Massey",
    "category": ["Motion pictures"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Raymond Massey",
    "category": ["Motion pictures", "Television"],
    "address": ["1719 Vine Street", "6706 Hollywood Blvd."],
    "lat": [34.1022377, 34.101553],
    "lng": [-118.3267124, -118.3364349]
}, {
    "fullName": "Johnny Mathis",
    "category": ["Recording"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Marlee Matlin",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Walter Matthau",
    "category": ["Motion pictures"],
    "address": ["6357 Hollywood Blvd."],
    "lat": [34.101638],
    "lng": [-118.3287148]
}, {
    "fullName": "Victor Mature",
    "category": ["Motion pictures"],
    "address": ["6780 Hollywood Blvd."],
    "lat": [34.1013355],
    "lng": [-118.3384643]
}, {
    "fullName": "Louis B. Mayer",
    "category": ["Motion pictures"],
    "address": ["1637 Vine Street"],
    "lat": [34.1009204],
    "lng": [-118.3270635]
}, {
    "fullName": "Ken Maynard",
    "category": ["Motion pictures"],
    "address": ["6751 Hollywood Blvd."],
    "lat": [34.1017702],
    "lng": [-118.3376512]
}, {
    "fullName": "Archie Mayo",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Virginia Mayo",
    "category": ["Television"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Paul Mazursky",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "May McAvoy",
    "category": ["Motion pictures"],
    "address": ["1731 Vine Street"],
    "lat": [34.1025982],
    "lng": [-118.3267105]
}, {
    "fullName": "Mary Margaret McBride",
    "category": ["Radio"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Irish McCalla",
    "category": ["Television"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Mercedes McCambridge",
    "category": ["Motion pictures", "Television"],
    "address": ["1720 Vine Street", "6243 Hollywood Blvd."],
    "lat": [34.1026219, 34.1017886],
    "lng": [-118.326225, -118.3258864]
}, {
    "fullName": "Leo McCarey",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Clem McCarthy",
    "category": ["Radio"],
    "address": ["6563 Hollywood Blvd."],
    "lat": [34.1016034],
    "lng": [-118.3331745]
}, {
    "fullName": "Melissa McCarthy",
    "category": ["Motion pictures"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Paul McCartney",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Doug McClure",
    "category": ["Television"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Matthew McConaughey",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Smilin'Ed McConnell ",
    "category": ["Radio "],
    "address": ["6650 Hollywood Blvd."],
    "lat": [34.1014057],
    "lng": [-118.3352513]
}, {
    "fullName": "Patricia McCormack ",
    "category": ["Motion pictures "],
    "address": ["6312 Hollywood Blvd."],
    "lat": [34.1016146],
    "lng": [-118.3271477]
}, {
    "fullName": "Larry McCormick(TV)",
    "category": ["Television "],
    "address": ["6420 Hollywood Blvd."],
    "lat": [34.1013575],
    "lng": [-118.330543]
}, {
    "fullName": "Clyde McCoy ",
    "category": ["Recording "],
    "address": ["6426 Hollywood Blvd."],
    "lat": [34.101589],
    "lng": [-118.3302438]
}, {
    "fullName": "Tim McCoy ",
    "category": ["Motion pictures "],
    "address": ["1600 Vine Street "],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Tex McCrary ",
    "category": ["Television "],
    "address": ["1628 Vine Street "],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Joel McCrea ",
    "category": ["Motion pictures ", "Radio "],
    "address": ["6901 Hollywood Blvd.", "6241 Hollywood Blvd."],
    "lat": [34.1015575, 34.1016565],
    "lng": [-118.3401645, -118.3255481]
}, {
    "fullName": "Hattie McDaniel ",
    "category": ["Motion pictures ", "Radio "],
    "address": ["1719 Vine Street ", "6933 Hollywood Blvd."],
    "lat": [34.1022377, 34.1018332],
    "lng": [-118.3267124, -118.3415313]
}, {
    "fullName": "Roddy McDowall ",
    "category": ["Television "],
    "address": ["6632 Hollywood Blvd."],
    "lat": [34.101565],
    "lng": [-118.334459]
}, {
    "fullName": "Malcolm McDowell ",
    "category": ["Motion pictures "],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Reba McEntire ",
    "category": ["Recording "],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "George McFarland ",
    "category": ["Motion pictures ", "''Fibber McGee and Molly ''"],
    "address": ["7095 Hollywood Blvd.", "colspan = \"2\" | ''see [[#Fibber|Fibber McGee and Molly]]''"],
    "lat": [34.1019346, 99],
    "lng": [-118.3449957, 99]
}, {
    "fullName": "Charles McGraw",
    "category": ["Television"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Tim McGraw",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Dorothy McGuire",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Rod McKuen",
    "category": ["Recording"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Victor McLaglen",
    "category": ["Motion pictures"],
    "address": ["1735 Vine Street"],
    "lat": [34.1027185],
    "lng": [-118.3271695]
}, {
    "fullName": "Norman Z. McLeod",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Ed McMahon",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Vince McMahon",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Graham McNamee",
    "category": ["Radio"],
    "address": ["6405 Hollywood Blvd."],
    "lat": [34.1016222],
    "lng": [-118.3298532]
}, {
    "fullName": "Don McNeill (performer)",
    "category": ["Radio"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Steve McQueen",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Audrey Meadows",
    "category": ["Television", "Anne Meara and Jerry Stiller"],
    "address": ["6100 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Stiller|Jerry Stiller and Anne Meara]]''"],
    "lat": [34.1016341, 99],
    "lng": [-118.3223743, 99]
}, {
    "fullName": "Mike Medavoy",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Donald Meek",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "George Meeker",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6101 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1016811, 34.0522342],
    "lng": [-118.322376, -118.2436849]
}, {
    "fullName": "Zubin Mehta",
    "category": ["Recording"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "George Melachrino",
    "category": ["Recording"],
    "address": ["1625 Vine Street"],
    "lat": [34.100471],
    "lng": [-118.3266855]
}, {
    "fullName": "Thomas Meighan",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "William Meiklejohn",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Lauritz Melchior",
    "category": ["Recording"],
    "address": ["1718 Vine Street"],
    "lat": [34.1022865],
    "lng": [-118.3263373]
}, {
    "fullName": "James Melton",
    "category": ["Radio", "Recording"],
    "address": ["6300 Hollywood Blvd.", "6564 Hollywood Blvd."],
    "lat": [34.1014324, 34.1013698],
    "lng": [-118.3270755, -118.3332204]
}, {
    "fullName": "Rafael Méndez",
    "category": ["Recording"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "Adolphe Menjou",
    "category": ["Motion pictures"],
    "address": ["6826 Hollywood Blvd."],
    "lat": [34.1015289],
    "lng": [-118.3390841]
}, {
    "fullName": "Alan Menken",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Yehudi Menuhin",
    "category": ["Recording"],
    "address": ["6710 Hollywood Blvd."],
    "lat": [34.10155200000001],
    "lng": [-118.3365455]
}, {
    "fullName": "Johnny Mercer",
    "category": ["Television"],
    "address": ["1628 Vine Street"],
    "lat": [34.1002379],
    "lng": [-118.3266476]
}, {
    "fullName": "Burgess Meredith",
    "category": ["Motion pictures"],
    "address": ["6904 Hollywood Blvd."],
    "lat": [34.1013394],
    "lng": [-118.3404753]
}, {
    "fullName": "Una Merkel",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Ethel Merman",
    "category": ["Motion pictures", "Recording"],
    "address": ["7044 Hollywood Blvd.", "1751 Vine Street"],
    "lat": [34.101126, 34.1028631],
    "lng": [-118.343045, -118.3267092]
}, {
    "fullName": "Robert Merrill",
    "category": ["Recording"],
    "address": ["6763 Hollywood Blvd."],
    "lat": [34.101958],
    "lng": [-118.33815]
}, {
    "fullName": "Al Michaels",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Lorne Michaels",
    "category": ["Television"],
    "address": ["6627 Hollywood Blvd."],
    "lat": [34.101875],
    "lng": [-118.334498]
}, {
    "fullName": "Oscar Micheaux",
    "category": ["Motion pictures"],
    "address": ["6721 Hollywood Blvd."],
    "lat": [34.1018216],
    "lng": [-118.3366866]
}, {
    "fullName": "Bette Midler",
    "category": ["Recording"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Luis Miguel",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "David Milch",
    "category": ["Television"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Vera Miles",
    "category": ["Television"],
    "address": ["1652 Vine Street"],
    "lat": [34.1006322],
    "lng": [-118.3266483]
}, {
    "fullName": "Lewis Milestone",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ray Milland",
    "category": ["Motion pictures", "Television"],
    "address": ["1621 Vine Street", "1634 Vine Street"],
    "lat": [34.10025100000001, 34.1002962],
    "lng": [-118.3266852, -118.3265578]
}, {
    "fullName": "Ann Miller",
    "category": ["Motion pictures"],
    "address": ["6914 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.340459]
}, {
    "fullName": "Bob Miller (sports announcer)",
    "category": ["Radio"],
    "address": ["6763 Hollywood Blvd."],
    "lat": [34.101958],
    "lng": [-118.33815]
}, {
    "fullName": "Glenn Miller",
    "category": ["Recording"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Marilyn Miller",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Marvin Miller (actor)",
    "category": ["Television"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Mitch Miller",
    "category": ["Recording"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Mills Brothers",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Nathan Milstein",
    "category": ["Recording"],
    "address": ["6379 Hollywood Blvd."],
    "lat": [34.1017035],
    "lng": [-118.329069]
}, {
    "fullName": "Liza Minnelli",
    "category": ["Live performance"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Vincente Minnelli",
    "category": ["Motion pictures"],
    "address": ["6676 Hollywood Blvd."],
    "lat": [34.1015557],
    "lng": [-118.3360532]
}, {
    "fullName": "The Miracles",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Carmen Miranda",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Helen Mirren",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Don Mischer",
    "category": ["Television"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Everett Mitchell",
    "category": ["Radio"],
    "address": ["6254 Hollywood Blvd."],
    "lat": [34.10162529999999],
    "lng": [-118.3254104]
}, {
    "fullName": "Guy Mitchell",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Thomas Mitchell (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["1651 Vine Street", "6100 Hollywood Blvd."],
    "lat": [34.1007874, 34.1016341],
    "lng": [-118.3266861, -118.3223743]
}, {
    "fullName": "Robert Mitchum",
    "category": ["Motion pictures"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "Tom Mix",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Hal Mohr",
    "category": ["Motion pictures"],
    "address": ["6433 Hollywood Blvd."],
    "lat": [34.1020674],
    "lng": [-118.3305954]
}, {
    "fullName": "Thelonious Monk",
    "category": ["Recording"],
    "address": ["7055 Hollywood Blvd."],
    "lat": [34.1015606],
    "lng": [-118.3434694]
}, {
    "fullName": "The Monkees",
    "category": ["Recording"],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Marilyn Monroe",
    "category": ["Motion pictures"],
    "address": ["6774 Hollywood Blvd."],
    "lat": [34.1015312],
    "lng": [-118.3381283]
}, {
    "fullName": "Vaughn Monroe",
    "category": ["Radio", "Recording"],
    "address": ["1755 Vine Street", "1600 Vine Street"],
    "lat": [34.103339, 34.1003574],
    "lng": [-118.327158, -118.3259214]
}, {
    "fullName": "Ricardo Montalbán",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Pierre Monteux",
    "category": ["Recording"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Elizabeth Montgomery",
    "category": ["Television"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "George Montgomery (actor)",
    "category": ["Television"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Robert Montgomery (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["6440 Hollywood Blvd.", "1631 Vine Street"],
    "lat": [34.1014635, 34.1006154],
    "lng": [-118.3309359, -118.3266858]
}, {
    "fullName": "Art Mooney",
    "category": ["Recording"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Clayton Moore",
    "category": ["Television"],
    "address": ["6914 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.340459]
}, {
    "fullName": "Colleen Moore",
    "category": ["Motion pictures"],
    "address": ["1549 Vine Street"],
    "lat": [34.0990288],
    "lng": [-118.3266843]
}, {
    "fullName": "Constance Moore",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Del Moore",
    "category": ["Television"],
    "address": ["6405 Hollywood Blvd."],
    "lat": [34.1016222],
    "lng": [-118.3298532]
}, {
    "fullName": "Dudley Moore",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Garry Moore",
    "category": ["Radio", "Television"],
    "address": ["1718 Vine Street", "1680 Vine Street"],
    "lat": [34.1022865, 34.101281],
    "lng": [-118.3263373, -118.326315]
}, {
    "fullName": "Grace Moore",
    "category": ["Motion pictures"],
    "address": ["6274 Hollywood Blvd."],
    "lat": [34.1016222],
    "lng": [-118.3259884]
}, {
    "fullName": "Julianne Moore",
    "category": ["Motion pictures"],
    "address": ["6250 Hollywood Blvd."],
    "lat": [34.1009778],
    "lng": [-118.3259236]
}, {
    "fullName": "Mary Tyler Moore",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Matt Moore (actor)",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Owen Moore",
    "category": ["Motion pictures"],
    "address": ["6727 Hollywood Blvd."],
    "lat": [34.101886],
    "lng": [-118.336913]
}, {
    "fullName": "Roger Moore",
    "category": ["Motion pictures"],
    "address": ["7007 Hollywood Blvd."],
    "lat": [34.1015612],
    "lng": [-118.3419572]
}, {
    "fullName": "Terry Moore (actress)",
    "category": ["Motion pictures"],
    "address": ["7076 Hollywood Blvd."],
    "lat": [34.101532],
    "lng": [-118.3442256]
}, {
    "fullName": "Tom Moore (actor)",
    "category": ["Motion pictures"],
    "address": ["1640 Vine Street"],
    "lat": [34.1004125],
    "lng": [-118.3266479]
}, {
    "fullName": "Victor Moore",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Agnes Moorehead",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Polly Moran",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Antonio Moreno",
    "category": ["Motion pictures"],
    "address": ["6651 Hollywood Blvd."],
    "lat": [34.1015937],
    "lng": [-118.3349696]
}, {
    "fullName": "Rita Moreno",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Frank Morgan",
    "category": ["Motion pictures", "Radio"],
    "address": ["1708 Vine Street", "6700 Hollywood Blvd."],
    "lat": [34.101897, 34.1012348],
    "lng": [-118.3265753, -118.336323]
}, {
    "fullName": "Henry Morgan (comedian)",
    "category": ["Radio"],
    "address": ["6325 Hollywood Blvd."],
    "lat": [34.102022],
    "lng": [-118.3275281]
}, {
    "fullName": "Jane Morgan",
    "category": ["Recording"],
    "address": ["6914 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.340459]
}, {
    "fullName": "Michèle Morgan",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Ralph Morgan",
    "category": ["Motion pictures"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Robert W. Morgan",
    "category": ["Radio"],
    "address": ["6841 Hollywood Blvd."],
    "lat": [34.1015597],
    "lng": [-118.33929]
}, {
    "fullName": "Russ Morgan",
    "category": ["Recording"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Pat Morita",
    "category": ["Motion pictures"],
    "address": ["6633 Hollywood Blvd."],
    "lat": [34.1017827],
    "lng": [-118.3345105]
}, {
    "fullName": "Doug Morris",
    "category": ["Recording"],
    "address": ["6259 Hollywood Blvd."],
    "lat": [34.1016537],
    "lng": [-118.3258915]
}, {
    "fullName": "Carlton E. Morse",
    "category": ["Radio"],
    "address": ["6445 Hollywood Blvd."],
    "lat": [34.1016197],
    "lng": [-118.3303009]
}, {
    "fullName": "Ella Mae Morse",
    "category": ["Recording"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Jerry Moss",
    "category": ["Television"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Mötley Crüe",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Mickey Mouse",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Jack Mulhall",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Jean Muir (actress)",
    "category": ["Motion pictures"],
    "address": ["6280 Hollywood Blvd."],
    "lat": [34.1014005],
    "lng": [-118.3261774]
}, {
    "fullName": "Richard Mulligan",
    "category": ["Television"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Munchkin",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Paul Muni",
    "category": ["Motion pictures"],
    "address": ["6433 Hollywood Blvd."],
    "lat": [34.1020674],
    "lng": [-118.3305954]
}, {
    "fullName": "Ona Munson",
    "category": ["Motion pictures"],
    "address": ["6250 Hollywood Blvd."],
    "lat": [34.1009778],
    "lng": [-118.3259236]
}, {
    "fullName": "The Muppets",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Dennis Muren",
    "category": ["Motion pictures"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [34.1012256],
    "lng": [-118.3380301]
}, {
    "fullName": "Audie Murphy",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Eddie Murphy",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "George Murphy",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Anne Murray",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Charles Murray (actor)",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Don Murray (actor)",
    "category": ["Motion pictures"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Jan Murray",
    "category": ["Television"],
    "address": ["6153 Hollywood Blvd."],
    "lat": [34.1016554],
    "lng": [-118.3239034]
}, {
    "fullName": "Ken Murray (entertainer)",
    "category": ["Radio"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Mae Murray",
    "category": ["Motion pictures"],
    "address": ["6318 Hollywood Blvd."],
    "lat": [34.1016131],
    "lng": [-118.3272696]
}, {
    "fullName": "Edward R. Murrow",
    "category": ["Radio"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Carmel Myers",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Jim Nabors",
    "category": ["Live performance"],
    "address": ["6435 Hollywood Blvd."],
    "lat": [34.1017716],
    "lng": [-118.3307458]
}, {
    "fullName": "Conrad Nagel",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["1719 Vine Street", "1752 Vine Street", "1752 Vine Street"],
    "lat": [34.1022377, 34.1029238, 34.1029238],
    "lng": [-118.3267124, -118.3266713, -118.3266713]
}, {
    "fullName": "Stu Nahan",
    "category": ["Radio"],
    "address": ["6549 Hollywood Blvd."],
    "lat": [34.101912],
    "lng": [-118.332789]
}, {
    "fullName": "J. Carrol Naish",
    "category": ["Television"],
    "address": ["6145 Hollywood Blvd."],
    "lat": [34.1016546],
    "lng": [-118.323803]
}, {
    "fullName": "Nita Naldi",
    "category": ["Motion pictures"],
    "address": ["6316 Hollywood Blvd."],
    "lat": [34.1016139],
    "lng": [-118.3272029]
}, {
    "fullName": "Ogden Nash",
    "category": ["Television"],
    "address": ["6264 Hollywood Blvd."],
    "lat": [34.1016238],
    "lng": [-118.3256947]
}, {
    "fullName": "Alla Nazimova",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Patricia Neal",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "James L. Nederlander",
    "category": ["Live performance"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Pola Negri",
    "category": ["Motion pictures"],
    "address": ["6140 Hollywood Blvd."],
    "lat": [34.101271],
    "lng": [-118.3235858]
}, {
    "fullName": "Jean Negulesco",
    "category": ["Motion pictures"],
    "address": ["6212 Hollywood Blvd."],
    "lat": [34.1016279],
    "lng": [-118.3246806]
}, {
    "fullName": "Marshall Neilan",
    "category": ["Motion pictures"],
    "address": ["6241 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3255481]
}, {
    "fullName": "Barry Nelson",
    "category": ["Television"],
    "address": ["6259 Hollywood Blvd."],
    "lat": [34.1016537],
    "lng": [-118.3258915]
}, {
    "fullName": "David Nelson (actor)",
    "category": ["Television"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Gene Nelson",
    "category": ["Motion pictures"],
    "address": ["7005 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.3418955]
}, {
    "fullName": "Harriet Nelson",
    "category": ["Television"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Ricky Nelson",
    "category": ["Recording"],
    "address": ["1515 Vine Street"],
    "lat": [34.0985311],
    "lng": [-118.3266824]
}, {
    "fullName": "John Nesbitt (announcer)",
    "category": ["Motion pictures", "Radio"],
    "address": ["1717 Vine Street", "6200 Hollywood Blvd."],
    "lat": [34.1023831, 34.1013189],
    "lng": [-118.3271246, -118.324681]
}, {
    "fullName": "Mace Neufeld",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "New Kids on the Block",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["7072 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1015291, 34.0522342],
    "lng": [-118.3440879, -118.2436849]
}, {
    "fullName": "Bob Newhart",
    "category": ["Television"],
    "address": ["6381 Hollywood Blvd."],
    "lat": [34.1018927],
    "lng": [-118.3292542]
}, {
    "fullName": "Alfred Newman (composer)",
    "category": ["Recording"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Paul Newman",
    "category": ["Motion pictures"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Randy Newman",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Wayne Newton",
    "category": ["Recording"],
    "address": ["6909 Hollywood Blvd."],
    "lat": [34.1015597],
    "lng": [-118.3405174]
}, {
    "fullName": "Olivia Newton-John",
    "category": ["Recording"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Fred Niblo",
    "category": ["Motion pictures"],
    "address": ["7014 Hollywood Blvd."],
    "lat": [34.10153010000001],
    "lng": [-118.3419952]
}, {
    "fullName": "Nicholas Brothers",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Nichelle Nichols",
    "category": ["Television"],
    "address": ["6633 Hollywood Blvd."],
    "lat": [34.1017827],
    "lng": [-118.3345105]
}, {
    "fullName": "Jack Nicholson",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Leslie Nielsen",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Chuck Niles",
    "category": ["Radio"],
    "address": ["7080 Hollywood Blvd"],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Ken Niles",
    "category": ["Radio"],
    "address": ["6711 Hollywood Blvd."],
    "lat": [34.1018509],
    "lng": [-118.3365139]
}, {
    "fullName": "Wendell Niles",
    "category": ["Radio"],
    "address": ["1725 Vine Street"],
    "lat": [34.102418],
    "lng": [-118.3267115]
}, {
    "fullName": "Anna Q. Nilsson",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Leonard Nimoy",
    "category": ["Motion pictures"],
    "address": ["6651 Hollywood Blvd."],
    "lat": [34.1015937],
    "lng": [-118.3349696]
}, {
    "fullName": "David Niven",
    "category": ["Motion pictures", "Television"],
    "address": ["6384 Hollywood Blvd.", "1623 Vine Street"],
    "lat": [34.1014332, 34.100361],
    "lng": [-118.3293279, -118.3266854]
}, {
    "fullName": "Marian Nixon",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Lloyd Nolan",
    "category": ["Television"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Mabel Normand",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Chuck Norris",
    "category": ["Motion pictures"],
    "address": ["7024 Hollywood Blvd."],
    "lat": [34.101279],
    "lng": [-118.342172]
}, {
    "fullName": "Kim Novak",
    "category": ["Motion pictures"],
    "address": ["6332 Hollywood Blvd."],
    "lat": [34.1013785],
    "lng": [-118.3277461]
}, {
    "fullName": "Jack Oakie",
    "category": ["Motion pictures"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Merle Oberon",
    "category": ["Motion pictures"],
    "address": ["6274 Hollywood Blvd."],
    "lat": [34.1016222],
    "lng": [-118.3259884]
}, {
    "fullName": "Hugh O'Brian",
    "category": ["Television"],
    "address": ["6613 Hollywood Blvd."],
    "lat": [34.1018479],
    "lng": [-118.333887]
}, {
    "fullName": "Dave O'Brien (actor)",
    "category": ["Motion pictures"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Edmond O'Brien",
    "category": ["Motion pictures", "Television"],
    "address": ["1725 Vine Street", "6523 Hollywood Blvd."],
    "lat": [34.102418, 34.1017888],
    "lng": [-118.3267115, -118.3318654]
}, {
    "fullName": "Eugene O'Brien (actor)",
    "category": ["Motion pictures"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "George O'Brien (actor)",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Margaret O'Brien",
    "category": ["Motion pictures", "Television"],
    "address": ["6606 Hollywood Blvd.", "1634 Vine Street"],
    "lat": [34.10157, 34.1002962],
    "lng": [-118.3335333, -118.3265578]
}, {
    "fullName": "Pat O'Brien (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["1531 Vine Street", "6240 Hollywood Blvd."],
    "lat": [34.0985488, 34.101317],
    "lng": [-118.3266828, -118.324973]
}, {
    "fullName": "Carroll O'Connor",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Donald O'Connor",
    "category": ["Motion pictures", "Television"],
    "address": ["1680 Vine Street", "7021 Hollywood Blvd."],
    "lat": [34.101281, 34.1023128],
    "lng": [-118.326315, -118.3427565]
}, {
    "fullName": "Molly O'Day",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Chris O'Donnell",
    "category": ["Television"],
    "address": ["6681 Hollywood Blvd."],
    "lat": [34.101849],
    "lng": [-118.33589]
}, {
    "fullName": "George O'Hanlon",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6428 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1015889, 34.0522342],
    "lng": [-118.3302504, -118.2436849]
}, {
    "fullName": "Maureen O'Hara",
    "category": ["Motion pictures"],
    "address": ["7004 Hollywood Blvd."],
    "lat": [34.1015312],
    "lng": [-118.3416497]
}, {
    "fullName": "Walter O'Keefe",
    "category": ["Radio"],
    "address": ["6153 Hollywood Blvd."],
    "lat": [34.1016554],
    "lng": [-118.3239034]
}, {
    "fullName": "Edna May Oliver",
    "category": ["Motion pictures"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Laurence Olivier",
    "category": ["Motion pictures"],
    "address": ["6319 Hollywood Blvd."],
    "lat": [34.101966],
    "lng": [-118.327514]
}, {
    "fullName": "Edward James Olmos",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Mary-Kate and Ashley Olsen",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Ed O'Neill",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Henry O'Neill",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Roy Orbison",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Tony Orlando",
    "category": ["Recording"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Eugene Ormandy",
    "category": ["Recording"],
    "address": ["6926 Hollywood Blvd."],
    "lat": [34.1015286],
    "lng": [-118.3405093]
}, {
    "fullName": "Robert Osborne",
    "category": ["Television"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "Ozzy Osbourne",
    "category": ["Recording"],
    "address": ["6780 Hollywood Blvd."],
    "lat": [34.1013355],
    "lng": [-118.3384643]
}, {
    "fullName": "The Osmonds",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Michael O'Shea (actor)",
    "category": ["Television"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Maureen O'Sullivan",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Buck Owens",
    "category": ["Recording"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Jack Paar",
    "category": ["Television"],
    "address": ["6212 Hollywood Blvd."],
    "lat": [34.1016279],
    "lng": [-118.3246806]
}, {
    "fullName": "Ignacy Jan Paderewski",
    "category": ["Recording"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Anita Page",
    "category": ["Motion pictures"],
    "address": ["6116 Hollywood Blvd."],
    "lat": [34.101633],
    "lng": [-118.3230552]
}, {
    "fullName": "Patti Page",
    "category": ["Recording"],
    "address": ["6760 Hollywood Blvd."],
    "lat": [34.1012186],
    "lng": [-118.3378835]
}, {
    "fullName": "Janis Paige",
    "category": ["Motion pictures"],
    "address": ["6624 Hollywood Blvd."],
    "lat": [34.101492],
    "lng": [-118.3340618]
}, {
    "fullName": "George Pal",
    "category": ["Motion pictures"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Jack Palance",
    "category": ["Television"],
    "address": ["6608 Hollywood Blvd."],
    "lat": [34.101255],
    "lng": [-118.333596]
}, {
    "fullName": "Eugene Pallette",
    "category": ["Motion pictures"],
    "address": ["6702 Hollywood Blvd."],
    "lat": [34.1013823],
    "lng": [-118.3363199]
}, {
    "fullName": "Lilli Palmer",
    "category": ["Television"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Gwyneth Paltrow",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Franklin Pangborn",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Eleanor Parker",
    "category": ["Motion pictures"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Frank Parker (singer)",
    "category": ["Radio"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Jean Parker",
    "category": ["Motion pictures"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Ray Parker, Jr.",
    "category": ["Recording"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Harry Parke",
    "category": ["Radio"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Helen Parrish",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Jim Parsons",
    "category": ["Television"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "Louella Parsons",
    "category": ["Motion pictures", "Radio"],
    "address": ["6418 Hollywood Blvd.", "6300 Hollywood Blvd."],
    "lat": [34.101282, 34.1014324],
    "lng": [-118.330423, -118.3270755]
}, {
    "fullName": "Dolly Parton",
    "category": ["Recording"],
    "address": ["6712 Hollywood Blvd"],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Katina Paxinou",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "John Payne (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["6125 Hollywood Blvd.", "6687 Hollywood Blvd."],
    "lat": [34.1020151, 34.1015869],
    "lng": [-118.3232406, -118.3360196]
}, {
    "fullName": "Al Pearce",
    "category": ["Radio"],
    "address": ["6328 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.327674]
}, {
    "fullName": "Jack Pearl",
    "category": ["Radio"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Drew Pearson (journalist)",
    "category": ["Radio"],
    "address": ["6623 Hollywood Blvd."],
    "lat": [34.101869],
    "lng": [-118.334269]
}, {
    "fullName": "Harold Peary",
    "category": ["Radio", "Television"],
    "address": ["1639 Vine Street", "1719 Vine Street"],
    "lat": [34.1009837, 34.1022377],
    "lng": [-118.3268649, -118.3267124]
}, {
    "fullName": "Gregory Peck",
    "category": ["Motion pictures"],
    "address": ["6100 Hollywood Blvd."],
    "lat": [34.1016341],
    "lng": [-118.3223743]
}, {
    "fullName": "Jan Peerce",
    "category": ["Recording"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "George Peppard",
    "category": ["Motion pictures"],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Anthony Perkins",
    "category": ["Television", "Motion pictures"],
    "address": ["6801 Hollywood Blvd.", "6821 Hollywood Blvd."],
    "lat": [34.1026077, 34.1015594],
    "lng": [-118.3399805, -118.3392858]
}, {
    "fullName": "Gigi Perreau",
    "category": ["Television"],
    "address": ["6212 Hollywood Blvd."],
    "lat": [34.1016279],
    "lng": [-118.3246806]
}, {
    "fullName": "Jack Perrin",
    "category": ["Motion pictures"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Bernadette Peters",
    "category": ["Live performance"],
    "address": ["6706 Hollywood Blvd."],
    "lat": [34.101553],
    "lng": [-118.3364349]
}, {
    "fullName": "Brock Peters",
    "category": ["Live performance"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "House Peters, Sr.",
    "category": ["Motion pictures"],
    "address": ["6157 Hollywood Blvd."],
    "lat": [34.1016558],
    "lng": [-118.3239536]
}, {
    "fullName": "Jon Peters",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd. "],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Susan Peters",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "William Petersen",
    "category": ["Television", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6667 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1018304, 34.0522342],
    "lng": [-118.3354085, -118.2436849]
}, {
    "fullName": "Olga Petrova",
    "category": ["Motion pictures"],
    "address": ["6562 Hollywood Blvd."],
    "lat": [34.1013672],
    "lng": [-118.333159]
}, {
    "fullName": "Tom Petty and the Heartbreakers",
    "category": ["Recording"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Michelle Pfeiffer",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Regis Philbin",
    "category": ["Television"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Dorothy Phillips",
    "category": ["Motion pictures"],
    "address": ["6358 Hollywood Blvd."],
    "lat": [34.1016072],
    "lng": [-118.3286328]
}, {
    "fullName": "Jack Pickford",
    "category": ["Motion pictures"],
    "address": ["1523 Vine Street"],
    "lat": [34.098721],
    "lng": [-118.3267737]
}, {
    "fullName": "Mary Pickford",
    "category": ["Motion pictures"],
    "address": ["6280 Hollywood Blvd."],
    "lat": [34.1014005],
    "lng": [-118.3261774]
}, {
    "fullName": "Walter Pidgeon",
    "category": ["Motion pictures"],
    "address": ["6414 Hollywood Blvd."],
    "lat": [34.1015892],
    "lng": [-118.330204]
}, {
    "fullName": "Webb Pierce",
    "category": ["Recording"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Ezio Pinza",
    "category": ["Recording"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "ZaSu Pitts",
    "category": ["Motion pictures"],
    "address": ["6554 Hollywood Blvd."],
    "lat": [34.1013366],
    "lng": [-118.3329746]
}, {
    "fullName": "Suzanne Pleshette",
    "category": ["Television"],
    "address": ["6751 Hollywood Blvd."],
    "lat": [34.1017702],
    "lng": [-118.3376512]
}, {
    "fullName": "Amy Poehler",
    "category": ["Television"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "The Pointer Sisters",
    "category": ["Recording"],
    "address": ["6363 Hollywood Blvd."],
    "lat": [34.1018942],
    "lng": [-118.328893]
}, {
    "fullName": "Sidney Poitier",
    "category": ["Motion pictures"],
    "address": ["7065 Hollywood Blvd."],
    "lat": [34.1019892],
    "lng": [-118.3439101]
}, {
    "fullName": "Snub Pollard",
    "category": ["Motion pictures"],
    "address": ["6415 Hollywood Blvd"],
    "lat": [34.1016203],
    "lng": [-118.3301904]
}, {
    "fullName": "Lily Pons",
    "category": ["Recording"],
    "address": ["7006 Hollywood Blvd."],
    "lat": [34.1015298],
    "lng": [-118.3417517]
}, {
    "fullName": "Winnie the Pooh (character)",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd. "],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Cole Porter",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd. "],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "H. C. Potter",
    "category": ["Motion pictures"],
    "address": ["6633 Hollywood Blvd."],
    "lat": [34.1017827],
    "lng": [-118.3345105]
}, {
    "fullName": "David Powell (actor)",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Dick Powell",
    "category": ["Motion pictures", "Television", "Radio"],
    "address": ["6915 Hollywood Blvd.", "6745 Hollywood Blvd.", "1560 Vine Street"],
    "lat": [34.1015614, 34.1018095, 34.0993898],
    "lng": [-118.340782, -118.3372052, -118.3266473]
}, {
    "fullName": "Eleanor Powell",
    "category": ["Motion pictures"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Jane Powell",
    "category": ["Motion pictures"],
    "address": ["6818 Hollywood Blvd."],
    "lat": [34.1013632],
    "lng": [-118.3393634]
}, {
    "fullName": "William Powell",
    "category": ["Motion pictures"],
    "address": ["1636 Vine Street"],
    "lat": [34.1003349],
    "lng": [-118.3266478]
}, {
    "fullName": "Tyrone Power",
    "category": ["Motion pictures"],
    "address": ["6747 Hollywood Blvd."],
    "lat": [34.1015741],
    "lng": [-118.3373121]
}, {
    "fullName": "Mala Powers",
    "category": ["Television"],
    "address": ["6360 Hollywood Blvd."],
    "lat": [34.101266],
    "lng": [-118.328678]
}, {
    "fullName": "Stefanie Powers",
    "category": ["Television"],
    "address": ["6776 Hollywood Blvd."],
    "lat": [34.1013275],
    "lng": [-118.3382261]
}, {
    "fullName": "Perez Prado",
    "category": ["Recording"],
    "address": ["1529 Vine Street"],
    "lat": [34.0985466],
    "lng": [-118.3266827]
}, {
    "fullName": "Otto Preminger",
    "category": ["Motion pictures"],
    "address": ["6624 Hollywood Blvd."],
    "lat": [34.101492],
    "lng": [-118.3340618]
}, {
    "fullName": "Elvis Presley",
    "category": ["Recording"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Marie Prevost",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Vincent Price",
    "category": ["Motion pictures", "Television"],
    "address": ["6201 Hollywood Blvd.", "6501 Hollywood Blvd."],
    "lat": [34.1020578, 34.101895],
    "lng": [-118.3247812, -118.331205]
}, {
    "fullName": "Charley Pride",
    "category": ["Recording"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Louis Prima",
    "category": ["Recording"],
    "address": ["1617 Vine Street"],
    "lat": [34.1001043],
    "lng": [-118.326685]
}, {
    "fullName": "William Primrose",
    "category": ["Recording"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Aileen Pringle",
    "category": ["Motion pictures"],
    "address": ["6723 Hollywood Blvd."],
    "lat": [34.1018179],
    "lng": [-118.3368141]
}, {
    "fullName": "Freddie Prinze",
    "category": ["Television"],
    "address": ["6755 Hollywood Blvd."],
    "lat": [34.1019203],
    "lng": [-118.3376733]
}, {
    "fullName": "Jon Provost",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Richard Pryor",
    "category": ["Motion pictures"],
    "address": ["6438 Hollywood Blvd."],
    "lat": [34.1013004],
    "lng": [-118.3307561]
}, {
    "fullName": "Tito Puente",
    "category": ["Recording"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "George Putnam (newsman)",
    "category": ["Television"],
    "address": ["6374 Hollywood Blvd."],
    "lat": [34.101332],
    "lng": [-118.329136]
}, {
    "fullName": "Dennis Quaid",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Randy Quaid",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Queen (band)",
    "category": ["Recording"],
    "address": ["6356 Hollywood Blvd."],
    "lat": [34.101267],
    "lng": [-118.328501]
}, {
    "fullName": "Daniel Radcliffe",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Gilda Radner",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "George Raft",
    "category": ["Motion pictures", "Television"],
    "address": ["6159 Hollywood Blvd.", "1500 Vine Street"],
    "lat": [34.101656, 34.098332],
    "lng": [-118.3239786, -118.3262557]
}, {
    "fullName": "Luise Rainer",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Claude Rains",
    "category": ["Motion pictures"],
    "address": ["6400 Hollywood Blvd."],
    "lat": [34.101368],
    "lng": [-118.32983]
}, {
    "fullName": "Ella Raines",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "John Raitt",
    "category": ["Live performance"],
    "address": ["6126 Hollywood Blvd."],
    "lat": [34.1012695],
    "lng": [-118.3232478]
}, {
    "fullName": "Bonnie Raitt",
    "category": ["Recording"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Esther Ralston",
    "category": ["Motion pictures"],
    "address": ["6664 Hollywood Blvd."],
    "lat": [34.1012733],
    "lng": [-118.3356135]
}, {
    "fullName": "Vera Ralston",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Marjorie Rambeau",
    "category": ["Motion pictures"],
    "address": ["6336 Hollywood Blvd."],
    "lat": [34.1013306],
    "lng": [-118.3278499]
}, {
    "fullName": "Rascal Flatts",
    "category": ["Recording"],
    "address": ["6664 Hollywood Blvd."],
    "lat": [34.1012733],
    "lng": [-118.3356135]
}, {
    "fullName": "Basil Rathbone",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6549 Hollywood Blvd.", "6300 Hollywood Blvd.", "6915 Hollywood Blvd."],
    "lat": [34.101912, 34.1014324, 34.1015614],
    "lng": [-118.332789, -118.3270755, -118.340782]
}, {
    "fullName": "Gregory Ratoff",
    "category": ["Motion pictures"],
    "address": ["6100 Hollywood Blvd."],
    "lat": [34.1016341],
    "lng": [-118.3223743]
}, {
    "fullName": "Herbert Rawlinson",
    "category": ["Motion pictures"],
    "address": ["6150 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.324035]
}, {
    "fullName": "Lou Rawls",
    "category": ["Recording"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Charles Ray (actor)",
    "category": ["Motion pictures"],
    "address": ["6355 Hollywood Blvd."],
    "lat": [34.1016381],
    "lng": [-118.3286782]
}, {
    "fullName": "Johnnie Ray",
    "category": ["Recording"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Martha Raye",
    "category": ["Motion pictures", "Television"],
    "address": ["6251 Hollywood Blvd.", "6547 Hollywood Blvd."],
    "lat": [34.101947, 34.1018535],
    "lng": [-118.326127, -118.3327321]
}, {
    "fullName": "Gene Raymond",
    "category": ["Motion pictures", "Television"],
    "address": ["7001 Hollywood Blvd.", "1708 Vine Street"],
    "lat": [34.1020282, 34.101897],
    "lng": [-118.3419771, -118.3265753]
}, {
    "fullName": "Ronald Reagan",
    "category": ["Television"],
    "address": ["6374 Hollywood Blvd."],
    "lat": [34.101332],
    "lng": [-118.329136]
}, {
    "fullName": "Helen Reddy",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Sumner Redstone",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Donna Reed",
    "category": ["Motion pictures"],
    "address": ["1612 Vine Street"],
    "lat": [34.1000307],
    "lng": [-118.3266479]
}, {
    "fullName": "Della Reese",
    "category": ["Television"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Christopher Reeve",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "George Reeves",
    "category": ["Television"],
    "address": ["6709 Hollywood Blvd."],
    "lat": [34.1017451],
    "lng": [-118.3364833]
}, {
    "fullName": "Keanu Reeves",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Wallace Reid",
    "category": ["Motion pictures"],
    "address": ["6617 Hollywood Blvd"],
    "lat": [34.1015985],
    "lng": [-118.3338664]
}, {
    "fullName": "Carl Reiner",
    "category": ["Television"],
    "address": ["6421 Hollywood Blvd."],
    "lat": [34.1016202],
    "lng": [-118.3302125]
}, {
    "fullName": "Rob Reiner",
    "category": ["Motion pictures"],
    "address": ["6421 Hollywood Blvd."],
    "lat": [34.1016202],
    "lng": [-118.3302125]
}, {
    "fullName": "Irving Reis",
    "category": ["Motion pictures"],
    "address": ["6912 Hollywood Blvd."],
    "lat": [34.101158],
    "lng": [-118.340454]
}, {
    "fullName": "Ivan Reitman",
    "category": ["Motion pictures"],
    "address": ["7024 Hollywood Blvd"],
    "lat": [34.101279],
    "lng": [-118.342172]
}, {
    "fullName": "Lee Remick",
    "category": ["Motion pictures"],
    "address": ["6104 Hollywood Blvd."],
    "lat": [34.101245],
    "lng": [-118.322947]
}, {
    "fullName": "Duncan Renaldo",
    "category": ["Television"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Henri René",
    "category": ["Recording"],
    "address": ["1610 Vine Street"],
    "lat": [34.099994],
    "lng": [-118.3266481]
}, {
    "fullName": "Ray Rennahan",
    "category": ["Motion pictures"],
    "address": ["6916 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.3404674]
}, {
    "fullName": "Jean Renoir",
    "category": ["Motion pictures"],
    "address": ["6212 Hollywood Blvd."],
    "lat": [34.1016279],
    "lng": [-118.3246806]
}, {
    "fullName": "Burt Reynolds",
    "category": ["Motion pictures"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Debbie Reynolds",
    "category": ["Motion pictures"],
    "address": ["6654 Hollywood Blvd."],
    "lat": [34.1013666],
    "lng": [-118.3353076]
}, {
    "fullName": "Marjorie Reynolds",
    "category": ["Television"],
    "address": ["1525 Vine Street"],
    "lat": [34.098779],
    "lng": [-118.3267738]
}, {
    "fullName": "Quentin Reynolds",
    "category": ["Radio"],
    "address": ["6225 Hollywood Blvd."],
    "lat": [34.1017951],
    "lng": [-118.3254533]
}, {
    "fullName": "Grantland Rice",
    "category": ["Radio"],
    "address": ["1632 Vine Street"],
    "lat": [34.1002767],
    "lng": [-118.3266477]
}, {
    "fullName": "Tim Rice",
    "category": ["Live performance"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Irene Rich",
    "category": ["Motion pictures", "Radio"],
    "address": ["6225 Hollywood Blvd.", "6150 Hollywood Blvd."],
    "lat": [34.1017951, 34.101323],
    "lng": [-118.3254533, -118.324035]
}, {
    "fullName": "Little Richard",
    "category": ["Recording"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Lionel Richie",
    "category": ["Recording"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Don Rickles",
    "category": ["Live performance"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Nelson Riddle",
    "category": ["Recording"],
    "address": ["6724 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.33726]
}, {
    "fullName": "Tommy Riggs and Betty Lou",
    "category": ["Radio"],
    "address": ["6164 Hollywood Blvd."],
    "lat": [34.101628],
    "lng": [-118.3243669]
}, {
    "fullName": "Rin Tin Tin",
    "category": ["Motion pictures"],
    "address": ["1623 Vine Street"],
    "lat": [34.100361],
    "lng": [-118.3266854]
}, {
    "fullName": "Kelly Ripa",
    "category": ["Television"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Robert Ripley",
    "category": ["Radio"],
    "address": ["6400 Hollywood Blvd"],
    "lat": [34.101368],
    "lng": [-118.32983]
}, {
    "fullName": "John Ritter",
    "category": ["Television"],
    "address": ["6631 Hollywood Blvd."],
    "lat": [34.1015861],
    "lng": [-118.3345231]
}, {
    "fullName": "Tex Ritter",
    "category": ["Recording"],
    "address": ["6631 Hollywood Blvd."],
    "lat": [34.1015861],
    "lng": [-118.3345231]
}, {
    "fullName": "The Ritz Brothers",
    "category": ["Motion pictures", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6756 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.1013382, 34.0522342],
    "lng": [-118.3378074, -118.2436849]
}, {
    "fullName": "Joan Rivers",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Hal Roach",
    "category": ["Motion pictures"],
    "address": ["1654 Vine Street"],
    "lat": [34.100684],
    "lng": [-118.3265584]
}, {
    "fullName": "Harold Robbins",
    "category": ["Motion pictures"],
    "address": ["6743 Hollywood Blvd."],
    "lat": [34.101884],
    "lng": [-118.337272]
}, {
    "fullName": "Marty Robbins",
    "category": ["Recording"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Tim Robbins",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Doris Roberts",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Theodore Roberts",
    "category": ["Motion pictures"],
    "address": ["6166 Hollywood Blvd."],
    "lat": [34.101628],
    "lng": [-118.3243736]
}, {
    "fullName": "Cliff Robertson",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Dale Robertson",
    "category": ["Television"],
    "address": ["6500 Hollywood Blvd."],
    "lat": [34.1013467],
    "lng": [-118.3312743]
}, {
    "fullName": "Paul Robeson",
    "category": ["Motion pictures"],
    "address": ["6660 Hollywood Blvd."],
    "lat": [34.1014235],
    "lng": [-118.3354943]
}, {
    "fullName": "Edward G. Robinson",
    "category": ["Motion pictures"],
    "address": ["6235 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3254922]
}, {
    "fullName": "Smokey Robinson",
    "category": ["Recording"],
    "address": ["1500 N. Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Mark Robson",
    "category": ["Motion pictures"],
    "address": ["1720 Vine Street"],
    "lat": [34.1026219],
    "lng": [-118.326225]
}, {
    "fullName": "Eddie Anderson (comedian)",
    "category": ["Radio"],
    "address": ["6513 Hollywood Blvd."],
    "lat": [34.1019476],
    "lng": [-118.3313953]
}, {
    "fullName": "Chris Rock",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Gene Roddenberry",
    "category": ["Television"],
    "address": ["6683 Hollywood Blvd."],
    "lat": [34.1016616],
    "lng": [-118.3359324]
}, {
    "fullName": "Kenny Rogers",
    "category": ["Recording"],
    "address": ["6666 Hollywood Blvd."],
    "lat": [34.1012796],
    "lng": [-118.3357419]
}, {
    "fullName": "Charles \"Buddy\" Rogers",
    "category": ["Motion pictures"],
    "address": ["6135 Hollywood Blvd."],
    "lat": [34.10165690000001],
    "lng": [-118.3235497]
}, {
    "fullName": "Fred Rogers",
    "category": ["Television"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Ginger Rogers",
    "category": ["Motion pictures"],
    "address": ["6772 Hollywood Blvd."],
    "lat": [34.1015311],
    "lng": [-118.3379735]
}, {
    "fullName": "Roy Rogers",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["1752 Vine Street", "1733 Vine Street", "1620 Vine Street"],
    "lat": [34.1029238, 34.1026583, 34.1001604],
    "lng": [-118.3266713, -118.3267102, -118.3266475]
}, {
    "fullName": "Wayne Rogers",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd. "],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Will Rogers",
    "category": ["Motion pictures", "Radio"],
    "address": ["6401 Hollywood Blvd.", "6608 Hollywood Blvd."],
    "lat": [34.101877, 34.101255],
    "lng": [-118.32977, -118.333596]
}, {
    "fullName": "Gilbert Roland",
    "category": ["Motion pictures"],
    "address": ["6730 Hollywood Blvd."],
    "lat": [34.1015451],
    "lng": [-118.3370956]
}, {
    "fullName": "Ruth Roland",
    "category": ["Motion pictures"],
    "address": ["6260 Hollywood Blvd."],
    "lat": [34.1016254],
    "lng": [-118.3255754]
}, {
    "fullName": "Ruth Roman",
    "category": ["Television"],
    "address": ["6672 Hollywood Blvd."],
    "lat": [34.1012595],
    "lng": [-118.3358911]
}, {
    "fullName": "Mickey Rooney",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["1718 Vine Street", "6372 Hollywood Blvd", "6541 Hollywood Blvd"],
    "lat": [34.1022865, 34.1016048, 34.1019042],
    "lng": [-118.3263373, -118.3289138, -118.3326262]
}, {
    "fullName": "David Rose (songwriter)",
    "category": ["Recording"],
    "address": ["6514 Hollywood Blvd."],
    "lat": [34.1015826],
    "lng": [-118.3316414]
}, {
    "fullName": "Roseanne Barr",
    "category": ["Television"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "Diana Ross",
    "category": ["Recording"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Lanny Ross",
    "category": ["Radio"],
    "address": ["6777 Hollywood Blvd"],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Marion Ross",
    "category": ["Television"],
    "address": ["6420 Hollywood Blvd."],
    "lat": [34.1013575],
    "lng": [-118.330543]
}, {
    "fullName": "Robert Rossen",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Henry Rowland (actor)",
    "category": ["Television"],
    "address": ["6328 Hollywood Blvd."],
    "lat": [34.1013272],
    "lng": [-118.327674]
}, {
    "fullName": "Richard A. Rowland",
    "category": ["Motion pictures"],
    "address": ["1549 Vine Street"],
    "lat": [34.0990288],
    "lng": [-118.3266843]
}, {
    "fullName": "Alma Rubens",
    "category": ["Motion pictures"],
    "address": ["6409 Hollywood Blvd."],
    "lat": [34.1016217],
    "lng": [-118.3299471]
}, {
    "fullName": "Arthur Rubinstein",
    "category": ["Recording"],
    "address": ["1737 Vine Street"],
    "lat": [34.1027365],
    "lng": [-118.3267098]
}, {
    "fullName": "Paul Rudd",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Evelyn Rudie",
    "category": ["Television"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Charles Ruggles",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6264 Hollywood Blvd.", "6359 Hollywood Blvd.", "1630 Vine Street"],
    "lat": [34.1016238, 34.1016379, 34.1002573],
    "lng": [-118.3256947, -118.3287514, -118.3266477]
}, {
    "fullName": "Wesley Ruggles",
    "category": ["Motion pictures"],
    "address": ["6424 Hollywood Blvd."],
    "lat": [34.101589],
    "lng": [-118.3302372]
}, {
    "fullName": "Rugrats",
    "category": ["Television"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Rush (band)",
    "category": ["Recording"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Gail Russell",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Harold Russell",
    "category": ["Motion pictures"],
    "address": ["6752 Hollywood Blvd."],
    "lat": [34.1012118],
    "lng": [-118.3376545]
}, {
    "fullName": "Jane Russell",
    "category": ["Motion pictures"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Rosalind Russell",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Ann Rutherford",
    "category": ["Television", "Motion pictures"],
    "address": ["6333 Hollywood Blvd.", "6834 Hollywood Blvd."],
    "lat": [34.10164, 34.101323],
    "lng": [-118.3280376, -118.339741]
}, {
    "fullName": "Sabu Dastagir",
    "category": ["Motion pictures"],
    "address": ["6251 Hollywood Blvd."],
    "lat": [34.101947],
    "lng": [-118.326127]
}, {
    "fullName": "Katey Sagal",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Carole Bayer Sager",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Eva Marie Saint",
    "category": ["Television", "Motion pictures"],
    "address": ["6730 Hollywood Blvd.", "6624 Hollywood Blvd."],
    "lat": [34.1015451, 34.101492],
    "lng": [-118.3370956, -118.3340618]
}, {
    "fullName": "Susan Saint James",
    "category": ["Television"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Al St. John",
    "category": ["Motion pictures"],
    "address": ["6313 Hollywood Blvd."],
    "lat": [34.1016463],
    "lng": [-118.3270932]
}, {
    "fullName": "Adela Rogers St. Johns",
    "category": ["Motion pictures"],
    "address": ["6424 Hollywood Blvd."],
    "lat": [34.101589],
    "lng": [-118.3302372]
}, {
    "fullName": "Pat Sajak",
    "category": ["Television"],
    "address": ["6200 Hollywood Blvd."],
    "lat": [34.1013189],
    "lng": [-118.324681]
}, {
    "fullName": "Soupy Sales",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "George Sanders",
    "category": ["Motion pictures", "Television"],
    "address": ["1636 Vine Street", "7007 Hollywood Blvd."],
    "lat": [34.1003349, 34.1015612],
    "lng": [-118.3266478, -118.3419572]
}, {
    "fullName": "Julia Sanderson",
    "category": ["Radio"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "Adam Sandler",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Mark Sandrich",
    "category": ["Motion pictures"],
    "address": ["1719 Vine Street"],
    "lat": [34.1022377],
    "lng": [-118.3267124]
}, {
    "fullName": "Tommy Sands (entertainer)",
    "category": ["Recording"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Isabel Sanford",
    "category": ["Television", "Recording"],
    "address": ["7080 Hollywood Blvd.", "7080 Hollywood Blvd."],
    "lat": [34.1011652, 34.1011652],
    "lng": [-118.3444567, -118.3444567]
}, {
    "fullName": "Carlos Santana",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Susan Sarandon",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Cristina Saralegui",
    "category": ["Television"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Telly Savalas",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Joseph M. Schenck",
    "category": ["Motion pictures"],
    "address": ["6757 Hollywood Blvd."],
    "lat": [34.1018734],
    "lng": [-118.3377769]
}, {
    "fullName": "Victor Schertzinger",
    "category": ["Motion pictures"],
    "address": ["1611 Vine Street"],
    "lat": [34.0999941],
    "lng": [-118.3266857]
}, {
    "fullName": "Lalo Schifrin",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Joseph Schildkraut",
    "category": ["Motion pictures"],
    "address": ["6780 Hollywood Blvd."],
    "lat": [34.1013355],
    "lng": [-118.3384643]
}, {
    "fullName": "George Schlatter",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Al Schmitt",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Ernest B. Schoedsack",
    "category": ["Motion pictures"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "B. P. Schulberg",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Charles M. Schulz",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ernestine Schumann-Heink",
    "category": ["Recording"],
    "address": ["6640 Hollywood Blvd."],
    "lat": [34.10138],
    "lng": [-118.3347076]
}, {
    "fullName": "Arnold Schwarzenegger",
    "category": ["Motion pictures"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [34.1012256],
    "lng": [-118.3380301]
}, {
    "fullName": "Sherwood Schwartz",
    "category": ["Television"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Stephen Schwartz (composer)",
    "category": ["Live performance"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Martin Scorsese",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Lizabeth Scott",
    "category": ["Motion pictures"],
    "address": ["1624 Vine Street"],
    "lat": [34.1001992],
    "lng": [-118.3266476]
}, {
    "fullName": "Martha Scott",
    "category": ["Live performance"],
    "address": ["6126 Hollywood Blvd."],
    "lat": [34.1012695],
    "lng": [-118.3232478]
}, {
    "fullName": "Randolph Scott",
    "category": ["Motion pictures"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Ridley Scott",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "Zachary Scott",
    "category": ["Motion pictures"],
    "address": ["6349 Hollywood Blvd."],
    "lat": [34.101945],
    "lng": [-118.328524]
}, {
    "fullName": "Vin Scully",
    "category": ["Radio"],
    "address": ["6675 Hollywood Blvd."],
    "lat": [34.1018126],
    "lng": [-118.3356413]
}, {
    "fullName": "Earl Scruggs",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ryan Seacrest",
    "category": ["Radio"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "George Seaton",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Dorothy Sebastian",
    "category": ["Motion pictures"],
    "address": ["6655 Hollywood Blvd."],
    "lat": [34.10183749999999],
    "lng": [-118.3350137]
}, {
    "fullName": "Neil Sedaka",
    "category": ["Recording"],
    "address": ["Sunset & Vine"],
    "lat": [46.5142503],
    "lng": [-86.0847446]
}, {
    "fullName": "Edward Sedgwick",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Kyra Sedgwick",
    "category": ["Television"],
    "address": ["6356 Hollywood Blvd."],
    "lat": [34.101267],
    "lng": [-118.328501]
}, {
    "fullName": "Bob Seger",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "William A. Seiter",
    "category": ["Motion pictures"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "William Nicholas Selig",
    "category": ["Motion pictures"],
    "address": ["6116 Hollywood Blvd."],
    "lat": [34.101633],
    "lng": [-118.3230552]
}, {
    "fullName": "Tom Selleck",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "David O. Selznick",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Lewis J. Selznick",
    "category": ["Motion pictures"],
    "address": ["6412 Hollywood Blvd."],
    "lat": [34.1014444],
    "lng": [-118.3301962]
}, {
    "fullName": "Larry Semon",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Mack Sennett",
    "category": ["Motion pictures"],
    "address": ["6710 Hollywood Blvd."],
    "lat": [34.10155200000001],
    "lng": [-118.3365455]
}, {
    "fullName": "Rudolf Serkin",
    "category": ["Recording"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Rod Serling",
    "category": ["Television"],
    "address": ["6840 Hollywood Blvd."],
    "lat": [34.1011655],
    "lng": [-118.3401566]
}, {
    "fullName": "Mark Serrurier",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Dr. Seuss",
    "category": ["Motion pictures"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Jane Seymour (actress)",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Shakira",
    "category": ["Recording"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Leon Shamroy",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "William Shatner",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Artie Shaw",
    "category": ["Recording"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Robert Shaw (conductor)",
    "category": ["Recording"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Norma Shearer",
    "category": ["Motion pictures"],
    "address": ["6636 Hollywood Blvd."],
    "lat": [34.1013631],
    "lng": [-118.3345264]
}, {
    "fullName": "George Shearing",
    "category": ["Recording"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Charlie Sheen",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Sidney Sheldon",
    "category": ["Television"],
    "address": ["6739 Hollywood Blvd."],
    "lat": [34.1017003],
    "lng": [-118.3371117]
}, {
    "fullName": "Cybill Shepherd",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Bobby Sherwood",
    "category": ["Television"],
    "address": ["1625 Vine Street"],
    "lat": [34.100471],
    "lng": [-118.3266855]
}, {
    "fullName": "Anne Shirley (actress)",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Dinah Shore",
    "category": ["Radio", "Recording", "Television"],
    "address": ["1751 Vine Street", "6901 Hollywood Blvd.", "6916 Hollywood Blvd."],
    "lat": [34.1028631, 34.1015575, 34.1015283],
    "lng": [-118.3267092, -118.3401645, -118.3404674]
}, {
    "fullName": "Shrek (character)",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "George Sidney",
    "category": ["Motion pictures"],
    "address": ["6307 Hollywood Blvd."],
    "lat": [34.1016487],
    "lng": [-118.3268912]
}, {
    "fullName": "Sylvia Sidney",
    "category": ["Motion pictures"],
    "address": ["6245 Hollywood Blvd."],
    "lat": [34.1018639],
    "lng": [-118.3257753]
}, {
    "fullName": "Siegfried & Roy",
    "category": ["Live performance"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Beverly Sills",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Milton Sills",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Joel Silver",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Jay Silverheels",
    "category": ["Television"],
    "address": ["6538 Hollywood Blvd."],
    "lat": [34.1013391],
    "lng": [-118.3323526]
}, {
    "fullName": "Phil Silvers",
    "category": ["Television"],
    "address": ["6370 Hollywood Blvd."],
    "lat": [34.1013278],
    "lng": [-118.3290126]
}, {
    "fullName": "Frank Sinatra",
    "category": ["Motion pictures", "Recording", "Television"],
    "address": ["1600 Vine Street", "1637 Vine Street", "6538 Hollywood Blvd."],
    "lat": [34.1003574, 34.1009204, 34.1013391],
    "lng": [-118.3259214, -118.3270635, -118.3323526]
}, {
    "fullName": "Nancy Sinatra",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd. "],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "John Singleton",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Penny Singleton",
    "category": ["Motion pictures", "Radio"],
    "address": ["6547 Hollywood Blvd.", "6811 Hollywood Blvd."],
    "lat": [34.1018535, 34.1015611],
    "lng": [-118.3327321, -118.3388643]
}, {
    "fullName": "Red Skelton",
    "category": ["Radio", "Television"],
    "address": ["6763 Hollywood Blvd.", "6650 Hollywood Blvd."],
    "lat": [34.101958, 34.1014057],
    "lng": [-118.33815, -118.3352513]
}, {
    "fullName": "Slash (musician)",
    "category": ["Recording"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Everett Sloane",
    "category": ["Television"],
    "address": ["6254 Hollywood Blvd."],
    "lat": [34.10162529999999],
    "lng": [-118.3254104]
}, {
    "fullName": "Edward Small",
    "category": ["Motion pictures"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Tavis Smiley",
    "category": ["Television"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "C. Aubrey Smith",
    "category": ["Motion pictures"],
    "address": ["6327 Hollywood Blvd."],
    "lat": [34.1019719],
    "lng": [-118.3277089]
}, {
    "fullName": "Carl Smith (country musician)",
    "category": ["Recording"],
    "address": ["1517 Vine Street"],
    "lat": [34.0986046],
    "lng": [-118.3271778]
}, {
    "fullName": "Smilin' Jack Smith",
    "category": ["Radio"],
    "address": ["6145 Hollywood Blvd."],
    "lat": [34.1016546],
    "lng": [-118.323803]
}, {
    "fullName": "Jaclyn Smith",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Joe Smith (music manager)",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["1750 N. Vine Street", "! Name !! Category !! Address"],
    "lat": [34.1031131, 34.0522342],
    "lng": [-118.326343, -118.2436849]
}, {
    "fullName": "Kate Smith",
    "category": ["Recording", "Radio"],
    "address": ["6157 Hollywood Blvd.", "6145 Hollywood Blvd."],
    "lat": [34.1016558, 34.1016546],
    "lng": [-118.3239536, -118.323803]
}, {
    "fullName": "Keely Smith",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Wesley Snipes",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Snoopy",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Snow White (Disney)",
    "category": ["Motion pictures"],
    "address": ["6910 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3404387]
}, {
    "fullName": "Marco Antonio Solís",
    "category": ["Recording"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Suzanne Somers",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Sonny & Cher",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "The Sons of the Pioneers",
    "category": ["Recording"],
    "address": ["6845 Hollywood Blvd."],
    "lat": [34.1015596],
    "lng": [-118.3393489]
}, {
    "fullName": "Ann Sothern",
    "category": ["Motion pictures", "Television"],
    "address": ["1612 Vine Street", "1634 Vine Street"],
    "lat": [34.1000307, 34.1002962],
    "lng": [-118.3266479, -118.3265578]
}, {
    "fullName": "John Philip Sousa",
    "category": ["Recording"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Sissy Spacek",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Kevin Spacey",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "David Spade",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Britney Spears",
    "category": ["Recording"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Aaron Spelling",
    "category": ["Television"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Arthur Spiegel",
    "category": ["Motion pictures"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Steven Spielberg",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "The Spinners (American R&B group)",
    "category": ["Recording"],
    "address": ["6723 Hollywood Blvd."],
    "lat": [34.1018179],
    "lng": [-118.3368141]
}, {
    "fullName": "Phil Spitalny",
    "category": ["Radio"],
    "address": ["6364 Hollywood Blvd."],
    "lat": [34.1013953],
    "lng": [-118.3286886]
}, {
    "fullName": "Rick Springfield",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Robert Stack",
    "category": ["Motion pictures"],
    "address": ["7001 Hollywood Blvd."],
    "lat": [34.1020282],
    "lng": [-118.3419771]
}, {
    "fullName": "Hanley Stafford",
    "category": ["Radio"],
    "address": ["1640 Vine Street"],
    "lat": [34.1004125],
    "lng": [-118.3266479]
}, {
    "fullName": "Jo Stafford",
    "category": ["Radio", "Recording", "Television"],
    "address": ["1709 Vine Street", "1625 Vine Street", "6270 Hollywood Blvd."],
    "lat": [34.1019261, 34.100471, 34.1016227],
    "lng": [-118.3267039, -118.3266855, -118.3258727]
}, {
    "fullName": "John M. Stahl",
    "category": ["Motion pictures"],
    "address": ["6546 Hollywood Blvd."],
    "lat": [34.1013554],
    "lng": [-118.3326691]
}, {
    "fullName": "Sylvester Stallone",
    "category": ["Motion pictures"],
    "address": ["6712 Hollywood Blvd."],
    "lat": [34.1014167],
    "lng": [-118.3365429]
}, {
    "fullName": "John Stamos",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Barbara Stanwyck",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Pauline Starke",
    "category": ["Motion pictures"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "Kay Starr",
    "category": ["Recording"],
    "address": ["1716 Vine Street"],
    "lat": [34.1021774],
    "lng": [-118.3266752]
}, {
    "fullName": "Ringo Starr",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Ralph Staub",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Eleanor Steber",
    "category": ["Recording"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Don Steele",
    "category": ["Radio"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Mary Steenburgen",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Rod Steiger",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Jules C. Stein",
    "category": ["Motion pictures"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "William Steinberg",
    "category": ["Recording"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Max Steiner",
    "category": ["Motion pictures"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Ford Sterling",
    "category": ["Motion pictures"],
    "address": ["6612 Hollywood Blvd."],
    "lat": [34.1015688],
    "lng": [-118.3336881]
}, {
    "fullName": "Jan Sterling",
    "category": ["Motion pictures"],
    "address": ["6638 Hollywood Blvd."],
    "lat": [34.1012392],
    "lng": [-118.3345573]
}, {
    "fullName": "Robert Sterling",
    "category": ["Television"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Bill Stern",
    "category": ["Radio"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Isaac Stern",
    "category": ["Recording"],
    "address": ["6540 Hollywood Blvd."],
    "lat": [34.101461],
    "lng": [-118.3323845]
}, {
    "fullName": "Steve Miller Band",
    "category": ["Recording"],
    "address": ["1750 Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Connie Stevens",
    "category": ["Television"],
    "address": ["6249 Hollywood Blvd."],
    "lat": [34.101655],
    "lng": [-118.3256891]
}, {
    "fullName": "George Stevens",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Mark Stevens (actor)",
    "category": ["Television"],
    "address": ["6637 Hollywood Blvd."],
    "lat": [34.1015956],
    "lng": [-118.3346049]
}, {
    "fullName": "Onslow Stevens",
    "category": ["Motion pictures"],
    "address": ["6349 Hollywood Blvd."],
    "lat": [34.101945],
    "lng": [-118.328524]
}, {
    "fullName": "Anita Stewart",
    "category": ["Motion pictures"],
    "address": ["6724 Hollywood Blvd."],
    "lat": [34.101222],
    "lng": [-118.33726]
}, {
    "fullName": "James Stewart",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Patrick Stewart",
    "category": ["Live performance"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Mauritz Stiller",
    "category": ["Motion pictures"],
    "address": ["1713 Vine Street"],
    "lat": [34.1020553],
    "lng": [-118.3267087]
}, {
    "fullName": "Sting (musician)",
    "category": ["Recording"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Frederick Stock",
    "category": ["Recording"],
    "address": ["1547 Vine Street"],
    "lat": [34.098991],
    "lng": [-118.3266842]
}, {
    "fullName": "Leopold Stokowski",
    "category": ["Recording"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Dean Stockwell",
    "category": ["Motion pictures", "Mike Stoller and Jerry Leiber"],
    "address": ["7000 Hollywood Blvd.", "colspan=\"2\" | ''see [[#Leiber|Jerry Leiber and Mike Stoller]]''"],
    "lat": [34.1012777, 99],
    "lng": [-118.3416128, 99]
}, {
    "fullName": "Morris Stoloff",
    "category": ["Recording"],
    "address": ["6702 Hollywood Blvd."],
    "lat": [34.1013823],
    "lng": [-118.3363199]
}, {
    "fullName": "Andrew L. Stone",
    "category": ["Motion pictures"],
    "address": ["6777 Hollywood Blvd."],
    "lat": [34.1018431],
    "lng": [-118.3384573]
}, {
    "fullName": "Cliffie Stone",
    "category": ["Radio"],
    "address": ["1501 Vine Street"],
    "lat": [34.0985524],
    "lng": [-118.3273669]
}, {
    "fullName": "Ezra Stone",
    "category": ["Radio"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "Fred Stone",
    "category": ["Motion pictures"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "George E. Stone",
    "category": ["Motion pictures"],
    "address": ["6932 Hollywood Blvd."],
    "lat": [34.1015289],
    "lng": [-118.3405681]
}, {
    "fullName": "Lewis Stone",
    "category": ["Motion pictures"],
    "address": ["6526 Hollywood Blvd."],
    "lat": [34.1015819],
    "lng": [-118.3320376]
}, {
    "fullName": "Milburn Stone",
    "category": ["Motion pictures"],
    "address": ["6823 Hollywood Blvd."],
    "lat": [34.10156],
    "lng": [-118.3390253]
}, {
    "fullName": "Oliver Stone",
    "category": ["Motion pictures"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Sharon Stone",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Edith Storey",
    "category": ["Motion pictures"],
    "address": ["1523 Vine Street"],
    "lat": [34.098721],
    "lng": [-118.3267737]
}, {
    "fullName": "Gale Storm",
    "category": ["Radio", "Recording", "Television"],
    "address": ["6119 Hollywood Blvd.", "1519 Vine Street", "1680 Vine Street"],
    "lat": [34.1016658, 34.0985355, 34.101281],
    "lng": [-118.3229884, -118.3266825, -118.326315]
}, {
    "fullName": "Bill Stout",
    "category": ["Television"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Lee Strasberg",
    "category": ["Motion pictures"],
    "address": ["6757 Hollywood Blvd."],
    "lat": [34.1018734],
    "lng": [-118.3377769]
}, {
    "fullName": "Igor Stravinsky",
    "category": ["Radio"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Meryl Streep",
    "category": ["Motion pictures"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Barbra Streisand",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Strongheart",
    "category": ["Motion pictures"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Gloria Stuart",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "John Sturges",
    "category": ["Motion pictures"],
    "address": ["6511 Hollywood Blvd."],
    "lat": [34.1018738],
    "lng": [-118.3314931]
}, {
    "fullName": "Preston Sturges",
    "category": ["Motion pictures"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Margaret Sullavan",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Barry Sullivan (actor)",
    "category": ["Motion pictures", "Television"],
    "address": ["6160 Hollywood Blvd.", "1500 Vine Street"],
    "lat": [34.101321, 34.098332],
    "lng": [-118.324357, -118.3262557]
}, {
    "fullName": "Ed Sullivan",
    "category": ["Television"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "Yma Sumac",
    "category": ["Recording"],
    "address": ["6445 Hollywood Blvd."],
    "lat": [34.1016197],
    "lng": [-118.3303009]
}, {
    "fullName": "Donna Summer",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Slim Summerville",
    "category": ["Motion pictures"],
    "address": ["6409 Hollywood Blvd."],
    "lat": [34.1016217],
    "lng": [-118.3299471]
}, {
    "fullName": "KC and the Sunshine Band",
    "category": ["Recording"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "The Supremes",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Donald Sutherland",
    "category": ["Motion pictures"],
    "address": ["7024 Hollywood Blvd."],
    "lat": [34.101279],
    "lng": [-118.342172]
}, {
    "fullName": "Kiefer Sutherland",
    "category": ["Television"],
    "address": ["7024 Hollywood Blvd."],
    "lat": [34.101279],
    "lng": [-118.342172]
}, {
    "fullName": "Mack Swain",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Hilary Swank",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Gloria Swanson",
    "category": ["Television", "Motion pictures"],
    "address": ["6301 Hollywood Blvd.", "6750 Hollywood Blvd."],
    "lat": [34.1019689, 34.1015234],
    "lng": [-118.327043, -118.3372778]
}, {
    "fullName": "Gladys Swarthout",
    "category": ["Recording"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Patrick Swayze",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Blanche Sweet",
    "category": ["Motion pictures"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Loretta Swit",
    "category": ["Television"],
    "address": ["6240 Hollywood Blvd."],
    "lat": [34.101317],
    "lng": [-118.324973]
}, {
    "fullName": "George Takei",
    "category": ["Television"],
    "address": ["6681 Hollywood Blvd."],
    "lat": [34.101849],
    "lng": [-118.33589]
}, {
    "fullName": "Mabel Taliaferro",
    "category": ["Motion pictures"],
    "address": ["6720 Hollywood Blvd."],
    "lat": [34.1013586],
    "lng": [-118.3368433]
}, {
    "fullName": "Constance Talmadge",
    "category": ["Motion pictures"],
    "address": ["6300 Hollywood Blvd."],
    "lat": [34.1014324],
    "lng": [-118.3270755]
}, {
    "fullName": "Norma Talmadge",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Akim Tamiroff",
    "category": ["Motion pictures"],
    "address": ["1634 Vine Street"],
    "lat": [34.1002962],
    "lng": [-118.3265578]
}, {
    "fullName": "Jessica Tandy",
    "category": ["Motion pictures"],
    "address": ["6284 Hollywood Blvd."],
    "lat": [34.1016213],
    "lng": [-118.3262827]
}, {
    "fullName": "Quentin Tarantino",
    "category": ["Motion pictures"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Norman Taurog",
    "category": ["Motion pictures"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Elizabeth Taylor",
    "category": ["Motion pictures"],
    "address": ["6336 Hollywood Blvd."],
    "lat": [34.1013306],
    "lng": [-118.3278499]
}, {
    "fullName": "Estelle Taylor",
    "category": ["Motion pictures"],
    "address": ["1620 Vine Street"],
    "lat": [34.1001604],
    "lng": [-118.3266475]
}, {
    "fullName": "Kent Taylor",
    "category": ["Television"],
    "address": ["6818 Hollywood Blvd."],
    "lat": [34.1013632],
    "lng": [-118.3393634]
}, {
    "fullName": "Rip Taylor",
    "category": ["Live performance"],
    "address": ["6625 Hollywood Blvd."],
    "lat": [34.1015964],
    "lng": [-118.3343821]
}, {
    "fullName": "Robert Taylor (actor)",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Ruth Ashton Taylor",
    "category": ["Television"],
    "address": ["1540 Vine Street"],
    "lat": [34.099364],
    "lng": [-118.325895]
}, {
    "fullName": "Renata Tebaldi",
    "category": ["Recording"],
    "address": ["6628 Hollywood Blvd."],
    "lat": [34.101411],
    "lng": [-118.3342929]
}, {
    "fullName": "Shirley Temple",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Alec Templeton",
    "category": ["Radio"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "The Temptations",
    "category": ["Recording"],
    "address": ["7060 Hollywood Blvd."],
    "lat": [34.1011635],
    "lng": [-118.3437162]
}, {
    "fullName": "Alice Terry",
    "category": ["Motion pictures"],
    "address": ["6626 Hollywood Blvd."],
    "lat": [34.1012877],
    "lng": [-118.3341183]
}, {
    "fullName": "John Tesh",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Irving Thalberg",
    "category": ["Motion pictures"],
    "address": ["7006 Hollywood Blvd."],
    "lat": [34.1015298],
    "lng": [-118.3417517]
}, {
    "fullName": "Thalía",
    "category": ["Recording"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Phyllis Thaxter",
    "category": ["Motion pictures"],
    "address": ["6531 Hollywood Blvd."],
    "lat": [34.102011],
    "lng": [-118.332242]
}, {
    "fullName": "Blanche Thebom",
    "category": ["Recording"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Charlize Theron",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Bob Thomas (reporter)",
    "category": ["Motion pictures"],
    "address": ["6841 Hollywood Blvd."],
    "lat": [34.1015597],
    "lng": [-118.33929]
}, {
    "fullName": "Danny Thomas",
    "category": ["Television"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Jay Thomas",
    "category": ["Radio"],
    "address": ["6161 Hollywood Blvd."],
    "lat": [34.1016562],
    "lng": [-118.3240037]
}, {
    "fullName": "John Charles Thomas",
    "category": ["Recording"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Lowell Thomas",
    "category": ["Motion pictures", "Radio"],
    "address": ["6433 Hollywood Blvd.", "1752 Vine Street"],
    "lat": [34.1020674, 34.1029238],
    "lng": [-118.3305954, -118.3266713]
}, {
    "fullName": "Marlo Thomas",
    "category": ["Television"],
    "address": ["6904 Hollywood Blvd."],
    "lat": [34.1013394],
    "lng": [-118.3404753]
}, {
    "fullName": "Bill Thompson (voice actor)",
    "category": ["Radio"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Emma Thompson",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Fred Thomson",
    "category": ["Motion pictures"],
    "address": ["6850 Hollywood Blvd."],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Billy Bob Thornton",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Richard Thorpe",
    "category": ["Motion pictures"],
    "address": ["6101 Hollywood Blvd."],
    "lat": [34.1016811],
    "lng": [-118.322376]
}, {
    "fullName": "The Three Stooges",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Lawrence Tibbett",
    "category": ["Recording", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6325 Hollywood Blvd.", "! Name !! Category !! Address"],
    "lat": [34.102022, 34.0522342],
    "lng": [-118.3275281, -118.2436849]
}, {
    "fullName": "Gene Tierney",
    "category": ["Motion pictures"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "Tinker Bell",
    "category": ["Motion pictures"],
    "address": ["6834 Hollywood Blvd."],
    "lat": [34.101323],
    "lng": [-118.339741]
}, {
    "fullName": "Steve Tisch",
    "category": ["Motion pictures"],
    "address": ["6522 Hollywood Blvd."],
    "lat": [34.1013404],
    "lng": [-118.3319275]
}, {
    "fullName": "Genevieve Tobin",
    "category": ["Motion pictures"],
    "address": ["6119 Hollywood Blvd."],
    "lat": [34.1016658],
    "lng": [-118.3229884]
}, {
    "fullName": "Thelma Todd",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Franchot Tone",
    "category": ["Motion pictures"],
    "address": ["6560 Hollywood Blvd."],
    "lat": [34.1013472],
    "lng": [-118.3331011]
}, {
    "fullName": "Regis Toomey",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Mel Tormé",
    "category": ["Recording"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "David Torrence",
    "category": ["Motion pictures"],
    "address": ["6564 Hollywood Blvd."],
    "lat": [34.1013698],
    "lng": [-118.3332204]
}, {
    "fullName": "Ernest Torrence",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Arturo Toscanini",
    "category": ["Radio", "Recording"],
    "address": ["6336 Hollywood Blvd.", "6725 Hollywood Blvd."],
    "lat": [34.1013306, 34.1015791],
    "lng": [-118.3278499, -118.336858]
}, {
    "fullName": "Maurice Tourneur",
    "category": ["Motion pictures"],
    "address": ["6243 Hollywood Blvd."],
    "lat": [34.1017886],
    "lng": [-118.3258864]
}, {
    "fullName": "Lee Tracy",
    "category": ["Motion pictures"],
    "address": ["1638 Vine Street"],
    "lat": [34.1003738],
    "lng": [-118.3265579]
}, {
    "fullName": "Spencer Tracy",
    "category": ["Motion pictures"],
    "address": ["6814 Hollywood Blvd."],
    "lat": [34.1014542],
    "lng": [-118.3392574]
}, {
    "fullName": "Helen Traubel",
    "category": ["Recording"],
    "address": ["6422 Hollywood Blvd."],
    "lat": [34.101589],
    "lng": [-118.3302305]
}, {
    "fullName": "Fred Travalena",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd."],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Randy Travis",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "John Travolta",
    "category": ["Motion pictures"],
    "address": ["6901 Hollywood Blvd."],
    "lat": [34.1015575],
    "lng": [-118.3401645]
}, {
    "fullName": "Arthur Treacher",
    "category": ["Motion pictures"],
    "address": ["6274 Hollywood Blvd."],
    "lat": [34.1016222],
    "lng": [-118.3259884]
}, {
    "fullName": "Alex Trebek",
    "category": ["Television"],
    "address": ["6501 Hollywood Blvd."],
    "lat": [34.101895],
    "lng": [-118.331205]
}, {
    "fullName": "Claire Trevor",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Laurence Trimble",
    "category": ["Motion pictures"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Ernest Truex",
    "category": ["Television"],
    "address": ["6721 Hollywood Blvd."],
    "lat": [34.1018216],
    "lng": [-118.3366866]
}, {
    "fullName": "Donald Trump",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd. "],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Ernest Tubb",
    "category": ["Recording"],
    "address": ["1751 Vine Street"],
    "lat": [34.1028631],
    "lng": [-118.3267092]
}, {
    "fullName": "Forrest Tucker",
    "category": ["Motion pictures"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Sophie Tucker",
    "category": ["Motion pictures"],
    "address": ["6321 Hollywood Blvd."],
    "lat": [34.1020118],
    "lng": [-118.3274662]
}, {
    "fullName": "Tom Tully",
    "category": ["Motion pictures"],
    "address": ["6119 Hollywood Blvd."],
    "lat": [34.1016658],
    "lng": [-118.3229884]
}, {
    "fullName": "Charlie Tuna",
    "category": ["Radio"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Tommy Tune",
    "category": ["Live performance"],
    "address": ["1777 Vine Street"],
    "lat": [34.10356],
    "lng": [-118.3271577]
}, {
    "fullName": "Lana Turner",
    "category": ["Motion pictures"],
    "address": ["6241 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3255481]
}, {
    "fullName": "Ted Turner",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Tina Turner",
    "category": ["Recording"],
    "address": ["1750 N. Vine Street"],
    "lat": [34.1031131],
    "lng": [-118.326343]
}, {
    "fullName": "Ben Turpin",
    "category": ["Motion pictures"],
    "address": ["1651 Vine Street"],
    "lat": [34.1007874],
    "lng": [-118.3266861]
}, {
    "fullName": "Lurene Tuttle",
    "category": ["Radio", "Television"],
    "address": ["1760 Vine Street", "7011 Hollywood Blvd."],
    "lat": [34.1029698, 34.101561],
    "lng": [-118.3266711, -118.3420841]
}, {
    "fullName": "Shania Twain",
    "category": ["Recording"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Helen Twelvetrees",
    "category": ["Motion pictures"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Barbara Jo Allen",
    "category": ["Motion pictures", "Radio"],
    "address": ["1720 Vine Street", "1639 Vine Street"],
    "lat": [34.1026219, 34.1009837],
    "lng": [-118.326225, -118.3268649]
}, {
    "fullName": "Ritchie Valens",
    "category": ["Recording"],
    "address": ["6733 Hollywood Blvd."],
    "lat": [34.1018317],
    "lng": [-118.336981]
}, {
    "fullName": "Jack Valenti",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Rudolph Valentino",
    "category": ["Motion pictures"],
    "address": ["6164 Hollywood Blvd."],
    "lat": [34.101628],
    "lng": [-118.3243669]
}, {
    "fullName": "Rudy Vallée",
    "category": ["Radio"],
    "address": ["1632 Vine Street"],
    "lat": [34.1002767],
    "lng": [-118.3266477]
}, {
    "fullName": "Virginia Valli",
    "category": ["Motion pictures"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "Mamie Van Doren",
    "category": ["Motion pictures"],
    "address": ["7057 Hollywood Blvd."],
    "lat": [34.1015607],
    "lng": [-118.3435449]
}, {
    "fullName": "Luther Vandross",
    "category": ["Recording"],
    "address": ["1717 Vine Street"],
    "lat": [34.1023831],
    "lng": [-118.3271246]
}, {
    "fullName": "Dick Van Dyke",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "W. S. Van Dyke",
    "category": ["Motion pictures"],
    "address": ["6141 Hollywood Blvd."],
    "lat": [34.1016545],
    "lng": [-118.3237571]
}, {
    "fullName": "Jo Van Fleet",
    "category": ["Motion pictures"],
    "address": ["7010 Hollywood Blvd."],
    "lat": [34.1015304],
    "lng": [-118.3418654]
}, {
    "fullName": "Dick Van Patten",
    "category": ["Television"],
    "address": ["1541 N. Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Vivian Vance",
    "category": ["Television"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Sarah Vaughan",
    "category": ["Recording"],
    "address": ["1724 Vine Street"],
    "lat": [34.1028702],
    "lng": [-118.3266716]
}, {
    "fullName": "Robert Vaughn",
    "category": ["Motion pictures"],
    "address": ["6633 Hollywood Blvd"],
    "lat": [34.1017827],
    "lng": [-118.3345105]
}, {
    "fullName": "Evelyn Venable",
    "category": ["Motion pictures"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Billy Vera",
    "category": ["Recording"],
    "address": ["1770 Vine Street"],
    "lat": [34.1036096],
    "lng": [-118.326531]
}, {
    "fullName": "Vera-Ellen",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd."],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "Elena Verdugo",
    "category": ["Television"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Sofía Vergara",
    "category": ["Television"],
    "address": ["7013 Hollywood Blvd."],
    "lat": [34.1020027],
    "lng": [-118.3420625]
}, {
    "fullName": "Bobby Vernon",
    "category": ["Motion pictures"],
    "address": ["6825 Hollywood Blvd."],
    "lat": [34.10156],
    "lng": [-118.3390548]
}, {
    "fullName": "Victoria's Secret#Victoria's Secret Angels",
    "category": ["Special"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Charles Vidor",
    "category": ["Motion pictures"],
    "address": ["6676 Hollywood Blvd."],
    "lat": [34.1015557],
    "lng": [-118.3360532]
}, {
    "fullName": "King Vidor",
    "category": ["Motion pictures"],
    "address": ["6743 Hollywood Blvd."],
    "lat": [34.101884],
    "lng": [-118.337272]
}, {
    "fullName": "Village People",
    "category": ["Recording"],
    "address": ["6529 Hollywood Blvd."],
    "lat": [34.1017869],
    "lng": [-118.331964]
}, {
    "fullName": "Gene Vincent",
    "category": ["Recording"],
    "address": ["1749 N.Vine St."],
    "lat": [34.103066],
    "lng": [-118.327155]
}, {
    "fullName": "Helen Vinson",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Bobby Vinton",
    "category": ["Recording"],
    "address": ["6916 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.3404674]
}, {
    "fullName": "Josef von Sternberg",
    "category": ["Motion pictures"],
    "address": ["6401 Hollywood Blvd."],
    "lat": [34.101877],
    "lng": [-118.32977]
}, {
    "fullName": "Erich von Stroheim",
    "category": ["Motion pictures"],
    "address": ["6826 Hollywood Blvd."],
    "lat": [34.1015289],
    "lng": [-118.3390841]
}, {
    "fullName": "Lindsay Wagner",
    "category": ["Television"],
    "address": ["6767 Hollywood Blvd."],
    "lat": [34.1017297],
    "lng": [-118.338087]
}, {
    "fullName": "Robert Wagner",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Roger Wagner",
    "category": ["Recording"],
    "address": ["7003 Hollywood Blvd."],
    "lat": [34.1015615],
    "lng": [-118.3418581]
}, {
    "fullName": "Mark Wahlberg",
    "category": ["Motion pictures"],
    "address": ["6259 Hollywood Blvd."],
    "lat": [34.1016537],
    "lng": [-118.3258915]
}, {
    "fullName": "Jimmy Wakely",
    "category": ["Recording"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Clint Walker",
    "category": ["Television"],
    "address": ["1505 Vine Street"],
    "lat": [34.0984653],
    "lng": [-118.326771]
}, {
    "fullName": "Robert Walker (actor)",
    "category": ["Motion pictures"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Mike Wallace",
    "category": ["Television"],
    "address": ["6263 Hollywood Blvd."],
    "lat": [34.1019057],
    "lng": [-118.3264766]
}, {
    "fullName": "Jimmy Wallington",
    "category": ["Radio"],
    "address": ["6660 Hollywood Blvd."],
    "lat": [34.1014235],
    "lng": [-118.3354943]
}, {
    "fullName": "Raoul Walsh",
    "category": ["Motion pictures"],
    "address": ["6135 Hollywood Blvd."],
    "lat": [34.10165690000001],
    "lng": [-118.3235497]
}, {
    "fullName": "Ray Walston",
    "category": ["Live performance"],
    "address": ["7070 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3440192]
}, {
    "fullName": "Bruno Walter",
    "category": ["Recording"],
    "address": ["6902 Hollywood Blvd."],
    "lat": [34.1013333],
    "lng": [-118.3403926]
}, {
    "fullName": "Barbara Walters",
    "category": ["Television"],
    "address": ["6801 Hollywood Blvd. "],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Charles Walters",
    "category": ["Motion pictures"],
    "address": ["6402 Hollywood Blvd."],
    "lat": [34.1013677],
    "lng": [-118.3299165]
}, {
    "fullName": "Henry B. Walthall",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Christoph Waltz",
    "category": ["Motion pictures"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Joseph Wapner",
    "category": ["Television"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Jay Ward",
    "category": ["Television"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Fred Waring",
    "category": ["Radio", "Recording", "Television"],
    "address": ["6556 Hollywood Blvd.", "6300 Hollywood Blvd.", "1751 Vine Street"],
    "lat": [34.1013226, 34.1014324, 34.1028631],
    "lng": [-118.3330319, -118.3270755, -118.3267092]
}, {
    "fullName": "H. B. Warner",
    "category": ["Motion pictures"],
    "address": ["6600 Hollywood Blvd."],
    "lat": [34.1012975],
    "lng": [-118.3333971]
}, {
    "fullName": "Harry Warner",
    "category": ["Motion pictures"],
    "address": ["6441 Hollywood Blvd."],
    "lat": [34.1016198],
    "lng": [-118.3302861]
}, {
    "fullName": "Jack L. Warner",
    "category": ["Motion pictures"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Sam Warner",
    "category": ["Motion pictures"],
    "address": ["6201 Hollywood Blvd."],
    "lat": [34.1020578],
    "lng": [-118.3247812]
}, {
    "fullName": "Diane Warren",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Ruth Warrick",
    "category": ["Motion pictures"],
    "address": ["6689 Hollywood Blvd."],
    "lat": [34.1016612],
    "lng": [-118.3360642]
}, {
    "fullName": "Dionne Warwick",
    "category": ["Recording"],
    "address": ["6922 Hollywood Blvd."],
    "lat": [34.1011682],
    "lng": [-118.3409985]
}, {
    "fullName": "Lew Wasserman",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Willard Waterman",
    "category": ["Radio"],
    "address": ["1601 Vine Street"],
    "lat": [34.0999567],
    "lng": [-118.327134]
}, {
    "fullName": "Sam Waterston",
    "category": ["Television"],
    "address": ["7040 Hollywood Blvd."],
    "lat": [34.1012942],
    "lng": [-118.3429794]
}, {
    "fullName": "Watson family",
    "category": ["Motion pictures"],
    "address": ["6674 Hollywood Blvd."],
    "lat": [34.1013804],
    "lng": [-118.3360434]
}, {
    "fullName": "John Wayne",
    "category": ["Motion pictures"],
    "address": ["1541 Vine Street"],
    "lat": [34.0989376],
    "lng": [-118.3266841]
}, {
    "fullName": "Dennis Weaver",
    "category": ["Television"],
    "address": ["6822 Hollywood Blvd."],
    "lat": [34.1013431],
    "lng": [-118.3395235]
}, {
    "fullName": "Sigourney Weaver",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Clifton Webb",
    "category": ["Motion pictures"],
    "address": ["6850 Hollywood Blvd"],
    "lat": [34.1015284],
    "lng": [-118.339437]
}, {
    "fullName": "Jack Webb",
    "category": ["Radio", "Television"],
    "address": ["7040 Hollywood Blvd.", "6278 Hollywood Blvd."],
    "lat": [34.1012942, 34.1016218],
    "lng": [-118.3429794, -118.3261151]
}, {
    "fullName": "Richard Webb (actor)",
    "category": ["Television"],
    "address": ["7059 Hollywood Blvd."],
    "lat": [34.1015609],
    "lng": [-118.3436204]
}, {
    "fullName": "Andrew Lloyd Webber",
    "category": ["Live performance"],
    "address": ["6233 Hollywood Blvd."],
    "lat": [34.102001],
    "lng": [-118.325867]
}, {
    "fullName": "Lois Weber",
    "category": ["Motion pictures"],
    "address": ["6518 Hollywood Blvd."],
    "lat": [34.1013559],
    "lng": [-118.3318064]
}, {
    "fullName": "Ted Weems",
    "category": ["Recording"],
    "address": ["1680 Vine Street"],
    "lat": [34.101281],
    "lng": [-118.326315]
}, {
    "fullName": "Jerry Weintraub",
    "category": ["Motion pictures"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Johnny Weissmuller",
    "category": ["Television"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "Raquel Welch",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Lawrence Welk",
    "category": ["Recording", "Television"],
    "address": ["6613 Hollywood Blvd", "1601 Vine Street"],
    "lat": [34.1018479, 34.0999567],
    "lng": [-118.333887, -118.327134]
}, {
    "fullName": "Orson Welles",
    "category": ["Motion pictures", "Radio"],
    "address": ["1600 Vine Street", "6552 Hollywood Blvd."],
    "lat": [34.1003574, 34.1014604],
    "lng": [-118.3259214, -118.3328776]
}, {
    "fullName": "William A. Wellman",
    "category": ["Motion pictures"],
    "address": ["6125 Hollywood Blvd."],
    "lat": [34.1020151],
    "lng": [-118.3232406]
}, {
    "fullName": "John Wells (TV producer)",
    "category": ["Television"],
    "address": ["6533 Hollywood Blvd."],
    "lat": [34.1020059],
    "lng": [-118.3322892]
}, {
    "fullName": "Bill Welsh",
    "category": ["Television"],
    "address": ["6362 Hollywood Blvd."],
    "lat": [34.1012648],
    "lng": [-118.328692]
}, {
    "fullName": "Adam West",
    "category": ["Television"],
    "address": ["6764 Hollywood Blvd."],
    "lat": [34.1012256],
    "lng": [-118.3380301]
}, {
    "fullName": "Mae West",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Westmore family",
    "category": ["Motion pictures"],
    "address": ["1645 Vine Street"],
    "lat": [34.101276],
    "lng": [-118.327091]
}, {
    "fullName": "Paul Weston",
    "category": ["Recording"],
    "address": ["1535 Vine Street"],
    "lat": [34.098837],
    "lng": [-118.3267739]
}, {
    "fullName": "Haskell Wexler",
    "category": ["Motion pictures"],
    "address": ["7070 Hollywood Blvd."],
    "lat": [34.1015281],
    "lng": [-118.3440192]
}, {
    "fullName": "Forest Whitaker",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd. "],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Alice White",
    "category": ["Motion pictures"],
    "address": ["1511 Vine Street"],
    "lat": [34.0985267],
    "lng": [-118.3266823]
}, {
    "fullName": "Barry White",
    "category": ["Recording"],
    "address": ["6914 Hollywood Blvd."],
    "lat": [34.1015283],
    "lng": [-118.340459]
}, {
    "fullName": "Betty White",
    "category": ["Television"],
    "address": ["6747 Hollywood Blvd."],
    "lat": [34.1015741],
    "lng": [-118.3373121]
}, {
    "fullName": "Jack White (film producer)",
    "category": ["Motion pictures"],
    "address": ["6366 Hollywood Blvd."],
    "lat": [34.1013313],
    "lng": [-118.3287303]
}, {
    "fullName": "Jules White",
    "category": ["Motion pictures"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Pearl White",
    "category": ["Motion pictures"],
    "address": ["6838 Hollywood Blvd."],
    "lat": [34.10111],
    "lng": [-118.339822]
}, {
    "fullName": "Vanna White",
    "category": ["Television"],
    "address": ["7018 Hollywood Blvd. "],
    "lat": [34.101285],
    "lng": [-118.3421778]
}, {
    "fullName": "Paul Whiteman",
    "category": ["Recording", "Radio"],
    "address": ["6157 Hollywood Blvd.", "1601 Vine Street"],
    "lat": [34.1016558, 34.0999567],
    "lng": [-118.3239536, -118.327134]
}, {
    "fullName": "Barbara Whiting Smith",
    "category": ["Television"],
    "address": ["6443 Hollywood Blvd."],
    "lat": [34.1020938],
    "lng": [-118.3306457]
}, {
    "fullName": "Margaret Whiting",
    "category": ["Recording"],
    "address": ["6623 Hollywood Blvd."],
    "lat": [34.101869],
    "lng": [-118.334269]
}, {
    "fullName": "Slim Whitman",
    "category": ["Recording"],
    "address": ["1709 Vine Street"],
    "lat": [34.1019261],
    "lng": [-118.3267039]
}, {
    "fullName": "Stuart Whitman",
    "category": ["Motion pictures"],
    "address": ["7083 Hollywood Blvd"],
    "lat": [34.1018384],
    "lng": [-118.3444009]
}, {
    "fullName": "James Whitmore",
    "category": ["Television", "}\n{{col-break}}\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["6611 Hollywood Blvd", "! Name !! Category !! Address"],
    "lat": [34.101872, 34.0522342],
    "lng": [-118.333833, -118.2436849]
}, {
    "fullName": "Dick Whittinghill",
    "category": ["Radio"],
    "address": ["6384 Hollywood Blvd."],
    "lat": [34.1014332],
    "lng": [-118.3293279]
}, {
    "fullName": "Richard Widmark",
    "category": ["Motion pictures"],
    "address": ["6800 Hollywood Blvd."],
    "lat": [34.1012926],
    "lng": [-118.3389232]
}, {
    "fullName": "Henry Wilcoxon",
    "category": ["Motion pictures"],
    "address": ["6256 Hollywood Blvd."],
    "lat": [34.1016254],
    "lng": [-118.3254654]
}, {
    "fullName": "Cornel Wilde",
    "category": ["Motion pictures"],
    "address": ["1635 Vine Street"],
    "lat": [34.1008794],
    "lng": [-118.3270781]
}, {
    "fullName": "Warren William",
    "category": ["Motion pictures"],
    "address": ["1559 Vine Street"],
    "lat": [34.0991876],
    "lng": [-118.3266845]
}, {
    "fullName": "Andy Williams",
    "category": ["Recording"],
    "address": ["6667 Hollywood Blvd."],
    "lat": [34.1018304],
    "lng": [-118.3354085]
}, {
    "fullName": "Bill Williams (actor)",
    "category": ["Television"],
    "address": ["6145 Hollywood Blvd."],
    "lat": [34.1016546],
    "lng": [-118.323803]
}, {
    "fullName": "Billy Dee Williams",
    "category": ["Motion pictures"],
    "address": ["1521 Vine Street"],
    "lat": [34.0988267],
    "lng": [-118.3270184]
}, {
    "fullName": "Cindy Williams",
    "category": ["Television"],
    "address": ["7021 Hollywood Blvd"],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Earle Williams",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Esther Williams",
    "category": ["Motion pictures"],
    "address": ["1560 Vine Street"],
    "lat": [34.0993898],
    "lng": [-118.3266473]
}, {
    "fullName": "Guy Williams (actor)",
    "category": ["Motion pictures"],
    "address": ["7080 Hollywood Blvd."],
    "lat": [34.1011652],
    "lng": [-118.3444567]
}, {
    "fullName": "Hank Williams",
    "category": ["Recording"],
    "address": ["6400 Hollywood Blvd."],
    "lat": [34.101368],
    "lng": [-118.32983]
}, {
    "fullName": "Joe Williams (jazz singer)",
    "category": ["Recording"],
    "address": ["6508 Hollywood Blvd."],
    "lat": [34.1013411],
    "lng": [-118.3314501]
}, {
    "fullName": "Kathlyn Williams",
    "category": ["Motion pictures"],
    "address": ["7038 Hollywood Blvd"],
    "lat": [34.1013572],
    "lng": [-118.3428884]
}, {
    "fullName": "Paul Williams (songwriter)",
    "category": ["Recording"],
    "address": ["6931 Hollywood Blvd."],
    "lat": [34.1019335],
    "lng": [-118.3413562]
}, {
    "fullName": "Pharrell Williams",
    "category": ["Recording"],
    "address": ["6270 Hollywood Blvd."],
    "lat": [34.1016227],
    "lng": [-118.3258727]
}, {
    "fullName": "Robin Williams",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Roger Williams (pianist)",
    "category": ["Recording"],
    "address": ["1533 Vine Street"],
    "lat": [34.0985848],
    "lng": [-118.3266835]
}, {
    "fullName": "Tex Williams",
    "category": ["Radio"],
    "address": ["6412 Hollywood Blvd."],
    "lat": [34.1014444],
    "lng": [-118.3301962]
}, {
    "fullName": "Vanessa L. Williams",
    "category": ["Recording"],
    "address": ["7000 Hollywood Blvd. "],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Dave Willock",
    "category": ["Television"],
    "address": ["6358 Hollywood Blvd."],
    "lat": [34.1016072],
    "lng": [-118.3286328]
}, {
    "fullName": "Bruce Willis",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd. "],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Chill Wills",
    "category": ["Motion pictures"],
    "address": ["6923 Hollywood Blvd."],
    "lat": [34.1015624],
    "lng": [-118.3410753]
}, {
    "fullName": "Meredith Willson",
    "category": ["Radio"],
    "address": ["6411 Hollywood Blvd"],
    "lat": [34.1018841],
    "lng": [-118.3299932]
}, {
    "fullName": "Carey Wilson (writer)",
    "category": ["Motion pictures"],
    "address": ["6301 Hollywood Blvd."],
    "lat": [34.1019689],
    "lng": [-118.327043]
}, {
    "fullName": "Don Wilson (announcer)",
    "category": ["Radio"],
    "address": ["1500 Vine Street"],
    "lat": [34.098332],
    "lng": [-118.3262557]
}, {
    "fullName": "Lois Wilson (actress)",
    "category": ["Motion pictures"],
    "address": ["6933 Hollywood Blvd."],
    "lat": [34.1018332],
    "lng": [-118.3415313]
}, {
    "fullName": "Marie Wilson (American actress)",
    "category": ["Radio", "Television", "Motion pictures"],
    "address": ["6301 Hollywood Blvd.", "6765 Hollywood Blvd.", "6601 Hollywood Blvd."],
    "lat": [34.1019689, 34.1018894, 34.101873],
    "lng": [-118.327043, -118.3381229, -118.333582]
}, {
    "fullName": "Nancy Wilson (jazz singer)",
    "category": ["Recording"],
    "address": ["6541 Hollywood Blvd."],
    "lat": [34.1019042],
    "lng": [-118.3326262]
}, {
    "fullName": "BeBe & CeCe Winans",
    "category": ["Recording"],
    "address": ["6126 Hollywood Blvd."],
    "lat": [34.1012695],
    "lng": [-118.3232478]
}, {
    "fullName": "Paul Winchell",
    "category": ["Television"],
    "address": ["6333 Hollywood Blvd."],
    "lat": [34.10164],
    "lng": [-118.3280376]
}, {
    "fullName": "Walter Winchell",
    "category": ["Radio", "Television"],
    "address": ["6714 Hollywood Blvd.", "1645 Vine Street"],
    "lat": [34.101331, 34.101276],
    "lng": [-118.3367158, -118.327091]
}, {
    "fullName": "Claire Windsor",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Marie Windsor",
    "category": ["Motion pictures"],
    "address": ["1549 N. Vine Street"],
    "lat": [34.0990288],
    "lng": [-118.3266843]
}, {
    "fullName": "Toby Wing",
    "category": ["Motion pictures"],
    "address": ["6561 Hollywood Blvd."],
    "lat": [34.1018511],
    "lng": [-118.3331536]
}, {
    "fullName": "Henry Winkler",
    "category": ["Television"],
    "address": ["6235 Hollywood Blvd."],
    "lat": [34.1016565],
    "lng": [-118.3254922]
}, {
    "fullName": "Irwin Winkler",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Charles Winninger",
    "category": ["Radio"],
    "address": ["6333 Hollywood Blvd."],
    "lat": [34.10164],
    "lng": [-118.3280376]
}, {
    "fullName": "Kate Winslet",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Stan Winston",
    "category": ["Motion pictures"],
    "address": ["6522 Hollywood Blvd."],
    "lat": [34.1013404],
    "lng": [-118.3319275]
}, {
    "fullName": "Hugo Winterhalter",
    "category": ["Recording"],
    "address": ["1600 Vine Street"],
    "lat": [34.1003574],
    "lng": [-118.3259214]
}, {
    "fullName": "Jonathan Winters",
    "category": ["Television"],
    "address": ["6290 Hollywood Blvd."],
    "lat": [34.1014448],
    "lng": [-118.326396]
}, {
    "fullName": "Shelley Winters",
    "category": ["Motion pictures"],
    "address": ["1752 Vine Street"],
    "lat": [34.1029238],
    "lng": [-118.3266713]
}, {
    "fullName": "Robert Wise",
    "category": ["Motion pictures"],
    "address": ["6340 Hollywood Blvd."],
    "lat": [34.1011809],
    "lng": [-118.327933]
}, {
    "fullName": "Jane Withers",
    "category": ["Motion pictures"],
    "address": ["6119 Hollywood Blvd."],
    "lat": [34.1016658],
    "lng": [-118.3229884]
}, {
    "fullName": "Reese Witherspoon",
    "category": ["Motion pictures"],
    "address": ["6262 Hollywood Blvd."],
    "lat": [34.1016246],
    "lng": [-118.325635]
}, {
    "fullName": "Dick Wolf",
    "category": ["Television"],
    "address": ["7040 Hollywood Blvd. "],
    "lat": [34.1012942],
    "lng": [-118.3429794]
}, {
    "fullName": "David L. Wolper",
    "category": ["Television"],
    "address": ["Sunset & Vine"],
    "lat": [46.5142503],
    "lng": [-86.0847446]
}, {
    "fullName": "Stevie Wonder",
    "category": ["Recording"],
    "address": ["7050 Hollywood Blvd."],
    "lat": [34.1014552],
    "lng": [-118.3435168]
}, {
    "fullName": "Anna May Wong",
    "category": ["Motion pictures"],
    "address": ["1708 Vine Street"],
    "lat": [34.101897],
    "lng": [-118.3265753]
}, {
    "fullName": "Natalie Wood",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Sam Wood",
    "category": ["Motion pictures"],
    "address": ["6714 Hollywood Blvd."],
    "lat": [34.101331],
    "lng": [-118.3367158]
}, {
    "fullName": "Woody Woodpecker",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Donald Woods (actor)",
    "category": ["Television"],
    "address": ["6260 Hollywood Blvd."],
    "lat": [34.1016254],
    "lng": [-118.3255754]
}, {
    "fullName": "James Woods",
    "category": ["Motion pictures"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Joanne Woodward",
    "category": ["Motion pictures"],
    "address": ["6801 Hollywood Blvd."],
    "lat": [34.1026077],
    "lng": [-118.3399805]
}, {
    "fullName": "Monty Woolley",
    "category": ["Television"],
    "address": ["6542 Hollywood Blvd."],
    "lat": [34.1013163],
    "lng": [-118.332732]
}, {
    "fullName": "Fay Wray",
    "category": ["Motion pictures"],
    "address": ["6349 Hollywood Blvd."],
    "lat": [34.101945],
    "lng": [-118.328524]
}, {
    "fullName": "Teresa Wright",
    "category": ["Motion pictures", "Television"],
    "address": ["1680 Vine Street", "6405 Hollywood Blvd."],
    "lat": [34.101281, 34.1016222],
    "lng": [-118.326315, -118.3298532]
}, {
    "fullName": "Jane Wyatt",
    "category": ["Television"],
    "address": ["6350 Hollywood Blvd."],
    "lat": [34.101281],
    "lng": [-118.3283553]
}, {
    "fullName": "William Wyler",
    "category": ["Motion pictures"],
    "address": ["1731 Vine Street"],
    "lat": [34.1025982],
    "lng": [-118.3267105]
}, {
    "fullName": "Jane Wyman",
    "category": ["Motion pictures", "Television"],
    "address": ["6607 Hollywood Blvd.", "1620 Vine Street"],
    "lat": [34.1018357, 34.1001604],
    "lng": [-118.3336334, -118.3266475]
}, {
    "fullName": "Ed Wynn",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["1541 Vine Street", "6333 Hollywood Blvd.", "6426 Hollywood Blvd."],
    "lat": [34.0989376, 34.10164, 34.101589],
    "lng": [-118.3266841, -118.3280376, -118.3302438]
}, {
    "fullName": "Keenan Wynn",
    "category": ["Television", "colspan=\"3\" | No Entries\n|}\n\n==Y==\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\""],
    "address": ["1515 Vine Street\n|}\n{{col-end}}\n\n==X==\n{| class=\"wikitable sortable\" style=\"font-size: 100%;\"", "! Name !! Category !! Address"],
    "lat": [34.0522342, 34.0522342],
    "lng": [-118.2436849, -118.2436849]
}, {
    "fullName": "Dwight Yoakam",
    "category": ["Recording"],
    "address": ["7021 Hollywood Blvd."],
    "lat": [34.1023128],
    "lng": [-118.3427565]
}, {
    "fullName": "Michael York (actor)",
    "category": ["Motion pictures"],
    "address": ["6385 Hollywood Blvd."],
    "lat": [34.1019073],
    "lng": [-118.3293233]
}, {
    "fullName": "Alan Young",
    "category": ["Radio"],
    "address": ["6927 Hollywood Blvd."],
    "lat": [34.10163720000001],
    "lng": [-118.3411205]
}, {
    "fullName": "Carleton G. Young",
    "category": ["Radio"],
    "address": ["6733 Hollywood Blvd."],
    "lat": [34.1018317],
    "lng": [-118.336981]
}, {
    "fullName": "Gig Young",
    "category": ["Television"],
    "address": ["6821 Hollywood Blvd."],
    "lat": [34.1015594],
    "lng": [-118.3392858]
}, {
    "fullName": "Loretta Young",
    "category": ["Motion pictures", "Television"],
    "address": ["6100 Hollywood Blvd.", "6135 Hollywood Blvd."],
    "lat": [34.1016341, 34.10165690000001],
    "lng": [-118.3223743, -118.3235497]
}, {
    "fullName": "Robert Young (actor)",
    "category": ["Motion pictures", "Radio", "Television"],
    "address": ["6933 Hollywood Blvd.", "1620 Vine Street", "6360 Hollywood Blvd."],
    "lat": [34.1018332, 34.1001604, 34.101266],
    "lng": [-118.3415313, -118.3266475, -118.328678]
}, {
    "fullName": "Roland Young",
    "category": ["Motion pictures", "Television"],
    "address": ["6523 Hollywood Blvd.", "6315 Hollywood Blvd."],
    "lat": [34.1017888, 34.101967],
    "lng": [-118.3318654, -118.327337]
}, {
    "fullName": "Florian ZaBach",
    "category": ["Television"],
    "address": ["6505 Hollywood Blvd."],
    "lat": [34.1018647],
    "lng": [-118.3312654]
}, {
    "fullName": "Darryl F. Zanuck",
    "category": ["Motion pictures"],
    "address": ["6336 Hollywood Blvd."],
    "lat": [34.1013306],
    "lng": [-118.3278499]
}, {
    "fullName": "Richard D. Zanuck",
    "category": ["Motion pictures"],
    "address": ["6915 Hollywood Blvd."],
    "lat": [34.1015614],
    "lng": [-118.340782]
}, {
    "fullName": "Carmen Zapata",
    "category": ["Live performance"],
    "address": ["6357 Hollywood Blvd."],
    "lat": [34.101638],
    "lng": [-118.3287148]
}, {
    "fullName": "Renée Zellweger",
    "category": ["Motion pictures"],
    "address": ["7000 Hollywood Blvd."],
    "lat": [34.1012777],
    "lng": [-118.3416128]
}, {
    "fullName": "Robert Zemeckis",
    "category": ["Motion pictures"],
    "address": ["6925 Hollywood Blvd."],
    "lat": [34.101765],
    "lng": [-118.3408824]
}, {
    "fullName": "Efrem Zimbalist, Jr.",
    "category": ["Television"],
    "address": ["7095 Hollywood Blvd."],
    "lat": [34.1019346],
    "lng": [-118.3449957]
}, {
    "fullName": "Hans Zimmer",
    "category": ["Motion pictures"],
    "address": ["6908 Hollywood Blvd."],
    "lat": [34.1012376],
    "lng": [-118.3405676]
}, {
    "fullName": "Fred Zinnemann",
    "category": ["Motion pictures"],
    "address": ["6629 Hollywood Blvd."],
    "lat": [34.101596],
    "lng": [-118.3345009]
}]
