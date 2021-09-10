exports.seed = function(knex, promise) {
  return knex('recipes').insert([
    {recipe_name: "aglio e olio"},
    {recipe_name: "tiramisu"},
    {recipe_name: "bruscetta"},
  ])
}