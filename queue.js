class Queue {
    constructor() {
      this.items = [];
      this.frontIndex = 0;
      this.backIndex = 0;
    }
  
    enqueue(item) {
      try {
        if (!this.isValidPatient(item)) {
          throw new Error(
            "Can only enqueue objects matching predefined patient structure."
          );
        }
        this.items[this.backIndex] = item;
        this.backIndex++;
        return item + " inserted";
      } catch (error) {
        console.error("Error while enqueuing:", error.message);
      }
    }
  
    dequeue() {
      try {
        if (this.isEmpty()) {
          throw new Error("Cannot dequeue from an empty queue.");
        }
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
      } catch (error) {
        console.error("Error while dequeuing:", error.message);
      }
    }
  
    peek() {
      try {
        if (this.isEmpty()) {
          throw new Error("Cannot peek from an empty queue.");
        }
        return this.items[this.frontIndex];
      } catch (error) {
        console.error("Error while peeking:", error.message);
      }
    }
  
    printQueue() {
      return this.items;
    }
  
    isEmpty() {
      return this.frontIndex === this.backIndex;
    }
  
    size() {
      return this.backIndex - this.frontIndex;
    }
  
    isValidPatient(item) {
      if (!item || typeof item !== "object") {
        return false;
      }
      const { name, currentSymptoms, medicalRecords } = item;
      const isNameValid = typeof name === "string";
      const areSymptomsValid = Array.isArray(currentSymptoms);
      const areRecordsValid = Array.isArray(medicalRecords);
      return isNameValid && areSymptomsValid && areRecordsValid;
    }
  }
  
  const queue = new Queue();
  const patient1 = {
    name: "Kevin",
    currentSymptoms: ["Cough"],
    medicalRecords: ["TV"]
  };
  
  queue.enqueue(patient1);

  
  const patientList = queue.printQueue();
  console.log(patientList)

  // Binary Search
  function binarySearch(arr, elem) {
    let start = 0;
    let end = arr.length - 1;
  
    let mid = Math.floor((start + end) / 2)
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid].name === elem) return arr[mid];
      else if (arr[mid].name < elem) start = mid + 1;
      else end = mid - 1;
    }
    return "Not Found";
  }
  
  const sortedPatientList = patientList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );
  console.log(binarySearch(sortedPatientList, "Kevin"))
  