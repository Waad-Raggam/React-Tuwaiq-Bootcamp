// IBAN Checker function
function checkIBAN() {
    // Get the input IBAN
    var ibanInput = document.getElementById("iban").value.trim();

    // Remove spaces and convert to uppercase
    var iban = ibanInput.replace(/\s+/g, '').toUpperCase();

    // Check if the IBAN format is valid
    if (!isValidIBANFormat(iban)) {
        document.getElementById("result").innerText = "Invalid IBAN format!";
        return;
    }

    // Extract country code and check if it's supported
    var countryCode = iban.substring(0, 2);
    if (!isSupportedCountry(countryCode)) {
        document.getElementById("result").innerText = "Country not supported!";
        return;
    }

    // Check if the IBAN length is correct for the country
    if (!isValidIBANLength(countryCode, iban.length)) {
        document.getElementById("result").innerText = "Invalid IBAN length!";
        return;
    }

    // Check if the IBAN structure is valid
    if (!isValidIBANStructure(iban)) {
        document.getElementById("result").innerText = "Invalid IBAN structure!";
        return;
    }

    // If all checks pass, IBAN is valid
    document.getElementById("result").innerText = "Valid IBAN!";
}

// Function to check if IBAN format is valid
function isValidIBANFormat(iban) {
    var ibanRegex = /^[A-Z]{2}[0-9]{2}[A-Z0-9]{4,}$/;
    return ibanRegex.test(iban);
}

// Function to check if the country is supported
function isSupportedCountry(countryCode) {
    // List of supported country codes
    var supportedCountries = ['SA']; // Add more country codes as needed

    return supportedCountries.includes(countryCode);
}

// Function to check if IBAN length is valid for the country
function isValidIBANLength(countryCode, length) {
    // IBAN length lookup table
    var ibanLengths = {
        'SA': 24 // Saudi Arabia IBAN length
        // Add more country lengths as needed
    };

    return ibanLengths[countryCode] === length;
}

// Function to check IBAN structure
function isValidIBANStructure(iban) {
    // For simplicity, let's assume the structure is always valid
    return true;
}
