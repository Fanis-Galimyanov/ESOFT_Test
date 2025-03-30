function deepCopy(dataType) {
    const copy = {};
    let data = dataType;
  
    if (Array.isArray(data)) {
      data = dataType[0];
    }
  
    for (const [key, value] of Object.entries(data)) {
      if (typeof data[key] === "object") {
        copy[key] = Array.isArray(data[key]) ? [] : value;
        for (let deepKey in data[key]) {
          copy[key][deepKey] = data[key][deepKey];
        }
      } else {
        copy[key] = data[key];
      }
    }
    return copy;
  }