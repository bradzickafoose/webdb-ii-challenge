
exports.up = function (knex) {
    return knex.schema.createTable('cars', tbl => {
        // creates a primary key called car_id
        tbl.increments('car_id')
        // creates a string field called vin_number which is both required and unique
        tbl.string('vin_number', 124).notNullable().unique().index();
        // creates additional fields
        tbl.string('make', 124).notNullable();
        tbl.string('model', 124).notNullable();
        tbl.string('mileage' 64).notNullable();
        tbl.boolean('manual_transmission');
        tbl.timestamps();
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('cars')
};
