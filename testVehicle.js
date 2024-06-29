// Import the Vehicle class from vehicle.js
const Vehicle = require('./vehicle').Vehicle;

// Create an instance of the Vehicle class
let myVehicle = new Vehicle('Toyota', 'Corolla', 2020, 'blue', 15000);

// Test starting the vehicle
myVehicle.started = true;

// Test accelerating the vehicle
console.log('Accelerating:');
myVehicle.accelerate(); // Should increase speed by 1

// Test decelerating the vehicle
console.log('Decelerating:');
myVehicle.decelerate(); // Should decrease speed by 1

// Test stopping the vehicle
myVehicle.stop(); // Should stop the vehicle
console.log('Stopped:', myVehicle.started); // Should print false

// Test vehicle type determination
myVehicle.numberOfWheels = 4;
myVehicle.typeOfVehicle(); // Should print that the vehicle is a Car
