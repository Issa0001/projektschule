import mariadb from "mariadb";
let db = mariadb.createPool({
  host: "localhost",
  database: "racing",
  user: "root",
  password: ""
});
let getCars = async () => {
  let con = await db.getConnection();
  let cars = await con.query("SELECT * FROM car");
  return cars;
};
(async () => {
  console.log(await getCars());
})();
let load = async () => {
  return { cars: await getCars() };
};
export {
  load
};
