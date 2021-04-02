class ElectricalAppliance {
    constructor(name,state) {
    this.name = name;
    this.state = state;
    }
    
    turnOn() {
      this.state = "on";
      console.log(this.name + ' state is ON');
    }
    
    switchOff() {
      this.state = "off";
      console.log(this.name + ' state is OFF');
    }
    
  }
  
  class Computer extends ElectricalAppliance {
       constructor(name,state,power) {
           super(name,state);
           this.power = power;
       }
    
     getInfo() {
       console.log('My power is ' + this.power);
    }
    
  }
  
  class tableLamp extends ElectricalAppliance {
       constructor(name,state,brightness) {
           super(name,state);
           this.brightness = brightness;
       }
    
     getInfo() {
       console.log('My brightness is ' + this.brightness);
    }
    
  }
  
  
  const computer = new Computer("computer", 'off', 1600);
  computer.getInfo();
  computer.turnOn();
  
  const lamp = new tableLamp("lamp", 'off', 160);
  lamp.getInfo();