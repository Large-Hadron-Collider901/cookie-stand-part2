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

class Shop {
  constructor(city, minCustomers, maxCustomers, cookiesPerCustomer) {
    this.city = city;
    this.minCustomers = minCustomers;
    this.maxCustomers = maxCustomers;
    this.cookiesPerCustomer = cookiesPerCustomer;
    this.dailyCookieTotal = 0;
    this.dailyCookieCount = this.getCookiesPerDay();
  }

  getCustomersPerHour() {
    // generate a random number between minCustomers and maxCustomers
    return Math.floor(
      Math.random() * (this.maxCustomers - this.minCustomers + 1) +
        this.minCustomers
    );
  }
  getCookiesPerHour() {
    // multiply customersPerHour by average cookies per customer
    return Math.floor(this.getCustomersPerHour() * this.cookiesPerCustomer);
  }
  getCookiesPerDay() {
    let totalCookies = 0;
    const hourlySales = [];

    for (let i = 0; i < biznessHours.length; i++) {
      // make cookiesPerHour a variable
      let randCookies = this.getCookiesPerHour();
      // add randCookies to end of hourlySales array
      hourlySales.push(randCookies);
      // add randCookies and totalCookies
      totalCookies += randCookies;
    }
    // set cookie total for objects = to totalCookies
    this.dailyCookieTotal = totalCookies;
    // add dailyCookieTotal to end of hourlySales array
    hourlySales.push(this.dailyCookieTotal);
    // this.dailyCookieCount = hourlySales;
    return hourlySales;
  }

  renderTable() {
    // assign value of dailyCookieCount to sales
    const sales = this.dailyCookieCount;
    // capture table in DOM
    const salesTable = document.querySelector("#sales-table");
    // capture DOM element for list that corresponds to this object's city property
    const cityRow = document.createElement("tr");
    // create row header
    const rowHeader = document.createElement("th");
    rowHeader.classList.add("capitalize");
    rowHeader.textContent = this.city;
    // append rowHeader to end of cityRow
    cityRow.appendChild(rowHeader);
    // length of sales
    for (const sale of sales) {
      // create table data element
      const entry = document.createElement("td");
      // assign text content to index in sales array
      entry.textContent = sale;
      // append entry to cityRow
      cityRow.appendChild(entry);
    }
    // append cityRow to table in DOM
    salesTable.appendChild(cityRow);
  }
}

const tableRowHeader = (arr) => {
  // capture table in DOM
  const salesTable = document.querySelector("#sales-table");
  // create table rows + row header
  const headerRow = document.createElement("tr");
  const rowHeader = document.createElement("th");
  headerRow.classList.add("hours");
  // append rowHeader to headerRow
  headerRow.appendChild(rowHeader);
  for (const item of arr) {
    // create table data element
    const entry = document.createElement("td");
    // assign text content to index in arr parameter
    entry.textContent = item;
    // append entry to headerRow
    headerRow.appendChild(entry);
  }
  // create element for title of daily cookies sold + append to headerRow
  const entry = document.createElement("td");
  entry.textContent = "Daily Total";
  // append entry to headerRow
  headerRow.appendChild(entry);
  // append header row to table in DOM
  salesTable.appendChild(headerRow);
};

const tableRowFooter = (arr) => {
  // sum each indices of multi-dimensional array then add to array
  const sums = arr[0].map((x, idx) =>
    arr.reduce((sum, curr) => sum + curr[idx], 0)
  );
  // capture table in DOM
  const salesTable = document.querySelector("#sales-table");
  // create footer row and footer header elements
  const footerRow = document.createElement("tr");
  const footerHeader = document.createElement("th");
  footerHeader.textContent = "Totals";
  // append footerHeader to footerRow
  footerRow.appendChild(footerHeader);
  for (const idx of sums) {
    // create table data element
    const entry = document.createElement("td");
    // assign text content to index in arr parameter
    entry.textContent = idx;
    // append entry to footerRow
    footerRow.appendChild(entry);
  }
  // append footerRow to table in DOM
  salesTable.appendChild(footerRow);
};

let seattle = new Shop("Seattle", 23, 65, 6.3);
let tokyo = new Shop("Tokyo", 3, 24, 1.2);
let dubai = new Shop("Dubai", 11, 38, 3.7);
let paris = new Shop("Paris", 20, 38, 2.3);
let lima = new Shop("Lima", 2, 16, 4.6);

const allShops = [seattle, tokyo, dubai, paris, lima];

const allCookieSales = [
  seattle.dailyCookieCount,
  tokyo.dailyCookieCount,
  dubai.dailyCookieCount,
  paris.dailyCookieCount,
  lima.dailyCookieCount,
];

const generateTable = () => {
  tableRowHeader(biznessHours);
  // for every shop in allShops array
  for (shop of allShops) {
    shop.renderTable();
  }
  tableRowFooter(allCookieSales);
};

generateTable();
