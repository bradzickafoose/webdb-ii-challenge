
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, vin_number: '5B4DS5E68', make: 'tesla', model: 'roadster', mileage: 128043, manual_transmission: false },
        { id: 2, vin_number: '45TYGB402', make: 'chevrolet', model: 'corvette', mileage: 100085, manual_transmission: true },
        { id: 3, vin_number: '96FGR4FFR', make: 'jeep', model: 'wrangler', mileage: 75840, manual_transmission: true }
      ]);
    });
};
