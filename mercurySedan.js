// Import the Vehicle class from the vehicle module
const VehicleModule = require('./vehicle').Vehicle

// Define a Car class that extends the Vehicle class
class Car extends VehicleModule {
    // Constructor to initialize the Car object with specific properties
    constructor(make, model, year, color, mileage) {
        // Call the parent class (Vehicle) constructor with required properties
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;        // Maximum passengers the car can hold
        this.passenger = 0;            // Current number of passengers
        this.numberOfWheels = 4;       // Number of wheels
        this.maxSpeed = 160;           // Maximum speed of the car
        this.fuel = 10;                // Initial fuel level
        this.scheduleService = false;  // Indicates if the car needs service
    }

    // Method to check if the car needs service based on mileage
    checkService() {
        if (this.mileage > 30000) {            
            this.scheduleService = true;  // Schedule service if mileage is above 30000
            return this.scheduleService;                       
        }
    }

    // Method to start the car if there is fuel
    start() {
        if (this.fuel > 0) {            
            console.log("engine has started.");
            return this.started = true;  // Indicate that the car has started
        } else {
            console.log("no fuel");
            return this.started = false; // Indicate that the car could not start due to lack of fuel
        }
    }

    // Method to load passengers into the car
    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;  // Update the number of passengers
                return this.passenger;               
            } else {
                console.log(this.model + " " + this.make + " does not have enough space to take all passengers.");
            }
        } else {
            console.log(this.model + " " + this.make + " is full");
        }
    }
}

// Create an instance of the Car class
let myCar = new Car('mercury', 'rad_sedan', '2002', 'white', 50000);

// Start the car
myCar.start();

// Load passengers into the car
myCar.loadPassenger(5);

// Check if the car needs service
myCar.checkService();

// Output the current state of the car object
console.log(myCar);
