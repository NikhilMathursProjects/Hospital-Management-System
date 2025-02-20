const applyFilters = (data, columns, filters) => {
    return data.filter(row => {
      return columns.every(column => {
        const filterValue = filters[column];
        if (!filterValue) return true;
  
        let condition = ">";
        let value = filterValue;
  
        if (filterValue.startsWith("<")) {
          condition = "<";
          value = filterValue.substring(1); // Remove '<'
        } else if (filterValue.startsWith(">")) {
          condition = ">";
          value = filterValue.substring(1); // Remove '>'
        } else if (filterValue.startsWith("=")) {
          condition = "=";
          value = filterValue.substring(1); // Remove '='
        }
  
        let cellValue = row[column];
  
        // Handle percentage values
        if (typeof cellValue === 'string' && cellValue.endsWith('%')) {
          cellValue = cellValue.slice(0, -1);
        }
        if (typeof value === 'string' && value.endsWith('%')) {
          value = value.slice(0, -1);
        }
  
        if (!isNaN(parseFloat(cellValue)) && isFinite(cellValue)) {
          // Numeric comparison
          const numericValue = parseFloat(cellValue);
          const numericFilterValue = parseFloat(value);
  
          if (condition === ">") {
            return numericValue >= numericFilterValue;
          } else if (condition === "<") {
            return numericValue < numericFilterValue;
          } else {
            return numericValue === numericFilterValue;
          }
        } else {
          // String comparison - always use 'contains' logic
          return cellValue.toLowerCase().includes(value.toLowerCase());
        }
      });
    });
  };
  
  export default applyFilters;
  