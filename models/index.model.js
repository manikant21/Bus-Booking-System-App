import Users from "./user.model.js";
import Buses from "./bus.model.js";
import Bookings from "./booking.model.js";


// one to many with user and booking
Users.hasMany(Bookings, {
    foreignKey: "userId",
    onDelete: "CASCADE"
});

Bookings.belongsTo(Users, {
     foreignKey: "userId"
})

// one to many with bus abd booking
Buses.hasMany(Bookings, {
     foreignKey: "busId",
     onDelete: "CASCADE"
});
Bookings.belongsTo(Buses, {
    foreignKey: "busId"
});


export { Users, Bookings, Buses};