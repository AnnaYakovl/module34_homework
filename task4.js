function ElectricalAppliance(name,state) {
    this.name = name,
    this.state = state
  }
  
  ElectricalAppliance.prototype.turnOn = function() {
    this.state = "on";
    console.log(this.name + ' state is ON');
  }
  
  ElectricalAppliance.prototype.switchOff = function() {
    this.state = "off";
    console.log(this.name + ' state is OFF');
  }
  
  const computer = new ElectricalAppliance("computer","off");
  const tableLamp = new ElectricalAppliance("tableLamp","off");
  
  console.log(computer);
  console.log(tableLamp);
  
  tableLamp.turnOn();
  