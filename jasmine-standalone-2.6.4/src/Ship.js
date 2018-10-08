function Ship(port)
{
    this._currentPort = port;
}

Ship.prototype = {

    getCurrentPort: function()
    {
        return this._currentPort;
    },

    setSail: function()
    {
        if(this.getCurrentPort().getWeather().isStormy())
        {
            throw new Error("cannot sail in stormy weather");
        }
        this._currentPort = null;
    },

    dock: function(port)
    {
        this._currentPort = port;
        if(port._ships.length >= port._capacity)
        {
            throw new Error("port is at capacity");
        } else {
            port.addShip(this);
        }
        
    }

}