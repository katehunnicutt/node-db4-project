exports.seed = function (knex, promise) {
  return knex('steps').insert([
    {step_number: 1, step_instructions: 'boil and salt the water', recipe_id: 1,},
  ])
}