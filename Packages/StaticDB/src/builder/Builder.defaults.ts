export const defaults = {
  posts: {
    schema: {
      "id": "$i",
      "userId": "$random(users)",
      "title": "{{lorem.sentence}}",
      "body": "{{lorem.paragraph}}"
    },
    count: 100
  },
  users: {
    schema: {
      "id": "$i",
      "name": "{{name.findName}}",
      "username": "{{internet.userName}}",
      "email": "{{internet.email}}",
      "address": {
        "addressLine1": "{{address.streetAddress}}",
        "addressLine2": "{{address.secondaryAddress}}",
        "city": "{{address.city}}",
        "zip": "{{address.zipCode}}",
        "geo": {
          "lat": '{{address.latitude}}',
          "long": "{{address.longitude}}"
        }
      },
      "phone": "{{phone.phoneNumber}}",
      "website": "{{internet.domainName}}",
      "company": {
        "name": "{{company.companyName}}",
        "catchPhrase": "{{company.catchPhraseDescriptor}}",
        "bs": "{{company.bsAdjective}}"
      }
    },
    count: 10
  },
  comments: {
    schema: {
      "postId": "$random(posts)",
      "id": "$i",
      "name": "{{internet.userName}}",
      "email": "{{internet.email}}",
      "body": "{{lorem.paragraph}}"
    },
    count: 500
  },
  albums: {
    schema: {
      "userId": "$random(users)",
      "id": "$i",
      "title": "{{lorem.sentence}}"
    },
    count: 100
  },
  photos: {
    schema: {
      "albumId": "$random(albums)",
      "id": "$i",
      "title": "{{lorem.sentence}}",
      "url": "https://via.placeholder.com/600/",
      "thumbnailUrl": "https://via.placeholder.com/150/"
    },
    count: 5000
  }
}