function fetchData() {
    return new Promise((resolve, reject) => {
      console.log("Fetching data...");
      
      setTimeout(() => {
        const success = true; // Change this to `false` to simulate an error
        
        if (success) {
          resolve({ id: 1, name: "John Doe", age: 25 });
        } else {
          reject("Failed to fetch data.");
        }
      }, 2000);
    });
  }
  
  // Using the Promise
  fetchData()
    .then((data) => {
      console.log("Data received:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });

async function bro(){
    const data = await fetchData();
    console.log(data);
}
bro()
  