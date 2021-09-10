exports.seed = function(knex, promise) {
  return knex('ingredients').insert([
    {ingredient_name: "olive oil"},
    {ingredient_name: "garlic"},
    {ingredient_name: "pasta"},
    {ingredient_name: "espresso"},
    {ingredient_name: "dark chocolate"},
    {ingredient_name: "tomatoes"},
    {ingredient_name: "onion"},

  ])
}