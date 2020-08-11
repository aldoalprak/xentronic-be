'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Products', [{
      category_id: 1,
      name: "Printer Canon",
      price: 500000,
      quantity: 50,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 1,
      name: "Printer Samsung",
      price: 700000,
      quantity: 120,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 1,
      name: "Printer Fuji",
      price: 1500000,
      quantity: 40,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 1,
      name: "Printer Dot",
      price: 1200000,
      quantity: 40,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 1,
      name: "Printer PH",
      price: 1200000,
      quantity: 90,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      category_id: 2,
      name: "Radio",
      price: 1500000,
      quantity: 90,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 2,
      name: "Earphone JBL",
      price: 900000,
      quantity: 20,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 2,
      name: "Speaker",
      price: 100000,
      quantity: 30,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 2,
      name: "Amplifier",
      price: 900000,
      quantity: 30,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 2,
      name: "Toa",
      price: 100000,
      quantity: 20,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 3,
      name: "AC Split Wall Samsung",
      price: 1500000,
      quantity: 90,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 3,
      name: "AC Split Wall LG",
      price: 900000,
      quantity: 20,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 3,
      name: "AC Split Wall Fujiair",
      price: 100000,
      quantity: 30,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 3,
      name: "AC Split Wall Dohnag",
      price: 920000,
      quantity: 30,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      category_id: 3,
      name: "AC Split Wall Canghong",
      price: 1490000,
      quantity: 20,
      image: "https://dummyimage.com/200x200/000/fff.jpg&text=dummy",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
