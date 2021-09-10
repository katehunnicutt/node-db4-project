exports.seed = function (knex, promise) {
  return knex('step_ingredients').insert([
    {ingredient_quantity: "1/4 cup", ingredient_id: 1, step_id: 1},
  ])
}