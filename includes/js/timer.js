// Declaring class "Timer"
var Timer = function()
{
  // Property: Frequency of elapse event of the timer in millisecond
  this.Interval = 1000;

  // Property: Whether the timer is enable or not
  this.Enable = false;

  // Event: Timer tick
  this.Tick = null;

  // Member variable: Hold interval id of the timer
  var timerId = 0;

  // Member variable: Hold instance of this class
  var thisObject;

  // Function: Start the timer
  this.Start = function()
  {
    this.Enable = true;

    thisObject = this;
    if (thisObject.Enable)
    {
      thisObject.timerId = setInterval(
      function()
      {
        thisObject.Tick();
      }, thisObject.Interval);
    }
  };

  // Function: Stops the timer
  this.Stop = function()
  {
    thisObject.Enable = false;
    clearInterval(thisObject.timerId);
  };

};
