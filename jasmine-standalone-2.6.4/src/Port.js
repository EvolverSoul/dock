function Port(weather)
{
    this._weather = weather;
    this._ships = [];
    this._capacity = 8;
}

Port.prototype =
{
    getWeather: function()
    {
        return this._weather;
    },

    addShip: function(ship)
    {
        this._ships.push(ship);
    },
    
    getShips: function()
    {
        return this._ships;
    },

    getCapacity: function()
    {
        return this._capacity;
    }
}