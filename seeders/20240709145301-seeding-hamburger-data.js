'use strict';

const axios = require('axios')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      const response = await axios.get('https://api.spoonacular.com/recipes/random?apiKey=c2bff5e9c56d4eafaed6c9075fbd655a&number=50')
      const recipes = response.data.recipes;

      const formattedRecipes = recipes.map((el) => ({
        name: el.title,
        price: el.pricePerServing,
        stock: el.servings,
        createdAt: new Date(),
        updatedAt: new Date()


      }))

      // console.log(formattedRecipes);
      await queryInterface.bulkInsert('Food', formattedRecipes, {});
    } catch (error) {
      console.log(error, "<< Error disini");

    }


  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
