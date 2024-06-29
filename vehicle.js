// Define the Vehicle class with properties and methods
class Vehicle {
    // Constructor to initialize the Vehicle object with specific properties
    constructor(make, model, year, color, mileage) {
        this.make = make;           // The make of the vehicle
        this.model = model;         // The model of the vehicle
        this.year = year;           // The manufacturing year of the vehicle
        this.color = color;         // The color of the vehicle
        this.passenger = 0;         // Number of passengers currently in the vehicle
        this.speed = 0;             // Current speed of the vehicle
        this.mileage = mileage;     // Mileage of the vehicle
        this.started = false;       // Indicates if the vehicle engine is started
        this.numberOfWheels = 0;    // Number of wheels on the vehicle
        this.fuel = 100;            // Initial fuel level of the vehicle
    }

    // Method to accelerate the vehicle
    accelerate() {
        if (this.started) { // Check if the engine is started
            if (this.fuel > 0) { // Check if there is enough fuel
                console.log(this.speed += 1); // Increase speed by 1 and log the new speed
                this.fuel = this.fuel - 1; // Decrease fuel by 1
            } else {
                console.log("out of fuel."); // Log out of fuel message
                this.stop(); // Stop the vehicle
            }
        } else {
            console.log("You need to start the engine first."); // Log if the engine is not started
        }
    }

    // Method to decelerate the vehicle
    decelerate() {
        if (this.started) { // Check if the engine is started
            if (this.fuel > 0) { // Check if there is enough fuel
                if (this.speed > 0) { // Check if the vehicle is moving
                    console.log(this.speed -= 1); // Decrease speed by 1 and log the new speed
                    this.fuel = this.fuel - 1; // Decrease fuel by 1
                } else {
                    console.log(this + " has stopped moving"); // Log stopped message
                    this.fuel = this.fuel - 1; // Decrease fuel by 1
                }
            } else {
                console.log("out of fuel."); // Log out of fuel message
                this.stop(); // Stop the vehicle
            }
        } else {
            console.log("You need to start the engine first."); // Log if the engine is not started
        }
    }

    // Method to stop the vehicle
    stop() {
        console.log('engine off'); // Log engine off message
        this.started = false; // Set started to false
    }

    // Method to determine the type of vehicle based on the number of wheels
    typeOfVehicle() {
        if (this.numberOfWheels == 8) {
            console.log(this.model + " " + this.make + " is a Truck"); // Log Truck if 8 wheels
        } else if (this.numberOfWheels == 4) {
            console.log(this.model + " " + this.make + " is a Car"); // Log Car if 4 wheels
        } else if (this.numberOfWheels == 2) {
            console.log(this.model + " " + this.make + " is a Bike"); // Log Bike if 2 wheels
        } else {
            console.log("Unknown type of vehicle"); // Log unknown if different number of wheels
        }
    }
}

// Export the Vehicle class for use in other modules
module.exports = { Vehicle };
