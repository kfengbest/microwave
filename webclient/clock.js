var Clock = {
    totalSeconds: 0,

    interval: null,

    start: function () {
        
      var self = this;
      function pad(val) { return val > 9 ? val : "0" + val; }

        this.interval = setInterval(function () {
          if(self.totalSeconds <= 0){
            self.reset();
          }else{
            self.totalSeconds -= 1;
  
            $("#min").text(pad(Math.floor(self.totalSeconds / 60 % 60)));
            $("#sec").text(pad(parseInt(self.totalSeconds % 60)));
          }
        }, 1000);

    },
    
    reset: function () {
      Clock.totalSeconds = 0; 
      clearInterval(this.interval);
      this.interval = null;
      $("#min").text("00");
      $("#sec").text("00");
    },

    pause: function () {
      clearInterval(this.interval);
      delete this.interval;
    },
  
    resume: function () {
      if (!this.interval) this.start();
    },
    
    restart: function () {
       this.reset();
       Clock.start();
    }
  };
  

  
  
  