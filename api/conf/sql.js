var animal = {
  animals: 'select name from animals',
  search: 'select name from animals where name like ?',
  detail: 'select * from animals where name = ?',
  chart: 'select year, value from chart where name = ?'
};

module.exports = animal;
