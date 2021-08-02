// we need a generic random function customized to our needs. so we can pass in the data we have
function getRandomNumberOfCustomersGivenARange(minCustomers, maxCustomers) {
    return (
      Math.floor(Math.random() * (maxCustomers - minCustomers + 1)) + minCustomers
    ); // if we get 0 we start at mincustomers, otherwise we multiply difference between max and min time 0 or 1 adding 1 because zero based
  }
  
  // enter the business hours into an array so we can use it to calculate number of cust per hour and cookies sold per hour
  const biznessHours = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
    "8pm",
  ];
  
  // first object 'Seattle'.
  let Seattle = {
    minCustomers: 23, // ALL this info was given in instructions!
    maxCustomers: 65,
    avgCookieSale: 6.3,
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // methods
    // we need a random number of customers within range of data we were given
    getCustomersPerHour: function () {
      // use our random customer method. in same obj/instance so use 'this'
      // we want to align our hourly array with customer per hour array
      for (let index = 0; index < biznessHours.length; index++) {
        // Add computed average customer value for each hr to our array.
        // the 'this' keyword... the props we using are in this class so we need 'this'
        this.customersPerHour.push(
          getRandomNumberOfCustomersGivenARange(
            this.minCustomers,
            this.maxCustomers
          )
        ); // pass in min customers. pass in max customers.;
        //console.log(this.customersPerHour[index]);
      }
    },
  
    // now based on an average number of customers for a given hour, we need to use that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
  
    // method - getCookiesSoldPerHour
  
    getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      this.getCustomersPerHour(); // load up customer data from last function
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
      //loop returns again for each hour
      for (let index = 0; index < biznessHours.length; index++) {
        // Calc number of cookies
        let dailyCookies = Math.floor(
          this.customersPerHour[index] * this.avgCookieSale
        );
        // Lets floor it so we get a whole number
        this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
        // add to total
        this.totalDailyCookies += dailyCookies; //adding to the daily cookies
      }
      console.log(this.cookiesSoldPerHour);
    },
    //method - display our hourly sales data for each location on the sales page
  
    // declare a function
    render() {
      this.getCookiesSoldPerHour(); //call the function
      // Declare the variable and named it after the corresponding HTML element
      const unorderedList = document.getElementById("Seattle");
      // This is how we pull our business hours
      for (let i = 0; i < 15; i++) {
        // Declare another variable
        const listItem = document.createElement("li");
        // Text content is used to display the text
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        // Add the child 'listItem' to 'unorderedList'
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  
  // Seattle.getCustomersPerHour();
  //Seattle.getCookiesSoldPerHour();
  console.log(Seattle.cookiesSoldPerHour);
  Seattle.render();
  
  let Tokyo = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookieSale: 1.2,
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // methods:
    // 1
    getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
        // Add computed average customer value for each hour to our array/list
        // the 'this' keyword... the props we using are in this class so we need 'this'
        this.customersPerHour.push(
          getRandomNumberOfCustomersGivenARange(
            this.minCustomers,
            this.maxCustomers
          )
        ); // pass in min customers. pass in max customers.;
        //console.log(this.customersPerHour[index]);
      }
      
    },
  
    // now based on an average number of customers for a given hr, we need to us that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
    // 2
    getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
      for (let index = 0; index < biznessHours.length; index++) {
        // Calc number of cookies
        let dailyCookies = Math.floor(
          this.customersPerHour[index] * this.avgCookieSale
        );
        // Lets floor it so we get a whole number
        this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
        // add to total
        this.totalDailyCookies += dailyCookies; //adding to the daily cookies
      }
      console.log(this.cookiesSoldPerHour); 
    },
    // 3
    render() {
      this.getCookiesSoldPerHour(); //call a function
      const unorderedList = document.getElementById("Tokyo"); //grab Seattle in HTML
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        // 6am: 16 cookies
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Tokyo.render();
  
  let Dubai = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookieSale: 3.7,
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // methods
    //1
    getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
        // Add computed average customer value for each hour to our array/list
        // the 'this' keyword... the props we using are in this class so we need 'this'
        this.customersPerHour.push(
          getRandomNumberOfCustomersGivenARange(
            this.minCustomers,
            this.maxCustomers
          )
        ); // pass in min customers. pass in max customers.;
        //console.log(this.customersPerHour[index]);
      }
     
    },
  
    // now based on an average number of customers for a given hr, we need to us that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
    //2
    getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
      for (let index = 0; index < biznessHours.length; index++) {
        // Calc number of cookies
        let dailyCookies = Math.floor(
          this.customersPerHour[index] * this.avgCookieSale
        );
        // Lets floor it so we get a whole number
        this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
        // add to total
        this.totalDailyCookies += dailyCookies; //adding to the daily cookies
      }
      console.log(this.cookiesSoldPerHour); 
    },
    //3
    render() {
      this.getCookiesSoldPerHour(); //call a function
      const unorderedList = document.getElementById("Dubai"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        // 6am: 16 cookies
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Dubai.render();
  
  let Paris = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookieSale: 2.3,
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // methods
    //1
    getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
        // Add computed average customer value for each hour to our array/list
        // the 'this' keyword... the props we using are in this class so we need 'this'
        this.customersPerHour.push(
          getRandomNumberOfCustomersGivenARange(
            this.minCustomers,
            this.maxCustomers
          )
        ); // pass in min customers. pass in max customers.;
        //console.log(this.customersPerHour[index]);
      }
      // lets see if we r even close. lets add some debug..... string literal
    },
  
    // now based on an average number of customers for a given hr, we need to us that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
    //2
    getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
      for (let index = 0; index < biznessHours.length; index++) {
        // Calc number of cookies
        let dailyCookies = Math.floor(
          this.customersPerHour[index] * this.avgCookieSale
        );
        // Lets floor it so we get a whole number
        this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
        // add to total
        this.totalDailyCookies += dailyCookies; //adding to the daily cookies
      }
      console.log(this.cookiesSoldPerHour); 
    },
    //3
    render() {
      this.getCookiesSoldPerHour(); //call a function
      const unorderedList = document.getElementById("Paris"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        // 6am: 16 cookies
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Paris.render();
  
  let Lima = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookieSale: 4.6,
    // Both of these next 2 arrays should end up the same length as the array for each hr of the day 15
    customersPerHour: [], // need an array to store all the customer numbers per hour
    cookiesSoldPerHour: [],
    totalDailyCookies: 0,
  
    // methods
    //1
    getCustomersPerHour: function () {
      //Use our random customer method. in same obj/instance so use 'this'
      // add each random num of custs to our array where each index aligns with an hour in the day array
      for (let index = 0; index < biznessHours.length; index++) {
        // Add computed average customer value for each hour to our array/list
        // the 'this' keyword... the props we using are in this class so we need 'this'
        this.customersPerHour.push(
          getRandomNumberOfCustomersGivenARange(
            this.minCustomers,
            this.maxCustomers
          )
        ); // pass in min customers. pass in max customers.;
        //console.log(this.customersPerHour[index]);
      }
     
    },
  
    // now based on an average number of customers for a given hr, we need to us that value from array random number along with data given for avg cookies per person and calcualte a guesstimate at number of cookies
    //2
    getCookiesSoldPerHour: function () {
      // initialize an ongoing total
      //totalDailyCookies = 0;
      this.getCustomersPerHour(); // load up customer data
      // lets load up our cookiesSoldPerHour by walking through each element in our average customers per hour array (number of customers * cookies sold per customer)
      for (let index = 0; index < biznessHours.length; index++) {
        // Calc number of cookies
        let dailyCookies = Math.floor(
          this.customersPerHour[index] * this.avgCookieSale
        );
        // Lets floor it so we get a whole number
        this.cookiesSoldPerHour.push(dailyCookies); // multiply the 2 values shove as new element into cookies sold array
        // add to total
        this.totalDailyCookies += dailyCookies; //adding to the daily cookies
      }
      console.log(this.cookiesSoldPerHour); 
    },
    //3
    render() {
      this.getCookiesSoldPerHour(); //call a function
      const unorderedList = document.getElementById("Lima"); 
      for (let i = 0; i < 15; i++) {
        const listItem = document.createElement("li");
        // 6am: 16 cookies
        listItem.textContent =
          biznessHours[i] + ": " + this.cookiesSoldPerHour[i] + " cookies";
        unorderedList.appendChild(listItem);
      }
      const listItem = document.createElement("li");
      listItem.textContent = "Total: " + this.totalDailyCookies + " cookies";
      unorderedList.appendChild(listItem);
    },
  };
  Lima.render();
  