describe("Ship", function(){

    let port;
    let ship;
    let arrivalPort;
    let weather;

    beforeEach(function(){
        port = new Port(weather);
        ship = new Ship(port);
        arrivalPort = new Port();
        weather = new Weather();
    })

    it("has a starting port", function(){
        expect(ship.getCurrentPort()).toBe(port);
    })

    it("can set sail from the port", function(){
        spyOn(weather, "isStormy").and.returnValue(false);

        ship.setSail();
        expect(ship.getCurrentPort()).toBeFalsy();
    })

    it("can dock at a port", function(){
        ship.dock(arrivalPort);
        expect(ship.getCurrentPort()).toBe(arrivalPort);
    })

    it("doesn't set sail in stormy weather", function(){
        spyOn(weather, "isStormy").and.returnValue(true);

        expect(function(){
            ship.setSail();
        }).toThrowError("cannot sail in stormy weather");
    })

    it("instructs the Port to add the ship", function(){
        spyOn(arrivalPort, "addShip");

        ship.dock(arrivalPort);

        expect(arrivalPort.addShip).toHaveBeenCalledWith(ship);
    })

    it("doesn't dock if port at capacity", function(){
        for(i= 0; i < 8 ;i++)
        {
            ship.dock(port);
        }
        expect(function(){
            ship.dock(port);
        }).toThrowError("port is at capacity");

    })

})