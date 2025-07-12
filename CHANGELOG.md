# 📦 Changelog

All notable changes to this project will be documented in this file.  

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [0.2.0] - 2025-07-12

### Added
-   **Amharic Language Support:** The extension can now intelligently find and populate form fields with corresponding Amharic names (first, middle, and last).
-   **Enhanced Data Structure:** The internal data set has been updated to include Amharic equivalents for all names.
-   **New Keywords:** Added detection for Amharic-specific input field `names` and `IDs`

---

## [0.1.0.beta.2] - 2025-07-10

### Added
-   Functionality to populate multiple phone number fields on a page sequentially.
-   Expanded the list of Ethiopian first names and last names for more variety.
-   Added `Driving License`, `Residence ID`, and `Work Permit` to identity types.

### Fixed
-   Improved randomization logic to ensure different data is used on subsequent fills within the same session.
-   Corrected an issue where a single phone number from the data could be used to fill all phone fields.

##  [0.1.0] - 2025-07-09
### 🧱 Initial Release

-   **Core Form Filling:** Initial functionality to find and fill input fields on a webpage.
-   **Ethiopian Data Set:** A comprehensive library of realistic Ethiopian data, including names, addresses (regions, cities, sub-cities), phone numbers, and bank names.
-   **Dynamic Data Generation:** Profiles are now generated on-the-fly to ensure unique data with each click.
-   **Gender-Aware Logic:** Introduced gender-specific first names and titles (`Mr.`, `Ms.`, etc.) to generate logically consistent profiles.
-   **Basic Popup UI:** A simple user interface with a **`Fill`** button to trigger the extension.
-   **Project Documentation:** Created the initial `README.md`, `LICENSE`, and this `CHANGELOG.md`.
